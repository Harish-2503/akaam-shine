import { useState } from "react";
import "../component/aakam.css"


const IconUser = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="8" cy="5.5" r="2.5" />
    <path d="M2.5 14c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
  </svg>
);

const IconLock = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="7" width="10" height="8" rx="1.5" />
    <path d="M5 7V5.5a3 3 0 016 0V7" />
  </svg>
);

const IconEmail = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="4" width="12" height="9" rx="1.5" />
    <path d="M2 5.5l6 4 6-4" />
  </svg>
);

/* ─────────────────────────────────────────
   LOGO
───────────────────────────────────────── */
function Logo({ small = false }) {
  return (
    <a href="#" className="as-logo">
      <div className="as-logo-emblem" style={small ? { width: 30, height: 30 } : {}}>
        <div className="as-blade" />
        <div className="as-blade" />
        <div className="as-blade" />
        <div className="as-blade" />
      </div>
      <div className="as-logo-text">
        <span className="as-lt-top">aakam</span>
        <span className="as-lt-bot" style={small ? { fontSize: 18 } : {}}>Shine</span>
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────
   FORM FIELD
───────────────────────────────────────── */
function Field({ label, type, placeholder, autoComplete, required }) {
  const icon =
    type === "email"    ? <IconEmail /> :
    type === "password" ? <IconLock />  :
                          <IconUser />;

  return (
    <div className="as-field">
      <label>
        {label} {required && <span className="req">*</span>}
      </label>
      <div className="as-field-wrap">
        <span className="as-field-icon">{icon}</span>
        <input type={type} placeholder={placeholder} autoComplete={autoComplete} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   TICKER DATA
───────────────────────────────────────── */
const TICKER_ITEMS = [
  { val: "50+",         text: "Startups Incubated" },
  { val: "12K",         text: "Innovators Connected" },
  { val: "6+",          text: "Years of Impact" },
  { val: "Rural",       text: "Innovation Ecosystem" },
  { val: "Your Growth", text: "Starts Here" },
];

/* ─────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────── */
export default function AakamShine() {
  const [tab, setTab] = useState("SI"); // "SI" = Sign In, "SU" = Sign Up

  return (
    <div className="as-root">

      {/* ── Animated Background ── */}
      <div className="as-bg">
        <div className="as-wash as-wash-a" />
        <div className="as-wash as-wash-b" />
        <div className="as-wash as-wash-c" />
        <div className="as-geo as-geo-sq" />
        <div className="as-geo as-geo-sq2" />
        <div className="as-geo as-geo-sq3" />
        <div className="as-dot as-df1" />
        <div className="as-dot as-df2" />
        <div className="as-dot as-df3" />
        <div className="as-dot as-df4" />
        <div className="as-scan-line" />
      </div>

      {/* ── Navbar ── */}
      <nav className="as-nav">
        <Logo />
        <ul className="as-nav-links">
          {["Home", "About", "Our Startups", "Our Ecosystem", "Events", "Contact"].map((link) => (
            <li key={link}><a href="#">{link}</a></li>
          ))}
        </ul>
        <div className="as-nav-btns">
          <button className="as-btn-ghost">Login</button>
          <button className="as-btn-primary">Subscribe</button>
        </div>
      </nav>

      {/* ── Stats Ticker ── */}
      <div className="as-ticker-wrap" aria-hidden="true">
        <div className="as-ticker-track">
          {/* Duplicated for seamless infinite loop */}
          {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
            <div className="as-ticker-item" key={i}>
              <span className="as-t-val">{item.val}</span>
              {item.text}
              <span className="as-ticker-sep">◆</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <div className="as-main">

        {/* Left: Hero Copy */}
        <div className="as-hero-left">
          <div className="as-copy-block">

            <div className="as-overline">
              <span className="as-overline-bar" />
              User Portal
            </div>

            <h1 className="as-big-headline">
              <span className="as-outline-text">Your Growth</span>
              <span>Starts</span>
              <span className="as-accent-word">Here.</span>
            </h1>

            <div className="as-headline-rule" />

            <p className="as-copy-desc">
              Log in to access your space. Access your <strong>personalized dashboard</strong>,
              track your applications, and connect with the startup ecosystem.
            </p>

            <p className="as-brand-desc">
              Building a transformative rural incubation ecosystem to empower rural innovation
              and drive equitable economic development.
            </p>

          </div>
        </div>

        {/* Right: Form Panel */}
        <div className="as-form-panel">
          <div className="as-fp-top-bar" />
          <div className="as-fp-inner">

            <div className="as-fp-portal-tag">User <span>Portal</span></div>
            <h2 className="as-fp-title">Sign In</h2>
            <p className="as-fp-sub">Sign in to your account or create a new one</p>

            {/* Tab switcher */}
            <div className="as-tabs">
              <button
                className={`as-tab-btn${tab === "SI" ? " active" : ""}`}
                onClick={() => setTab("SI")}
              >
                Sign In
              </button>
              <button
                className={`as-tab-btn${tab === "SU" ? " active" : ""}`}
                onClick={() => setTab("SU")}
              >
                Sign Up
              </button>
            </div>

            {/* Sign In Form */}
            {tab === "SI" && (
              <div>
                <div className="as-fields">
                  <Field label="Full Name" type="text"     placeholder="Enter your full name" autoComplete="name"             required />
                  <Field label="Password"  type="password" placeholder="Enter your password"  autoComplete="current-password"          />
                </div>
                <div className="as-meta-row">
                  <a href="#" className="as-meta-link">Forgot password?</a>
                </div>
                <button className="as-cta-btn">Sign In →</button>
              </div>
            )}

            {/* Sign Up Form */}
            {tab === "SU" && (
              <div>
                <div className="as-fields">
                  <Field label="Full Name"     type="text"     placeholder="Enter your full name"     autoComplete="name"         required />
                  <Field label="Email Address" type="email"    placeholder="Enter your email address" autoComplete="email"        required />
                  <Field label="Password"      type="password" placeholder="Create a password"        autoComplete="new-password" required />
                </div>
                <button className="as-cta-btn" style={{ marginTop: 4 }}>Create Account →</button>
              </div>
            )}

            {/* Newsletter */}
            <div className="as-nl-divider">or</div>
            <div className="as-nl-block">
              <div className="as-nl-label">Subscribe to Newsletter</div>
              <div className="as-nl-row">
                <input type="email" placeholder="Your email address" />
                <button>Subscribe</button>
              </div>
            </div>

            <div className="as-fp-foot">
              © 2025 <a href="#">Aakam Shine</a>. All rights reserved.
            </div>

          </div>
        </div>

      </div>{/* end .as-main */}

      {/* ── Footer ── */}
      <footer className="as-footer">
        <div className="as-fg">

          {/* Brand */}
          <div>
            <Logo small />
            <p className="as-f-brand-desc">
              Building a transformative rural incubation ecosystem to empower rural innovation
              and drive equitable economic development.
            </p>
            <div className="as-f-socials">
              {["𝕏", "in", "f", "▶"].map((icon) => (
                <div key={icon} className="as-f-soc">{icon}</div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="as-f-ht">Quick Links</div>
            <ul className="as-f-links">
              {["Home", "About", "Our Startups", "Our Ecosystem", "Events", "Contact"].map((link) => (
                <li key={link}><a href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="as-f-ht">Contact Us</div>
            <div className="as-f-contact">
              <div className="as-f-dot" />
              <span>Pullipalayam, Sankari,<br />Tamil Nadu, India, 637304</span>
            </div>
            <div className="as-f-contact">
              <div className="as-f-dot" />
              +91 7200 171 774
            </div>
            <div className="as-f-contact">
              <div className="as-f-dot" />
              <a href="mailto:info@aakamshine.com">info@aakamshine.com</a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <div className="as-f-ht">Newsletter</div>
            <p className="as-f-nl-p">
              Subscribe to our newsletter for the latest updates and innovations.
            </p>
            <div className="as-f-nl-row">
              <input type="email" placeholder="Your email address" />
              <button>Subscribe</button>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="as-fb">
          <p>© 2025 Aakam Shine. All rights reserved.</p>
          <div className="as-fb-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Use</a>
            <a href="#">Cookie Policy</a>
          </div>
        </div>

      </footer>

    </div>
  );
}