import React from 'react'

import { useNavigate } from "react-router-dom";
const mvp = () => {
  const menu = [
  { name: "Home",          path: "/home" },
  { name: "About Us",      path: "/about" },
  { name: "Our Startups",  path: "/startups" },
  { name: "Our Ecosystem", path: "/ecosystem" },
  { name: "Events",        path: "/events" },
  { name: "Contact",       path: "/contact" },
];
const navigate = useNavigate();
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

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-[0.08] bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] [background-size:60px_60px]" />

      {/* Right Circle */}
      <div className="absolute right-[-200px] top-[-100px] w-[600px] h-[600px] border border-white/10 rounded-full" />
      <div className="absolute right-[-120px] top-[0px] w-[400px] h-[400px] border border-white/10 rounded-full" />

      {/* Large MVP Text */}
      <h1 className="absolute right-10 bottom-0 text-[180px] font-bold text-white/5 select-none hidden md:block">
        MVP
      </h1>

      {/* Content */}
      <div className="relative px-6 md:px-20 py-24 max-w-6xl">

        {/* Breadcrumb */}
        <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
          Our Ecosystem /{" "}
          <span className="text-orange-500">Key Initiatives</span>
          <span className="ml-3 inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full text-white/70 text-[10px] font-semibold">
            🚀 Aakam Shine Program
          </span>
        </p>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
          Idea to{" "}
          <span className="italic font-light text-white/40">MVP</span>
          <br />
          Development
        </h1>

        {/* Description */}
        <p className="text-base text-white/60 max-w-xl leading-relaxed">
          Transform your innovative ideas into viable business models with expert
          guidance, market validation, and prototype development support.
        </p>
      </div>
    </div>
    <div className="bg-[#F4F6FB] py-16 px-4 flex justify-center">

      {/* CARD */}
      <div className="relative w-full max-w-4xl bg-white rounded-2xl border border-gray-200 p-8 md:p-12 overflow-hidden">

        {/* 🔥 TOP GRADIENT LINE */}
        <div className="absolute top-0 left-0 right-0 h-[4px] 
        bg-gradient-to-r from-orange-500 via-indigo-500 to-blue-600 
        rounded-t-2xl" />

        {/* HEADER */}
        <div className="mb-6">
          <p className="text-xs uppercase tracking-[0.2em] text-orange-500 font-semibold mb-3">
            About This Initiative
          </p>
        </div>

        {/* CONTENT */}
        <div className="space-y-5 text-gray-600 text-[15px] leading-relaxed">

          <p>
            <span className="font-semibold text-[#0B1260]">
              Aakam Shine
            </span>{" "}
            is a dedicated initiative focused on empowering startups and individuals,
            especially in the healthcare and cybersecurity sectors, across Tier 2, 3,
            and 4 regions of Tamil Nadu. Operated under the Sri Shanmugha Educational
            Institutions in Salem, it acts as an innovation and incubation center aimed
            at nurturing fresh talents and fostering technological innovation.
          </p>

          <p>
            Our programs include hands-on workshops, mentorship, career guidance, and
            collaboration opportunities to help participants grow and succeed. We also
            facilitate participation in events like healthcare hackathons to drive
            innovation in healthcare solutions and provide platforms to showcase new ideas.
          </p>

          <p>
            Aakam Shine provides a professional co-working space equipped with all
            necessary facilities to foster creativity, networking, and productivity for
            startups and entrepreneurs. Additionally, we connect startups with investors
            and industry experts to obtain funding and mentorship support, enabling
            sustainable growth.
          </p>
        </div>

        {/* DIVIDER */}
        <div className="my-8 border-t border-gray-200" />

        {/* TAGS */}
        <div className="flex flex-wrap gap-3">

          {[
            "Expert Mentorship",
            "Market Validation",
            "Prototype Development",
            "Investor Network Access",
            "Co-working Space",
            "Healthcare Hackathons"
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-2 bg-[#F4F6FB] border border-gray-200 rounded-full px-4 py-2 text-sm text-[#0B1260] font-medium"
            >
              <span className="w-5 h-5 flex items-center justify-center bg-orange-500 text-white rounded-full text-xs">
                ✓
              </span>
              {item}
            </div>
          ))}

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

export default mvp