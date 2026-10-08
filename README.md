# Ardi Riyadi — backend AI portfolio

[Live portfolio](https://ardiradi.github.io/) · [Technical build write-up](BUILD_WRITEUP.md)

This portfolio helps engineering leads inspect junior backend AI work through implementation links, concrete evidence, and explicit limitations. Its main action is to contact Ardi about a role.

The [Evidence Finder](app/evidence-finder.tsx) filters four project records by skill and searches their claims and limitations. It runs in the browser using React state; it has no AI-provider call or visitor-data backend. The [page source](app/page.tsx) presents the corresponding cases.

| Case | Inspectable evidence | Boundary |
| --- | --- | --- |
| [Internship Progress Copilot](https://github.com/ardiradi/flyrank-10x-solution) | Six passing local-demo tests; protected CRUD, metrics, planning cache, and PDF jobs | Real-provider behavior and time savings are unmeasured |
| [PharmaCheck AI](https://github.com/ardiradi/PharmaCheck-AI-Core) | Upload, document extraction, three-field mapping, raw OCR review | No implemented date/batch validation or persistent audit trail |
| [EcoVision](https://github.com/ardiradi/AI-Impact-Datathon-2026) | Two-input API, synthetic-data Random Forest, dashboard | Synthetic target; no validated economic outcome |
| [Heart Disease ML Pipeline](https://github.com/ardiradi/Monitoring-Logging-SML) | Training/CI evidence, inference metrics, monitoring demonstration | Some metrics are simulated; accuracy artifacts need reconciliation |

AI assisted evidence review, case editing, implementation of the Evidence Finder, and build work. Ardi supplied authentic project facts and design answers, and confirmed the four-case read-aloud review. See the write-up for verification scope and the actual build incident.

## Local build

Use Node.js 22 with npm. The package requires Node `>=22.13.0`; Node 22 worked for the verified Windows build. Install the locked dependencies, then start a preview or build:

```sh
npm ci
npm run dev
npm run build
```

The stack is React, TypeScript, Vinext, and Vite. `npm run build` produces `dist/client`. GitHub Pages currently serves the separately committed `/docs` output from `main`; updating that output is a separate publication step. Documentation changes do not rebuild application assets.

The [feature release](https://github.com/ardiradi/ardiradi.github.io/commit/e1e2249b1ed28619b0bbe559ba4cd07d1bd4e24b) and [successful deployment](https://github.com/ardiradi/ardiradi.github.io/actions/runs/37748134159) provide the published implementation evidence from 08 October 2026.
