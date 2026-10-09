import {
  Activity,
  ArrowDown,
  ArrowUpRight,
  Boxes,
  Code2,
  ContactRound,
  Database,
  FileScan,
  Mail,
  MapPin,
  ServerCog,
  Workflow,
} from 'lucide-react';
import Image from 'next/image';
import EvidenceFinder from './evidence-finder';

const capabilities = [
  { icon: ServerCog, label: 'Backend AI', detail: 'Express, REST, JWT, background jobs', href: 'https://github.com/ardiradi/flyrank-10x-solution' },
  { icon: FileScan, label: 'Document AI', detail: 'Extraction with explicit human review', href: 'https://github.com/ardiradi/PharmaCheck-AI-Core' },
  { icon: Workflow, label: 'MLOps', detail: 'MLflow, GridSearchCV, CI/CD', href: 'https://github.com/ardiradi/Membangun-Model-SML' },
  { icon: Activity, label: 'Observability', detail: 'Prometheus, Grafana, alerting', href: 'https://github.com/ardiradi/Monitoring-Logging-SML' },
  { icon: Database, label: 'Data systems', detail: 'SQLite, SQL, schema validation', href: 'https://github.com/ardiradi/flyrank-10x-solution/blob/main/src/db.js' },
  { icon: Boxes, label: 'Delivery', detail: 'Docker, Compose, GitHub Actions', href: 'https://github.com/ardiradi/flyrank-10x-solution/blob/main/Dockerfile' },
];

const credentials = [
  'Claude with the Anthropic API',
  'Introduction to Model Context Protocol',
];

const ExternalLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a className="text-link" href={href} target="_blank" rel="noreferrer">
    {children}
    <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2} />
  </a>
);

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Ardi Riyadi, back to top">
          AR<span>/26</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="icon-link" href="https://github.com/ardiradi" target="_blank" rel="noreferrer" aria-label="Open Ardi's GitHub profile">
          <Code2 size={20} />
        </a>
      </header>

      <section className="hero page-shell" id="top">
        <div className="hero-kicker">
          <span className="status-dot" aria-hidden="true" />
          Building from Palembang, Indonesia
        </div>
        <h1>Ardi Riyadi</h1>
        <p className="hero-role">Backend AI Engineer Intern building inspectable APIs, document extraction workflows, and ML learning systems.</p>
        <div className="hero-actions">
          <a className="primary-action" href="#work">
            View selected work <ArrowDown size={17} />
          </a>
          <ExternalLink href="https://github.com/ardiradi">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/ardi-riyadi-785882364">LinkedIn</ExternalLink>
        </div>
        <div className="proof-strip" aria-label="Selected evidence">
          <a href="https://github.com/ardiradi/flyrank-10x-solution/blob/main/test/app.test.js" target="_blank" rel="noreferrer"><strong>6</strong><span>automated capstone tests</span></a>
          <a href="https://github.com/ardiradi/AI-Impact-Datathon-2026/blob/main/train.py" target="_blank" rel="noreferrer"><strong>2</strong><span>inputs in the synthetic ML demo</span></a>
          <a href="https://github.com/ardiradi/Monitoring-Logging-SML" target="_blank" rel="noreferrer"><strong>12</strong><span>metric families in a learning demo</span></a>
          <a href="#work"><strong>4</strong><span>systems documented below</span></a>
        </div>
      </section>

      <EvidenceFinder />

      <section className="work-section" id="work">
        <div className="page-shell section-heading">
          <p className="section-index">01 / Selected work</p>
          <h2>Systems with receipts.</h2>
          <p>Every project below links to code or documented implementation evidence.</p>
        </div>

        <article className="project project-capstone">
          <div className="page-shell project-grid">
            <div className="project-copy">
              <p className="project-label">FlyRank AI capstone / 2026</p>
              <h3>Internship Progress Copilot API</h3>
              <p><strong>Problem.</strong> In my self-paced internship, repeatedly checking instructions and evidence made it difficult to choose the next task.</p>
              <p><strong>What I built.</strong> I kept the scope to tasks, next actions, and evidence. SQLite makes the demo easy to run; background PDF jobs return HTTP 202 and expose status polling.</p>
              <ul className="evidence-list">
                <li>JWT-protected CRUD and SQLite persistence</li>
                <li>Optional OpenAI-compatible planner with validation and caching; token logs with a zero monetary-cost placeholder</li>
                <li>Retryable background report jobs with polling and idempotency</li>
                <li>Prometheus request, latency, error, and runtime metrics</li>
                <li>Docker, Swagger documentation, and six automated tests</li>
              </ul>
              <p><strong>What came of it.</strong> Six local tests passed. Three isolated synthetic API workflows on 9 October 2026 completed task, plan, evidence, and PDF generation with a median of 2.7 seconds. The demo uses fixed planning output; real-provider calls, human interaction time, and tenfold savings remain unverified.</p>
              <ExternalLink href="https://github.com/ardiradi/flyrank-10x-solution">Copilot repository</ExternalLink>
            </div>
            <div className="terminal" aria-label="Example API response">
              <div className="terminal-bar"><span /><span /><span /><code>POST /ai/next-actions</code></div>
              <pre>{`{
  "goal": "Finish track",
  "constraints": ["free tools"],
  "assignmentIds": ["BE-01", "BE-08"]
}

200 OK
{
  "cacheHit": false,
  "output": {
    "summary": "Prepare the next backend task",
    "nextActions": [
      {
        "title": "Review assignment evidence",
        "reason": "Check what is complete",
        "estimatedMinutes": 15
      }
    ],
    "risks": ["Verify evidence before submission"]
  }
}`}</pre>
              <p className="terminal-note">Illustrative response excerpt. Report generation uses a separate request.</p>
            </div>
          </div>
        </article>

        <article className="project project-pharma">
          <div className="page-shell project-grid image-first">
            <figure className="project-media pharma-media">
              <Image unoptimized src="/work/pharmacheck-input.jpg" alt="A pharmaceutical label used to test PharmaCheck's document extraction workflow" width={2048} height={2048} />
              <figcaption>Test input used in the public repository</figcaption>
            </figure>
            <div className="project-copy">
              <p className="project-label">Document intelligence / prototype</p>
              <h3>PharmaCheck AI</h3>
              <p><strong>Problem.</strong> Material name, batch number, and expiry date can be hard to locate among many label fields.</p>
              <p><strong>What I built.</strong> I built the original Azure extraction prototype independently. Recovery with AI assistance added Tesseract OCR on the application server, bounded image/PDF processing, and explicit missing or conflicting field candidates. Azure remains optional.</p>
              <p><strong>What came of it.</strong> Fifty-seven local tests passed, including native JPEG and two-page PDF OCR. One hosted JPEG trial matched the three visible label values. Raw text still misread 50 mg as 30 mg; general accuracy is unmeasured. Date normalization, batch validation, and a persistent audit trail are not implemented.</p>
              <p><strong>Demo availability.</strong> Docker deployment, upload, preview, and one local OCR extraction were verified on 10 October 2026. The default mode needs no Azure account or API key. The earlier Azure trial failed and its resource is inactive; PDF OCR was tested locally, while the hosted trial used JPEG.</p>
              <div className="stack-line">Python · Streamlit · Tesseract OCR · optional Azure Document Intelligence</div>
              <div className="link-row">
                <ExternalLink href="https://ard11-pharmacheck-ai.hf.space/">PharmaCheck Space status</ExternalLink>
                <ExternalLink href="https://github.com/ardiradi/PharmaCheck-AI-Core">PharmaCheck repository</ExternalLink>
              </div>
            </div>
          </div>
        </article>

        <article className="project project-eco">
          <div className="page-shell project-grid">
            <div className="project-copy">
              <p className="project-label">Applied ML / synthetic-data demo</p>
              <h3>EcoVision</h3>
              <p><strong>Problem.</strong> I wanted an input-to-prediction workflow that was simple to test and repeat.</p>
              <p><strong>What I built.</strong> Working independently, I connected training, a FastAPI endpoint, and a dashboard. Two economic inputs keep the demo focused; 500 synthetic rows come from a formula with noise.</p>
              <p><strong>What came of it.</strong> The model returns a simulated score with threshold-based recommendation text. It represents the assumptions in the formula; it does not establish real purchasing power or business impact.</p>
              <div className="stack-line">FastAPI · scikit-learn · Docker · rule-based recommendations</div>
              <div className="link-row">
                <ExternalLink href="https://prediksi-ai-ecovision-datathon.netlify.app/">Open dashboard</ExternalLink>
                <ExternalLink href="https://github.com/ardiradi/AI-Impact-Datathon-2026">EcoVision repository</ExternalLink>
              </div>
            </div>
            <div className="signal-panel" aria-label="EcoVision model inputs">
              <p>Signal inputs</p>
              <div><span>Interest rate</span><i style={{ width: '68%' }} /></div>
              <div><span>Market index</span><i style={{ width: '84%' }} /></div>
              <small>Two inputs → simulated score. Bars are decorative; no live economic data is shown.</small>
            </div>
          </div>
        </article>

        <article className="project project-mlops">
          <div className="page-shell project-grid image-first">
            <figure className="project-media dashboard-media">
              <Image unoptimized src="/work/mlops-grafana.jpg" alt="Grafana dashboard monitoring a heart-disease machine-learning API" width={1920} height={1080} />
              <figcaption>Grafana evidence from the monitoring repository</figcaption>
            </figure>
            <div className="project-copy">
              <p className="project-label">End-to-end MLOps</p>
              <h3>Heart Disease ML Pipeline</h3>
              <p><strong>Problem.</strong> A training score alone does not explain how to serve a model or inspect a running service.</p>
              <p><strong>What I built.</strong> I worked independently across four learning repositories: experimentation, Random Forest training, five-fold GridSearchCV, MLflow, CI artifact upload, FastAPI inference, Prometheus, and Grafana.</p>
              <p><strong>Result.</strong> Code and artifacts make each stage inspectable. Several exporter metrics are simulated. Accuracy figures need reconciliation to a specific run, and the project does not establish clinical or production readiness.</p>
              <div className="stack-line">5-fold GridSearchCV · MLflow · 12 demonstration metric families</div>
              <div className="link-row">
                <ExternalLink href="https://github.com/ardiradi/Membangun-Model-SML">Heart Disease training repository</ExternalLink>
                <ExternalLink href="https://github.com/ardiradi/Monitoring-Logging-SML">Heart Disease monitoring repository</ExternalLink>
              </div>
            </div>
          </div>
        </article>
      </section>

      <section className="capabilities page-shell" aria-labelledby="capabilities-title">
        <div className="section-heading compact">
          <p className="section-index">02 / What I build with</p>
          <h2 id="capabilities-title">Useful range, one direction.</h2>
        </div>
        <div className="capability-grid">
          {capabilities.map(({ icon: Icon, label, detail, href }) => (
            <a className="capability" href={href} target="_blank" rel="noreferrer" key={label}>
              <Icon size={20} aria-hidden="true" />
              <strong>{label}</strong>
              <span>{detail}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="experience-section" id="experience">
        <div className="page-shell experience-grid">
          <div className="section-heading compact">
            <p className="section-index">03 / Experience</p>
            <h2>Learning by shipping.</h2>
            <p>I work across the path from ambiguous workflow to documented, testable system.</p>
          </div>
          <div className="timeline">
            <article>
              <time>Jul 2026 — Present</time>
              <h3>Backend AI Engineer Intern</h3>
              <p>FlyRank AI · Remote</p>
              <span>Nine backend assignments submitted; Your 10x Solution capstone approved on 6 September 2026.</span>
            </article>
            <article>
              <time>2026</time>
              <h3>AI Engineer Student</h3>
              <p>Dicoding Indonesia</p>
              <span>Built an end-to-end MLOps learning pipeline with tracked experiments, CI/CD, serving, and monitoring.</span>
            </article>
            <article>
              <time>2023 — 2027</time>
              <h3>Bachelor of Information Systems</h3>
              <p>Universitas Katolik Musi Charitas</p>
              <span>Palembang, Indonesia</span>
            </article>
          </div>
        </div>
      </section>

      <section className="credentials page-shell">
        <div>
          <p className="section-index">04 / Selected learning</p>
          <h2>Current foundations</h2>
        </div>
        <div className="credential-list">
          {credentials.map((credential, index) => (
            <div key={credential}><span>{String(index + 1).padStart(2, '0')}</span><p>{credential}</p><small>Anthropic Academy · 2026</small></div>
          ))}
        </div>
        <p className="publication">Published research comparing SVM and Random Forest for diabetes prediction: <a href="https://doi.org/10.71282/jurmie.v2i12.1452" target="_blank" rel="noreferrer">View the article <ArrowUpRight size={15} /></a></p>
      </section>

      <footer id="contact">
        <div className="page-shell footer-grid">
          <div>
            <p className="section-index">05 / Contact</p>
            <h2>Bring me a real workflow.</h2>
            <p>Hiring a junior backend AI engineer for a remote product team? Email me to discuss the role and the workflow you need help building.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:ardiriadi72@gmail.com"><Mail size={18} />Email<ArrowUpRight size={16} /></a>
            <a href="https://www.linkedin.com/in/ardi-riyadi-785882364" target="_blank" rel="noreferrer"><ContactRound size={18} />LinkedIn<ArrowUpRight size={16} /></a>
            <a href="https://github.com/ardiradi" target="_blank" rel="noreferrer"><Code2 size={18} />GitHub<ArrowUpRight size={16} /></a>
            <span><MapPin size={18} />Palembang, Indonesia</span>
          </div>
        </div>
        <div className="page-shell footer-bottom"><span>Ardi Riyadi · 2026</span><span>Built around evidence, not adjectives.</span></div>
      </footer>
    </main>
  );
}
