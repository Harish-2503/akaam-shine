import React from 'react'
import { useNavigate } from "react-router-dom";
const events = () => {
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
      <section className="relative bg-[#0d1b6b] text-white px-6 py-20 overflow-hidden">

        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Circles */}
        <div className="absolute right-[-150px] top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full"></div>
        <div className="absolute right-[-80px] top-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/10 rounded-full"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto">


          {/* Tabs */}
          <div className="flex gap-3 mb-8">
            <button className="px-5 py-2 rounded-full border border-orange-400 text-orange-400 bg-white/10 backdrop-blur">
              Pitch
            </button>
            <button className="px-5 py-2 rounded-full border border-white/20 text-gray-300">
              Investment
            </button>
            <button className="px-5 py-2 rounded-full border border-white/20 text-gray-300">
              Networking
            </button>
          </div>

          {/* Title */}
          <h1 className="text-7xl md:text-8xl font-bold mb-6 tracking-tight">
            TNGSS
          </h1>

          {/* Description */}
          <p className="text-gray-300 text-lg max-w-xl mb-12">
            Monthly pitch competition where early-stage startups present their
            ideas to investors and mentors.
          </p>

          {/* Divider */}
          <div className="border-t border-white/10 mb-10"></div>

          {/* Info Row */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

            {/* Date */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-orange-400/30">
                📅
              </div>
              <div>
                <p className="font-semibold">Sep 28, 2025</p>
                <p className="text-gray-400 text-xs">EVENT DATE</p>
              </div>
            </div>

            {/* Time */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-orange-400/30">
                ⏰
              </div>
              <div>
                <p className="font-semibold">9:00 AM</p>
                <p className="text-gray-400 text-xs">START TIME</p>
              </div>
            </div>

            {/* Venue */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-orange-400/30">
                📍
              </div>
              <div>
                <p className="font-semibold">
                  Sri Shanmugha Edu. Institutions
                </p>
                <p className="text-gray-400 text-xs">
                  VENUE, SANKARI, SALEM
                </p>
              </div>
            </div>

            {/* Prize */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg border border-orange-400/30">
                💰
              </div>
              <div>
                <p className="font-semibold">₹2.5 Lakhs</p>
                <p className="text-gray-400 text-xs">PRIZE POOL</p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <div className="bg-[#f5f7fb] min-h-screen py-10 px-6 md:px-16">

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="md:col-span-2 space-y-6">

            {/* WHY ATTEND CARD */}
            <div className="bg-white rounded-2xl shadow-sm  p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500"></div>

              <p className="text-orange-500 text-xs font-semibold tracking-widest mb-3">
                ABOUT THE EVENT
              </p>

              <h2 className="text-2xl font-bold text-[#0b1b3f] mb-2">
                Why Should You Attend?
              </h2>

              <p className="text-gray-500 text-sm mb-6">
                Presented by Aakam Shine in Collaboration with Esperio Studio — a 2-day event empowering students, alumni, startups, and innovators.
              </p>

              {/* Sections */}
              <div className="space-y-5 text-sm text-gray-600">

                <div>
                  <p className="text-orange-500 font-semibold mb-1">• OVERVIEW</p>
                  <p>
                    Presented by Aakam Shine in Collaboration with Esperio Studio is a 2-day event empowering students, Alumni, startups, and innovators through expert workshops and live pitching.
                  </p>
                </div>

                <div>
                  <p className="text-orange-500 font-semibold mb-1">• OBJECTIVES</p>
                  <p>
                    Provide participants with pitching skills, startup strategy insights, and access to mentorship, funding, and incubation support.
                  </p>
                </div>

                <div>
                  <p className="text-orange-500 font-semibold mb-1">• BENEFITS</p>
                  <p>
                    Attractive Cash Prizes upto <b>2.5 lakhs</b> for the top-performing teams.
                  </p>
                </div>

                <div>
                  <p className="text-orange-500 font-semibold mb-2">• REGISTRATION DEADLINE</p>
                  <span className="inline-block border px-3 py-1 rounded-full text-xs font-semibold text-orange-600 border-orange-200 bg-orange-50">
                    LAST DATE &nbsp; July 13th, 2025
                  </span>
                </div>

              </div>
            </div>

            {/* PARTNERS */}
            <div className="bg-white rounded-2xl shadow-sm p-8">
              <p className="text-orange-500 text-xs font-semibold tracking-widest mb-4">
                PARTNERS & ORGANIZERS
              </p>

              <div className="grid md:grid-cols-2 gap-6">

                <div>
                  <p className="text-xs text-gray-400 mb-3">ORGANIZERS</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">Aakam Shine</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">StartupTN</span>
                  </div>
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-3">ASSOCIATION WITH</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">Sri Shanmugha</span>
                    <span className="px-4 py-2 bg-gray-100 rounded-full text-sm">Aakam 360</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* REGISTER CARD */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

              <div className="bg-[#0b1b6f] text-white p-6">
                <p className="text-xs opacity-70 mb-1">SECURE YOUR SPOT</p>
                <h3 className="text-lg font-semibold">Register for TNGSS</h3>
              </div>

              <div className="p-6 space-y-4">

                <div className="bg-gray-100 rounded-xl p-4">
                  <p className="text-xs text-gray-400">DATE</p>
                  <p className="font-medium">Sep 28, 2025</p>
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  <p className="text-xs text-gray-400">TIME</p>
                  <p className="font-medium">9:00 AM onwards</p>
                </div>

                <div className="bg-gray-100 rounded-xl p-4">
                  <p className="text-xs text-gray-400">VENUE</p>
                  <p className="font-medium">
                    Sri Shanmugha Educational Institutions, Sankari, Salem
                  </p>
                </div>

                <button className="w-full bg-[#1b2a8f] text-white py-3 rounded-xl font-semibold hover:opacity-90">
                  Register Here →
                </button>

                <p className="text-xs text-gray-400 text-center">
                  Registration closes July 13th, 2025. Spots are limited.
                </p>

              </div>
            </div>

            {/* FAQS */}
            <div className="bg-white rounded-2xl shadow-sm  p-6 space-y-4">

              <h3 className="font-semibold text-lg">FAQs</h3>

              <div className="border border-gray-100 rounded-xl p-4">
                <p className="font-medium text-sm mb-2">
                  Who can participate in TNGSS?
                </p>
                <p className="text-xs text-gray-500">
                  Any early-stage startup founder, student innovator, or entrepreneur from Tamil Nadu can participate. Teams of up to 4 members are welcome.
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-4">
                <p className="font-medium text-sm mb-2">
                  Is there a registration fee?
                </p>
                <p className="text-xs text-gray-500">
                  Participation is free for all registered teams. Selected finalists may be invited for an in-person pitch round.
                </p>
              </div>

              <div className="border border-gray-100 rounded-xl p-4">
                <p className="font-medium text-sm mb-2">
                  What is the prize structure?
                </p>
                <p className="text-xs text-gray-500">
                  Total prize pool is ₹2.5 Lakhs distributed across winners. Mentorship and incubation support included.
                </p>
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

export default events