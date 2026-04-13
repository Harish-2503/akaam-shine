import React, { useState } from 'react'

import { useNavigate } from "react-router-dom";
const invest = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = [
    "Individual Investor",
    "Angel Investor",
    "Venture Capital Firm",
    "Family Office",
    "Corporate Investor",
    "Investment Bank",
    "Government Fund",
  ];
  return (
    
    <div>
      <section className="relative bg-[#0B1260] text-white px-6 md:px-20 py-24 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "20px 20px, 60px 60px, 60px 60px",
        }}
      />

      {/* RIGHT CIRCLES */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] border border-white/10 rounded-full"></div>
      <div className="absolute right-10 top-1/3 w-[350px] h-[350px] border border-white/10 rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Breadcrumb */}
          <p className="text-xs text-white/40 tracking-widest mb-6">
            HOME /{" "}
            <span className="text-orange-400">
              INVEST WITH AAKAM SHINE
            </span>
          </p>

          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-400/40 rounded-full text-xs mb-6">
            💼 AAKAM SHINE INVESTOR NETWORK
          </div>

          {/* TITLE */}
          <h1 className="leading-[0.9] font-bold mb-6">
            <span className="block text-5xl md:text-7xl">
              Invest with
            </span>
            <span className="block text-white/40 italic text-5xl md:text-7xl">
              Aakam Shine
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/60 max-w-md leading-relaxed">
            Join Tamil Nadu's most vibrant startup ecosystem and be part of our
            mission to foster innovation across healthcare, sustainability, and
            emerging technologies.
          </p>
        </div>

        {/* RIGHT SIDE (STEPS) */}
        <div className="relative">

          <p className="text-xs text-white/40 tracking-widest mb-8">
            HOW IT WORKS
          </p>

          <div className="space-y-10 relative">

            {/* vertical line */}
            <div className="absolute left-5 top-4 bottom-0 w-px bg-white/10"></div>

            {/* STEP 1 */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 flex items-center justify-center border border-orange-400/40 rounded-lg text-orange-400 font-bold">
                01
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Submit Your Interest
                </h3>
                <p className="text-white/50 text-sm">
                  Share your investor profile and investment thesis
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 flex items-center justify-center border border-orange-400/40 rounded-lg text-orange-400 font-bold">
                02
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Meet the Portfolio
                </h3>
                <p className="text-white/50 text-sm">
                  We curate startup introductions aligned to your focus
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 flex items-center justify-center border border-orange-400/40 rounded-lg text-orange-400 font-bold">
                03
              </div>
              <div>
                <h3 className="font-semibold text-lg">
                  Close & Grow
                </h3>
                <p className="text-white/50 text-sm">
                  Invest, track milestones, and grow your portfolio
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

    </section>
    <section className="bg-[#F4F6FB] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 relative overflow-visible">

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
              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Investor Type <span className="text-orange-500">*</span>
                </label>

                <div className="relative mt-2">
                  <div
                    onClick={() => setOpen(!open)}
                    className="w-full px-4 py-3 bg-[#F1F3F8] border border-gray-300 rounded-lg flex justify-between items-center cursor-pointer focus:ring-2 focus:ring-[#0B1260]"
                  >
                    {selected || "Select investor type"}
                    <span className="text-gray-400">
                      {open ? "˄" : "˅"}
                    </span>
                  </div>

                  {open && (
                    <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto">
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
                  <option>Accredited Investor</option>
                  <option>Non-Accredited Investor</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
     <section className="bg-[#F4F6FB] py-16 px-6 md:px-20 space-y-10">

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
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Investment Type Preference <span className="text-orange-500">*</span>
                </label>
                <select className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]">
                  <option>Select investment type</option>
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
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Geographic Investment Focus
                </label>
                <select className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]">
                  <option>Select geographic focus</option>
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
    <section className="bg-[#F4F6FB] py-16 px-6 md:px-20 space-y-10">

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
    </div>
  )
}

export default invest