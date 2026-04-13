import React from 'react'
import { useNavigate } from "react-router-dom";
const eventoverview = () => {
  return (
    <div>
      <section className="relative bg-[#0b1b6f] text-white overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-20 
        [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
        [background-size:40px_40px]">
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-24">

        {/* Breadcrumb */}
        <p className="text-xs tracking-widest text-gray-300 mb-6">
          EVENTS / <span className="text-orange-400">EVENT OVERVIEW</span>
        </p>

        {/* Tabs */}
        <div className="flex gap-3 mb-10">
          <button className="px-4 py-1 rounded-full border border-gray-500 text-xs">
            Pitch
          </button>
          <button className="px-4 py-1 rounded-full border border-orange-500 text-orange-400 text-xs">
            Investment
          </button>
          <button className="px-4 py-1 rounded-full border border-gray-500 text-xs">
            Networking
          </button>
        </div>

        {/* Heading */}
        <div className="leading-none space-y-2">
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            STARTUP
          </h1>

          <h1 className="text-6xl md:text-8xl font-extrabold text-orange-500">
            PITCH
          </h1>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            NIGHT
          </h1>
        </div>

        {/* Description */}
        <p className="mt-8 max-w-xl text-gray-300 text-sm md:text-base">
          Monthly pitch competition where early-stage startups present their ideas
          to investors and mentors across Tamil Nadu.
        </p>

        {/* Decorative Dot */}
        <div className="absolute left-10 top-40 w-2 h-2 bg-orange-500 rounded-full"></div>

        {/* Large Background Text */}
        <h1 className="absolute right-10 bottom-10 text-[200px] font-extrabold text-white opacity-5 select-none hidden md:block">
          PITCH
        </h1>

      </div>
    </section>
    <div className="bg-[#f5f7fb] min-h-screen px-6 md:px-20 py-10">

      <div className="grid md:grid-cols-[2fr_1fr] gap-10">

        {/* LEFT SIDE */}
        <div>

          {/* Title */}
          <p className="text-xs text-orange-500 font-semibold tracking-widest mb-2">
            ABOUT THIS EVENT
          </p>

          <h1 className="text-3xl font-bold text-[#1b2559] mb-2">
            The Premier Pitch <br /> Competition in Tamil Nadu
          </h1>

          <p className="text-sm text-gray-500 mb-6">
            Monthly pitch competition where early-stage startups present their ideas to investors and mentors.
          </p>

          {/* Description */}
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Monthly pitch competition where early-stage startups present their ideas to investors and mentors.
            Monthly pitch competition where early-stage startups present their ideas to investors and mentors.
          </p>

          {/* Highlight Quote */}
          <div className="bg-white border-l-4 border-orange-500 p-4 italic text-[#1b2559] mb-6">
            "A platform where the boldest ideas meet the right minds — shaping Tamil Nadu's next generation of entrepreneurs."
          </div>

          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            Monthly pitch competition where early-stage startups present their ideas to investors and mentors.
          </p>

          {/* GALLERY */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-xs text-orange-500 font-semibold tracking-widest">
              EVENT GALLERY
            </p>

            <button className="text-xs  px-3 py-1 rounded text-orange-500 border-orange-300">
              View all →
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4">
            
            <div className="col-span-2 h-40 bg-gradient-to-r from-blue-700 to-indigo-800 rounded-lg flex items-center justify-center text-white text-2xl font-bold">
              01
            </div>

            <div className="h-20 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-lg flex items-center justify-center text-white">
              02
            </div>

            <div className="h-20 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-lg flex items-center justify-center text-white">
              03
            </div>

            <div className="h-20 bg-gradient-to-r from-orange-500 to-indigo-800 rounded-lg flex items-center justify-center text-white">
              04
            </div>

            <div className="h-20 bg-gradient-to-r from-blue-800 to-indigo-900 rounded-lg flex items-center justify-center text-white">
              05
            </div>

          </div>

          {/* ORGANIZERS */}
          <div className="mt-10">
            <p className="text-xs text-orange-500 font-semibold tracking-widest mb-4">
              ORGANIZERS & PARTNERS
            </p>

            <div className="grid md:grid-cols-2 gap-4  bg-white p-6 rounded-lg ">
              
              <div>
                <p className="text-xs text-gray-400 mb-2">ORGANIZERS</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Aakam Shine</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Startup TN</span>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">ASSOCIATION WITH</p>
                <div className="flex gap-2 flex-wrap">
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Sri Shanmugha Edu</span>
                  <span className="bg-gray-100 px-3 py-1 rounded text-sm">Aakam 360</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* RIGHT SIDE CARD */}
        <div className="sticky top-10 h-fit">

          <div className="bg-white rounded-lg shadow  overflow-hidden">

            {/* Header */}
            <div className="bg-[#0B1260] text-white p-5">
              <p className="text-xs text-orange-400 uppercase mb-1">
                Register Now • Limited Seats
              </p>
              <h2 className="text-xl font-bold">
                Secure Your <br /> Spot Today
              </h2>
            </div>

            {/* Info */}
            <div className="p-5 space-y-4 text-sm">

              <div>
                <p className="text-gray-400 text-xs">DATE</p>
                <p className="font-semibold">September 28, 2025</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">TIME</p>
                <p className="font-semibold">9:00 AM – 5:00 PM</p>
              </div>

              <div>
                <p className="text-gray-400 text-xs">VENUE</p>
                <p className="font-semibold">Coimbatore Tech Park</p>
              </div>

              {/* Progress */}
              <div>
                <p className="text-gray-400 text-xs">SEATS</p>
                <p className="font-semibold mb-1">85 / 100 registered</p>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-orange-500 rounded w-[85%]"></div>
                </div>
                <p className="text-xs text-gray-400 mt-1">
                  15 seats remaining
                </p>
              </div>

              {/* Buttons */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded font-semibold">
                Apply for This Event →
              </button>

              <button className="w-full border border-gray-300 py-3 rounded text-gray-600">
                Download Brochure
              </button>

            </div>
          </div>

        </div>

      </div>
    </div>
    <section className="relative bg-[#0B1260] text-white px-6 md:px-20 py-24 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* WATERMARK */}
      <div className="absolute top-0 right-0 text-white/5 text-[200px] font-bold pointer-events-none select-none">
        EVENTS
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-10">

        {/* LEFT */}
        <div className="max-w-2xl">

          {/* SMALL TITLE */}
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <p className="text-xs tracking-widest uppercase text-orange-400 font-semibold">
              Don't Miss Out
            </p>
          </div>

          {/* MAIN TITLE */}
          <h1 className="leading-[0.9] font-extrabold">
            <span className="block text-5xl md:text-7xl">
              Register for
            </span>

            <span className="block text-orange-500 text-6xl md:text-8xl">
              Upcoming
            </span>

            <span className="block text-5xl md:text-7xl">
              Events
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-gray-300 max-w-md leading-relaxed">
            Stay connected with the Aakam Shine ecosystem and be the first to
            know about upcoming pitch nights, workshops, and networking sessions.
          </p>

        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex flex-col gap-4 w-full md:w-auto">

          <button className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-lg font-semibold text-sm transition">
            Apply for Upcoming Events →
          </button>

          <button className="border border-white/30 text-white/70 hover:text-white hover:border-white px-8 py-4 rounded-lg font-semibold text-sm transition">
            View All Events
          </button>

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

export default eventoverview