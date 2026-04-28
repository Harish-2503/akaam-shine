import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const STEPS = 6;
const stepMeta = [
  { name: "Basic Details",        sub: "Personal info" },
  { name: "Event Specifics",      sub: "Session details" },
  { name: "Startup / Idea",       sub: "Venture details" },
  { name: "Founder Background",   sub: "Your experience" },
  { name: "Support Needs",        sub: "Incubation" },
  { name: "Logistics & Consent",  sub: "Final step" },
];

const menu = [
  { name: "Home",          path: "/home" },
  { name: "About Us",      path: "/about" },
  { name: "Our Startups",  path: "/startups" },
  { name: "Our Ecosystem", path: "/ecosystem" },
  { name: "Events",        path: "/events" },
  { name: "Contact",       path: "/contact" },
];

/* ─── tiny reusable field wrappers ─── */
const Label = ({ children }) => (
  <label className="text-[10.5px] font-bold uppercase tracking-wide text-[#0D1135]">
    {children}
  </label>
);
const Input = (props) => (
  <input
    {...props}
    className="mt-1.5 w-full bg-[#F4F6FB] border border-[#DDE2EE] rounded-[10px] px-3.5 py-[11px] text-[13.5px] text-[#0D1135] placeholder-[#8890AA] focus:outline-none focus:border-[#0B1260] focus:ring-2 focus:ring-[#0B1260]/10"
  />
);
const Select = ({ children, ...props }) => (
  <select
    {...props}
    className="mt-1.5 w-full bg-[#F4F6FB] border border-[#DDE2EE] rounded-[10px] px-3.5 py-[11px] text-[13.5px] text-[#0D1135] focus:outline-none focus:border-[#0B1260] focus:ring-2 focus:ring-[#0B1260]/10 appearance-none"
  >
    {children}
  </select>
);
const Textarea = (props) => (
  <textarea
    {...props}
    className="mt-1.5 w-full bg-[#F4F6FB] border border-[#DDE2EE] rounded-[10px] px-3.5 py-[11px] text-[13.5px] text-[#0D1135] placeholder-[#8890AA] focus:outline-none focus:border-[#0B1260] focus:ring-2 focus:ring-[#0B1260]/10 resize-y min-h-[90px] leading-relaxed"
  />
);
const CbItem = ({ label, type = "checkbox", name }) => (
  <label className="flex items-center gap-2.5 bg-[#F4F6FB] border border-[#DDE2EE] rounded-[9px] px-3 py-2 cursor-pointer hover:border-[#1A2BA8] transition text-[12px] font-medium text-[#0D1135]">
    <input type={type} name={name} className="accent-indigo-700" />
    {label}
  </label>
);
const Req = () => <span className="text-[#F97316] ml-0.5">*</span>;

/* ─── stepper SVG ─── */
const Stepper = ({ current }) => {
  // cx positions for 6 steps evenly from 75 to 825
  const positions = [75, 225, 375, 525, 675, 825];
  // orange line ends at the current step's cx
  const orangeEnd = positions[current - 1];

  return (
    <div className="bg-white border border-[#E8EBF4] rounded-2xl px-8 py-6 mb-8 shadow-sm overflow-x-auto">
      <svg viewBox="0 0 900 100" xmlns="http://www.w3.org/2000/svg" className="w-full min-w-[520px]" style={{ display: "block" }}>
        {/* background line */}
        <line x1="75" y1="32" x2="825" y2="32" stroke="#E8EBF4" strokeWidth="3" strokeLinecap="round" />
        {/* orange progress line */}
        <line x1="75" y1="32" x2={orangeEnd} y2="32" stroke="#F97316" strokeWidth="3" strokeLinecap="round" />

        {stepMeta.map((s, i) => {
          const cx = positions[i];
          const stepNum = i + 1;
          const isActive = stepNum === current;
          const isDone   = stepNum < current;
          const circleFill  = isActive ? "#F97316" : isDone ? "#0B1260" : "#fff";
          const circleBorder= isActive ? "#F97316" : isDone ? "#0B1260" : "#DDE2EE";
          const textColor   = isActive || isDone ? "#fff" : "#8890AA";
          const labelColor  = isActive ? "#F97316" : isDone ? "#4A5175" : "#8890AA";

          return (
            <g key={i}>
              <circle cx={cx} cy="32" r="18" fill={circleFill} stroke={circleBorder} strokeWidth="2" />
              {/* pulse ring for active */}
              {isActive && (
                <circle cx={cx} cy="32" r="23" fill="none" stroke="#F97316" strokeWidth="1.5" opacity="0.25" />
              )}
              <text x={cx} y="38" textAnchor="middle" fill={textColor} fontSize="12" fontWeight="700">
                {stepNum}
              </text>
              {/* bold label */}
              <text x={cx} y="62" textAnchor="middle" fill={labelColor} fontSize="11" fontWeight="700">
                {s.name}
              </text>
              {/* sub label */}
              <text x={cx} y="76" textAnchor="middle" fill="#8890AA" fontSize="10">
                {s.sub}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

/* ─── STEP PANELS ─── */
const Step1 = () => (
  <div className="grid md:grid-cols-2 gap-5">
    {["Full Name", "Email Address", "Phone Number", "LinkedIn Profile"].map((l) => (
      <div key={l}><Label>{l} <Req /></Label><Input placeholder={l} /></div>
    ))}
    <div><Label>City / Location <Req /></Label><Input placeholder="e.g. Chennai, Tamil Nadu" /></div>
    <div><Label>Organisation / College</Label><Input placeholder="Your organisation or institution" /></div>
    <div className="md:col-span-2">
      <Label>Attendee Category <Req /></Label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
        {["Aspiring Entrepreneur","Startup Founder","Student / Researcher","Investor / Mentor","Corporate / Industry","Government / NGO"].map(l => (
          <CbItem key={l} label={l} type="radio" name="cat" />
        ))}
      </div>
    </div>
  </div>
);

const Step2 = () => (
  <div className="grid md:grid-cols-2 gap-5">
    <div className="md:col-span-2">
      <Label>Event / Session <Req /></Label>
      <Select>
        <option value="" disabled>Select Session / Term (Default)</option>
        <option>Demo Day 2025 — Tamil Nadu Cohort</option>
        <option>Founder Bootcamp — Sankari Edition</option>
        <option>Investor Meet Q2 2025</option>
        <option>Rural Innovation Summit</option>
        <option>Agritech Hackathon</option>
      </Select>
    </div>
    <div>
      <Label>Attendance Type <Req /></Label>
      <Select>
        <option value="" disabled>Select attendance type</option>
        <option>In-Person</option><option>Virtual / Online</option><option>Hybrid</option>
      </Select>
    </div>
    <div><Label>Number of Participants <Req /></Label><Input type="number" placeholder="e.g. 1" /></div>
    <div>
      <Label>How Did You Hear About This Event?</Label>
      <Select>
        <option value="" disabled>Select source</option>
        <option>LinkedIn</option><option>WhatsApp / Telegram</option>
        <option>Referral</option><option>Event Website</option>
        <option>Government Portal</option><option>Other</option>
      </Select>
    </div>
    <div><Label>Dietary / Accessibility Requirements</Label><Input placeholder="e.g. Vegetarian, wheelchair access…" /></div>
    <div className="md:col-span-2">
      <Label>What Do You Hope to Gain? <Req /></Label>
      <Textarea placeholder="Networking, mentorship, investor connections, product feedback…" />
    </div>
  </div>
);

const Step3 = () => (
  <div className="grid md:grid-cols-2 gap-5">
    <div><Label>Startup / Idea Name <Req /></Label><Input placeholder="Name of your venture or idea" /></div>
    <div>
      <Label>Stage of Startup <Req /></Label>
      <Select>
        <option value="" disabled>Select stage</option>
        <option>Idea Stage</option><option>MVP / Prototype</option>
        <option>Early Revenue</option><option>Growth Stage</option><option>Scale-up</option>
      </Select>
    </div>
    <div className="md:col-span-2"><Label>Problem Being Solved <Req /></Label>
      <Textarea placeholder="Describe the problem your startup or idea addresses…" /></div>
    <div className="md:col-span-2">
      <Label>Sector / Industry Focus <Req /></Label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
        {["Agritech","Healthcare & Medtech","Fintech","Edtech","CleanEnergy","AI & E-Commerce","IoT & Hardware","Food & Livelihood","Other"].map(l => (
          <CbItem key={l} label={l} />
        ))}
      </div>
    </div>
    <div><Label>Website / App Link</Label><Input type="url" placeholder="https://yourstartup.com" /></div>
    <div><Label>Pitch Deck Link</Label><Input type="url" placeholder="Google Drive / Notion / Canva link" /></div>
  </div>
);

const Step4 = () => (
  <div className="grid md:grid-cols-2 gap-5">
    <div className="md:col-span-2"><Label>Educational Background</Label><Input placeholder="e.g. B.Tech in Computer Science, IIT Madras" /></div>
    <div>
      <Label>Years of Work Experience</Label>
      <Select>
        <option value="" disabled>Select range</option>
        <option>Fresher / Student</option><option>0–2 years</option>
        <option>2–5 years</option><option>5–10 years</option><option>10+ years</option>
      </Select>
    </div>
    <div><Label>Previous Startups / Ventures</Label><Input placeholder="Names or brief description" /></div>
    <div className="md:col-span-2"><Label>Key Skills & Domain Expertise <Req /></Label>
      <Textarea placeholder="Product, sales, engineering, rural markets, supply chain…" /></div>
    <div className="md:col-span-2"><Label>Co-Founder(s) Details</Label>
      <Textarea style={{ minHeight: 70 }} placeholder="Name, role, and brief background of any co-founders…" /></div>
    <div className="md:col-span-2"><Label>Why Aakam Shine? <Req /></Label>
      <Textarea placeholder="Why do you want to connect with Aakam Shine's ecosystem specifically?" /></div>
  </div>
);

const Step5 = () => (
  <div className="grid md:grid-cols-2 gap-5">
    <div className="md:col-span-2">
      <Label>What Kind of Support Do You Need? <Req /></Label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
        {["Mentorship","Funding / Investment","Office / Lab Space","Legal & Compliance","Market Access","Technology & R&D","Team Building","Product Design","Sales & GTM"].map(l => (
          <CbItem key={l} label={l} />
        ))}
      </div>
    </div>
    <div>
      <Label>Funding Required (if any)</Label>
      <Select>
        <option value="" disabled>Select range</option>
        <option>Not looking for funding yet</option>
        <option>₹5L – ₹25L</option><option>₹25L – ₹1Cr</option>
        <option>₹1Cr – ₹5Cr</option><option>₹5Cr+</option>
      </Select>
    </div>
    <div>
      <Label>Preferred Incubation Duration</Label>
      <Select>
        <option value="" disabled>Select duration</option>
        <option>3 months</option><option>6 months</option>
        <option>12 months</option><option>Ongoing / Flexible</option>
      </Select>
    </div>
    <div className="md:col-span-2"><Label>Describe Your Biggest Current Challenge</Label>
      <Textarea placeholder="What is the #1 obstacle stopping your venture from moving forward?" /></div>
    <div className="md:col-span-2">
      <Label>Are You Currently Enrolled in Any Other Incubator / Accelerator?</Label>
      <Select>
        <option value="" disabled>Select</option>
        <option>No</option>
        <option>Yes — DPIIT Recognised</option>
        <option>Yes — Other (specify in comments)</option>
      </Select>
    </div>
  </div>
);

const Step6 = () => (
  <div className="grid md:grid-cols-2 gap-5">
    <div className="md:col-span-2">
      <Label>T-Shirt Size (for In-Person attendees)</Label>
      <Select>
        <option value="" disabled>Select size</option>
        {["XS","S","M","L","XL","XXL"].map(s => <option key={s}>{s}</option>)}
      </Select>
    </div>
    <div className="md:col-span-2"><Label>Any Special Requests or Notes</Label>
      <Textarea style={{ minHeight: 70 }} placeholder="Anything else you'd like us to know before the event…" /></div>
    <div className="md:col-span-2 flex flex-col gap-3 mt-2 text-[13.5px] text-[#4A5175]">
      <p className="text-[10.5px] font-bold uppercase tracking-wide text-[#0D1135]">Declarations & Consent <Req /></p>
      {[
        "I confirm that all information provided is accurate and complete.",
        "I consent to Aakam Shine processing my personal data for event management and communication.",
        "I agree to receive updates, event invitations, and innovation insights from Aakam Shine.",
        "I understand that my registration is subject to available seats and confirmation by the team.",
      ].map((t) => (
        <label key={t} className="flex items-start gap-2.5 cursor-pointer">
          <input type="checkbox" className="mt-0.5 accent-indigo-700" />
          <span>{t}</span>
        </label>
      ))}
    </div>
  </div>
);

const SuccessScreen = () => (
  <div className="flex flex-col items-center py-16 text-center">
    <div className="w-16 h-16 rounded-full bg-[#0B1260] flex items-center justify-center mb-6">
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
    <h2 className="text-2xl font-extrabold text-[#0B1260] mb-3">Registration Complete!</h2>
    <p className="text-[14px] text-[#8890AA] max-w-md leading-relaxed mb-6">
      Thank you for registering. Our team at Aakam Shine will review your application and reach out to confirm your participation.
    </p>
    <div className="flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[12px] font-semibold px-4 py-2 rounded-full">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M22 4L12 14.01l-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      Confirmation email will be sent shortly
    </div>
  </div>
);

/* ─── MAIN COMPONENT ─── */
const AakamShineRegister = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const next = () => { if (current < STEPS) { setCurrent(c => c + 1); window.scrollTo({ top: 0, behavior: "smooth" }); } };
  const prev = () => { if (current > 1)     { setCurrent(c => c - 1); window.scrollTo({ top: 0, behavior: "smooth" }); } };
  const submit = () => { setSubmitted(true); window.scrollTo({ top: 0, behavior: "smooth" }); };

  const stepPanels = [<Step1/>, <Step2/>, <Step3/>, <Step4/>, <Step5/>, <Step6/>];

  return (
    <div className="min-h-screen bg-[#F4F6FB]">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-16 h-[72px] bg-white/97 border-b border-[#E8EBF4] shadow-sm backdrop-blur-xl">
        <img src="/image.png" className="h-10 w-auto" alt="Aakam Shine" />
        <ul className="hidden md:flex gap-8">
          {menu.map((item) => (
            <li key={item.name}
              className="text-[13.5px] font-medium text-[#4A5175] cursor-pointer hover:text-[#0B1260] transition"
              onClick={() => navigate(item.path)}>
              {item.name}
            </li>
          ))}
        </ul>
        <button onClick={() => navigate("/login")}
          className="bg-[#F97316] hover:bg-[#EA580C] text-white text-[13px] font-bold px-5 py-2 rounded-md transition cursor-pointer">
          Login
        </button>
      </nav>

      {/* ── HERO ── */}
      <div className="bg-[#0B1260] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 md:px-20 pt-20 pb-12">
          <div className="flex flex-col justify-center md:pr-10 md:border-r border-white/10">
            <p className="text-[10px] uppercase tracking-widest text-white/40 mb-5">
              Home / <span className="text-[#F97316]">Event Registration</span>
            </p>
            <div className="flex items-center gap-2 bg-[#F97316]/10 border border-[#F97316]/30 rounded-full px-4 py-1 w-fit mb-5">
              <span className="text-[11px] uppercase text-white/70 font-semibold">Aakam Shine Events</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              Event
              <span className="block italic font-light text-white/40">Registration</span>
            </h1>
            <p className="text-[13px] text-white/50 max-w-md">
              Register for our upcoming events, bootcamps, and innovation summits.
            </p>
          </div>
          <div className="flex flex-col justify-center md:pl-10">
            {["Fill Your Details", "Review & Confirm", "Get Confirmation"].map((t, i) => (
              <div key={i} className="flex gap-4 py-5 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#F97316]/10 border border-[#F97316]/30 flex items-center justify-center text-[#F97316] font-bold text-[13px]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="pt-1"><h4 className="font-semibold text-[15px]">{t}</h4></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── FORM AREA ── */}
      <div className="max-w-5xl mx-auto px-4 py-12">

        {/* STEPPER */}
        {!submitted && <Stepper current={current} />}

        {/* FORM PANEL */}
        <div className="bg-white rounded-2xl border border-[#E8EBF4] shadow-sm overflow-hidden">

          {/* Panel Header */}
          {!submitted && (
            <div className="bg-gradient-to-r from-[#0B1260] to-[#0F1A80] px-8 py-7 relative overflow-hidden">
              {/* dot pattern */}
              <div className="absolute inset-0 opacity-[0.04]"
                style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              {/* top orange bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#F97316] to-[#1A2BA8]" />
              <p className="text-[9.5px] font-bold uppercase tracking-[.22em] text-white/30 mb-1 relative z-10">
                Step {current} <span className="text-[#F97316]">/ {STEPS}</span>
              </p>
              <h2 className="text-[20px] font-extrabold text-white relative z-10">{stepMeta[current - 1].name}</h2>
              <p className="text-[12px] text-white/40 relative z-10">{stepMeta[current - 1].sub}</p>
            </div>
          )}

          {/* Panel Body */}
          <div className="p-8 md:p-10">
            {submitted ? <SuccessScreen /> : stepPanels[current - 1]}
          </div>

          {/* Nav Buttons */}
          {!submitted && (
            <div className="flex items-center justify-between px-8 md:px-10 py-5 border-t border-[#E8EBF4] bg-[#F9FAFF]">
              <button
                onClick={prev}
                disabled={current === 1}
                className="px-5 py-2.5 rounded-lg border border-[#DDE2EE] text-[13px] font-semibold text-[#4A5175] hover:border-[#0B1260] hover:text-[#0B1260] disabled:opacity-30 disabled:cursor-not-allowed transition">
                ← Previous
              </button>
              <span className="text-[12px] text-[#8890AA] font-medium">Step {current} of {STEPS}</span>
              <button
                onClick={current === STEPS ? submit : next}
                className="bg-[#0B1260] hover:bg-[#0F1A80] text-white text-[13px] font-bold px-6 py-2.5 rounded-lg shadow transition">
                {current === STEPS ? "Submit Application →" : "Next Step →"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── FOOTER ── */}
       <div className="bg-[#0b1260] text-white px-16 py-16  ">

        <div className="grid grid-cols-4 gap-10">

          {/* LEFT LOGO + TEXT */}
          <div>
            <p className="text-gray-300 text-sm leading-6 mb-6">
              Building a transformative rural incubation ecosystem to empower rural
              innovation and drive equitable economic development.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-3">
              {["X", "in", "f", "▶"].map((icon, i) => (
                <div
                  key={i}
                  className="w-10 h-10 border border-white/20 rounded-md flex items-center justify-center text-sm cursor-pointer hover:bg-white hover:text-[#0b1260] transition"
                >
                  {icon}
                </div>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-gray-400 text-sm mb-4 tracking-widest">
              QUICK LINKS
            </h3>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Our Startups</li>
              <li className="hover:text-white cursor-pointer">Our Ecosystem</li>
              <li className="hover:text-white cursor-pointer">Events</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-gray-400 text-sm mb-4 tracking-widest">
              CONTACT US
            </h3>

            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex gap-2">
                <span className="text-orange-500">•</span>
                Pullipalayam, Sankari, Tamil Nadu, India, 637304
              </li>

              <li className="flex gap-2">
                <span className="text-orange-500">•</span>
                +917200171774
              </li>

              <li className="flex gap-2">
                <span className="text-orange-500">•</span>
                hello@aakamshine.com
              </li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-gray-400 text-sm mb-4 tracking-widest">
              NEWSLETTER
            </h3>

            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and innovations.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-[#1a237e] text-white rounded-l-md outline-none text-sm"
              />

              <button className="bg-orange-500 px-5 rounded-r-md font-semibold text-sm hover:bg-orange-600 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM LINE */}
        <div className="border-t border-white/10 mt-12 pt-6 flex justify-between text-gray-400 text-sm">

          <p>© 2025 Aakam Shine. All rights reserved.</p>

          <div className="flex gap-6">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Use</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>

        </div>

      </div>
    </div>
  );
};

export default AakamShineRegister;