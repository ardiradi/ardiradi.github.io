# Optional Cloudflare Web Analytics

Status: **Prepared, disabled, and not yet verified with a live analytics account.** No account or real beacon token was provided. An unconfigured component is not evidence of working analytics, visitors, or completed launch measurement.

Cloudflare Web Analytics offers a free account-and-script setup without changing DNS or proxying the site through Cloudflare. The manual setup for a non-proxied site gets its JavaScript snippet from **Web Analytics > Manage site**. See [Cloudflare's overview](https://developers.cloudflare.com/web-analytics/about/) and [manual setup instructions](https://developers.cloudflare.com/web-analytics/get-started/).

## Current behavior

- `app/layout.tsx` passes `NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` to the client component during static rendering. Missing configuration becomes an empty string.
- `app/analytics.tsx` renders no visitor-facing UI. Its React effect injects the official `https://static.cloudflareinsights.com/beacon.min.js` script only on the exact hostname **`ardiradi.github.io`**.
- Localhost, preview hosts, subdomains, and the owner-only Sites copy never receive this component's beacon, even with a configured token.
- The token must have the 32-hex or canonical hyphenated UUID shape. It is normalized to lowercase compact form. Empty values, textual placeholders, nil/repeated-hex values, and the starter's empty UUID are rejected. Syntax checks cannot establish that Cloudflare registered the token for this site; the owner must use the actual Manage site value.
- The component avoids duplicate/pre-existing scripts. Cleanup removes its pending script and event handlers without deleting someone else's beacon. Once loaded, the page beacon stays a singleton.
- Only standard Cloudflare Web Analytics behavior is prepared. No custom search queries, form content, or click events are sent by this component. Cloudflare documents its beacon and performance collection in [RUM beacon for Web Analytics](https://developers.cloudflare.com/speed/observatory/rum-beacon/).

## Owner activation steps - still pending

1. Use the owner's chosen Cloudflare account and add **`ardiradi.github.io`** under Web Analytics.
2. Open **Manage site** and copy only the public `token` value from the JavaScript snippet. Do not supply an API key, account credential, or private token.
3. Set `NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` in an ignored local build environment such as `.env.local`. The tracked `.env.example` stays empty. This value is intentionally included in client-delivered page data after configuration.
4. Rebuild the static site with Node 22 and the existing Vinext build command, then publish the matching output through the owner's release workflow. **Changing an environment value without rebuilding does not update an existing static release.**
5. Open the actual public site in a browser and check for one beacon script, successful script/measurement requests, and subsequently visible data for the correct hostname in the Cloudflare dashboard. Dashboard data may take a few minutes to appear, per the [setup guide](https://developers.cloudflare.com/web-analytics/get-started/).
6. Check the private Sites copy and confirm no beacon script or request from this component. Record the real public URL, observation time, and dashboard evidence before calling analytics active or launch measurement complete.

To disable later, clear the variable, rebuild, and publish the disabled release. Reloaded pages then omit the beacon. Existing open pages require a refresh to use the new build.

## Verification boundary

Source configuration checks and a fake-DOM harness can verify disabled behavior, token/host guards, injection, singleton handling, and cleanup without sending traffic to Cloudflare. They do not verify a real account, registration, received measurements, or the hosted browser result. Fresh browser QA is currently unavailable because Chrome control cannot load its request-header policy.

No analytics account was created, no token was activated, and no deployment is performed by preparing these files. Existing portfolio content, eight-submission count, and four project cases remain unchanged.
