import { useEffect, useState } from "react";
import { PAYWALL_RULES, RC_PRODUCTS, ENTERTAINMENT_DISCLAIMER } from "../config";
import { getOfferings, purchasePackage, restorePurchases } from "../lib/revenuecat";
import { Capacitor } from "@capacitor/core";

interface Props {
  onClose: () => void;
  onPurchased: () => void;
}

export default function Paywall({ onClose, onPurchased }: Props) {
  const [loading, setLoading] = useState(false);
  const [offerings, setOfferings] = useState<unknown[]>([]);
  const [offeringsError, setOfferingsError] = useState(false);
  const isNative = Capacitor.isNativePlatform();

  const loadOfferings = () => {
    setOfferingsError(false);
    getOfferings()
      .then((pkgs) => {
        setOfferings(pkgs);
        if (isNative && pkgs.length === 0) setOfferingsError(true);
      })
      .catch(() => {
        if (isNative) setOfferingsError(true);
      });
  };

  useEffect(() => {
    loadOfferings();
  }, []);

  const buy = async (pkg: unknown, label: string) => {
    if (!isNative) {
      alert(`Vista previa web: aquí se compraría "${label}" vía Apple IAP.`);
      return;
    }
    setLoading(true);
    const ok = await purchasePackage(pkg);
    setLoading(false);
    if (ok) onPurchased();
  };

  const restore = async () => {
    setLoading(true);
    const ok = await restorePurchases();
    setLoading(false);
    if (ok) onPurchased();
    else alert("No encontramos compras anteriores en esta cuenta.");
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-end justify-center" onClick={onClose}>
      <div
        className="cosmos-bg border-t border-cosmos-gold/40 rounded-t-3xl w-full max-w-md p-6 pb-8 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center text-4xl mb-2">☽ ✦ ☀</div>
        <h2 className="font-display text-3xl gold-text text-center">Desbloquea tu universo</h2>
        <p className="text-center text-cosmos-lavender mt-1 mb-5">Accede a todas las funciones premium</p>

        <ul className="space-y-2.5 mb-6">
          {PAYWALL_RULES.premium.map((f) => (
            <li key={f} className="flex items-center gap-3 text-cosmos-cream">
              <span className="w-6 h-6 rounded-full border border-cosmos-gold text-cosmos-gold flex items-center justify-center text-sm">✓</span>
              {f}
            </li>
          ))}
        </ul>

        {isNative && offerings.length > 0 ? (
          <div className="space-y-3 mb-4">
            {(offerings as { identifier: string; product: { priceString: string; title: string } }[]).map((pkg) => (
              <button
                key={pkg.identifier}
                disabled={loading}
                onClick={() => buy(pkg, pkg.product.title)}
                className="card w-full p-4 flex justify-between items-center disabled:opacity-50"
              >
                <span className="text-cosmos-cream font-medium">{pkg.product.title}</span>
                <span className="text-cosmos-gold font-display text-xl">{pkg.product.priceString}</span>
              </button>
            ))}
          </div>
        ) : isNative && offeringsError ? (
          <div className="mb-4 p-4 card text-center">
            <p className="text-cosmos-cream text-sm mb-3">
              No se pudieron cargar los planes. Revisa tu conexión e inténtalo de nuevo.
            </p>
            <button onClick={loadOfferings} className="text-cosmos-gold underline text-sm">
              Reintentar
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 mb-4">
            <button disabled={loading} onClick={() => buy(null, RC_PRODUCTS.annual)} className="card p-4 border-cosmos-gold relative disabled:opacity-50">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cosmos-gold text-cosmos-deep text-[10px] font-bold px-2 py-0.5 rounded-full">
                MEJOR VALOR
              </span>
              <p className="font-display text-2xl text-cosmos-gold">$49.99<span className="text-sm">/año</span></p>
              <p className="text-cosmos-muted text-xs mt-1">Facturado anualmente</p>
            </button>
            <button disabled={loading} onClick={() => buy(null, RC_PRODUCTS.monthly)} className="card p-4 disabled:opacity-50">
              <p className="font-display text-2xl text-cosmos-gold">$6.99<span className="text-sm">/mes</span></p>
              <p className="text-cosmos-muted text-xs mt-1">Facturado mensualmente</p>
            </button>
          </div>
        )}

        {!isNative && (
          <p className="text-center text-cosmos-muted text-xs mb-3">
            Vista previa web — las compras se activan en el iPhone vía Apple&nbsp;IAP.
          </p>
        )}

        <button onClick={restore} disabled={loading} className="w-full text-cosmos-lavender underline text-sm mb-3 disabled:opacity-50">
          Restaurar compra
        </button>
        <button onClick={onClose} className="w-full text-cosmos-muted text-sm">
          Ahora no
        </button>
        <p className="text-center text-[10px] text-cosmos-muted/70 mt-4 leading-tight">
          {ENTERTAINMENT_DISCLAIMER}
        </p>
      </div>
    </div>
  );
}
