import React from 'react'
import { useNavigate } from "react-router-dom";
const ecosystem = () => {
   const navigate = useNavigate();
    const menu = [
      { name: "Home", path: "/home" },
      { name: "About Us", path: "/about" },
      { name: "Our Startups", path: "/startups" },
      { name: "Our Ecosystem", path: "/ecosystem" },
      { name: "Events", path: "/events" },
      { name: "Contact", path: "/contact" }
    ];
  return (
    <div>
      <div className="relative bg-[#0F1B5B] text-white overflow-hidden">

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Circle Design */}
      <div className="absolute right-0 top-0 w-[500px] h-[500px] border border-white/10 rounded-full translate-x-1/3 -translate-y-1/4" />
      <div className="absolute right-0 top-0 w-[700px] h-[700px] border border-white/5 rounded-full translate-x-1/4 -translate-y-1/4" />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-6 py-28">
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">
          Idea to{" "}
          <span className="text-white/50 font-medium">MVP</span>
          <br />
          Development
        </h1>

        {/* Description */}
        <p className="mt-6 max-w-xl text-white/70 text-lg leading-relaxed">
          Transform your innovative ideas into viable business models with expert
          guidance, market validation, and prototype development support.
        </p>

      </div>
    </div>
    <section className="bg-[#f6f7fb] py-16 px-4">
      
      {/* Heading */}
      <div className="max-w-3xl mx-auto mb-6">
        <p className="text-xs tracking-widest text-orange-500 flex items-center gap-2 mb-3">
          <span className="w-8 h-[2px] bg-orange-500 inline-block"></span>
          ABOUT THIS INITIATIVE
        </p>
      </div>

      {/* Card */}
      <div className="max-w-3xl mx-auto min-h-[600px] bg-white rounded-2xl shadow-sm p-8 md:p-10 relative overflow-hidden">

        {/* Top Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

        {/* Content */}
        <div className="text-gray-600 space-y-6 text-[15px] leading-relaxed">

          <p>
            <span className="font-semibold text-gray-800">Aakam Shine</span> is a dedicated initiative focused on empowering startups and individuals, especially in the healthcare and cybersecurity sectors, across Tier 2, 3, and 4 regions of Tamil Nadu. Operated under the Sri Shanmugha Educational Institutions in Salem, it acts as an innovation and incubation center aimed at nurturing fresh talents and fostering technological innovation.
          </p>

          <p>
            Our programs include hands-on workshops, mentorship, career guidance, and collaboration opportunities to help participants grow and succeed. We also facilitate participation in events like healthcare hackathons to drive innovation in healthcare solutions and provide platforms to showcase new ideas.
          </p>

          <p>
            Aakam Shine provides a professional co-working space equipped with all necessary facilities to foster creativity, networking, and productivity for startups and entrepreneurs. Additionally, we connect startups with investors and industry experts to obtain funding and mentorship support, enabling sustainable growth.
          </p>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Tags */}
        <div className="flex flex-wrap gap-3">
          
          {[
            "Expert Mentorship",
            "Market Validation",
            "Prototype Development",
            "Investor Network Access",
            "Co-working Space",
            "Healthcare Hackathons",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm"
            >
              <span className="w-5 h-5 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs">
                ✓
              </span>
              {item}
            </div>
          ))}

        </div>
      </div>
    </section>
     <section className="relative bg-[#0d1b6b] text-white py-24 px-4 overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Circle Glow Effect */}
      <div className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full"></div>
      <div className="absolute right-[-100px] top-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/10 rounded-full"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center">
        
        {/* Small Label */}
        <p className="text-xs tracking-widest text-gray-300 mb-4 flex justify-center items-center gap-2">
          TAKE THE FIRST STEP
          <span className="text-orange-400">→</span>
        </p>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Ready to Launch your{" "}
          <span className="text-orange-500">Startup Journey?</span>
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
          Get the support, mentorship, and tools you need to launch. Your
          startup journey begins here.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          
          {/* Primary Button */}
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition">
            Join as Startup →
          </button>

          {/* Secondary Button */}
          <button className="border border-white/30 hover:bg-white/10 text-white px-8 py-3 rounded-lg font-medium transition">
            Learn More
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

export default ecosystem