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

const capabilities = [
  { icon: ServerCog, label: 'Backend AI', detail: 'FastAPI, Express, REST APIs' },
  { icon: FileScan, label: 'Document AI', detail: 'OCR, extraction, human review' },
  { icon: Workflow, label: 'MLOps', detail: 'MLflow, CI/CD, evaluation' },
  { icon: Activity, label: 'Observability', detail: 'Prometheus, Grafana, alerting' },
  { icon: Database, label: 'Data systems', detail: 'SQLite, SQL, validation' },
  { icon: Boxes, label: 'Delivery', detail: 'Docker, Compose, GitHub Actions' },
];

const credentials = [
  'Claude 101',
  'Claude Code in Action',
  'Claude with the Anthropic API',
  'Introduction to Model Context Protocol',
  'AI Fluency: Framework and Foundations',
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
        <p className="hero-role">Backend AI engineer turning messy operational work into dependable APIs, automation, and observable ML systems.</p>
        <div className="hero-actions">
          <a className="primary-action" href="#work">
            View selected work <ArrowDown size={17} />
          </a>
          <ExternalLink href="https://github.com/ardiradi">GitHub</ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/ardi-riyadi-785882364">LinkedIn</ExternalLink>
        </div>
        <div className="proof-strip" aria-label="Selected evidence">
          <div><strong>7</strong><span>backend assignments completed</span></div>
          <div><strong>91.8%</strong><span>heart-disease model test accuracy</span></div>
          <div><strong>12</strong><span>production-style metrics instrumented</span></div>
          <div><strong>4</strong><span>systems documented below</span></div>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="page-shell section-heading">
          <p className="section-index">01 / Selected work</p>
          <h2>Systems with receipts.</h2>
          <p>Every project below links to code, a working demo, or concrete implementation evidence.</p>
        </div>

        <article className="project project-capstone">
          <div className="page-shell project-grid">
            <div className="project-copy">
              <p className="project-label">FlyRank AI capstone / 2026</p>
              <h3>Internship Progress Copilot API</h3>
              <p>A backend service that turns scattered assignment evidence into scoped next actions and reviewer-ready PDF reports.</p>
              <ul className="evidence-list">
                <li>JWT-protected CRUD and SQLite persistence</li>
                <li>OpenAI-compatible planner with validation, caching, quotas, and cost logs</li>
                <li>Retryable background report jobs with polling and idempotency</li>
                <li>Docker, Swagger documentation, and end-to-end tests</li>
              </ul>
              <ExternalLink href="https://github.com/ardiradi/flyrank-10x-solution">Read the code</ExternalLink>
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
  "plan": [
    "Verify evidence",
    "Generate progress report"
  ]
}`}</pre>
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
              <p className="project-label">Document intelligence / live demo</p>
              <h3>PharmaCheck AI</h3>
              <p>A human-in-the-loop prototype for extracting and validating critical pharmaceutical label fields such as material name, batch number, and expiry date.</p>
              <div className="stack-line">Python · Streamlit · Azure AI Document Intelligence</div>
              <div className="link-row">
                <ExternalLink href="https://ard11-pharmacheck-ai.hf.space/">Try the demo</ExternalLink>
                <ExternalLink href="https://github.com/ardiradi/PharmaCheck-AI-Core">Repository</ExternalLink>
              </div>
            </div>
          </div>
        </article>

        <article className="project project-eco">
          <div className="page-shell project-grid">
            <div className="project-copy">
              <p className="project-label">Applied ML / Indonesian MSMEs</p>
              <h3>EcoVision</h3>
              <p>An API and dashboard exploring how macroeconomic indicators relate to purchasing-power signals for Indonesian micro and small businesses.</p>
              <div className="stack-line">FastAPI · scikit-learn · Docker · Azure ML</div>
              <div className="link-row">
                <ExternalLink href="https://prediksi-ai-ecovision-datathon.netlify.app/">Open dashboard</ExternalLink>
                <ExternalLink href="https://github.com/ardiradi/AI-Impact-Datathon-2026">Repository</ExternalLink>
              </div>
            </div>
            <div className="signal-panel" aria-label="EcoVision model inputs">
              <p>Signal inputs</p>
              <div><span>Interest rate</span><i style={{ width: '68%' }} /></div>
              <div><span>Market index</span><i style={{ width: '84%' }} /></div>
              <div><span>Digital transactions</span><i style={{ width: '56%' }} /></div>
              <small>Model output: purchasing-power score</small>
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
              <p>A four-repository learning system covering experimentation, model training, CI/CD, FastAPI inference, Prometheus metrics, Grafana dashboards, and alert rules.</p>
              <div className="stack-line">91.8% test accuracy · 5-fold GridSearchCV · 12 custom metrics</div>
              <ExternalLink href="https://github.com/ardiradi/Monitoring-Logging-SML">Monitoring repository</ExternalLink>
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
          {capabilities.map(({ icon: Icon, label, detail }) => (
            <div className="capability" key={label}>
              <Icon size={20} aria-hidden="true" />
              <strong>{label}</strong>
              <span>{detail}</span>
            </div>
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
              <span>Seven backend assignments completed; 10x capstone submitted for mentor review.</span>
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
        <p className="publication">Published research: <a href="https://doi.org/10.71282/jurmie.v2i12.1452" target="_blank" rel="noreferrer">View the article <ArrowUpRight size={15} /></a></p>
      </section>

      <footer id="contact">
        <div className="page-shell footer-grid">
          <div>
            <p className="section-index">05 / Contact</p>
            <h2>Bring me a real workflow.</h2>
            <p>Open to backend AI, document intelligence, ML prototype, and MLOps collaboration.</p>
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
