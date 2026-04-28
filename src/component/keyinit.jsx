import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
const keyinit = () => {
  const [open, setOpen] = useState(0);

  const faqs = [
    {
      q: "Who can apply for this program?",
      a: "Early-stage founders, student innovators, and entrepreneurs from Tier 2, 3, and 4 regions of Tamil Nadu — especially those in healthcare and cybersecurity. Teams of up to 4 members are welcome."
    },
    {
      q: "Is there any fee to join?",
      a: "The incubation program is offered at no cost for selected startups. We believe access to quality mentorship should not be a barrier for rural innovators."
    },
    {
      q: "What support does Aakam Shine provide?",
      a: "We offer co-working space, mentorship sessions, career guidance, hackathon facilitation, investor connections, and a collaborative community of innovators and industry experts."
    }
  ];
const navigate = useNavigate();

  const menu = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Our Startups", path: "/startups" },
    { name: "Our Ecosystem", path: "/ecosystem" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" }
  ]
  return (
    <div>
        {/* NAVBAR */}
      <div className='flex items-center justify-between px-12 py-4 border-b border-orange-500 w-full'>
        <img src="/image.png" className='w-25 flex items-center justify-center' alt="" />


        <ul className='flex items-center gap-10 text-sm'>
          {menu.map((item) => (
            <li
              key={item.name}
              onClick={() => navigate(item.path)}
              className='cursor-pointer pb-1 border-b-2 border-transparent text-[#4a5175] font-[13px] hover:border-[#f97316]'
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className='flex gap-6 items-center'>
          <button className='rounded-md border border-gray-400 py-2 px-5 text-sm'>Log in</button>
          <button onClick={() => navigate("/subscribe")} className='bg-[#f97316] text-white font-semibold rounded-md py-2 px-5 text-sm cursor-pointer hover:bg-orange-400'>Subscribe</button>
        </div>
      </div>
          <div className="bg-[#0B1460] text-white h-[500px] px-12 py-16 relative overflow-hidden">

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#ffffff22_1px,transparent_1px),linear-gradient(90deg,#ffffff22_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl">

        {/* Breadcrumb */}
        <p className="text-xs tracking-widest text-gray-400 mb-6">
          HOME / OUR KEY INITIATIVES /{" "}
          <span className="text-orange-400">
            IDEA TO MVP DEVELOPMENT
          </span>
        </p>

        {/* Tabs */}
        <div className="flex gap-3 mb-10">
          <button className="px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-xs font-medium">
            Incubation
          </button>
          <button className="px-4 py-1 rounded-full border border-white/20 text-xs">
            Mentorship
          </button>
          <button className="px-4 py-1 rounded-full border border-white/20 text-xs">
            Innovation
          </button>
          <button className="px-4 py-1 rounded-full border border-white/20 text-xs">
            Rural Tech
          </button>
        </div>

        {/* Title */}
        <h1 className="text-[90px] font-bold leading-none">
          Idea to MVP
        </h1>

        {/* Sub Title */}
        <h2 className="text-[90px] italic text-white/20 leading-none -mt-4">
          Development
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-xl text-gray-300 text-lg leading-relaxed">
          Transform your innovative ideas into viable business models with expert
          guidance, market validation, and prototype development support.
        </p>

      </div>
    </div>
        <div className="bg-[#F5F7FB] px-12 py-16">

      <div className="grid grid-cols-3 gap-8">

        {/* 🔹 LEFT CONTENT */}
        <div className="col-span-2 bg-white rounded-2xl p-8 border border-gray-200">

          {/* Header */}
          <p className="text-xs text-orange-500 tracking-widest mb-2">
            — ABOUT THE INITIATIVE
          </p>
          <h2 className="text-2xl font-bold text-[#1B2559] mb-2">
            Empowering Rural Innovation
          </h2>
          <p className="text-gray-500 mb-6">
            Operated under Sri Shanmugha Educational Institutions in Salem — an
            innovation and incubation center nurturing fresh talents and
            fostering technological innovation.
          </p>

          <hr className="mb-6" />

          {/* WHO WE ARE */}
          <div className="mb-6">
            <p className="text-xs text-orange-500 tracking-widest mb-2">
              • WHO WE ARE
            </p>
            <p className="text-gray-600 leading-relaxed mb-3">
              Aakam Shine is a dedicated initiative focused on empowering
              startups and individuals, especially in the healthcare and
              cybersecurity sectors, across Tier 2, 3, and 4 regions of Tamil
              Nadu.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Operated under the Sri Shanmugha Educational Institutions in
              Salem, it acts as an innovation and incubation center aimed at
              nurturing fresh talents and fostering technological innovation.
            </p>
          </div>

          {/* OUR PROGRAMS */}
          <div className="mb-6">
            <p className="text-xs text-orange-500 tracking-widest mb-2">
              • OUR PROGRAMS
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our programs include hands-on workshops, mentorship, career
              guidance, and collaboration opportunities to help participants
              grow and succeed. We also facilitate participation in events like
              healthcare hackathons to drive innovation in healthcare solutions
              and provide platforms to showcase new ideas.
            </p>
          </div>

          {/* CO-WORKING */}
          <div>
            <p className="text-xs text-orange-500 tracking-widest mb-2">
              • CO-WORKING & INVESTOR NETWORK
            </p>
            <p className="text-gray-600 leading-relaxed">
              Aakam Shine provides a professional co-working space equipped with
              all necessary facilities to foster creativity, networking, and
              productivity for startups and entrepreneurs. Additionally, we
              connect startups with investors and industry experts to obtain
              funding and mentorship support, enabling sustainable growth.
            </p>
          </div>
        </div>

        {/* 🔹 RIGHT CARD */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden">

          {/* Top Header */}
          <div className="bg-gradient-to-r from-[#1B2A8F] to-[#2E3DBE] text-white p-6">
            <p className="text-xs tracking-widest text-gray-300">
              START YOUR JOURNEY
            </p>
            <h3 className="text-xl font-semibold mt-1">
              Join as a Startup
            </h3>
          </div>

          <div className="p-6 space-y-4">

            {/* Info Items */}
            <div className="bg-[#F5F7FB] p-4 rounded-xl flex items-center gap-3">
              <div className="bg-[#1B2A8F] text-white p-2 rounded-lg">📦</div>
              <div>
                <p className="text-xs text-gray-400">PROGRAM TYPE</p>
                <p className="text-sm font-semibold">Idea to MVP Incubation</p>
              </div>
            </div>

            <div className="bg-[#F5F7FB] p-4 rounded-xl flex items-center gap-3">
              <div className="bg-[#1B2A8F] text-white p-2 rounded-lg">⏱️</div>
              <div>
                <p className="text-xs text-gray-400">DURATION</p>
                <p className="text-sm font-semibold">3 – 6 Months</p>
              </div>
            </div>

            <div className="bg-[#F5F7FB] p-4 rounded-xl flex items-center gap-3">
              <div className="bg-[#1B2A8F] text-white p-2 rounded-lg">📍</div>
              <div>
                <p className="text-xs text-gray-400">LOCATION</p>
                <p className="text-sm font-semibold">
                  Sankari, Salem, Tamil Nadu
                </p>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-2 text-sm text-gray-600 mt-4">
              <li>• Hands-on workshops & mentorship</li>
              <li>• Professional co-working space</li>
              <li>• Investor & industry expert access</li>
              <li>• Healthcare hackathon participation</li>
            </ul>

            {/* Button */}
            <button className="w-full bg-[#1B2A8F] text-white py-3 rounded-xl font-medium mt-4">
              Join as Startup →
            </button>

            {/* Footer note */}
            <p className="text-xs text-gray-400 text-center mt-2">
              🔒 Limited cohort seats. Applications reviewed on a rolling basis.
            </p>

          </div>
        </div>

      </div>
    </div>
     <div className="bg-[#F5F7FB] px-12 py-16">

      <div className="grid grid-cols-3 gap-8">

        {/* ================= LEFT ================= */}
        <div className="col-span-2 space-y-8">

          {/* PROGRAM STRUCTURE */}
      <div className="bg-[#F3F5FA] px-4 py-4 flex justify-center">

      <div className="w-full max-w-5xl bg-[#F8FAFC] rounded-[24px] border border-gray-200 overflow-hidden">

        {/* Top Gradient Line */}
        <div className="h-[4px] w-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-600"></div>

        {/* Header */}
        <div className="px-10 py-8 bg-white">
          <p className="text-[12px] tracking-[3px] text-orange-500 font-semibold mb-3">
            — PROGRAM STRUCTURE
          </p>

          <h2 className="text-[26px] font-bold text-[#1B2559] mb-2">
            Your Idea-to-MVP Journey
          </h2>

          <p className="text-[14px] text-gray-500 max-w-2xl leading-relaxed">
            A structured 4-phase process to take your concept from raw idea to a market-ready prototype, guided by industry experts.
          </p>
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gray-200"></div>

        {/* Steps Section */}
        <div className="px-10 py-8 space-y-6">

          {/* STEP 01 (ACTIVE) */}
          <div className="bg-[#F5F7FB] border border-orange-300 rounded-[16px] px-6 py-5 flex gap-5 items-start">

            <div className="bg-orange-500 text-white w-11 h-11 flex items-center justify-center rounded-xl font-bold text-sm">
              01
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-[#1B2559]">
                Idea Validation & Market Research
              </h3>

              <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">
                Deep-dive into your target market, identify real pain points, and validate product-market fit with structured research frameworks.
              </p>
            </div>
          </div>

          {/* STEP 02 */}
          <div className="bg-[#EEF2F7] border border-gray-200 rounded-[16px] px-6 py-5 flex gap-5 items-start">

            <div className="bg-orange-500 text-white w-11 h-11 flex items-center justify-center rounded-xl font-bold text-sm">
              02
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-[#1B2559]">
                Business Model Design
              </h3>

              <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">
                Map out your revenue streams, cost structures, and value propositions using proven canvases with mentor guidance.
              </p>
            </div>
          </div>

          {/* STEP 03 */}
          <div className="bg-[#EEF2F7] border border-gray-200 rounded-[16px] px-6 py-5 flex gap-5 items-start">

            <div className="bg-orange-500 text-white w-11 h-11 flex items-center justify-center rounded-xl font-bold text-sm">
              03
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-[#1B2559]">
                Prototype Development
              </h3>

              <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">
                Build a functional MVP using rapid prototyping techniques with access to our lab infrastructure and technical mentors.
              </p>
            </div>
          </div>

          {/* STEP 04 */}
          <div className="bg-[#EEF2F7] border border-gray-200 rounded-[16px] px-6 py-5 flex gap-5 items-start">

            <div className="bg-orange-500 text-white w-11 h-11 flex items-center justify-center rounded-xl font-bold text-sm">
              04
            </div>

            <div>
              <h3 className="text-[15px] font-semibold text-[#1B2559]">
                Pitch & Investor Connect
              </h3>

              <p className="text-[13px] text-gray-500 mt-1 leading-relaxed">
                Refine your pitch deck and present to our curated network of investors, VCs, and industry partners for funding opportunities.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

          {/* PARTNERS */}
    
    <div className="bg-[#F3F5FA] py-4 flex justify-center">

      {/* Outer Container */}
      <div className="w-full max-w-5xl bg-[#F8FAFC] rounded-[28px] px-10 py-8">

        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-6 h-[2px] bg-orange-500"></div>
          <p className="text-[12px] tracking-[3px] text-orange-500 font-semibold">
            PARTNERS & ECOSYSTEM
          </p>
        </div>

        {/* Card */}
        <div className="bg-white border border-gray-200 rounded-[20px] overflow-hidden">

          <div className="grid grid-cols-2">

            {/* LEFT */}
            <div className="px-10 py-8">
              <p className="text-[12px] tracking-[2px] text-gray-400 mb-6">
                OPERATED BY
              </p>

              <div className="flex flex-col gap-5">

                {/* Aakam Shine */}
                <div className="flex items-center gap-3 bg-[#EEF2F7] px-5 py-3 rounded-full w-fit">
                  <div className="w-9 h-9 bg-orange-500 text-white flex items-center justify-center rounded-full text-xs font-semibold">
                    AS
                  </div>
                  <span className="text-[15px] font-semibold text-[#1B2559]">
                    Aakam Shine
                  </span>
                </div>

                {/* Sri Shanmugha */}
                <div className="flex items-center gap-3 bg-[#EEF2F7] px-5 py-3 rounded-full w-fit">
                  <div className="w-9 h-9 bg-[#1B2A8F] text-white flex items-center justify-center rounded-full text-xs font-semibold">
                    SS
                  </div>
                  <span className="text-[15px] font-semibold text-[#1B2559]">
                    Sri Shanmugha
                  </span>
                </div>

              </div>
            </div>

            {/* RIGHT */}
            <div className="px-10 py-8 border-l border-gray-200">
              <p className="text-[12px] tracking-[2px] text-gray-400 mb-6">
                IN ASSOCIATION WITH
              </p>

              <div className="flex gap-4">

                {/* StartupTN */}
                <div className="flex items-center gap-3 bg-[#EEF2F7] px-5 py-3 rounded-full">
                  <div className="w-9 h-9 bg-[#1B2A8F] text-white flex items-center justify-center rounded-full text-xs font-semibold">
                    ST
                  </div>
                  <span className="text-[15px] font-semibold text-[#1B2559]">
                    StartupTN
                  </span>
                </div>

                {/* Aakam 360 */}
                <div className="flex items-center gap-3 bg-[#EEF2F7] px-5 py-3 rounded-full">
                  <div className="w-9 h-9 bg-orange-500 text-white flex items-center justify-center rounded-full text-xs font-semibold">
                    A3
                  </div>
                  <span className="text-[15px] font-semibold text-[#1B2559]">
                    Aakam 360
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>

        </div>

        {/* ================= RIGHT ================= */}
        <div className="space-y-6">

          {/* 🔥 (Your Join Card comes here) */}

          {/* FAQ */}
      

        {/* Header */}
        

        {/* FAQ List */}
        <div className="bg-[#F3F5FA] py-4 flex justify-center">

      <div className="w-full max-w-md bg-[#F8FAFC] rounded-[24px] p-6">

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-[22px] font-bold text-[#1B2559]">
            FAQs
          </h2>
          <div className="flex-1 h-[1px] bg-gray-200"></div>
        </div>

        {/* FAQ List */}
        <div className="space-y-5">

          {faqs.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className={`rounded-[18px] overflow-hidden border ${
                  i === 0
                    ? "border-orange-300"
                    : "border-gray-200"
                } bg-[#F8FAFC]`}
              >

                {/* Question */}
                <div
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex justify-between items-center px-5 py-4 cursor-pointer"
                >
                  <p className="text-[15px] font-semibold text-[#1B2559]">
                    {item.q}
                  </p>

                  <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-orange-500 text-lg font-bold">
                    {isOpen ? "−" : "+"}
                  </div>
                </div>

                {/* 🔥 SHOW ONLY WHEN OPEN */}
                {isOpen && (
                  <>
                    {/* Divider */}
                    <div className="h-[1px] bg-gray-200"></div>

                    {/* Answer */}
                    <div className="px-5 py-5 text-[14px] text-gray-500 leading-relaxed">
                      {item.a}
                    </div>
                  </>
                )}

              </div>
            );
          })}
        </div>
      </div>
    </div>
              </div>

      </div>
    </div>
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

export default keyinit