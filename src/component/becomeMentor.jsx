import React from 'react'
import { useNavigate } from "react-router-dom";
const becomeMentor = () => {
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
      <section className="relative bg-[#0B1260] text-white px-6 md:px-20 py-24 overflow-hidden">

      {/* GRID BACKGROUND */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "20px 20px, 60px 60px, 60px 60px",
        }}
      />

      {/* RIGHT CIRCLES */}
      <div className="absolute right-0 top-1/4 w-[500px] h-[500px] border border-white/10 rounded-full"></div>
      <div className="absolute right-10 top-1/3 w-[350px] h-[350px] border border-white/10 rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Breadcrumb */}
          <p className="text-xs tracking-widest text-white/40 mb-6">
            HOME / <span className="text-orange-400">BECOME A MENTOR</span>
          </p>

          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-400/40 rounded-full text-xs mb-6">
            ⭐ AAKAM SHINE MENTOR NETWORK
          </div>

          {/* Title */}
          <h1 className="leading-[0.9] font-bold mb-6">
            <span className="block text-5xl md:text-7xl">
              Join Aakam Shine
            </span>
            <span className="block text-white/40 italic text-5xl md:text-7xl">
              as a Mentor
            </span>
          </h1>

          {/* Description */}
          <p className="text-white/60 max-w-md leading-relaxed">
            Lend your expertise to promising startups. Share domain knowledge,
            broaden your network, and drive the next wave of innovation in Tamil Nadu.
          </p>
        </div>

        {/* RIGHT SIDE (STEPS) */}
        <div className="relative">

          <p className="text-xs text-white/40 tracking-widest mb-10">
            HOW IT WORKS
          </p>

          <div className="space-y-12 relative">

            {/* Vertical Line */}
            <div className="absolute left-5 top-4 bottom-0 w-px bg-white/10"></div>

            {/* STEP 1 */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 flex items-center justify-center border border-orange-400/40 rounded-lg text-orange-400 font-bold">
                01
              </div>
              <div>
                <h3 className="font-semibold text-lg">Submit Your Profile</h3>
                <p className="text-white/50 text-sm">
                  Share your expertise and mentorship preferences
                </p>
              </div>
            </div>

            {/* STEP 2 */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 flex items-center justify-center border border-orange-400/40 rounded-lg text-orange-400 font-bold">
                02
              </div>
              <div>
                <h3 className="font-semibold text-lg">Get Onboarded</h3>
                <p className="text-white/50 text-sm">
                  Our team reviews and onboards selected mentors
                </p>
              </div>
            </div>

            {/* STEP 3 */}
            <div className="flex items-start gap-6">
              <div className="w-10 h-10 flex items-center justify-center border border-orange-400/40 rounded-lg text-orange-400 font-bold">
                03
              </div>
              <div>
                <h3 className="font-semibold text-lg">Start Mentoring</h3>
                <p className="text-white/50 text-sm">
                  Connect with matched startups and drive impact
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
    <section className="bg-[#F4F6FB] py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* ================= SECTION 1 ================= */}
        <div className="bg-white rounded-2xl border border-gray-200 relative overflow-hidden p-8">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

          <p className="text-xs text-orange-500 tracking-widest mb-2">SECTION 1</p>

          <h2 className="text-xl font-bold text-[#0B1260]">
            Personal Information
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Tell us about yourself
          </p>

          {/* FORM */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Full Name <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Email Address <span className="text-orange-500">*</span>
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Mobile Number <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="+91 XXXXX XXXXX"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                LinkedIn Profile URL
              </label>
              <input
                type="text"
                placeholder="https://linkedin.com/in/yourprofile"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* FILE */}
          <div className="mt-6">
            <label className="text-xs font-semibold uppercase text-gray-700">
              Pitch Deck <span className="text-orange-500">*</span>
            </label>

            <input
              type="file"
              className="mt-2 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4 file:rounded-lg
              file:border file:border-gray-300 file:bg-[#F1F3F8]
              file:text-sm file:font-medium hover:file:bg-gray-200"
            />
          </div>
        </div>

        {/* ================= SECTION 2 ================= */}
        <div className="bg-white rounded-2xl border border-gray-200 relative overflow-hidden p-8">
          
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

          <p className="text-xs text-orange-500 tracking-widest mb-2">SECTION 2</p>

          <h2 className="text-xl font-bold text-[#0B1260]">
            Professional Background
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Your professional experience and expertise
          </p>

          {/* FORM */}
          <div className="grid md:grid-cols-2 gap-6">

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Current Organisation & Role <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. Acme Corp — Head of Product"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Current Role / Title <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. CEO, CTO, Founder"
                className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                Years of Experience <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 12"
                className="mt-2 w-40 px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          {/* INDUSTRY */}
          <div className="mt-6">
            <label className="text-xs font-semibold uppercase text-gray-700">
              Industry Expertise <span className="text-orange-500">*</span>
            </label>

            <div className="grid md:grid-cols-3 gap-4 mt-2">
              {[
                "Healthcare & Medtech",
                "EdTech",
                "AgriTech",
                "CleanTech",
                "FinTech",
                "Other",
              ].map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 bg-[#F1F3F8] border border-gray-300 px-4 py-2 rounded-lg cursor-pointer"
                >
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* TEXTAREA */}
          <div className="mt-6">
            <label className="text-xs font-semibold uppercase text-gray-700">
              Key Skills & Competencies <span className="text-orange-500">*</span>
            </label>
            <textarea
              placeholder="List your core skills — e.g. fundraising, product strategy..."
              className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] min-h-[110px] focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* RADIO */}
          <div className="mt-6">
            <label className="text-xs font-semibold uppercase text-gray-700">
              Previous Mentoring Experience <span className="text-orange-500">*</span>
            </label>

            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2 px-4 py-2 bg-[#F1F3F8] border border-gray-300 rounded-lg cursor-pointer">
                <input type="radio" name="mentor" />
                Yes
              </label>

              <label className="flex items-center gap-2 px-4 py-2 bg-[#F1F3F8] border border-gray-300 rounded-lg cursor-pointer">
                <input type="radio" name="mentor" defaultChecked />
                No
              </label>
            </div>
          </div>

        </div>

      </div>
    </section>
     <section className="bg-[#F4F6FB] py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto space-y-10">

        {/* ================= SECTION 3 ================= */}
        <div className="bg-white rounded-2xl border border-gray-200 relative overflow-hidden p-8">

          {/* TOP GRADIENT */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

          <p className="text-xs text-orange-500 tracking-widest mb-2">SECTION 3</p>

          <h2 className="text-xl font-bold text-[#0B1260]">
            Mentorship Preferences
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            How you'd like to engage with startups
          </p>

          {/* CHECKBOX GRID */}
          <div>
            <label className="text-xs font-semibold uppercase text-gray-700">
              Preferred Engagement Mode <span className="text-orange-500">*</span>
            </label>

            <div className="grid md:grid-cols-2 gap-4 mt-3">
              {[
                "One-on-one sessions",
                "Group workshops",
                "Panel discussions",
                "Virtual calls",
              ].map((item, i) => (
                <label
                  key={i}
                  className="flex items-center gap-2 bg-[#F1F3F8] border border-gray-300 px-4 py-3 rounded-lg cursor-pointer"
                >
                  <input type="checkbox" />
                  {item}
                </label>
              ))}
            </div>
          </div>

          {/* AVAILABILITY */}
          <div className="mt-6">
            <label className="text-xs font-semibold uppercase text-gray-700">
              Availability <span className="text-orange-500">*</span>
            </label>

            <textarea
              placeholder="Describe your weekly availability — hours per week, preferred days/times..."
              className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] min-h-[100px] focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* TOPICS */}
          <div className="mt-6">
            <label className="text-xs font-semibold uppercase text-gray-700">
              Preferred Mentorship Topics <span className="text-orange-500">*</span>
            </label>

            <textarea
              placeholder="List the specific topics or domains where you'd like to provide guidance..."
              className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] min-h-[100px] focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        {/* ================= SECTION 4 ================= */}
        <div className="bg-white rounded-2xl border border-gray-200 relative overflow-hidden p-8">

          {/* TOP GRADIENT */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

          <p className="text-xs text-orange-500 tracking-widest mb-2">SECTION 4</p>

          <h2 className="text-xl font-bold text-[#0B1260]">
            Motivation & Value
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Your motivations and what you bring to the ecosystem
          </p>

          {/* WHY */}
          <div>
            <label className="text-xs font-semibold uppercase text-gray-700">
              Why do you want to mentor at Aakam Shine? <span className="text-orange-500">*</span>
            </label>

            <textarea
              placeholder="Tell us what motivates you to mentor — your passion for rural innovation, entrepreneurship, or community impact..."
              className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] min-h-[100px] focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* VALUE */}
          <div className="mt-6">
            <label className="text-xs font-semibold uppercase text-gray-700">
              What value will you bring to startups? <span className="text-orange-500">*</span>
            </label>

            <textarea
              placeholder="Describe the unique perspective, network, or expertise you'll offer..."
              className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] min-h-[100px] focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* EXPECTATIONS */}
          <div className="mt-6">
            <label className="text-xs font-semibold uppercase text-gray-700">
              Expectations from Aakam Shine Ecosystem <span className="text-orange-500">*</span>
            </label>

            <textarea
              placeholder="What do you expect from us in return — support, recognition, co-creation opportunities, network access?"
              className="mt-2 w-full px-4 py-3 rounded-lg border border-gray-300 bg-[#F1F3F8] min-h-[100px] focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

      </div>
    </section>
     <section className="bg-[#F4F6FB] py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto">

        {/* CARD */}
        <div className="bg-white rounded-2xl border border-gray-200 relative overflow-hidden p-8">

          {/* TOP GRADIENT */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-600"></div>

          {/* HEADER */}
          <p className="text-xs text-orange-500 tracking-widest mb-2">
            SECTION 5
          </p>

          <h2 className="text-xl font-bold text-[#0B1260]">
            Consent & Agreements
          </h2>

          <p className="text-gray-500 text-sm mb-6">
            Please review and agree to our terms
          </p>

          {/* INFO BOX */}
          <div className="bg-[#EEF1F7] rounded-xl p-4 text-sm text-gray-600 leading-relaxed">
            By submitting this application, you confirm that all information
            provided is accurate. You agree to maintain professional standards
            and confidentiality in all mentorship engagements pursuant to Aakam
            Shine's Mentor Guidelines and Privacy Policy. Aakam Shine reserves
            the right to accept or decline any application at its discretion.
          </div>

          {/* CHECKBOXES */}
          <div className="mt-6 space-y-4">

            <label className="flex items-center gap-3 text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4" />
              I agree to share resources and time as per program guidelines.
            </label>

            <label className="flex items-center gap-3 text-sm text-gray-700">
              <input type="checkbox" className="w-4 h-4" />
              I have read and accept the Mentor Guidelines and Privacy Policy{" "}
              <span className="text-orange-500">*</span>
            </label>

          </div>

          {/* BUTTONS */}
          <div className="flex items-center gap-4 mt-8">

            <button className="bg-[#0B1260] text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
              Submit Application →
            </button>

            <button className="px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition">
              Reset Form
            </button>

          </div>

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

export default becomeMentor