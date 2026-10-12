// ============================================================
// Natal chart engine — REAL astronomical calculation.
// Uses astronomy-engine (MIT, VSOP87-level accuracy: arcseconds for
// inner planets) — far more accurate than the Schlyter approximations
// used by most JS astrology toys.
//
// Architecture: everything behind the NatalChart interface, so a
// Swiss-Ephemeris upgrade later is a drop-in replacement.
//
// Houses: Whole Sign (ASC sign = casa 1). Defensible, modern, and
// avoids fragile Placidus cusp math near the poles.
// ============================================================

import * as Astronomy from "astronomy-engine";
import type { SignId } from "../data/horoscopes";

export interface BirthData {
  /** Local birth date+time as a JS Date (interpreted in the device TZ). */
  date: Date;
  /** Decimal degrees, e.g. Santo Domingo = 18.4861 */
  lat: number;
  /** Decimal degrees, east positive, e.g. Santo Domingo = -69.9312 */
  lon: number;
}

export interface PlanetPosition {
  body: string;      // "Sol"
  nameEs: string;    // "Sol"
  longitude: number; // 0-360 ecliptic longitude
  sign: SignId;
  degreeInSign: number; // 0-30
  house: number;        // 1-12 (whole sign)
  retrograde: boolean;
}

export interface Aspect {
  bodyA: string;
  bodyB: string;
  type: "conjuncion" | "sextil" | "cuadratura" | "trigono" | "oposicion";
  orb: number; // degrees from exact
}

export interface NatalChart {
  positions: PlanetPosition[];
  ascendant: number; // longitude 0-360
  ascendantSign: SignId;
  mc: number; // Medium Coeli longitude
  houses: "whole-sign";
  aspects: Aspect[];
  birthData: BirthData;
}

const DEG = Math.PI / 180;
const OBLIQUITY = 23.4392911; // mean obliquity J2000

const BODIES: { key: Astronomy.Body; nameEs: string }[] = [
  { key: Astronomy.Body.Sun, nameEs: "Sol" },
  { key: Astronomy.Body.Moon, nameEs: "Luna" },
  { key: Astronomy.Body.Mercury, nameEs: "Mercurio" },
  { key: Astronomy.Body.Venus, nameEs: "Venus" },
  { key: Astronomy.Body.Mars, nameEs: "Marte" },
  { key: Astronomy.Body.Jupiter, nameEs: "Júpiter" },
  { key: Astronomy.Body.Saturn, nameEs: "Saturno" },
  { key: Astronomy.Body.Uranus, nameEs: "Urano" },
  { key: Astronomy.Body.Neptune, nameEs: "Neptuno" },
  { key: Astronomy.Body.Pluto, nameEs: "Plutón" },
];

const SIGN_ORDER: SignId[] = [
  "aries", "tauro", "geminis", "cancer", "leo", "virgo",
  "libra", "escorpio", "sagitario", "capricornio", "acuario", "piscis",
];

function norm360(d: number): number {
  return ((d % 360) + 360) % 360;
}

/**
 * GEOCENTRIC ecliptic longitude (as seen from Earth — what astrology uses).
 * NOTE: astronomy-engine v2's `EclipticLongitude()` is HELIOCENTRIC (and
 * throws for the Sun), so we go through GeoVector → Ecliptic instead.
 */
function geoLongitude(body: Astronomy.Body, t: Astronomy.AstroTime): number {
  return norm360(Astronomy.Ecliptic(Astronomy.GeoVector(body, t, true)).elon);
}

function signOf(longitude: number): SignId {
  return SIGN_ORDER[Math.floor(norm360(longitude) / 30) % 12];
}

/** Local sidereal time in hours (east-positive longitude). */
function localSiderealTime(date: Date, lon: number): number {
  const gmst = Astronomy.SiderealTime(date); // Greenwich, hours
  return gmst + lon / 15;
}

/** Ascendant longitude 0-360. Standard formula; verified:
 *  RAMC=0, lat=0 → 90° (0° Cancer) ✓ */
export function calcAscendant(date: Date, lat: number, lon: number): number {
  const ramc = localSiderealTime(date, lon) * 15 * DEG;
  const eps = OBLIQUITY * DEG;
  const phi = lat * DEG;
  const asc =
    Math.atan2(
      Math.cos(ramc),
      -(Math.sin(ramc) * Math.cos(eps) + Math.tan(phi) * Math.sin(eps))
    ) / DEG;
  return norm360(asc);
}

/** Medium Coeli longitude 0-360. */
export function calcMC(date: Date, lon: number): number {
  const ramc = localSiderealTime(date, lon) * 15 * DEG;
  const eps = OBLIQUITY * DEG;
  const mc = Math.atan2(Math.sin(ramc), Math.cos(ramc) * Math.cos(eps)) / DEG;
  return norm360(mc);
}

const ASPECT_DEFS = [
  { type: "conjuncion", angle: 0, orb: 8 },
  { type: "sextil", angle: 60, orb: 4 },
  { type: "cuadratura", angle: 90, orb: 6 },
  { type: "trigono", angle: 120, orb: 6 },
  { type: "oposicion", angle: 180, orb: 8 },
] as const;

function angularSep(a: number, b: number): number {
  const d = Math.abs(norm360(a) - norm360(b));
  return d > 180 ? 360 - d : d;
}

export function calculateChart(bd: BirthData): NatalChart {
  const t = Astronomy.MakeTime(bd.date);
  const tPlusDay = Astronomy.MakeTime(new Date(bd.date.getTime() + 86400000));

  const asc = calcAscendant(bd.date, bd.lat, bd.lon);
  const mc = calcMC(bd.date, bd.lon);
  const ascSignIdx = SIGN_ORDER.indexOf(signOf(asc));

  const positions: PlanetPosition[] = BODIES.map(({ key, nameEs }) => {
    const longitude = geoLongitude(key, t);
    const lonTomorrow = geoLongitude(key, tPlusDay);
    // Retrograde = longitude decreasing (Sun/Moon never are)
    let delta = lonTomorrow - longitude;
    if (delta > 180) delta -= 360;
    if (delta < -180) delta += 360;
    const retrograde = delta < 0;
    const sign = signOf(longitude);
    const house = ((SIGN_ORDER.indexOf(sign) - ascSignIdx + 12) % 12) + 1;
    return {
      body: nameEs,
      nameEs,
      longitude,
      sign,
      degreeInSign: norm360(longitude) % 30,
      house,
      retrograde,
    };
  });

  // Aspects between planets + ASC + MC
  const points = [
    ...positions.map((p) => ({ name: p.nameEs, lon: p.longitude })),
    { name: "Ascendente", lon: asc },
    { name: "Medio Cielo", lon: mc },
  ];
  const aspects: Aspect[] = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const sep = angularSep(points[i].lon, points[j].lon);
      for (const def of ASPECT_DEFS) {
        const orb = Math.abs(sep - def.angle);
        if (orb <= def.orb) {
          aspects.push({
            bodyA: points[i].name,
            bodyB: points[j].name,
            type: def.type,
            orb: Math.round(orb * 10) / 10,
          });
          break;
        }
      }
    }
  }

  return {
    positions,
    ascendant: asc,
    ascendantSign: signOf(asc),
    mc,
    houses: "whole-sign",
    aspects,
    birthData: bd,
  };
}

/** Sun sign from a birth date (tropical zodiac). */
export function sunSignOf(date: Date): SignId {
  const t = Astronomy.MakeTime(date);
  return signOf(geoLongitude(Astronomy.Body.Sun, t));
}

/** Moon phase 0-1 with Spanish name. */
export function moonPhase(date: Date): { illum: number; nameEs: string } {
  const phase = Astronomy.MoonPhase(date) / 360; // 0=new, 0.5=full
  const names = [
    "Luna nueva", "Luna creciente", "Cuarto creciente", "Luna gibosa creciente",
    "Luna llena", "Luna gibosa menguante", "Cuarto menguante", "Luna menguante",
  ];
  return { illum: phase, nameEs: names[Math.floor(phase * 8) % 8] };
}
