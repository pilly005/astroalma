// RevenueCat wrapper — Apple IAP only, never Stripe.
// Products/entitlement come from src/config.ts (created in RC dashboard).

import { Purchases, LOG_LEVEL } from "@revenuecat/purchases-capacitor";
import { Capacitor } from "@capacitor/core";
import { env } from "./env";
import { RC_PRODUCTS } from "../config";

let configured = false;

export async function initRevenueCat(userId?: string): Promise<void> {
  if (configured) return;
  try {
    if (Capacitor.isNativePlatform()) {
      await Purchases.setLogLevel({ level: LOG_LEVEL.DEBUG });
      await Purchases.configure({
        apiKey: env("VITE_REVENUECAT_IOS_KEY"),
        appUserID: userId,
      });
      configured = true;
    }
  } catch (e) {
    // Web preview: RevenueCat unavailable — paywall shows in demo layout.
    console.warn("[revenuecat] configure failed (web preview?)", e);
  }
}

/** True when the `premium` entitlement is active. False on web preview. */
export async function isPremium(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) return false;
  try {
    const { customerInfo } = await Purchases.getCustomerInfo();
    return !!customerInfo.entitlements.active[RC_PRODUCTS.entitlement];
  } catch {
    return false;
  }
}

/** Offerings for the paywall. Returns [] on web preview. */
export async function getOfferings() {
  if (!Capacitor.isNativePlatform()) return [];
  try {
    const { current } = await Purchases.getOfferings();
    console.log("[revenuecat] offerings current:", current?.identifier, "packages:", current?.availablePackages?.length ?? 0);
    return current?.availablePackages ?? [];
  } catch (e) {
    console.warn("[revenuecat] getOfferings failed", e);
    return [];
  }
}

export async function purchasePackage(pkg: unknown): Promise<boolean> {
  try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { customerInfo } = await (Purchases as any).purchasePackage({ aPackage: pkg });
    return !!customerInfo.entitlements.active[RC_PRODUCTS.entitlement];
  } catch (e) {
    console.warn("[revenuecat] purchase failed/cancelled", e);
    return false;
  }
}

export async function restorePurchases(): Promise<boolean> {
  try {
    const { customerInfo } = await Purchases.restorePurchases();
    return !!customerInfo.entitlements.active[RC_PRODUCTS.entitlement];
  } catch {
    return false;
  }
}
