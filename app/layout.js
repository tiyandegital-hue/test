import './globals.css';

export const metadata = {
  title: 'Tiyan Digital — Websites, AI Agents & Automation, Live in 72 Hours',
  description:
    'Tiyan Digital designs and builds high-converting websites, AI automations and conversational AI agents for businesses — designed, built and live in 72 hours.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <header className="site-head">
          <div className="wrap head-in">
            <a className="logo" href="/" aria-label="Tiyan Digital — home">
              TIYAN<span>DIGITAL</span>
            </a>
            <nav aria-label="Main">
              <a href="/#services">Services</a>
              <a href="/#process">Process</a>
              <a href="/#work">Work</a>
              <a href="/#faq">FAQ</a>
            </nav>
            <a className="head-cta" href="/#start">Start a project</a>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="site-foot">
          <div className="wrap foot-in">
            <div className="foot-brand">
              <div className="logo">TIYAN<span>DIGITAL</span></div>
              <p>Websites, AI agents and automation — designed, built and live in 72 hours.</p>
            </div>
            <nav aria-label="Legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms &amp; Conditions</a>
              <a href="/cookies">Cookie Policy</a>
              <a href="/refunds">Refund Policy</a>
            </nav>
            <p className="foot-note">© 2026 Tiyan Digital · tiyandegital.com · No cookies for advertising. No fake reviews. Ever.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
