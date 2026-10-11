# Optional Cloudflare Web Analytics

Status on 11 October 2026: **Published on GitHub Pages; public beacon execution and received dashboard measurements verified.** The actual token came from the owner's Cloudflare installation snippet for `ardiradi.github.io` and is stored in ignored `.env.local` for the build. It is a public beacon identifier, intentionally delivered to the client. No token value is recorded in the activation receipts. These activation checks do not establish organic visitors.

Cloudflare Web Analytics offers a free account-and-script setup without changing DNS or proxying the site through Cloudflare. The manual setup for a non-proxied site gets its JavaScript snippet from **Web Analytics > Manage site**. See [Cloudflare's overview](https://developers.cloudflare.com/web-analytics/about/) and [manual setup instructions](https://developers.cloudflare.com/web-analytics/get-started/).

## Current behavior

- `app/layout.tsx` passes `NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` to the client component during static rendering. Missing configuration becomes an empty string.
- `app/analytics.tsx` renders no visitor-facing UI. Its React effect injects the official `https://static.cloudflareinsights.com/beacon.min.js` script only on the exact hostname **`ardiradi.github.io`**.
- Localhost, preview hosts, subdomains, and the owner-only Sites copy never receive this component's beacon, even with a configured token.
- The token must have the 32-hex or canonical hyphenated UUID shape. It is normalized to lowercase compact form. Empty values, textual placeholders, nil/repeated-hex values, and the starter's empty UUID are rejected. Syntax checks cannot establish that Cloudflare registered the token for this site; the owner must use the actual Manage site value.
- The component avoids duplicate/pre-existing scripts. Cleanup removes its pending script and event handlers without deleting someone else's beacon. Once loaded, the page beacon stays a singleton.
- Only standard Cloudflare Web Analytics behavior is prepared. No custom search queries, form content, or click events are sent by this component. Cloudflare documents its beacon and performance collection in [RUM beacon for Web Analytics](https://developers.cloudflare.com/speed/observatory/rum-beacon/).

## Activation and verification procedure

1. Use the owner's chosen Cloudflare account and add **`ardiradi.github.io`** under Web Analytics.
2. Open **Manage site** and copy only the public `token` value from the JavaScript snippet. Do not supply an API key, account credential, or private token.
3. Set `NEXT_PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN` in an ignored local build environment such as `.env.local`. The tracked `.env.example` stays empty. This value is intentionally included in client-delivered page data after configuration.
4. Rebuild the static site with Node 22 and the existing Vinext build command, then publish the matching output through the owner's release workflow. **Changing an environment value without rebuilding does not update an existing static release.**
5. Open the actual public site in a browser and check for one beacon script, successful script/measurement requests, and subsequently visible data for the correct hostname in the Cloudflare dashboard. Dashboard data may take a few minutes to appear, per the [setup guide](https://developers.cloudflare.com/web-analytics/get-started/).
6. Check the private Sites copy when its content is accessible and confirm no beacon script or request from this component. A login gate is not a runtime test of the private portfolio. Record the real public URL, observation time, and dashboard evidence before calling launch measurement fully verified.

To disable later, clear the variable, rebuild, and publish the disabled release. Reloaded pages then omit the beacon. Existing open pages require a refresh to use the new build.

## Verification boundary

Source configuration checks and a fake-DOM harness can verify disabled behavior, token/host guards, injection, singleton handling, and cleanup without sending traffic to Cloudflare. They do not verify received measurements or the hosted browser result. The owner logged into Cloudflare in the Codex browser on 11 October; this browser is available for fresh public-site and dashboard QA. Historical Chrome connection failures are preserved in the local work records.

The owner's existing account has `ardiradi.github.io` registered. Release [16cad77d](https://github.com/ardiradi/ardiradi.github.io/commit/16cad77df123f2f212cc6317efed9cf3f89da7e0) passed [Pages run 38116719714](https://github.com/ardiradi/ardiradi.github.io/actions/runs/38116719714). Thirteen served files returned HTTP 200 and matched the exact committed Git blobs; the actual public token is present in generated HTML and RSC data.

Public browser QA observed exactly one official module beacon, a configuration matching the registered snippet, and a `https://cloudflareinsights.com/cdn-cgi/rum` XMLHttpRequest resource. The resource inventory does not expose the request's HTTP status or prove provider acceptance. All five projects, Backend two, search `polite` one, and the full-name header remained correct. The private Sites URL showed `Log in to access`; its portfolio content was not tested, and its hosting was not changed. The source's exact-hostname guard remains in place.

At **2026-10-11 07:05:22 UTC (14:05 WIB)**, the dashboard for `ardiradi.github.io` displayed **2 visits and 6 page views**, with Last 24 hours (GMT+7), the exact site filter, and no Exclude bots filter. It also displayed page load time **4,305 ms**; the small QA sample is not a general performance benchmark. The baseline and a later zero-data observation are preserved in local evidence, as is a temporary dashboard network failure.

Ardi reported opening and reloading the public site on Tecno Camon 20 Pro / Chrome before the successful dashboard observation. The aggregate dashboard does not identify which individual visit produced each count. This phone visit is an analytics delivery check; it does not complete the separate full feature/design phone checklist. Test traffic from the owner and browser QA is recorded as QA traffic, without an organic-visitor or conversion claim. This activation preserves the five project cases, narrative, and evidence and adds no custom product events.
