'use client';
import { useState } from 'react';

type Step = 'preamble' | 'rights' | 'governance' | 'review';

export default function Builder() {
  const [step, setStep] = useState<Step>('preamble');
  const [data, setData] = useState({ preamble: '', rights: '', governance: '' });

  const next = () => setStep(step === 'preamble' ? 'rights' : step === 'rights' ? 'governance' : 'review');
  const back = () => setStep(step === 'review' ? 'governance' : step === 'governance' ? 'rights' : 'preamble');

  return (
    <main style={{ padding: 24, fontFamily: 'sans-serif', maxWidth: 800, margin: '0 auto' }}>
      <h1>Constitution Builder</h1>
      <p style={{ opacity: 0.7 }}>Step: <b>{step}</b></p>

      {step === 'preamble' && (
        <section>
          <h2>Preamble</h2>
          <textarea
            style={{ width: '100%', height: 140 }}
            value={data.preamble}
            onChange={(e) => setData({ ...data, preamble: e.target.value })}
            placeholder='Mission, context, values...'
          />
        </section>
      )}

      {step === 'rights' && (
        <section>
          <h2>Rights</h2>
          <textarea
            style={{ width: '100%', height: 140 }}
            value={data.rights}
            onChange={(e) => setData({ ...data, rights: e.target.value })}
            placeholder='Member rights, voting guarantees...'
          />
        </section>
      )}

      {step === 'governance' && (
        <section>
          <h2>Governance</h2>
          <textarea
            style={{ width: '100%', height: 140 }}
            value={data.governance}
            onChange={(e) => setData({ ...data, governance: e.target.value })}
            placeholder='Processes, thresholds, vetoes...'
          />
        </section>
      )}

      {step === 'review' && (
        <section>
          <h2>Review</h2>
          <pre style={{ background: '#f6f6f6', padding: 12, whiteSpace: 'pre-wrap' }}>
{`# Preamble
${data.preamble}

# Rights
${data.rights}

# Governance
${data.governance}
`}
          </pre>
          <button
            onClick={() => {
              const md = `# Preamble\n${data.preamble}\n\n# Rights\n${data.rights}\n\n# Governance\n${data.governance}\n`;
              const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = 'constitution.md';
              a.click();
              URL.revokeObjectURL(url);
            }}
            style={{ marginTop: 12 }}
          >
            Download Markdown
          </button>
        </section>
      )}

      <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
        {step !== 'preamble' && <button onClick={back}>Back</button>}
        {step !== 'review' && <button onClick={next}>Next</button>}
      </div>
    </main>
  );
}
