import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const incubation = () => {
  const navigate = useNavigate();

  const menu = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Our Startups", path: "/startups" },
    { name: "Our Ecosystem", path: "/ecosystem" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];
  const [industryOpen, setIndustryOpen] = useState(false);
  const [stageOpen, setStageOpen] = useState(false);

  const [industry, setIndustry] = useState("");
  const [stage, setStage] = useState("");

  const industries = [
    "Healthcare",
    "Agri-Tech",
    "FinTech",
    "EdTech",
    "SpaceTech",
    "Other",
  ];

  const stages = [
    "Ideation",
    "Prototype",
    "MVP / Early Revenue",
    "Growth Stage",
  ];
const options = [
    "Mentoring from domain experts",
    "Access to funding networks",
    "Co-working space",
    "Market access across Tamil Nadu",
    "Technical support & prototyping",
    "Networking & investor pitches",
  ];
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
      <section className="relative bg-[#0B1260] text-white px-6 md:px-20 py-20 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "20px 20px, 60px 60px, 60px 60px",
        }}
      />

      {/* RIGHT CIRCLE DECOR */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] border border-white/10 rounded-full"></div>
      <div className="absolute right-10 top-1/3 w-[350px] h-[350px] border border-white/10 rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>

          {/* Breadcrumb */}
          <p className="text-xs text-white/40 tracking-widest mb-6">
            HOME / <span className="text-orange-400">APPLY FOR INCUBATION</span>
          </p>

          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-400/40 rounded-full text-xs mb-6">
            🚀 AAKAM SHINE 6-MONTH INCUBATION PROGRAM
          </div>

          {/* Title */}
          <h1 className="leading-[0.9] font-bold mb-6">
            <span className="block text-5xl md:text-7xl">Apply for</span>
            <span className="block text-white/40 italic text-5xl md:text-7xl">
              Incubation
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/60 max-w-md leading-relaxed">
            Complete this form to become part of Tamil Nadu's most vibrant
            startup ecosystem. Our structured 6-month incubation program offers
            funding access, expert mentorship, and market opportunities.
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
                <h3 className="font-semibold text-lg">Submit Application</h3>
                <p className="text-white/50 text-sm">
                  Fill in your startup details and team information
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
                  Review & Shortlisting
                </h3>
                <p className="text-white/50 text-sm">
                  Our panel evaluates applications within 2 weeks
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 flex items-center justify-center border border-orange-400/40 rounded-lg text-orange-400 font-bold">
                03
              </div>
              <div>
                <h3 className="font-semibold text-lg">Begin Incubation</h3>
                <p className="text-white/50 text-sm">
                  Join the cohort, access funding and mentors
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 border-t border-white/10 pt-10">

        <div className="flex items-center gap-4">
          <div className="p-3 border border-orange-400/40 rounded-lg">📦</div>
          <div>
            <h3 className="text-2xl font-bold">6mo</h3>
            <p className="text-xs text-white/40 tracking-widest">
              PROGRAM DURATION
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 border border-orange-400/40 rounded-lg">👤</div>
          <div>
            <h3 className="text-2xl font-bold">200+</h3>
            <p className="text-xs text-white/40 tracking-widest">
              STARTUPS INCUBATED
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 border border-orange-400/40 rounded-lg">🎯</div>
          <div>
            <h3 className="text-2xl font-bold text-orange-400">₹5Cr+</h3>
            <p className="text-xs text-white/40 tracking-widest">
              FUNDING FACILITATED
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 border border-orange-400/40 rounded-lg">📅</div>
          <div>
            <h3 className="text-2xl font-bold">18+</h3>
            <p className="text-xs text-white/40 tracking-widest">
              INDUSTRY SECTORS
            </p>
          </div>
        </div>

      </div>
    </section>
    <section className="bg-[#F4F6FB] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 relative overflow-hidden">

        {/* TOP GRADIENT BORDER */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

        <div className="p-8 md:p-10">

          {/* HEADER */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-orange-500 mb-2">
              <span className="w-8 h-[2px] bg-orange-500"></span>
              SECTION 1
            </div>

            <h2 className="text-xl font-bold text-[#0B1260]">
              Founder & Team Information
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Tell us about yourself and your team
            </p>
          </div>

          {/* FORM */}
          <form className="space-y-6">

            {/* ROW 1 */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* FULL NAME */}
              <div>
                <label className="text-xs font-semibold text-gray-700 uppercase">
                  Full Name of Founder(s) <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter founder name(s)"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="text-xs font-semibold text-gray-700 uppercase">
                  Email Address <span className="text-orange-500">*</span>
                </label>
                <input
                  type="email"
                  placeholder="founder@startup.com"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* ROW 2 */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* MOBILE */}
              <div>
                <label className="text-xs font-semibold text-gray-700 uppercase">
                  Mobile Number <span className="text-orange-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="+91 XXXXX XXXXX"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              {/* LINKEDIN */}
              <div>
                <label className="text-xs font-semibold text-gray-700 uppercase">
                  Linkedin Profile URL
                </label>
                <input
                  type="text"
                  placeholder="https://linkedin.com/in/yourprofile"
                  className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            {/* TEXTAREA */}
            <div>
              <label className="text-xs font-semibold text-gray-700 uppercase">
                Co-Founder / Team Members
              </label>
              <textarea
                rows="4"
                placeholder="List co-founders and key team members with their roles..."
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
              ></textarea>
            </div>

          </form>
        </div>
      </div>
    </section>
    <div>

      {/* ================= SECTION 2 ================= */}
      <section className="bg-[#F4F6FB] py-16 px-6 md:px-20">

        {/* ✅ FIXED: overflow-visible */}
        <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 relative overflow-visible">

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
                Startup Details
              </h2>

              <p className="text-gray-500 text-sm mt-1">
                Information about your startup
              </p>
            </div>

            {/* FORM */}
            <div className="space-y-6">

              {/* ROW 1 */}
              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <label className="text-xs font-semibold uppercase text-gray-700">
                    Startup Name <span className="text-orange-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your startup name"
                    className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase text-gray-700">
                    Website / Demo Link
                  </label>
                  <input
                    type="text"
                    placeholder="https://yourstartup.com"
                    className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8]"
                  />
                </div>
              </div>

              {/* ROW 2 */}
              <div className="grid md:grid-cols-2 gap-6">

                {/* ===== INDUSTRY DROPDOWN ===== */}
                <div>
                  <label className="text-xs font-semibold uppercase text-gray-700">
                    Industry Sector <span className="text-orange-500">*</span>
                  </label>

                  <div className="relative mt-2">
                    <div
                      onClick={() => {
                        setIndustryOpen(!industryOpen);
                        setStageOpen(false);
                      }}
                      className="w-full px-4 py-3 bg-[#F1F3F8] border border-gray-300 rounded-lg flex justify-between items-center cursor-pointer"
                    >
                      {industry || "Select industry"}
                      <span>{industryOpen ? "▲" : "▼"}</span>
                    </div>

                    {industryOpen && (
                      <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md z-[999]">
                        {industries.map((item, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setIndustry(item);
                              setIndustryOpen(false);
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

                {/* ===== STAGE DROPDOWN ===== */}
                <div>
                  <label className="text-xs font-semibold uppercase text-gray-700">
                    Stage of Startup <span className="text-orange-500">*</span>
                  </label>

                  <div className="relative mt-2">
                    <div
                      onClick={() => {
                        setStageOpen(!stageOpen);
                        setIndustryOpen(false);
                      }}
                      className="w-full px-4 py-3 bg-[#F1F3F8] border border-gray-300 rounded-lg flex justify-between items-center cursor-pointer"
                    >
                      {stage || "Select stage"}
                      <span>{stageOpen ? "▲" : "▼"}</span>
                    </div>

                    {stageOpen && (
                      <div className="absolute w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-md z-[999]">
                        {stages.map((item, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setStage(item);
                              setStageOpen(false);
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

              </div>

              {/* RADIO */}
              <div>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  Registered Entity? <span className="text-orange-500">*</span>
                </label>

                <div className="flex gap-4 mt-3">
                  <label className="flex items-center gap-2 px-4 py-2 bg-[#F1F3F8]  rounded-lg cursor-pointer">
                    <input type="radio" name="entity" /> No
                  </label>

                  <label className="flex items-center gap-2 px-4 py-2 bg-[#F1F3F8]  rounded-lg cursor-pointer">
                    <input type="radio" name="entity" /> Yes
                  </label>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

    </div>
    <section className="bg-[#F4F6FB] py-16 px-6 md:px-20">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 relative overflow-hidden">

        {/* Top Gradient Line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

        <div className="p-8 md:p-10">

          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-orange-500 mb-2">
              <span className="w-6 h-[2px] bg-orange-500"></span>
              SECTION 3
            </div>

            <h2 className="text-xl font-bold text-[#0B1260]">
              Program Fit & Goals
            </h2>

            <p className="text-gray-500 text-sm mt-1">
              Help us understand your needs and expectations
            </p>
          </div>

          {/* Form */}
          <div className="space-y-6">

            {/* Problem */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Describe Your Problem Statement <span className="text-orange-500">*</span>
              </label>
              <textarea
                rows="3"
                placeholder="What problem are you solving and why does it matter?"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Solution */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Solution Overview <span className="text-orange-500">*</span>
              </label>
              <textarea
                rows="3"
                placeholder="How does your product or service solve this problem?"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Target Market */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Target Market & Customer Segment <span className="text-orange-500">*</span>
              </label>
              <textarea
                rows="3"
                placeholder="Who are your primary customers and what market are you addressing?"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            {/* Goals */}
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                What do you hope to achieve through our incubation? <span className="text-orange-500">*</span>
              </label>

              <div className="grid md:grid-cols-3 gap-4 mt-3">
                {options.map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-3 px-4 py-3 bg-[#F1F3F8] border border-gray-300 rounded-lg cursor-pointer hover:border-orange-400"
                  >
                    <input type="checkbox" className="accent-orange-500" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
     <section className="bg-[#F4F6FB] py-16 px-6 md:px-20 space-y-10">

      {/* ================= SECTION 4 ================= */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 relative overflow-hidden">

        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

        <div className="p-8 md:p-10">

          <div className="mb-8">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-orange-500 mb-2">
              <span className="w-6 h-[2px] bg-orange-500"></span>
              SECTION 4
            </div>

            <h2 className="text-xl font-bold text-[#0B1260]">
              Funding & Financials
            </h2>

            <p className="text-gray-500 text-sm">
              Financial information and funding requirements
            </p>
          </div>

          {/* Raised funding */}
          <div className="mb-6">
            <label className="text-xs font-semibold uppercase text-gray-700">
              Have you raised funding before?{" "}
              <span className="text-orange-500">*</span>
            </label>

            <div className="flex gap-4 mt-3">
              <label className="flex items-center gap-2 px-4 py-2 bg-[#F1F3F8] border rounded-lg cursor-pointer">
                <input type="radio" name="funding" /> Yes
              </label>

              <label className="flex items-center gap-2 px-4 py-2 bg-[#F1F3F8] border rounded-lg cursor-pointer">
                <input type="radio" name="funding" /> No
              </label>
            </div>
          </div>

          {/* Inputs */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Current Monthly Burn Rate (INR)
              </label>
              <input
                type="text"
                placeholder="e.g. ₹50,000"
                className="mt-2 w-full px-4 py-3 rounded-lg border bg-[#F1F3F8]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Expected Funding Requirement (INR){" "}
                <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. ₹25,00,000"
                className="mt-2 w-full px-4 py-3 rounded-lg border bg-[#F1F3F8]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ================= SECTION 5 ================= */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 relative overflow-hidden">

        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

        <div className="p-8 md:p-10">

          <div className="mb-8">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-orange-500 mb-2">
              <span className="w-6 h-[2px] bg-orange-500"></span>
              SECTION 5
            </div>

            <h2 className="text-xl font-bold text-[#0B1260]">
              Supporting Documents
            </h2>

            <p className="text-gray-500 text-sm">
              Upload relevant documents (PDF, max 10 MB each)
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Pitch Deck <span className="text-orange-500">*</span>
              </label>
              <input
                type="file"
                className="mt-2 w-full text-sm bg-[#F1F3F8] border rounded-lg p-2"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Business Plan or Executive Summary
              </label>
              <input
                type="file"
                className="mt-2 w-full text-sm bg-[#F1F3F8] border rounded-lg p-2"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Any Other Relevant Document
              </label>
              <input
                type="file"
                className="mt-2 w-full text-sm bg-[#F1F3F8] border rounded-lg p-2"
              />
            </div>

          </div>
        </div>
      </div>

      {/* ================= SECTION 6 ================= */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 relative overflow-hidden">

        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

        <div className="p-8 md:p-10">

          <div className="mb-8">
            <div className="flex items-center gap-3 text-xs font-semibold tracking-widest text-orange-500 mb-2">
              <span className="w-6 h-[2px] bg-orange-500"></span>
              SECTION 6
            </div>

            <h2 className="text-xl font-bold text-[#0B1260]">
              Consent & Submission
            </h2>

            <p className="text-gray-500 text-sm">
              Please review and agree to our terms before submitting
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-[#F1F3F8] p-4 rounded-lg text-sm text-gray-600 mb-6">
            By submitting this application, you confirm that all information
            provided is accurate and true. You understand that selection for the
            incubation program is subject to review and is not guaranteed. Aakam
            Shine reserves the right to verify the information and reject any
            application found to be misleading.
          </div>

          {/* Checkboxes */}
          <div className="space-y-3 mb-6 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-orange-500" />
              I agree to receive program updates and notifications from Aakam Shine.
            </label>

            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-orange-500" />
              I have read and accept the Terms & Conditions and Privacy Policy.
              <span className="text-orange-500">*</span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-[#0B1260] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#1a238f] transition">
              Submit Application →
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg text-gray-600 hover:bg-gray-100 transition">
              Reset Form
            </button>
          </div>

        </div>
      </div>

    </section>
     <div className="bg-[#0b1260] text-white px-16 py-16 ">

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

export default incubation