// revenuecat-webhook — receives RevenueCat webhook events and mirrors
// entitlement status into `public.subscriptions`.
//
// Setup: RevenueCat Dashboard → Project → Integrations → Webhooks → add:
//   URL: https://<project-ref>.supabase.co/functions/v1/revenuecat-webhook
//   Authorization header: set a random secret; store it as RC_WEBHOOK_SECRET.
// Secrets to set: SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RC_WEBHOOK_SECRET

import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

Deno.serve(async (req) => {
  const secret = Deno.env.get("RC_WEBHOOK_SECRET")!;
  const auth = req.headers.get("authorization") ?? "";
  if (auth !== `Bearer ${secret}`) {
    return Response.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const event = body.event ?? {};
  const appUserId: string | undefined = event.app_user_id;
  const entitlementIds: string[] = event.entitlement_ids ?? [];
  const type: string = event.type ?? "";

  if (!appUserId) return Response.json({ ok: true, skipped: "no app_user_id" });

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const active = entitlementIds.includes("premium");
  const status = active ? "active"
    : type === "CANCELLATION" ? "cancelled"
    : type === "EXPIRATION" ? "expired"
    : "inactive";

  // Map RevenueCat app_user_id → auth user. The app sets the RC appUserID
  // to the Supabase auth user id on login (see docs/revenuecat-checklist.md).
  const { error } = await supabase.from("subscriptions").upsert({
    user_id: appUserId,
    rc_app_user_id: appUserId,
    entitlement: "premium",
    status,
    expires_at: event.expiration_at_ms ? new Date(event.expiration_at_ms).toISOString() : null,
    updated_at: new Date().toISOString(),
  }, { onConflict: "user_id" });

  if (error) return Response.json({ ok: false, error: error.message }, { status: 500 });
  return Response.json({ ok: true, status });
});
