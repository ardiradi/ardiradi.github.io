# Ardi Riyadi — backend AI portfolio

[Live portfolio](https://ardiradi.github.io/) · [Technical build write-up](BUILD_WRITEUP.md)

This portfolio helps engineering leads inspect junior backend AI work through implementation links, concrete evidence, and explicit limitations. Its main action is to contact Ardi about a role.

The [Evidence Finder](app/evidence-finder.tsx) filters five project records by skill and searches their claims and limitations. It runs in the browser using React state; its search has no AI-provider call or visitor-data backend. The [page source](app/page.tsx) presents the corresponding cases. Separately, [Cloudflare Web Analytics](ANALYTICS.md) collects standard page/performance measurements on the public hostname; no custom search query is sent.

| Case | Inspectable evidence | Boundary |
| --- | --- | --- |
| [Internship Progress Copilot](https://github.com/ardiradi/flyrank-10x-solution) | Six passing local-demo tests; protected CRUD, metrics, planning cache, and PDF jobs | Real-provider behavior and time savings are unmeasured |
| [The Polite Scraper](https://github.com/ardiradi/flyrank-polite-scraper) | 60 valid cached records, 63 HTML cache hits, zero HTTP requests; one added real HTTP 404 preserved all 60 | Cached data is not a fresh crawl; a separate detail-failure fixture retains 59; submission review pending |
| [PharmaCheck AI](https://github.com/ardiradi/PharmaCheck-AI-Core) | Default local Tesseract OCR; 57 local tests; one hosted JPEG trial returned three visible candidates | Optional Azure inactive; raw `50 mg` misread as `30 mg`; hosted PDF untested; no date/batch validation or persistent audit trail |
| [EcoVision](https://github.com/ardiradi/AI-Impact-Datathon-2026) | Two-input API, synthetic-data Random Forest, dashboard | Synthetic target; no validated economic outcome |
| [Heart Disease ML Pipeline](https://github.com/ardiradi/Monitoring-Logging-SML) | Training/CI evidence, inference metrics, monitoring demonstration | Some metrics are simulated; accuracy artifacts need reconciliation |

AI assisted evidence review, case editing, implementation of the Evidence Finder, and build work. Ardi supplied authentic project facts and design answers, confirmed the original four-case read-aloud review, and separately approved the Polite Scraper case and evidence wording after reading them aloud. See the write-up for verification scope and the actual build incident.

Current evidence was updated on 11 October 2026. Static release [16cad77d](https://github.com/ardiradi/ardiradi.github.io/commit/16cad77df123f2f212cc6317efed9cf3f89da7e0) passed Pages deployment and thirteen exact-file HTTP comparisons. Browser QA retained All five / Backend two / `polite` one / clear five. Cloudflare's dashboard then displayed 2 visits and 6 page views in the activation/QA window; this is not evidence of organic traffic. Full physical-phone testing of the revised design, two human review verdicts, and an actual narrated demo remain pending.

## Local build

Use Node.js 22 with npm. The package requires Node `>=22.13.0`; Node 22 worked for the verified Windows build. Install the locked dependencies, then start a preview or build:

```sh
npm ci
npm run dev
npm run build
```

The stack is React, TypeScript, Vinext, and Vite. `npm run build` produces `dist/client`. GitHub Pages currently serves the separately committed `/docs` output from `main`; updating that output is a separate publication step. Documentation changes do not rebuild application assets.

The historical [feature release](https://github.com/ardiradi/ardiradi.github.io/commit/e1e2249b1ed28619b0bbe559ba4cd07d1bd4e24b) and [successful deployment](https://github.com/ardiradi/ardiradi.github.io/actions/runs/37748134159) provide the published implementation evidence from 08 October 2026; current verification is recorded above and in the write-up.
