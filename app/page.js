const services = [
  {
    no: '01',
    title: '72-Hour Website Builds',
    text: 'High-converting websites and landing pages in Next.js, React, Tailwind CSS or Webflow — designed around one job: turning visitors into enquiries.',
  },
  {
    no: '02',
    title: 'AI Automations',
    text: 'Workflow pipelines with Make.com and Zapier — CRM setup, WhatsApp and SMS lead dispatch, invoice and form triage that runs while you sleep.',
  },
  {
    no: '03',
    title: 'Conversational AI Agents',
    text: 'WhatsApp and Messenger agents that answer customers, show products and take orders — with a human handoff the moment a conversation needs one.',
  },
  {
    no: '04',
    title: 'Performance & CRO',
    text: 'Slow pages, broken checkout and booking flows, mobile friction. We find what is costing you customers and fix it.',
  },
];

const steps = [
  { when: 'HOUR 0', title: 'Scope & fixed quote', text: 'One call. We agree exactly what ships, what it costs and when — in writing, before any work starts.' },
  { when: 'HOUR 4', title: 'Design direction', text: 'You approve the look and structure first. No building in the dark, no surprises at the end.' },
  { when: 'HOUR 60', title: 'Build & review', text: 'The full site or system, built and ready for your review with time left for real changes.' },
  { when: 'HOUR 72', title: 'Live', text: 'Deployed, checked on real devices, and handed over with everything in your name.' },
];

const faqs = [
  {
    q: 'What does "live in 72 hours" actually mean?',
    a: 'From the moment the scope is agreed, your website or system is designed, built and deployed within 72 hours. The clock and the deliverables are written into the quote, so there is nothing vague to argue about later.',
  },
  {
    q: 'How much will my project cost?',
    a: 'You get a fixed quote after the scope call and before work begins. The price in the quote is the price you pay — it changes only if you change the scope.',
  },
  {
    q: 'Who owns the website and the accounts?',
    a: 'You do. Domain, hosting, code and accounts are set up in your name and handed over at launch. We never hold a client\u2019s business hostage.',
  },
  {
    q: 'What do you need from me to start?',
    a: 'One call, your content (text and photos you already have), and one person who can approve the design direction. We handle everything else.',
  },
];

export default function Home() {
  return (
    <>
      <div className="wrap">
        <div className="hero">
          <div>
            <p className="kicker">Tiyan Digital — digital systems for business</p>
            <h1>Your next customers are searching tonight. <em>Be live before the week turns.</em></h1>
            <p className="lede">
              We design and build websites, AI agents and automations for businesses that
              measure time in sales, not quarters. One scope, one fixed quote, one deadline.
            </p>
            <div className="actions">
              <a className="btn btn-gold" href="#start">Start a project</a>
              <a className="btn btn-line" href="#work">See the work</a>
            </div>
          </div>
          <div className="hero-rail" aria-label="Delivery time">
            <div className="big" aria-hidden="true">72</div>
            <p><strong>hours</strong> from agreed scope to a live, selling system. Not a mock-up. Not a maybe.</p>
          </div>
        </div>
      </div>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          <span>WEBSITES&nbsp;&nbsp;·&nbsp;&nbsp;AI AGENTS&nbsp;&nbsp;·&nbsp;&nbsp;AUTOMATION&nbsp;&nbsp;·&nbsp;&nbsp;LIVE IN 72 HOURS&nbsp;&nbsp;·&nbsp;&nbsp;FIXED QUOTE&nbsp;&nbsp;·&nbsp;&nbsp;YOU OWN EVERYTHING&nbsp;&nbsp;·&nbsp;&nbsp;</span>
          <span>WEBSITES&nbsp;&nbsp;·&nbsp;&nbsp;AI AGENTS&nbsp;&nbsp;·&nbsp;&nbsp;AUTOMATION&nbsp;&nbsp;·&nbsp;&nbsp;LIVE IN 72 HOURS&nbsp;&nbsp;·&nbsp;&nbsp;FIXED QUOTE&nbsp;&nbsp;·&nbsp;&nbsp;YOU OWN EVERYTHING&nbsp;&nbsp;·&nbsp;&nbsp;</span>
        </div>
      </div>

      <div className="wrap">
        <section id="services">
          <div className="sec-head">
            <p className="kicker">Services</p>
            <h2>Four ways we put your business online — properly.</h2>
            <p className="lede">Every engagement ends the same way: a working system, in your name, that you can point customers to.</p>
          </div>
          <div className="rows">
            {services.map((s) => (
              <article className="row" key={s.no}>
                <div className="no" aria-hidden="true">{s.no}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process">
          <div className="sec-head">
            <p className="kicker">Process</p>
            <h2>72 hours is a system, not a slogan.</h2>
          </div>
          <div className="steps">
            {steps.map((s) => (
              <article className="step" key={s.when}>
                <div className="when">{s.when}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="work">
          <div className="sec-head">
            <p className="kicker">Selected work</p>
            <h2>Real work, live on the internet.</h2>
          </div>
          <article className="work-panel">
            <div>
              <h3>Blue Dhaka — Contemporary Womenswear Atelier</h3>
              <p>
                A full e-commerce website for a clothing brand: catalogue, product pages and a
                checkout flow built for how their customers actually shop. Designed and built
                end to end by Tiyan Digital — go and click around it.
              </p>
              <p style={{ marginTop: 16 }}>
                <a className="work-link" href="https://bluedhaka.com" target="_blank" rel="noreferrer">Visit bluedhaka.com →</a>
              </p>
            </div>
            <div className="work-meta">
              <div><b>Client</b> — Blue Dhaka (clothing brand)</div>
              <div><b>Built</b> — E-commerce website</div>
              <div><b>Scope</b> — Design + build, end to end</div>
              <div><b>Status</b> — Live</div>
            </div>
          </article>
        </section>

        <section id="principles">
          <div className="sec-head">
            <p className="kicker">How we work</p>
            <h2>Three rules we don&apos;t break.</h2>
          </div>
          <div className="principles">
            <div className="principle">
              <h3>Fixed quote, in writing</h3>
              <p>Scope and price are agreed before work starts. Surprises are for birthdays, not invoices.</p>
            </div>
            <div className="principle">
              <h3>You own everything</h3>
              <p>Domain, hosting, code, accounts — in your name from day one, handed over at launch.</p>
            </div>
            <div className="principle">
              <h3>No fake anything</h3>
              <p>No invented reviews, no borrowed screenshots, no numbers we can&apos;t back up. Our proof is work you can visit.</p>
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="sec-head">
            <p className="kicker">FAQ</p>
            <h2>Asked before every project.</h2>
          </div>
          {faqs.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </section>

        <section id="start">
          <div className="sec-head">
            <p className="kicker">Start a project</p>
            <h2>Tell us what your business needs.</h2>
            <p className="lede">Two minutes. We reply with next steps and a time for the scope call.</p>
          </div>
          <form className="form-panel" action="https://tiyandegital.com" method="get">
            <div className="form-grid">
              <div className="field">
                <label htmlFor="name">Your name</label>
                <input id="name" name="name" type="text" autoComplete="name" required />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="field full">
                <label htmlFor="need">What do you need?</label>
                <select id="need" name="need" defaultValue="website">
                  <option value="website">A website or landing page</option>
                  <option value="automation">AI automation for my business</option>
                  <option value="agent">A WhatsApp / Messenger AI agent</option>
                  <option value="fix">Fix or speed up my current site</option>
                  <option value="other">Something else</option>
                </select>
              </div>
              <div className="field full">
                <label htmlFor="details">Tell us about the project</label>
                <textarea id="details" name="details" rows={4} aria-describedby="details-hint" />
                <p className="hint" id="details-hint">What the business does, what the system must do, and your deadline if you have one.</p>
              </div>
            </div>
            <div className="consent">
              <input id="consent" name="consent" type="checkbox" required />
              <label htmlFor="consent">
                I agree to be contacted about this enquiry. My details are used only to reply to
                me and are never sold — see the <a href="/privacy">Privacy Policy</a>.
              </label>
            </div>
            <button className="btn btn-gold" type="submit" style={{ border: 0, cursor: 'pointer' }}>
              Send enquiry
            </button>
          </form>
        </section>
      </div>
    </>
  );
}
