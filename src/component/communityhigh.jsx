import React from 'react'
import { useNavigate } from "react-router-dom";
const communityhigh = () => {
   const navigate = useNavigate();
   const events = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "Startup Pitch Night",
  desc: "Monthly pitch competition where early-stage startups present their ideas to investors and mentors.",
  location: "Coimbatore Tech Park",
  date: "Sep 28, 2025",
}));
  return (
    <div>
       <section className="relative bg-[#0B1260] text-white overflow-hidden">

      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Watermark Text */}
      <h1 className="absolute bottom-0 right-0 text-[200px] font-extrabold text-white/5 select-none pointer-events-none">
        COMMUNITY
      </h1>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 py-20">

        {/* Breadcrumb */}
        <p className="text-sm text-white/40 mb-4 tracking-widest uppercase">
          Our Ecosystem /{" "}
          <span className="text-orange-400">Community Highlights</span>
        </p>

        {/* Title */}
        <h1 className="text-6xl md:text-8xl font-extrabold leading-none mb-6">
          COMMUNITY <br />
          <span className="text-orange-500">HIGHLIGHTS</span>
        </h1>

        {/* Description */}
        <p className="text-white/50 max-w-xl text-lg mb-12">
          Stay connected with the latest activities, achievements, and stories
          from our vibrant startup ecosystem community across Tamil Nadu.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 border-t border-white/10 pt-10">

          <div>
            <h2 className="text-4xl font-bold">
              120<span className="text-orange-500">+</span>
            </h2>
            <p className="text-xs tracking-widest text-white/40 mt-2">
              ACTIVE MEMBERS
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">48</h2>
            <p className="text-xs tracking-widest text-white/40 mt-2">
              EVENTS THIS YEAR
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">14</h2>
            <p className="text-xs tracking-widest text-white/40 mt-2">
              DISTRICTS COVERED
            </p>
          </div>

          <div>
            <h2 className="text-4xl font-bold">
              ₹18<span className="text-orange-500">CR</span>
            </h2>
            <p className="text-xs tracking-widest text-white/40 mt-2">
              ECOSYSTEM VALUE
            </p>
          </div>

        </div>
      </div>
    </section>
    <section className="bg-[#f5f7fb] py-20 px-6 md:px-20">
      
      {/* Heading */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-semibold tracking-widest text-orange-500 uppercase mb-2">
          Latest Activities
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1b2559] mb-3">
          What’s Happening in <br /> Our Ecosystem
        </h2>
        <p className="text-gray-500 text-sm">
          Stay connected with the latest activities, achievements, and stories from our
          vibrant startup ecosystem community across Tamil Nadu.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition"
          >
            {/* Top Tags */}
            <div className="flex gap-2 mb-3 text-[10px] font-semibold uppercase">
              <span className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full">
                Pitch
              </span>
              <span className="px-2 py-1 bg-orange-100 text-orange-600 rounded-full">
                Investment
              </span>
              <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded-full">
                Networking
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-[#1b2559] mb-2">
              {event.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-500 mb-4">{event.desc}</p>

            {/* Divider */}
            <div className="border-t border-gray-100 my-3" />

            {/* Info */}
            <div className="text-xs text-gray-500 space-y-1 mb-4">
              <p>📍 {event.location}</p>
              <p>📅 {event.date}</p>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold text-gray-400 uppercase">
                Sep 28
              </span>

              <button className="text-xs px-3 py-1 border border-orange-400 text-orange-500 rounded-md hover:bg-orange-50">
                Learn more →
              </button>
            </div>

            {/* Right Number */}
            <span className="absolute top-4 right-6 text-4xl font-bold text-gray-100">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </section>
     <section className="relative bg-[#0B1260] text-white px-6 md:px-20 py-20 overflow-hidden">

      {/* Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Watermark */}
      <div className="absolute right-0 top-0 text-white/5 text-[180px] font-bold pointer-events-none select-none">
        EVENTS
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          
          {/* Small heading */}
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[2px] bg-orange-500"></span>
            <p className="text-xs tracking-widest text-orange-400 uppercase font-semibold">
              Don’t Miss Out
            </p>
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-7xl font-extrabold leading-[0.95]">
            REGISTER FOR{" "}
            <span className="text-orange-500">UPCOMING</span>
            <br />
            EVENTS
          </h2>

          {/* Description */}
          <p className="mt-6 text-gray-300 max-w-md leading-relaxed">
            Stay connected with the Aakam Shine ecosystem and be the first to
            know about upcoming pitch nights, workshops, and networking sessions.
          </p>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="flex flex-col gap-4 w-full md:w-auto">

          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-sm transition">
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

export default communityhigh