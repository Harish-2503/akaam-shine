import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const invest = () => {
  const navigate = useNavigate();
  
    const menu = [
      { name: "Home", path: "/home" },
      { name: "About Us", path: "/about" },
      { name: "Our Startups", path: "/startups" },
      { name: "Our Ecosystem", path: "/ecosystem" },
      { name: "Events", path: "/events" },
      { name: "Contact", path: "/contact" },]
  
 const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const options = [
    "Individual Investor",
    "Angel Investor",
    "Venture Capital Firm",
    "Family Office",
    "Corporate Investor",
    "Investment Bank",
    "Government Fund",
  ];
  const [form, setForm] = useState({
    sourceOfFunds: "",
    compliance: [],
    references: "",
    hearAbout: "",
    comments: "",
  });

  const handleCheckbox = (value) => {
    setForm((prev) => ({
      ...prev,
      compliance: prev.compliance.includes(value)
        ? prev.compliance.filter((v) => v !== value)
        : [...prev.compliance, value],
    }));
  }
  const [form_, setForm_] = useState({
    legal: [],
    privacy: [],
  });

  const handleCheck = (group, value) => {
    setForm((prev) => ({
      ...prev,
      [group]: prev[group].includes(value)
        ? prev[group].filter((v) => v !== value)
        : [...prev[group], value],
    }));
  };
  return (
    
    <div>
      <div className='flex items-center justify-between border-b border-orange-500 p-2 sticky top-0 z-50 bg-white shadow-md'>
        <img src="/image.png" className='w-25 h-15 flex items-center justify-center' alt="" />
        <ul className='flex gap-10 '>
          {
            menu.map((item, index) => (
              <li className='  cursor-pointer text-sm text-[#4a5175]' key={index} onClick={() => navigate(item.path)}>
                {item.name}
              </li>
            ))}
        </ul>
        <div>
          <button onClick={() => navigate("/login")} className='bg-[#f97316] text-white font-semibold rounded-md py-2 px-5 text-sm cursor-pointer hover:bg-orange-400'>Login</button>
        </div>
        </div>


        <div className="bg-[#0B1260] text-white relative overflow-hidden">

      {/* Background Grid Effect */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle,white_1px,transparent_1px)] [background-size:28px_28px]" />

      {/* Right Circle Pattern */}
      <div className="absolute right-[-120px] bottom-[-120px] w-[500px] h-[500px] border border-white/10 rounded-full" />
      <div className="absolute right-[-60px] bottom-[-60px] w-[350px] h-[350px] border border-white/10 rounded-full" />

      {/* Content */}
      <div className="relative grid md:grid-cols-2 gap-12 px-6 md:px-20 py-24">

        {/* LEFT */}
        <div className="flex flex-col justify-center">

          {/* Breadcrumb */}
          <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
            Home / <span className="text-orange-500">Invest with Aakam Shine</span>
          </p>

          {/* Tag */}
          <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1 w-fit mb-6">
            <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-xs">
              💼
            </div>
            <span className="text-xs uppercase tracking-wider text-white/70 font-semibold">
              Aakam Shine Investor Network
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Invest with
            <span className="block italic font-light text-white/40">
              Aakam Shine
            </span>
          </h1>

          {/* Description */}
          <p className="text-sm md:text-base text-white/50 max-w-md leading-relaxed">
            Join Tamil Nadu's most vibrant startup ecosystem and be part of our mission to foster innovation across healthcare, sustainability, and emerging technologies.
          </p>
        </div>

        {/* RIGHT (Steps) */}
        <div className="flex flex-col justify-center md:pl-10 relative">

          <p className="text-xs uppercase tracking-widest text-white/30 mb-8">
            How it works
          </p>

          {[
            {
              title: "Submit Your Interest",
              desc: "Share your investor profile and investment thesis"
            },
            {
              title: "Meet the Portfolio",
              desc: "We curate startup introductions aligned to your focus"
            },
            {
              title: "Close & Grow",
              desc: "Invest, track milestones, and grow your portfolio"
            }
          ].map((step, i) => (
            <div key={i} className="flex gap-4 py-5 relative">

              {/* Vertical Line */}
              {i !== 2 && (
                <div className="absolute left-[18px] top-14 w-[1px] h-full bg-gradient-to-b from-orange-500/40 to-transparent" />
              )}

              {/* Badge */}
              <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 font-bold text-sm">
                {String(i + 1).padStart(2, "0")}
              </div>

              {/* Content */}
              <div>
                <h4 className="font-semibold">{step.title}</h4>
                <p className="text-sm text-white/50">{step.desc}</p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
    <section className="bg-[#F4F6FB]  py-16 px-4 md:px-20">
       <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 relative overflow-hidden">

        {/* TOP GRADIENT */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>
        <div className="p-8 md:p-10">

          {/* HEADER */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-orange-500 mb-2">
              <span className="w-6 h-[2px] bg-orange-500"></span>
              SECTION 1
            </div>

            <h2 className="text-xl font-bold text-[#0B1260]">
              Investor Information
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Personal and organisation details
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-6">

            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Full Name / Organisation Name <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Your name or organisation"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-[#0B1260]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Contact Person (If Organisation) <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Primary point of contact"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-[#0B1260]"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Email Address <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-[#0B1260]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Phone Number (with country code) <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-[#0B1260]"
                />
              </div>
            </div>

            {/* ROW 3 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Linkedin Profile
                </label>
                <input
                  type="text"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Company / Portfolio
                </label>
                <input
                  type="text"
                  placeholder="Firm name or portfolio URL"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]"
                />
              </div>
            </div>

            {/* ROW 4 */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                City, State, Country <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Chennai, Tamil Nadu, India"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]"
              />
            </div>

            {/* ROW 5 */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Physical Address <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Full mailing address"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]"
              />
            </div>

            {/* ROW 6 (DROPDOWNS) */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* CUSTOM DROPDOWN */}
              <div className="relative z-50 overflow-visible">

      <label className="text-xs font-semibold uppercase text-gray-700">
        Investor Type <span className="text-orange-500">*</span>
      </label>

      <div className="relative mt-2">

        {/* Input Box */}
        <div
          onClick={() => setOpen(!open)}
          className="w-full px-4 py-3 bg-[#F1F3F8] border border-gray-300 rounded-lg flex justify-between items-center cursor-pointer focus:ring-2 focus:ring-[#0B1260]"
        >
          {selected || "Select investor type"}
          <span className="text-gray-400">{open ? "˄" : "˅"}</span>
        </div>

        {/* Dropdown */}
        {open && (
          <div className="absolute left-0 top-full w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-lg z-[9999] max-h-60 overflow-y-auto">

            {options.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}
                className="px-4 py-3 hover:bg-blue-100 cursor-pointer"
              >
                {item}
              </div>
            ))}

          </div>
        )}
      </div>
    </div>

              {/* NORMAL SELECT */}
              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Investor Classification <span className="text-orange-500">*</span>
                </label>
                <select className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]">
                  <option>Select classification</option>
                  <option>High Net Worth Individual (HNWI)</option>
                  <option>Sophisticated Investor</option>
                  <option>Accredited Investor</option>
                  <option>Institutional Investor</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section className="bg-[#F4F6FB] py-4 px-6 md:px-20 space-y-10">

      {/* ================= SECTION 2 ================= */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 relative overflow-hidden">

        {/* TOP GRADIENT */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

        <div className="p-8 md:p-10">

          {/* HEADER */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-orange-500 mb-2">
              <span className="w-6 h-[2px] bg-orange-500"></span>
              SECTION 2
            </div>

            <h2 className="text-xl font-bold text-[#0B1260]">
              Investment Details
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Your investment preferences and capacity
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-6">

            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Investment Interest Range <span className="text-orange-500">*</span>
                </label>
                <select className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]">
                  <option>Select interest range</option>
                  <option value="">1 Lakh - 5Lakhs</option>
                  <option value="">5 Lakhs - 10 Lakhs</option>
                  <option value="">10 Lakhs - 25 Lakhs</option>
                  <option value="">25 Lakhs - 50 Lakhs</option>
                  <option value="">50 Lakhs - 1 Crore</option>
                  <option value="">1 Crore - 5Crores</option>
                  <option value="">Above 5 Crores</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Investment Type Preference <span className="text-orange-500">*</span>
                </label>
                <select className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]">
                  <option>Select investment type</option>
                  <option value="">Equity Investment</option>
                  <option value="">Convertible Debt</option>
                  <option value="">Revenue Based Financing</option>
                  <option value="">SAFE(Simple Agreement for Future Equity)</option>
                  <option value="">Debt Financing</option>
                  <option value="">Grant/Donation</option>
                  <option value="">Other</option>
                </select>
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Investment Timeline <span className="text-orange-500">*</span>
                </label>
                <select className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]">
                  <option>Select timeline</option>
                  <option value="">Immediate (within 1 month)</option>
                  <option value="">1-3months</option>
                  <option value="">3-6months</option>
                  <option value="">6-12months</option>
                  <option value="">1+years</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Geographic Investment Focus
                </label>
                <select className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]">
                  <option>Select geographic focus</option>
                  <option value="">Local (Salem/Tamil Nadu)</option>
                  <option value="">Pan-India</option>
                  <option value="">International</option>
                  <option value="">No geographic preference</option>
                </select>
              </div>
            </div>

            {/* SECTOR PREFERENCES */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Sector Preferences <span className="text-orange-500">*</span>
                <span className="text-gray-400 normal-case text-[10px] ml-1">
                  (Multiple selections allowed)
                </span>
              </label>

              <div className="grid md:grid-cols-4 gap-3 mt-3">

                {[
                  "Healthcare & Medtech",
                  "Fintech",
                  "Sustainability & CleanTech",
                  "CleanEnergy & Agritech",
                  "Edtech",
                  "Connectivity",
                  "AI & E-Commerce",
                  "IoT & Hardware",
                  "Food Processing & Livelihood",
                  "Other",
                ].map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 bg-[#F1F3F8] border border-gray-300 rounded-lg cursor-pointer text-sm"
                  >
                    <input type="checkbox" />
                    {item}
                  </label>
                ))}

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ================= SECTION 3 ================= */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 relative overflow-hidden">

        {/* TOP GRADIENT */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

        <div className="p-8 md:p-10">

          {/* HEADER */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-orange-500 mb-2">
              <span className="w-6 h-[2px] bg-orange-500"></span>
              SECTION 3
            </div>

            <h2 className="text-xl font-bold text-[#0B1260]">
              Investment Experience & Background
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Your investment track record and background
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-6">

            {/* SUMMARY */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Investment Summary
              </label>
              <textarea
                rows="4"
                placeholder="Brief overview of your investment philosophy and past experience..."
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]"
              ></textarea>
            </div>

            {/* ROW */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Number of Startups Invested In
                </label>
                <input
                  type="text"
                  placeholder="e.g. 12"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Total Investment Portfolio Size
                </label>
                <input
                  type="text"
                  placeholder="e.g. ₹5Cr"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]"
                />
              </div>
            </div>

            {/* EXIT STORIES */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Notable Exits / Success Stories
              </label>
              <input
                type="text"
                placeholder="Company names or brief description"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]"
              />
            </div>

            {/* EXPERTISE */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Specific Areas of Expertise <span className="text-orange-500">*</span>
              </label>
              <textarea
                rows="4"
                placeholder="Domains where you can add strategic value beyond capital — e.g. GTM, regulatory, product..."
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]"
              ></textarea>
            </div>

          </div>
        </div>
      </div>

    </section>
    <section className="bg-[#F4F6FB] py-4 px-6 md:px-20 space-y-10">

      {/* ================= SECTION 4 ================= */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 relative overflow-hidden">

        {/* TOP GRADIENT */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

        <div className="p-8 md:p-10">

          {/* HEADER */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-orange-500 mb-2">
              <span className="w-6 h-[2px] bg-orange-500"></span>
              SECTION 4
            </div>

            <h2 className="text-xl font-bold text-[#0B1260]">
              Investment Criteria
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Your investment preferences and criteria
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-6">

            {/* STAGE PREFERENCE */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Stage Preference <span className="text-orange-500">*</span>
              </label>

              <div className="grid md:grid-cols-4 gap-3 mt-3">

                {[
                  "Idea Stage",
                  "Pre-Revenue",
                  "Growth Stage",
                  "No specific preference",
                  "MVP Stage",
                  "Early Revenue",
                  "Scale-up Stage",
                ].map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 px-3 py-2 bg-[#F1F3F8] border border-gray-300 rounded-lg cursor-pointer text-sm"
                  >
                    <input type="checkbox" />
                    {item}
                  </label>
                ))}

              </div>
            </div>

            {/* INVESTMENT STYLE */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Preferred Investment Style <span className="text-orange-500">*</span>
              </label>
              <select className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]">
                <option>Select investment style</option>
                <option value="">Passive Investor(Silent partner)</option>
                <option value="">Active Investor(Mentioning & Guidance)</option>
                <option value="">Hands-on Investor(Board Participation)</option>
                <option value="">Strategic Investor(Industry Connections)</option>
              </select>
            </div>

            {/* KEY CRITERIA */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Key Investment Criteria <span className="text-orange-500">*</span>
              </label>
              <textarea
                rows="4"
                placeholder="Describe the must-haves you look for in a startup before investing — team, traction, market, IP, etc."
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]"
              ></textarea>
            </div>

          </div>
        </div>
      </div>

      {/* ================= SECTION 5 ================= */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 relative overflow-hidden">

        {/* TOP GRADIENT */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

        <div className="p-8 md:p-10">

          {/* HEADER */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-orange-500 mb-2">
              <span className="w-6 h-[2px] bg-orange-500"></span>
              SECTION 5
            </div>

            <h2 className="text-xl font-bold text-[#0B1260]">
              Specific Interest in Aakam Shine
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Why you want to invest with us
            </p>
          </div>

          {/* FORM */}
          <div className="space-y-6">

            {/* WHY INTEREST */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Why are you interested in investing with Aakam Shine? <span className="text-orange-500">*</span>
              </label>
              <textarea
                rows="4"
                placeholder="Tell us what draws you to our ecosystem — mission, portfolio quality, rural innovation focus, network..."
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]"
              ></textarea>
            </div>

            {/* ROI */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Expected ROI Horizon <span className="text-orange-500">*</span>
              </label>
              <select className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]">
                <option>Select ROI horizon</option>
                <option>1-3 years</option>
                <option>3-5 years</option>
                <option>5-7 years</option>
                <option value="">7+ years</option>
                <option value="">No specific timeline</option>
              </select>
            </div>

          </div>
        </div>
      </div>

    </section>
      <div className="bg-gray-100 min-h-screen py-10">
      <div className="max-w-6xl mx-auto space-y-8">

        {/* ================= SECTION 6 ================= */}
        <div className=" mx-auto px-15 py-10 bg-white rounded-2xl border border-gray-200 relative overflow-hidden">

        
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

          <p className="text-xs tracking-widest text-orange-500 font-semibold mb-2">
            SECTION 6
          </p>

          <h2 className="text-xl font-semibold text-blue-900">
            Due Diligence & Compliance
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Legal and regulatory compliance information
          </p>

          {/* Source of Funds */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              SOURCE OF INVESTMENT FUNDS <span className="text-orange-500">*</span>
            </label>
            <select
              className="w-full px-4 py-3 border bg-[#F1F3F8] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              value={form.sourceOfFunds}
              onChange={(e) =>
                setForm({ ...form, sourceOfFunds: e.target.value })
              }
            >
              <option value="">Select source of funds</option>
              <option>Personal savings</option>
              <option>Business profits</option>
              <option>Inheritance</option>
              <option>Sale of assets</option>
              <option>Investment fund</option>
              <option>Other</option>
            </select>
          </div>

          {/* Compliance */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              REGULATORY COMPLIANCE <span className="text-orange-500">*</span>
            </label>

            <div className="space-y-3 text-sm text-gray-600">
              {[
                "I confirm compliance with all applicable investment environment regulations.",
                "I have necessary approvals for international investment (if applicable).",
                "I understand the risks associated with early-stage investments.",
              ].map((item, index) => (
                <label key={index} className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    checked={form.compliance.includes(item)}
                    onChange={() => handleCheckbox(item)}
                    className="mt-1"
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* References */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              REFERENCES
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 border bg-[#F1F3F8] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="Names and contact details of 1–2 professional references..."
              value={form.references}
              onChange={(e) =>
                setForm({ ...form, references: e.target.value })
              }
            />
          </div>
        </div>

        {/* ================= SECTION 7 ================= */}
        
        <div className="mx-auto px-15 py-10 bg-white rounded-2xl border border-gray-200 relative overflow-hidden">
 <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>
          <p className="text-xs tracking-widest text-orange-500 font-semibold mb-2">
            SECTION 7
          </p>

          <h2 className="text-xl font-semibold text-blue-900">
            Additional Information
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Additional details and preferences
          </p>

          {/* Hear About */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              HOW DID YOU HEAR ABOUT AAKAM SHINE?{" "}
              <span className="text-orange-500">*</span>
            </label>
            <select
              className="w-full px-4 py-3 border bg-[#F1F3F8] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              value={form.hearAbout}
              onChange={(e) =>
                setForm({ ...form, hearAbout: e.target.value })
              }
            >
              <option value="">Select source</option>
              <option>Website</option>
              <option>LinkedIn</option>
              <option>Industry Event</option>
              <option>Referral</option>
              <option>Media Coverage</option>
              <option>Others</option>
            </select>
          </div>

          {/* Comments */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              ADDITIONAL COMMENTS / QUESTIONS
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-3 border bg-[#F1F3F8] border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
              placeholder="Any other information you'd like to share..."
              value={form.comments}
              onChange={(e) =>
                setForm({ ...form, comments: e.target.value })
              }
            />
          </div>

        </div>

      </div>
    </div>
    <div className="bg-gray-100 min-h-screen py-4">
      <div className="max-w-[1152px] mx-auto px-15 py-10 bg-white rounded-2xl border border-gray-200 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>
        <div className="">

          {/* Section Label */}
          <p className="text-xs tracking-widest text-orange-500 font-semibold mb-2">
            SECTION 8
          </p>

          {/* Title */}
          <h2 className="text-xl font-semibold text-blue-900">
            Declarations & Agreements
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Legal declarations and consent
          </p>

          {/* LEGAL DECLARATIONS */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              LEGAL DECLARATIONS <span className="text-orange-500">*</span>
            </label>

            <div className="space-y-3 text-sm text-gray-600">
              {[
                "I certify that all information provided is accurate and complete.",
                "I understand that early-stage investments carry very high risks and potential for total loss.",
                "I confirm my financial capability and determination before making the investment.",
                "I agree to maintain confidentiality and abide by investment execution policies.",
              ].map((item, index) => (
                <label key={index} className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={form_.legal.includes(item)}
                    onChange={() => handleCheck("legal", item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* PRIVACY */}
          <div className="mb-8">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              DATA PROTECTION & PRIVACY <span className="text-orange-500">*</span>
            </label>

            <div className="space-y-3 text-sm text-gray-600">
              {[
                "I consent to the processing of my personal data for investment evaluation purposes.",
                "I agree to receive communications about investment opportunity updates.",
              ].map((item, index) => (
                <label key={index} className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    className="mt-1"
                    checked={form_.privacy.includes(item)}
                    onChange={() => handleCheck("privacy", item)}
                  />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            <button className="bg-blue-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-800 transition">
              Submit Application →
            </button>

            <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
              Reset Form
            </button>
          </div>

        </div>

      </div>
    </div>
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
  )
}

export default invest