'use client';

import { useState } from 'react';

const evidence = [
  { name: 'Internship Progress Copilot', area: 'Backend', claim: 'Six local tests cover API health, authentication, CRUD, metrics, planning cache, and PDF jobs.', limit: 'Planning tests use deterministic demo output. Time savings and real-provider calls have not been measured.', url: 'https://github.com/ardiradi/flyrank-10x-solution/blob/main/test/app.test.js' },
  { name: 'The Polite Scraper', area: 'Backend', claim: 'A cached offline rerun contains 60 valid records, 63 HTML cache hits, and zero HTTP requests. One additional real HTTP 404 was logged while preserving all 60 valid records.', limit: 'Three-page practice-site scope; cached data is not a fresh crawl. A separate detail-failure fixture retains 59 records. Built and verified with AI assistance; submission review remains pending.', url: 'https://github.com/ardiradi/flyrank-polite-scraper/blob/36681491102946be58769d9b05c813e74e287a10/scraper/README.md' },
  { name: 'PharmaCheck AI', area: 'Document AI', claim: 'Default Tesseract OCR reads images and bounded PDFs without an Azure key. Fifty-seven local tests passed; one hosted JPEG trial matched three visible label values on 10 October 2026. Raw OCR and field candidates remain inspectable.', limit: 'One synthetic sample does not establish general accuracy. Raw text misread 50 mg as 30 mg. Dates and batches are not validated, and no persistent audit trail exists. PDF OCR was tested locally; the hosted trial used JPEG. Optional Azure remains inactive.', url: 'https://github.com/ardiradi/PharmaCheck-AI-Core/blob/main/app.py' },
  { name: 'EcoVision', area: 'ML', claim: 'A two-input FastAPI prediction flow connects a synthetic-data Random Forest model to a dashboard.', limit: 'The 500 training rows and target formula are synthetic. The score has not been economically validated.', url: 'https://github.com/ardiradi/AI-Impact-Datathon-2026/blob/main/train.py' },
  { name: 'Heart Disease ML Pipeline', area: 'MLOps', claim: 'Inspectable training, CI artifacts, inference metrics, and a twelve-family monitoring demonstration.', limit: 'Several exporter metrics are simulated. Conflicting accuracy artifacts need reconciliation to a specific run.', url: 'https://github.com/ardiradi/Monitoring-Logging-SML' },
];

const caseIds: Record<string, string> = {
  'Internship Progress Copilot': 'copilot',
  'The Polite Scraper': 'scraper',
  'PharmaCheck AI': 'pharma',
  'EcoVision': 'ecovision',
  'Heart Disease ML Pipeline': 'mlops',
};

export default function EvidenceFinder() {
  const [area, setArea] = useState('All');
  const [query, setQuery] = useState('');
  const results = evidence.filter(item => (area === 'All' || item.area === area) && `${item.name} ${item.claim} ${item.limit}`.toLowerCase().includes(query.toLowerCase().trim()));
  return <section className="evidence-finder page-shell" aria-labelledby="evidence-title">
    <p className="section-index">Evidence</p>
    <h2 id="evidence-title">Project evidence</h2>
    <p>Find a project, read its case study, or inspect its evidence and limits.</p>
    <label className="evidence-search">Search project evidence<input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder="Try: PDF, OCR, synthetic, metrics" /></label>
    <div className="evidence-filters" aria-label="Filter evidence by skill">
      {['All', 'Backend', 'Document AI', 'ML', 'MLOps'].map(value => <button key={value} type="button" aria-pressed={area === value} onClick={() => setArea(value)}>{value}</button>)}
    </div>
    <output className="evidence-count">{results.length} {results.length === 1 ? 'project' : 'projects'} found</output>
    <div className="evidence-results">{results.map(item => <article className="evidence-row" key={item.name}>
      <div className="evidence-row-heading"><span className="section-index">{item.area}</span><h3>{item.name}</h3></div>
      <div className="evidence-row-links">
        <a className="text-link" href={`#${caseIds[item.name]}`} aria-label={`Read case study: ${item.name}`}>Read case study</a>
        <a className="text-link" href={item.url} target="_blank" rel="noreferrer">{item.name} source <span aria-hidden="true">↗</span></a>
      </div>
      <details className="evidence-details">
        <summary className="evidence-summary">Evidence and limits</summary>
        <p><strong>Claim:</strong> {item.claim}</p><p className="evidence-limit"><strong>Limits:</strong> {item.limit}</p>
      </details>
    </article>)}</div>
    {results.length === 0 && <p>No matching evidence. Clear the search or choose another skill.</p>}
  </section>;
}
