import React from 'react'

const incubatee = () => {
  const galleryItems = ["🤰", "🏥", "👶", "🔬", "💊", "🩺"];
  return (
    <div>
    <div className="bg-[#0B1260] text-white px-6 py-16 relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.08] 
      bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] 
      [background-size:60px_60px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 relative">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-xs uppercase tracking-widest text-white/50 mb-3">
            Our Startups / <span className="text-orange-500">Incubatee Overview</span>
          </p>

          {/* TAG */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full text-xs mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Healthcare & Technology
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            KYM Technologies
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/70 max-w-xl mb-6">
            Transforming maternity and child care with trust and transparency.
            India's first integrated maternity solution platform built with
            empathy, technology, and innovation.
          </p>

          {/* TAGS */}
          <div className="flex flex-wrap gap-3 text-xs">
            <span className="px-4 py-2 border border-orange-500 text-orange-500 rounded-full">
              Healthcare
            </span>
            <span className="px-4 py-2 border border-white/20 rounded-full">
              Technology
            </span>
            <span className="px-4 py-2 border border-white/20 rounded-full">
              Tamil Nadu, India
            </span>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">

          {/* TOP */}
          <div className="flex items-center gap-4 mb-4">

            {/* LOGO */}
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center text-[#0B1260] font-bold">
              E
            </div>

            {/* INFO */}
            <div>
              <h3 className="font-semibold text-lg">Embryo</h3>
              <p className="text-white/60 text-sm">
                Maternity care, all under one digital roof
              </p>

              <div className="flex gap-2 mt-2 text-[10px]">
                <span className="px-2 py-1 bg-white/10 rounded-full">
                  Healthcare
                </span>
                <span className="px-2 py-1 bg-white/10 rounded-full">
                  MedTech
                </span>
              </div>
            </div>
          </div>

          {/* WEBSITE */}
          <button className="bg-orange-500 px-4 py-2 rounded text-sm mb-6">
            www.embryo.com
          </button>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-orange-500 text-xl font-bold">₹16.2L</p>
              <p className="text-xs text-white/50">Revenue</p>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-orange-500 text-xl font-bold">13.4x</p>
              <p className="text-xs text-white/50">ROAS</p>
            </div>
          </div>

          {/* SOCIAL */}
          <div className="flex gap-3">
            <div className="w-9 h-9 border border-white/20 rounded flex items-center justify-center">
              ⓘ
            </div>
            <div className="w-9 h-9 border border-white/20 rounded flex items-center justify-center">
              in
            </div>
            <div className="w-9 h-9 border border-white/20 rounded flex items-center justify-center">
              ▶
            </div>
          </div>
        </div>

      </div>

      {/* BOTTOM STATS */}
      <div className="max-w-7xl mx-auto mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div>
          <p className="text-orange-500 text-2xl font-bold">₹16.2L</p>
          <p className="text-xs text-white/50">Revenue Generated</p>
        </div>

        <div>
          <p className="text-orange-500 text-2xl font-bold">13.4x</p>
          <p className="text-xs text-white/50">ROAS</p>
        </div>

        <div>
          <p className="text-orange-500 text-2xl font-bold">4+</p>
          <p className="text-xs text-white/50">Core Team Members</p>
        </div>

        <div>
          <p className="text-orange-500 text-2xl font-bold">Pan–TN</p>
          <p className="text-xs text-white/50">Operational Area</p>
        </div>

      </div>
    </div>
    <div className="bg-[#F4F6FB] py-16 px-6">

      {/* TOP STATS */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 mb-10">
        
        {[
          { value: "₹16.2L", label: "Revenue" },
          { value: "13.4x", label: "Return on Ad Spend" },
          { value: "2+", label: "Industry Verticals" },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl border border-gray-200 p-5 flex items-center gap-4"
          >
            <div className="w-10 h-10 bg-[#F4F6FB] rounded-lg flex items-center justify-center">
              💼
            </div>
            <div>
              <p className="text-[#0B1260] font-bold">{item.value}</p>
              <p className="text-xs text-gray-500 uppercase">{item.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ABOUT CARD */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 p-8 mb-12">

        {/* HEADER */}
        <p className="text-xs uppercase tracking-widest text-orange-500 mb-2">
          About
        </p>
        <h2 className="text-xl font-semibold text-[#0B1260] mb-1">
          About KYM Technologies
        </h2>
        <p className="text-xs text-gray-400 mb-6">
          What they do and why it matters
        </p>

        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT TEXT */}
          <div className="text-sm text-gray-600 space-y-4">
            <p>
              EMBRYO is India's first integrated maternity solution platform,
              created to revolutionize how women experience pregnancy care.
              We connect pregnant women with trusted hospitals, clinics,
              scan centers, and labs — all under one digital roof.
            </p>

            <p>
              It's not just a hospital discovery app. It's a complete maternity
              ecosystem built with empathy, technology, and transparency —
              designed to give every expectant mother access to quality care
              and trusted guidance through every step of her journey.
            </p>

            <p>
              By bringing together healthcare providers and patients on a single
              platform, KYM Technologies is eliminating fragmentation and making
              care more accessible, affordable, and trustworthy.
            </p>
          </div>

          {/* RIGHT STATS */}
          <div className="space-y-4">

            {[
              { value: "50+", label: "Partner Clinics" },
              { value: "1000+", label: "Mothers Served" },
              { value: "3 States", label: "Operational Reach" },
              { value: "4.8/5", label: "User Rating" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#F4F6FB] rounded-xl p-4 flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                  ⭐
                </div>
                <div>
                  <p className="text-[#0B1260] font-bold">
                    {item.value}
                  </p>
                  <p className="text-xs text-gray-500 uppercase">
                    {item.label}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>

      {/* TEAM SECTION */}
      <div className="max-w-6xl mx-auto bg-white rounded-2xl border border-gray-200 p-8">

        <p className="text-xs uppercase tracking-widest text-orange-500 mb-2">
          Team
        </p>
        <h2 className="text-xl font-semibold text-[#0B1260] mb-1">
          Core Team
        </h2>
        <p className="text-xs text-gray-400 mb-8">
          The founders and key people driving this mission
        </p>

        {/* TEAM GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            {
              initials: "MR",
              name: "Mohan Rajangam",
              role: "Co-Founder & CEO",
            },
            {
              initials: "DP",
              name: "DhanaPrakesh",
              role: "Co-Founder & CTO",
            },
            {
              initials: "DV",
              name: "Darani Viswanathan",
              role: "Head of Operations",
            },
            {
              initials: "DV",
              name: "Darani Viswanathan",
              role: "Product Lead",
            },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-[#F4F6FB] rounded-xl p-6 text-center hover:shadow-md transition"
            >

              {/* INITIAL BOX */}
              <div className="w-14 h-14 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center text-[#0B1260] font-bold">
                {member.initials}
              </div>

              <p className="text-sm font-semibold text-[#0B1260]">
                {member.name}
              </p>
              <p className="text-xs text-gray-500">
                {member.role}
              </p>

            </div>
          ))}

        </div>
      </div>

    </div>
        <div className="bg-[#F4F6FB] py-4 px-6 flex justify-center">

      {/* CARD */}
      <div className="bg-white border border-gray-200 rounded-3xl p-10 w-full max-w-6xl relative overflow-hidden">
        {/* HEADER */}
        <p className="text-xs uppercase tracking-widest text-orange-500 mb-3 flex items-center gap-2">
          <span className="w-6 h-[2px] bg-orange-500"></span>
          Gallery
        </p>

        <h2 className="text-xl md:text-2xl font-semibold text-[#0B1260] mb-1">
          Product in Action
        </h2>

        <p className="text-sm text-gray-500 mb-10">
          Real moments from the Embryo platform and community
        </p>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {galleryItems.map((item, i) => (
            <div
              key={i}
              className="bg-[#EEF1F6] rounded-2xl h-40 flex items-center justify-center text-3xl hover:shadow-md transition"
            >
              {item}
            </div>
          ))}

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

export default incubatee