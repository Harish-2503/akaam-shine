import React from 'react'
import { useNavigate } from "react-router-dom";
const journey = () => {
   const navigate = useNavigate();

  const menu = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Our Startups", path: "/startups" },
    { name: "Our Ecosystem", path: "/ecosystem" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
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
       <div className="bg-[#0F1C5A] text-white relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(#ffffff20_1px,transparent_1px),linear-gradient(90deg,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10 grid grid-cols-2 gap-12">

        {/* LEFT CONTENT */}
        <div>

          {/* Breadcrumb */}
          <p className="text-xs tracking-[3px] text-gray-400 mb-6">
            PROGRAMS / INCUBATION /{" "}
            <span className="text-orange-400">6-MONTH JOURNEY</span>
          </p>

          {/* Tags */}
          <div className="flex gap-3 mb-8">
            <span className="px-4 py-1 text-xs border border-gray-500 rounded-md text-gray-300">
              MENTORSHIP
            </span>
            <span className="px-4 py-1 text-xs border border-orange-400 rounded-md text-orange-400">
              INCUBATION
            </span>
            <span className="px-4 py-1 text-xs border border-gray-500 rounded-md text-gray-300">
              FUNDING READY
            </span>
          </div>

          {/* BIG TITLE */}
          <h1 className="text-[110px] leading-[0.9] font-extrabold tracking-tight">
            <span className="text-white">6-MONTH</span>
            <br />
            <span className="text-orange-500">JOURNEY</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-300 mt-6 max-w-lg text-[15px] leading-relaxed">
            An outcome-driven incubation journey that turns early-stage
            innovators into market-ready founders through mentoring,
            validation, and review milestones.
          </p>

          {/* BUTTON */}
          <button className="mt-6 border border-orange-500 text-orange-400 px-6 py-3 rounded-md text-sm font-semibold">
            APPLICATIONS OPEN{" "}
            <span className="text-white ml-2">
              Rolling Admissions · 2025
            </span>
          </button>

        </div>

        {/* RIGHT CARD */}
        <div className="flex justify-end">

          <div className="bg-[#1B2A7A] w-[360px] rounded-[20px] overflow-hidden shadow-xl">

            {/* Header */}
            <div className="bg-[#2B3A8F] px-6 py-5">
              <p className="text-[11px] tracking-[2px] text-orange-400 mb-1">
                PROGRAM OVERVIEW
              </p>
              <h3 className="text-lg font-semibold">
                Journey at a Glance
              </h3>
            </div>

            {/* Content */}
            <div className="px-6 py-6 space-y-6">

              {/* Item */}
              <div className="flex gap-4 items-start border-b border-white/10 pb-4">
                <div className="w-10 h-10 bg-[#24338C] rounded-lg flex items-center justify-center">
                  ⏱️
                </div>
                <div>
                  <p className="text-xs text-gray-400">DURATION</p>
                  <p className="font-semibold">6 Months</p>
                  <p className="text-xs text-gray-400">
                    Structured milestone-based
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4 items-start border-b border-white/10 pb-4">
                <div className="w-10 h-10 bg-[#24338C] rounded-lg flex items-center justify-center">
                  👨‍🏫
                </div>
                <div>
                  <p className="text-xs text-gray-400">MENTORSHIP</p>
                  <p className="font-semibold">
                    Expert-Led Guidance
                  </p>
                  <p className="text-xs text-gray-400">
                    Product, Marketing, Fundraising
                  </p>
                </div>
              </div>

              {/* Item */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 bg-[#24338C] rounded-lg flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="text-xs text-gray-400">LOCATION</p>
                  <p className="font-semibold">
                    Pullipalayam, Sankari
                  </p>
                  <p className="text-xs text-gray-400">
                    Tamil Nadu, India
                  </p>
                </div>
              </div>

              {/* Button */}
              <button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 transition rounded-lg py-3 font-semibold">
                Join as Startup →
              </button>

            </div>

          </div>

        </div>

      </div>
    </div>
    <div className="relative">

      {/* RIGHT SIDE STICKY */}
      <div className="hidden lg:block absolute right-0 top-0 w-[360px]">

        <div className="sticky top-24">

          {/* CARD */}
          <div className="bg-white rounded-[20px] overflow-hidden shadow-md border border-gray-200">

            {/* HEADER */}
            <div className="bg-[#0F1C5A] text-white px-6 py-6">
              <p className="text-xs tracking-[3px] text-orange-400 mb-2">
                APPLY · ROLLING ADMISSIONS
              </p>
              <h2 className="text-[32px] font-bold leading-tight">
                START YOUR <br /> JOURNEY
              </h2>
            </div>

            {/* CONTENT */}
            <div className="divide-y">

              {/* ITEM */}
              {[
                {
                  title: "DURATION",
                  main: "6 Months",
                  sub: "Milestone-based program",
                },
                {
                  title: "COHORT START",
                  main: "Rolling Admissions",
                  sub: "Next cohort: Q3 2025",
                },
                {
                  title: "LOCATION",
                  main: "Pullipalayam, Sankari",
                  sub: "Tamil Nadu, India 637304",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 px-6 py-5">
                  <div className="w-12 h-12 bg-[#EEF2F7] rounded-xl"></div>

                  <div>
                    <p className="text-xs tracking-[2px] text-gray-400">
                      {item.title}
                    </p>
                    <p className="font-semibold text-[#1B2559]">
                      {item.main}
                    </p>
                    <p className="text-sm text-gray-500">
                      {item.sub}
                    </p>
                  </div>
                </div>
              ))}

              {/* COHORT SIZE */}
              <div className="px-6 py-5">
                <p className="text-xs tracking-[2px] text-gray-400 mb-1">
                  COHORT SIZE
                </p>
                <p className="font-semibold text-[#1B2559]">
                  18 / 25 seats filled
                </p>

                {/* Progress */}
                <div className="w-full h-2 bg-gray-200 rounded-full mt-3">
                  <div className="w-[72%] h-2 bg-orange-500 rounded-full"></div>
                </div>

                <p className="text-sm text-gray-500 mt-2">
                  7 seats remaining
                </p>
              </div>

              {/* DEADLINE */}
              <div className="px-6 py-5">
                <p className="text-xs tracking-[2px] text-gray-400 mb-1">
                  APPLICATION DEADLINE
                </p>
                <p className="font-semibold text-[#1B2559]">
                  August 31, 2025
                </p>
                <p className="text-orange-500 text-sm font-medium">
                  Apply early — limited seats!
                </p>
              </div>

            </div>

            {/* BUTTONS */}
            <div className="px-6 py-6 space-y-4">

              <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-semibold">
                Join as Startup →
              </button>

              <button className="w-full border border-gray-300 py-3 rounded-lg font-semibold text-[#1B2559]">
                Download Brochure
              </button>

            </div>

          </div>

        </div>
      </div>
    </div>
    <div className="bg-[#F3F5FA] py-16">

  <div className="max-w-7xl mx-auto px-6 flex gap-10">

    {/* LEFT CONTENT */}
    <div className="flex-1 max-w-[720px]">
      
      {/* PROGRAM OVERVIEW */}
      <div>
        <p className="text-xs tracking-[2px] text-orange-500 font-semibold mb-4">
          — PROGRAM OVERVIEW
        </p>

        {/* ABOUT */}
        <div className="mb-10">
          <p className="text-xs tracking-[2px] text-orange-500 font-semibold mb-3">
            ABOUT THE PROGRAM
          </p>

          <h2 className="text-[26px] font-bold text-[#1B2559] mb-4">
            More Than Building a Product
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            At Aakam Shine, we believe that building a startup is more than just creating a product — it's about shaping a founder...
          </p>

          <p className="text-gray-600 leading-relaxed">
            Through expert mentoring, structured milestones, and hands-on learning...
          </p>
        </div>

        <hr className="border-gray-200 my-10" />

        {/* WHAT TO EXPECT */}
        <div>
          <p className="text-xs tracking-[2px] text-orange-500 font-semibold mb-3">
            WHAT TO EXPECT
          </p>

          <h2 className="text-[24px] font-bold text-[#1B2559] mb-4">
            Continuous, Expert-Led Guidance
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            Throughout these six months, participants receive continuous guidance...
          </p>

          <p className="text-gray-600 leading-relaxed">
            With regular reviews, collaborative workshops, and interactive sessions...
          </p>
        </div>

      </div>
    </div>

   

  </div>
</div>
<div className="w-full lg:w-[65%] lg:ml-16">

  {/* HEADER */}
  <div className="mb-10">
    <p className="text-xs tracking-[3px] text-orange-500 font-semibold">
      — MONTHLY PHASES
    </p>
  </div>

  {/* PHASE LIST */}
  <div className="space-y-10">

    {[
      {
        id: "01",
        month: "MONTH 1",
        title: "Ideation & Problem Validation",
        desc: "Define the problem space, identify your target audience, and validate your core hypothesis through structured discovery workshops.",
      },
      {
        id: "02",
        month: "MONTH 2",
        title: "MVP Design & Prototyping",
        desc: "Build your minimum viable product with mentor guidance on UX, product architecture, and rapid prototyping methodologies.",
      },
      {
        id: "03",
        month: "MONTH 3",
        title: "Business Model & Branding",
        desc: "Develop a sustainable revenue model, refine your value proposition, and craft a compelling brand identity that resonates with your market.",
      },
      {
        id: "04",
        month: "MONTH 4",
        title: "Go-to-Market Strategy",
        desc: "Build your customer acquisition playbook, set growth targets, and execute early marketing campaigns with expert support.",
      },
      {
        id: "05",
        month: "MONTH 5",
        title: "Growth & Traction",
        desc: "Scale what's working, analyze data-driven insights, iterate rapidly, and demonstrate measurable traction to stakeholders and investors.",
      },
      {
        id: "06",
        month: "MONTH 6",
        title: "Investor Readiness & Demo Day",
        desc: "Prepare your pitch deck, refine your financial model, and present to a curated panel of investors at the Aakam Shine Demo Day.",
      },
    ].map((item, i) => (
      <div key={i}>

        {/* ROW */}
        <div className="flex gap-6 items-start">

          {/* NUMBER */}
          <div className="text-[28px] font-bold text-gray-300 w-[50px]">
            {item.id}
          </div>

          {/* DOT + CONTENT */}
          <div className="flex-1">

            {/* TOP LINE */}
            <div className="flex items-center gap-3 mb-1">
              <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
              <p className="text-xs tracking-[2px] text-gray-400">
                {item.month}
              </p>
            </div>

            {/* TITLE */}
            <h3 className="text-[16px] font-semibold text-[#1B2559] mb-1">
              {item.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-[14px] text-gray-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        {i !== 5 && (
          <div className="border-b border-gray-200 mt-8"></div>
        )}

      </div>
    ))}

  </div>

</div>
  <div className="bg-[#0b1260] mt-30 text-white px-16 py-16 ">

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

export default journey