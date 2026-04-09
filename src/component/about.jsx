import React from 'react'
import { useNavigate } from "react-router-dom";
const about = () => {
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
      {/* Hero */}
      <div className='bg-[#0b1260] min-h-[75vh] '>
        <div className=' ml-20'>
        <p className='pt-25 text-8xl font-extrabold text-white'>
          We Build
          </p>
        <p className='text-white text-8xl font-bold'>
         <span className='font-extralight text-blue-200'>Rural</span>  India's
        </p>
        <p className='text-8xl font-extrabold text-[#f97316]'>
          Future.
        </p>
        </div>
        <div className='flex gap-20 ml-30 mt-15'>
          <div>
          <p className='text-4xl text-white font-bold'>
            2018
            </p>
            <p className='text-[10px] font-bold text-gray-400 mt-1'>
            FOUNDED
            </p>
            <p className='text-[12px] font-medium text-gray-500 text-[12px]'>
            Born in Tamil Nadu to serve rural founders
            </p>
          </div>
          <div>
          <p className='text-4xl text-white font-bold'>
            101 <span className='text-[#f97316]'>+</span>
            </p>
            <p className='text-[10px] font-bold text-gray-400 mt-1'>
            STARTUPS INCUBATED
            </p>
            <p className='text-[12px] font-medium text-gray-500 text-[12px]'>
            From idea stage to market-ready ventures
            </p>
          </div>
          <div>
          <p className='text-4xl text-white font-bold'>
            12Cr
            </p>
            <p className='text-[10px] font-bold text-gray-400 mt-1'>
            REVENUE IMPACT
            </p>
            <p className='text-[12px] font-medium text-gray-500 text-[12px]'>
           Generated across our startup portfolio
            </p>
          </div>
          <div>
          <p className='text-4xl text-white font-bold'>
            8
            </p>
            <p className='text-[10px] font-bold text-gray-400 mt-1'>
            DISTRICT
            </p>
            <p className='text-[12px] text-gray-500 font-medium text-gray-00 text-[12px]'>
            Across Tamil Nadu and growing
            </p>
          </div>
        </div>
      </div>
      <section className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT CONTENT */}
        <div>
          {/* TAG */}
          <p className="text-sm text-orange-500 font-semibold flex items-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-orange-500 inline-block"></span>
            WHO WE ARE
          </p>

          {/* HEADING */}
          <h2 className="text-4xl md:text-5xl font-bold text-[#0f1e6b] leading-tight">
            More Than an Incubator. <br />
            <span className="text-orange-500">A Movement.</span>
          </h2>

          {/* PARAGRAPHS */}
          <p className="mt-6 text-gray-500 leading-relaxed">
            Founded in 2018, Aakam Shine is a{" "}
            <span className="font-semibold text-[#0f1e6b]">
              DPIIT-recognised startup incubator
            </span>{" "}
            based in Sankari, Tamil Nadu. We exist for one reason: to give rural
            founders the same shot at success as anyone from a metro.
          </p>

          <p className="mt-4 text-gray-500 leading-relaxed">
            We run India's only incubator designed entirely around the realities
            of{" "}
            <span className="font-semibold text-[#0f1e6b]">
              first-generation founders
            </span>{" "}
            — vernacular-language sessions, on-site mentorship, flexible
            schedules, and hands-on support from idea to first crore.
          </p>

          <p className="mt-4 text-gray-500 leading-relaxed">
            We don’t run a generic program. Every touchpoint — mentorship,
            curriculum, workspace, funding access — is designed around the{" "}
            <span className="font-semibold text-[#0f1e6b]">
              real lives of rural founders
            </span>{" "}
            at Sankari and Coimbatore.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-6">

          {/* QUOTE BOX */}
          <div className="bg-[#f7f7fb] rounded-xl p-6 border-l-4 border-orange-500 shadow-sm">
            <p className="text-[#0f1e6b] font-semibold leading-relaxed">
              "Geography is not destiny — a founder from{" "}
              <span className="text-orange-500">Sankari</span> deserves the exact
              same shot as one from Silicon Valley."
            </p>

            <p className="text-xs text-gray-400 mt-4 tracking-wider">
              — FOUNDING PRINCIPLE, AAKAM SHINE
            </p>
          </div>

          {/* TEXT CONTENT */}
          <p className="text-gray-500 leading-relaxed">
            Our ecosystem brings together founders, mentors, investors, academic
            institutions, and government bodies united by one belief: that{" "}
            <span className="font-semibold text-[#0f1e6b]">
              rural India's entrepreneurial potential
            </span>{" "}
            is the country's most underused economic asset.
          </p>

          <p className="text-gray-500 leading-relaxed">
            Backed by{" "}
            <span className="font-semibold text-[#0f1e6b]">
              IIT Madras, SIDBI, NASSCOM, EDII India
            </span>
            , and the Tamil Nadu Government, we bridge world-class knowledge with
            ground-level realities.
          </p>

        </div>
      </div>
    </section>
    <section className="bg-[#0f1e6b] text-white py-24 px-6 relative overflow-hidden">

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>
          <p className="text-sm text-orange-500 font-semibold flex items-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-orange-500 inline-block"></span>
            OUR DIRECTION
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Guided by a <br />
            Clear <span className="text-orange-500">Purpose</span>
          </h2>

          <p className="mt-6 text-gray-300 leading-relaxed max-w-lg">
            Everything we do at Aakam Shine is anchored to two foundational
            commitments — a bold vision for what rural India can become, and a
            practical mission that defines how we get there every single day.
          </p>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-6">

          {/* VISION CARD */}
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:scale-[1.02] hover:border-orange-500 transition duration-300">

            <span className="absolute top-4 right-6 text-6xl font-bold text-white/5">
              01
            </span>

            <p className="text-xs text-orange-500 font-semibold mb-2 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-orange-500 inline-block"></span>
              VISION
            </p>

            <h3 className="text-xl font-bold mb-2">
              A thriving rural innovation ecosystem for India
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              To build a strong innovation ecosystem that{" "}
              <span className="font-semibold text-white">
                empowers indigenous talent
              </span>{" "}
              and leverages local knowledge, culture, and technology-driven
              solutions to solve real-world problems — creating lasting economic
              change from the ground up.
            </p>
          </div>

          {/* MISSION CARD */}
          <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 hover:scale-[1.02] hover:border-orange-500 transition duration-300">

            <span className="absolute top-4 right-6 text-6xl font-bold text-white/5">
              02
            </span>

            <p className="text-xs text-orange-500 font-semibold mb-2 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-orange-500 inline-block"></span>
              MISSION
            </p>

            <h3 className="text-xl font-bold mb-2">
              Hands-on support from idea to scale
            </h3>

            <p className="text-gray-300 text-sm leading-relaxed">
              To support value-driven innovators through{" "}
              <span className="font-semibold text-white">
                practical mentoring
              </span>
              , 12-week training programs, collaborative workspaces, and access
              to industry networks that connect startups to markets — enabling
              founders to grow from local champions to national enterprises.
            </p>
          </div>

        </div>
      </div>
    </section>
    <section className="bg-[#f3f5fb] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
          
          <div>
            <p className="text-sm text-orange-500 font-semibold flex items-center gap-2 mb-4">
              <span className="w-6 h-[2px] bg-orange-500"></span>
              OUR EDGE
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-[#0f1e6b] leading-tight">
              Why Founders <br />
              Choose <span className="text-orange-500">Aakam Shine</span>
            </h2>
          </div>

          <p className="text-gray-500 leading-relaxed max-w-lg">
            We provide far more than a workspace. Our model wraps every founder
            in a complete support system — from their first idea to their first
            crore — with no equity taken in early stages.
          </p>

        </div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-6">

          {/* CARD 1 */}
          <div className="bg-white rounded-xl p-6 relative shadow-sm hover:shadow-md transition">
            <span className="absolute top-4 right-6 text-4xl font-bold text-gray-100">01</span>

            <p className="text-xs text-orange-500 font-semibold mb-2">GRASSROOT FOCUS</p>
            <h3 className="text-lg font-bold text-[#0f1e6b] mb-2">
              Grassroot-Committed Approach
            </h3>
            <p className="text-gray-500 text-sm">
              We specialise in supporting first-time founders from rural Tamil Nadu — people who don’t have existing networks or investor connections — with patience and practical guidance.
            </p>
          </div>

          {/* CARD 2 */}
          <div className="bg-white rounded-xl p-6 relative shadow-sm hover:shadow-md transition">
            <span className="absolute top-4 right-6 text-4xl font-bold text-gray-100">02</span>

            <p className="text-xs text-orange-500 font-semibold mb-2">EXPERT MENTORS</p>
            <h3 className="text-lg font-bold text-[#0f1e6b] mb-2">
              Hands-on Mentorship
            </h3>
            <p className="text-gray-500 text-sm">
              Our mentors guide founders through product-market fit, financial modelling, team building, and fundraising — not just theory, but real business decisions at every step.
            </p>
          </div>

          {/* CARD 3 */}
          <div className="bg-white rounded-xl p-6 relative shadow-sm hover:shadow-md transition">
            <span className="absolute top-4 right-6 text-4xl font-bold text-gray-100">03</span>

            <p className="text-xs text-orange-500 font-semibold mb-2">FOUNDER-FRIENDLY</p>
            <h3 className="text-lg font-bold text-[#0f1e6b] mb-2">
              Founder-First Design
            </h3>
            <p className="text-gray-500 text-sm">
              Our programs are designed to fit founders' real lives — flexible schedules, vernacular-language sessions, and on-site support at Sankari and Coimbatore centres.
            </p>
          </div>

          {/* CARD 4 */}
          <div className="bg-white rounded-xl p-6 relative shadow-sm hover:shadow-md transition md:col-span-2">
            <span className="absolute top-4 right-6 text-4xl font-bold text-gray-100">04</span>

            <p className="text-xs text-orange-500 font-semibold mb-2">SECTOR INNOVATION PROGRAMS</p>
            <h3 className="text-lg font-bold text-[#0f1e6b] mb-2">
              Deep Industry Networks Across 4 Key Sectors
            </h3>
            <p className="text-gray-500 text-sm">
              We run dedicated tracks for AgriTech, Rural FinTech, HealthTech, and Textile Innovation — connecting startups directly to buyers, distributors, government bodies, and co-investors who operate in each sector. Our portfolio companies have collectively reached over 50 industry partners.
            </p>
          </div>

          {/* CARD 5 */}
          <div className="bg-white rounded-xl p-6 relative shadow-sm hover:shadow-md transition">
            <span className="absolute top-4 right-6 text-4xl font-bold text-gray-100">05</span>

            <p className="text-xs text-orange-500 font-semibold mb-2">ACCESS TO CAPITAL</p>
            <h3 className="text-lg font-bold text-[#0f1e6b] mb-2">
              Funding Without Friction
            </h3>
            <p className="text-gray-500 text-sm">
              From non-dilutive seed grants of up to ₹5L to SIDBI-linked growth funding and angel introductions — we help founders access capital at every stage.
            </p>
          </div>

          {/* CARD 6 */}
          <div className="bg-white rounded-xl p-6 relative shadow-sm hover:shadow-md transition">
            <span className="absolute top-4 right-6 text-4xl font-bold text-gray-100">06</span>

            <p className="text-xs text-orange-500 font-semibold mb-2">EDUCATIONAL BACKBONE</p>
            <h3 className="text-lg font-bold text-[#0f1e6b] mb-2">
              Rooted in Educational Institutions
            </h3>
            <p className="text-gray-500 text-sm">
              Supported by IIT Madras, EDII India, and leading Tamil Nadu colleges, we bring world-class academic expertise directly to rural founders who need it most.
            </p>
          </div>

        </div>

      </div>
    </section>
    <section className="bg-[#f3f5fb] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-12">
          <p className="text-sm text-orange-500 font-semibold flex items-center gap-2 mb-4">
            <span className="w-6 h-[2px] bg-orange-500"></span>
            OUR PEOPLE
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#0f1e6b] leading-tight">
            The People Who Make <br />
            <span className="text-orange-500">It All Possible</span>
          </h2>

          <p className="text-gray-500 mt-4 max-w-lg">
            Pillars of support comprising our core team, our mentors, and our stakeholders — with deep expertise and real-life experience.
          </p>
        </div>

        {/* BOARD OF DIRECTORS */}
        <h4 className="text-xs text-gray-400 tracking-widest mb-4">
          BOARD OF DIRECTORS
        </h4>

        <div className="grid md:grid-cols-3 gap-6 mb-12">

          {/* CARD */}
          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="bg-blue-900 h-40 flex items-center justify-center text-white text-3xl font-bold">
              MR
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-[#0f1e6b]">
                Mr. Mohan Raj
              </h3>
              <p className="text-orange-500 text-xs font-semibold mb-2">
                CHAIRPERSON
              </p>
              <p className="text-gray-500 text-sm">
                Veteran entrepreneur and social innovator with 25+ years in rural development.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-orange-400">
            <div className="bg-orange-500 h-40 flex items-center justify-center text-white text-3xl font-bold">
              SP
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-[#0f1e6b]">
                Dr. Saranya Prakash
              </h3>
              <p className="text-orange-500 text-xs font-semibold mb-2">
                DIRECTOR – STRATEGY
              </p>
              <p className="text-gray-500 text-sm">
                PhD in Rural Economics from IIT Madras. Leads incubation strategy.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-purple-600 to-orange-500 h-40 flex items-center justify-center text-white text-3xl font-bold">
              KS
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-[#0f1e6b]">
                Mr. Karthik Subramanian
              </h3>
              <p className="text-orange-500 text-xs font-semibold mb-2">
                DIRECTOR – INVESTMENTS
              </p>
              <p className="text-gray-500 text-sm">
                Angel investor and SIDBI fund manager supporting startups.
              </p>
            </div>
          </div>

        </div>

        {/* CORE TEAM */}
        <h4 className="text-xs text-gray-400 tracking-widest mb-4">
          CORE TEAM
        </h4>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-6">

          {/* SMALL CARD */}
          {[
            { name: "Anbu Priya", role: "PROGRAM LEAD", initials: "AP", color: "bg-blue-900" },
            { name: "Rajan Velu", role: "MENTOR COORDINATOR", initials: "RV", color: "bg-orange-500" },
            { name: "Meena Selvam", role: "OPERATIONS", initials: "MS", color: "bg-blue-900" },
            { name: "Tamil Kumaran", role: "COMMUNITY MANAGER", initials: "TK", color: "bg-gradient-to-r from-purple-600 to-orange-500" },
            { name: "Preethi Latha", role: "FINANCE LEAD", initials: "PL", color: "bg-gradient-to-r from-red-500 to-orange-500" },
            { name: "Sudhan Das", role: "GROWTH & PARTNERSHIPS", initials: "SD", color: "bg-gradient-to-r from-orange-500 to-purple-700" },
          ].map((person, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden shadow-sm text-center"
            >
              <div className={`${person.color} h-24 flex items-center justify-center text-white font-bold text-lg`}>
                {person.initials}
              </div>

              <div className="p-3">
                <p className="text-sm font-semibold text-[#0f1e6b]">
                  {person.name}
                </p>
                <p className="text-[10px] text-orange-500 font-semibold">
                  {person.role}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
     {/* CTA SECTION */}
     <section className="bg-gradient-to-r from-[#16236b] to-[#1e2f8a] text-white py-20 px-6 text-center relative overflow-hidden">
        
        {/* GRID BACKGROUND */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Ready to{" "}
            <span className="text-orange-500">Start Your Journey</span>{" "}
            <br />
            With Aakam Shine?
          </h2>

          <p className="text-gray-300 mt-4">
            Whether you're a founder, mentor, or investor — there's a place for
            you in our ecosystem. Let's build rural India's future together.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">
              Apply to Incubate →
            </button>

            <button className="border border-white/40 px-6 py-3 rounded-lg hover:bg-white/10 transition">
              Talk to Our Team
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#0f1e6b] text-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">

          {/* LEFT */}
          <div>
            <h2 className="text-xl font-bold mb-4">
              Aakam <span className="text-orange-500">Shine</span>
            </h2>

            <p className="text-gray-300 text-sm leading-relaxed">
              Building a transformative rural incubation ecosystem to empower
              rural innovation and drive equitable economic development across India.
            </p>

            {/* SOCIAL */}
            <div className="flex gap-3 mt-6">
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-sm hover:bg-white/10 cursor-pointer">
                X
              </div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-sm hover:bg-white/10 cursor-pointer">
                in
              </div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-sm hover:bg-white/10 cursor-pointer">
                f
              </div>
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-sm hover:bg-white/10 cursor-pointer">
                ▶
              </div>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300 tracking-widest">
              QUICK LINKS
            </h4>

            <ul className="space-y-2 text-gray-300 text-sm">
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
            <h4 className="text-sm font-semibold mb-4 text-gray-300 tracking-widest">
              CONTACT US
            </h4>

            <ul className="space-y-3 text-gray-300 text-sm">
              <li>📍 Pullipalaiyam, Sankari, Tamil Nadu, India, 637304</li>
              <li>📞 +91 7200 117 774</li>
              <li>✉️ info@aakamshine.com</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h4 className="text-sm font-semibold mb-4 text-gray-300 tracking-widest">
              NEWSLETTER
            </h4>

            <p className="text-gray-300 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and innovations.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-l-md bg-[#1e2f8a] text-white placeholder-gray-400 focus:outline-none"
              />
              <button className="bg-orange-500 px-4 py-2 rounded-r-md hover:bg-orange-600">
                SUBSCRIBE
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">
          <p>© 2025 Aakam Shine. All rights reserved.</p>

          <div className="flex gap-4 mt-2 md:mt-0">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Use</span>
            <span className="hover:text-white cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default about