# Portfolio Evidence Finder: technical build write-up

Ardi Riyadi · Prepared 08 October 2026; current evidence updated 11 October 2026

**Live portfolio:** [ardiradi.github.io](https://ardiradi.github.io/)

## Purpose and scope

The portfolio helps an engineering lead assess Ardi's junior backend AI work and find its supporting evidence. Five cases describe the problem, implementation, and observed result, including The Polite Scraper added on 10 October. The main contact action is an email about a role.

The Evidence Finder adds skill filters, text search, visible claim limitations, and source links. A visitor can select Backend, Document AI, ML, or MLOps, narrow the evidence list, and inspect the implementation. This is a client-side feature; it does not call an AI model, submit a message, or store visitor input.

## Stack and data flow

The update retains the existing React, TypeScript, and Vinext application, with Vite producing the deployable output. GitHub Pages serves the committed static files from `main:/docs` over HTTPS. The Evidence Finder requires no paid API key or application server.

The [component](app/evidence-finder.tsx) now contains five evidence records. A skill click updates React state; text input updates the query. The component filters the records in memory and renders matching claims, limitations, a result count, and source links. An unmatched query displays a recovery message. Search input remains in the browser, and a reload resets it.

## Build incident and resolution

During the AI-assisted Windows build on 08 October 2026, a Node 24 attempt encountered a teardown assertion. Repeating the build with an official portable Node 22 runtime exited successfully. The resulting [portfolio release](https://github.com/ardiradi/ardiradi.github.io/commit/e1e2249b1ed28619b0bbe559ba4cd07d1bd4e24b) then completed its [GitHub Pages deployment](https://github.com/ardiradi/ardiradi.github.io/actions/runs/37748134159).

The recorded resolution is specific to this build attempt. It is not a claim that every Node 24 build fails, or a reconstructed obstacle from an earlier ML project. A successful build exit and the hosted result provide stronger release evidence than emitted files alone.

## Verification and limits

Historical live Chrome checks covered four initial projects, one ML result, an EcoVision search, zero results for an unmatched query, and one Backend result. The fifth Polite Scraper case was published on 10 October after Ardi confirmed reading the case and evidence wording aloud. [Release 4fec946](https://github.com/ardiradi/ardiradi.github.io/commit/4fec946d717ce2140e419b6ff0e3e400da1b3e15) passed its build, Pages deployment, and six exact-file HTTP checks. Its separate five-case browser QA covered All five, Backend two, ML one, search `polite` one, empty-result recovery, keyboard activation, and responsive emulation. These checks do not establish a physical-phone or human review pass.

The current static release [16cad77d](https://github.com/ardiradi/ardiradi.github.io/commit/16cad77df123f2f212cc6317efed9cf3f89da7e0) passed [Pages deployment](https://github.com/ardiradi/ardiradi.github.io/actions/runs/38116719714) on 11 October. Thirteen served files matched their exact committed Git blobs, with all nine release checks passing. Fresh public browser QA confirmed All five, Backend two, search `polite` one, clear restoring five, and the full-name header. This scoped check preserves the earlier review boundaries; the narrated demo and two human review verdicts remain pending.

The project cases retain their verification boundaries:

- Internship Progress Copilot reports six passing local-demo tests covering API health, authentication, task CRUD, metrics, planning cache, and PDF jobs. Real-provider behavior, production use, and a tenfold time saving are not established.
- PharmaCheck defaults to local Tesseract OCR without an Azure key; the optional Azure resource is inactive. Fifty-seven local tests passed, and one hosted JPEG trial on 10 October returned the three visible field candidates. Raw OCR remains available for review and misread `50 mg` as `30 mg`. PDF OCR was tested locally only. One synthetic label does not establish general accuracy; date normalization, batch validation, and a persistent audit trail are not implemented.
- The Polite Scraper's saved offline rerun reports 60 valid records, 63 HTML cache hits, and zero HTTP requests. One added real HTTP 404 preserved all 60; a separate offline fixture preserves 59 when one original detail fails. Cached data is not a fresh crawl. The historical test log records 22 passing offline tests, and submission review remains pending.
- EcoVision uses 500 synthetic training rows and a constructed target formula. Its score is not economically validated.
- The Heart Disease ML learning pipeline includes simulated exporter metrics. Conflicting accuracy artifacts still need reconciliation to a specific run.

## AI collaboration and next step

AI assisted repository evidence inspection, case editing, component implementation, and build/deployment work. Ardi supplied his project facts, Copilot motivation and design choices, and personal contribution statements. He confirmed reading the four original cases aloud and approved their voice; he separately approved the Polite Scraper case and Evidence Finder wording after reading them aloud.

The Polite Scraper case is now published with its actual cached-run and failure reports, explicit AI assistance, and author approval. AI Decision Flow is a candidate for a later case, preserving the distinction between local Qwen execution, zero-LLM Demo recovery, and unestablished semantic accuracy. Ardi's approved [public story](BUILD_STORY.md) explains his goal of improving AI engineering skills. The technical write-up does not establish completion of the Fluency human-review gates, recorded demo, Fluency graduation badge, or showcase submission.

## Analytics verification — 11 October 2026

Cloudflare Web Analytics is active on the public GitHub Pages portfolio. Browser QA observed one official beacon and a RUM request resource. At **07:05:22.421 UTC (14:05 WIB)**, the dashboard for `ardiradi.github.io` displayed **2 visits and 6 page views** for Last 24 hours (GMT+7), with the exact site filter and no Exclude bots filter. These aggregate counts are activation/QA evidence, not verified organic visitors, conversions, or attribution to an individual visit. See [analytics setup and verification](ANALYTICS.md).

The analytics documentation update [eb9ce24d](https://github.com/ardiradi/ardiradi.github.io/commit/eb9ce24d449dc54d07b14db60478ecaf80e23e74) changed only `ANALYTICS.md`; the verified static application remains release 16cad77d. The private Sites copy showed a login gate, so its rendered analytics behavior was not freshly tested. The phone visit used for analytics delivery is separate from feature and layout testing.

Later on 11 October, Ardi reported that all requested checks passed on Tecno Camon 20 Pro / Chrome: the All, Backend, ML and search counts, empty-result recovery, navigation, evidence details, case study, repository and certificate links, Contact opening a draft, and portrait/landscape without clipped text or horizontal overflow. This is the author's self-report. No screenshot, OS/browser version, timing measurement, rapid-toggle check or whitespace-query check was supplied. The narrated demo and independent human design/hardening verdicts remain pending.
