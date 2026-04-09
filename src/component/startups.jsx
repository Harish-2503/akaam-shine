import React from 'react'
import { useNavigate } from "react-router-dom";
const startup = () => {
  const navigate = useNavigate();

  const menu = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Our Startups", path: "/startups" },
    { name: "Our Ecosystem", path: "/ecosystem" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];
  const steps = [
    {
      id: 1,
      title: "Submit Application",
      desc: "Complete the online application form with all required documents",
    },
    {
      id: 2,
      title: "Initial Review",
      desc: "Our team reviews your application within 5 working days",
    },
    {
      id: 3,
      title: "Interview & Pitch",
      desc: "Shortlisted applicants present their pitch to our selection committee",
      // highlight: true,
    },
    {
      id: 4,
      title: "Program Onboarding",
      desc: "Selected startups begin their journey with orientation and goal setting",
    },
  ];
  const sectors = [
    "Healthcare",
    "AgriTech",
    "FinTech",
    "EdTech",
    "CleanTech",
    "Rural Innovation",
    "Social Impact",
  ];

  return (
    <div>
<div className="relative bg-[#0B1B5E] text-white overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Apply for{" "}
          <span className="italic text-gray-400 font-medium">
            Incubation
          </span>
          <br />
          & Transform
        </h1>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16 text-center md:text-left">
          
          <div>
            <h2 className="text-3xl font-bold">
              6<span className="text-orange-400">mo</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              PROGRAM DURATION
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              101<span className="text-orange-400">+</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              STARTUPS SUPPORTED
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              20<span className="text-orange-400">+</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              EXPERT MENTORS
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">
              ₹12<span className="text-orange-400">Cr</span>
            </h2>
            <p className="text-gray-400 text-sm mt-1">
              REVENUE IMPACT
            </p>
          </div>

        </div>
      </div>
    </div>
    <div className="bg-[#F3F4F6] py-20 px-6">
      <div className="max-w-8xl mx-auto bg-white rounded-3xl shadow-sm py-5 px-10 h-full">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-xl font-semibold text-[#1E2A5A] tracking-wide">
            APPLICATION PROCESS
          </h2>
          <p className="text-gray-500 mt-2">
            Simple and transparent process to join our ecosystem
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          
          {/* Line */}
<div className="absolute top-5 left-[12.5%] right-[12.5%] h-[2px] bg-gradient-to-r from-orange-400 via-purple-400 to-blue-500" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10 text-center">
            {steps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center">
                
                {/* Circle */}
                <div
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-white font-bold text-lg shadow-md
                  ${
                    step.highlight
                      ? "bg-orange-500"
                      : "bg-[#1E2A5A]"
                  }`}
                >
                  {step.id}
                </div>

                {/* Title */}
                <h3 className="mt-4 font-semibold text-[#1E2A5A]">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-500 mt-2 max-w-xs">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    <div className="bg-[#F5F7FB] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <p className="text-orange-500 text-sm font-semibold tracking-widest">
            APPLY NOW
          </p>
          <h2 className="text-3xl font-bold text-[#1E2A5A] mt-2">
            Choose Your Path
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT CARD */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100 relative overflow-hidden">

            {/* Top Gradient Border */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-purple-500" />

            <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full font-semibold">
              NEW STARTUP
            </span>

            <h3 className="text-xl font-bold text-[#1E2A5A] mt-4">
              New Startup Application
            </h3>

            <p className="text-gray-500 mt-2">
              Apply as a new startup founder looking to join our comprehensive incubation program
            </p>

            <hr className="my-6" />

            {/* What You Get */}
            <h4 className="text-sm font-semibold text-orange-500 tracking-wide mb-3">
              WHAT YOU GET
            </h4>

            <ul className="space-y-3 text-gray-600">
              {[
                "6-month structured program",
                "Dedicated mentor assignment",
                "Office space and resources",
                "Investor pitch opportunities",
                "Market access across Tamil Nadu",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-blue-900 text-white text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Requirements */}
            <h4 className="text-sm font-semibold text-orange-500 tracking-wide mt-6 mb-3">
              REQUIREMENTS
            </h4>

            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                "Innovative business idea or early-stage startup",
                "Committed founding team",
                "Willingness to relocate to Salem for program duration",
                "Equity participation in program",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-8 w-full bg-[#1E2A5A] text-white py-3 rounded-xl font-semibold hover:bg-[#162048] transition">
              Apply as New Startup →
            </button>
          </div>

          {/* RIGHT CARD */}
          <div className="bg-white rounded-2xl shadow-sm p-8 border border-gray-100">

            <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-semibold">
              EXISTING STARTUP
            </span>

            <h3 className="text-xl font-bold text-[#1E2A5A] mt-4">
              Existing Startup — Mentorship
            </h3>

            <p className="text-gray-500 mt-2">
              Already have a startup? Apply for our mentorship program to accelerate growth
            </p>

            <hr className="my-6" />

            {/* What You Get */}
            <h4 className="text-sm font-semibold text-orange-500 tracking-wide mb-3">
              WHAT YOU GET
            </h4>

            <ul className="space-y-3 text-gray-600">
              {[
                "Expert mentor matching",
                "Flexible engagement options",
                "Access to investor network",
                "Workshops and masterclasses",
                "Business development support",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Requirements */}
            <h4 className="text-sm font-semibold text-orange-500 tracking-wide mt-6 mb-3">
              REQUIREMENTS
            </h4>

            <ul className="space-y-2 text-gray-600 text-sm">
              {[
                "Existing startup with some traction",
                "Clear growth objectives",
                "Commitment to mentorship sessions",
                "Open to feedback and guidance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="mt-8 w-full border border-gray-300 py-3 rounded-xl font-semibold text-[#1E2A5A] hover:bg-gray-100 transition">
              Apply for Mentorship →
            </button>
          </div>

        </div>
      </div>
    </div>
    <div className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* GET STARTED */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-[2px] bg-orange-500" />
            <p className="text-orange-500 text-sm font-semibold tracking-widest">
              GET STARTED
            </p>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-[#1E2A5A]">
            Apply for <br />
            <span className="text-orange-500">Incubation</span>
          </h1>

          <p className="text-gray-600 mt-6 max-w-2xl leading-relaxed">
            Join our comprehensive 6-month incubation program and transform your
            startup idea into a thriving business. Get access to funding,
            mentorship, infrastructure, and market opportunities.
          </p>
        </div>

        {/* FOCUS SECTORS */}
        <div className="mt-16">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-orange-500" />
            <p className="text-orange-500 text-sm font-semibold tracking-widest">
              FOCUS SECTORS
            </p>
          </div>

          <h2 className="text-2xl font-bold text-[#1E2A5A]">
            We Especially Welcome
          </h2>

          <p className="text-gray-500 mt-2">
            Startups operating in these high-impact sectors
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-4 mt-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded-full text-sm font-medium text-[#1E2A5A] shadow-sm hover:shadow-md transition"
              >
                <span className="w-2 h-2 bg-orange-400 rounded-full" />
                {sector}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    <div className="relative bg-gradient-to-r from-[#0B1B5E] to-[#1E2A8A] text-white overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Circle Glow */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/10" />
      <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Ready to{" "}
            <span className="text-orange-500">Transform</span>
            <br />
            Your Startup?
          </h2>

          <p className="text-gray-300 mt-6 leading-relaxed">
            Join hundreds of entrepreneurs who have accelerated their growth
            through our incubation program. Take the first step towards building
            a successful, scalable business.
          </p>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex flex-col gap-4 w-full md:w-auto">
          
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition shadow-lg">
            Start Your Application →
          </button>

          <button className="border border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition">
            Get More Information
          </button>

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

export default startup