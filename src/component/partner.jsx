import React from "react";
import { useNavigate } from "react-router-dom";
const Partner = () => {
   const navigate = useNavigate();
  
    const menu = [
      { name: "Home", path: "/home" },
      { name: "About Us", path: "/about" },
      { name: "Our Startups", path: "/startups" },
      { name: "Our Ecosystem", path: "/ecosystem" },
      { name: "Events", path: "/events" },
      { name: "Contact", path: "/contact" },]
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
      {/* HERO */}
      <div className="bg-[#0B1260] text-white">
        <div className="grid md:grid-cols-2 gap-10 px-6 md:px-20 pt-20 pb-10">

          {/* LEFT */}
          <div className="flex flex-col justify-center md:pr-10 border-r border-white/10">
            <p className="text-xs uppercase tracking-widest text-white/40 mb-6">
              Home / <span className="text-orange-500">Partner with Aakam Shine</span>
            </p>

            <div className="flex items-center gap-2 bg-orange-500/10 border border-orange-500/30 rounded-full px-4 py-1 w-fit mb-6">
              <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-xs">
                🤝
              </div>
              <span className="text-xs uppercase text-white/70 font-semibold">
                Aakam Shine Partner Network
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              Partner with
              <span className="block italic font-light text-white/40">
                Aakam Shine
              </span>
            </h1>

            <p className="text-sm text-white/50 max-w-md">
              Join our growing ecosystem as a strategic partner.
            </p>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center md:pl-10">
            {["Submit Your Application", "Partnership Review", "Collaborate & Grow"].map((t, i) => (
              <div key={i} className="flex gap-4 py-5 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center text-orange-500 font-bold">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div>
                  <h4 className="font-semibold">{t}</h4>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* FORM */}
      <div className="bg-[#F4F6FB] py-16 px-4 flex justify-center">
        <div className="w-full max-w-5xl bg-white rounded-2xl border border-gray-200 p-8 md:p-12">

          {/* Header */}
          <div className="mb-8">
            <p className="text-xs uppercase text-orange-500 font-semibold mb-2">
              Section 1
            </p>
            <h2 className="text-lg font-bold text-[#0B1260]">
              Organisation Information
            </h2>
          </div>

          {/* GRID */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Input Fields */}
            {[
              "Organisation Name",
              "Legal Business Name",
              "Contact Person Name",
              "Designation / Title",
              "Primary Email Address",
              "Secondary Email Address",
              "Phone Number",
              "Company Website",
              "LinkedIn Profile",
              "Social Media Link"
            ].map((label, i) => (
              <div key={i}>
                <label className="text-xs font-semibold uppercase text-gray-700">
                  {label}
                </label>
                <input
                  className="mt-2 w-full bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 text-sm"
                  placeholder={label}
                />
              </div>
            ))}

            {/* Full Width Fields */}
            <div className="md:col-span-2">
              <label className="text-xs font-semibold uppercase text-gray-700">
                Physical Address
              </label>
              <input placeholder="Physical Address" className="mt-2 w-full bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                City, State, Country
              </label>
              <input placeholder=" City, State, Country" className="mt-2 w-full bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                PIN Code
              </label>
              <input placeholder="PIN Code" className="mt-2 w-full bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                No. of Global Staff
              </label>
              <input placeholder=" No. of Global Staff" type="number" className="mt-2 w-full bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                GST Number
              </label>
              <input placeholder="GST Number" className="mt-2 w-full bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 text-sm" />
            </div>

            <div>
              <label className="text-xs font-semibold uppercase text-gray-700">
                PAN Number
              </label>
              <input placeholder="PAN Number" className="mt-2 w-full bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 text-sm" />
            </div>

            {/* Select */}
            <div className="md:col-span-2">
              <label className="text-xs font-semibold uppercase text-gray-700">
                Organisation Type
              </label>
              <select className="mt-2 w-full bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 text-sm">
                <option>Select organisation type</option>
                <option>Private Limited company</option>
                <option>Public Limited Company</option>
                <option>LLP (Limited Liability Partnership)</option>
                <option>Sole Proprietorship</option>
                <option > Non-Profit Organization/NGO</option>
                <option>Education Institution</option>
                <option>Government Organization</option>
                <option>International Company</option>
                <option>Others</option>
              </select>
            </div>

          </div>

        </div>
      </div>
{/* SECTION 2 */}
<div className="bg-[#F4F6FB] py-10 px-4 flex justify-center">
  <div className="w-full max-w-5xl bg-white rounded-2xl border border-gray-200 p-8 md:p-12 relative">
    {/* Header */}
    <div className="mb-6">
      <p className="text-xs uppercase tracking-[0.2em] text-orange-500 font-semibold mb-2">
        Section 2
      </p>
      <h2 className="text-lg font-bold text-[#0B1260]">
        Partnership Category
      </h2>
      <p className="text-sm text-gray-400">
        Area type of partnership you are interested in
      </p>
    </div>

    {/* Checkbox Section */}
    <div className="space-y-3">

      <p className="text-xs font-semibold uppercase text-gray-700">
        Primary Partnership Interest
        <span className="text-gray-400 text-[10px] normal-case ml-2">
          (Select all that apply)
        </span>
      </p>

      {[
        "Mentor/Advisory Firm — Provide mentorship and guidance to startups",
        "Services Provider Partner — Offer professional services (Legal, Accounting, Marketing etc.)",
        "Technology Partner — Provide technology solutions and platforms",
        "Academic Partner — Education institutions and research organisations",
        "Corporate Partner — Large corporates for collaboration and innovation",
        "Media Partner — Marketing, PR and investor relations",
        "Infrastructure Partner — Physical spaces, equipment, or facilities",
        "Government Partner — Policy support and regulatory guidance",
        "International Partner — Global expansion and cross-market collaboration",
        "Funding Partner — Alternate funding sources (or Equity Investment)",
        "Other"
      ].map((item, i) => (
        <label
          key={i}
          className="flex items-start gap-3 bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 cursor-pointer hover:border-indigo-400 transition"
        >
          <input type="checkbox" className="mt-1 accent-indigo-600" />
          <span className="text-sm text-gray-700">{item}</span>
        </label>
      ))}

    </div>

    {/* Textarea */}
    <div className="mt-6">
      <label className="text-xs font-semibold uppercase text-gray-700">
        Specific Services / Support You Offer
        <span className="text-orange-500 ml-1">*</span>
      </label>

      <textarea
        placeholder="Describe in detail the services, resources, or support your organisation can offer to the startups and ecosystem…"
        className="mt-2 w-full bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 text-sm min-h-[120px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

  </div>
</div>
{/* SECTION 3 */}
<div className="bg-[#F4F6FB] py-10 px-4 flex justify-center">
  <div className="w-full max-w-5xl bg-white rounded-2xl border border-gray-200 p-8 md:p-12 relative">

  

    {/* Header */}
    <div className="mb-6">
      <p className="text-xs uppercase tracking-[0.2em] text-orange-500 font-semibold mb-2">
        Section 3
      </p>
      <h2 className="text-lg font-bold text-[#0B1260]">
        Organisation Background
      </h2>
      <p className="text-sm text-gray-400">
        Tell us about your organisation's background and experience
      </p>
    </div>

    {/* GRID */}
    <div className="grid md:grid-cols-2 gap-6">

      {/* Company Size */}
      <div>
        <label className="text-xs font-semibold uppercase text-gray-700">
          Company Size <span className="text-orange-500">*</span>
        </label>
        <select className="mt-2 w-full bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>Select company size</option>
          <option>2–10 employees</option>
          <option>11–50 employees</option>
          <option>51–200 employees</option>
          <option>201–500 employees</option>
          <option>500+ employees</option>
        </select>
      </div>

      {/* Revenue */}
      <div>
        <label className="text-xs font-semibold uppercase text-gray-700">
          Annual Revenue Budget
        </label>
        <select className="mt-2 w-full bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500">
          <option>Select revenue range</option>
          <option>Below 10 Lakhs</option>
          <option>10 Lakhs - 50Lakhs</option>
          <option>50 Lakhs – 1 Crore</option>
          <option>5 Crores – ₹25Crores</option>
          <option>Above 25 Crores</option>
          <option>Prefer not to disclose</option>
        </select>
      </div>

      {/* Experience */}
      <div className="md:col-span-2">
        <label className="text-xs font-semibold uppercase text-gray-700">
          Years of Experience in Industry <span className="text-orange-500">*</span>
        </label>
        <input
          placeholder="e.g. 8 years in FinTech and Regulatory Advisory…"
          className="mt-2 w-full bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Industry Focus */}
      <div className="md:col-span-2">
        <label className="text-xs font-semibold uppercase text-gray-700">
          Industry / Sector Focus
          <span className="text-orange-500 ml-1">*</span>
          <span className="text-gray-400 text-[10px] normal-case ml-2">
            (Multiple selections allowed)
          </span>
        </label>

        <div className="grid md:grid-cols-3 gap-3 mt-3">
          {[
            "Healthcare & Medtech",
            "Human Resources",
            "Marketing & Advertising",
            "Information Technology",
            "Sustainability & CleanTech",
            "Consulting Services",
            "Financial Services",
            "Manufacturing",
            "Food & Agriculture",
            "Education & Training",
            "Media & Entertainment",
            "Legal Services",
            "Agri & Rural Innovation",
            "Logistics & Supply Chain",
            "Other"
          ].map((item, i) => (
            <label
              key={i}
              className="flex items-center gap-2 bg-[#F4F6FB] border border-gray-200 rounded-lg px-3 py-2 cursor-pointer hover:border-indigo-400 transition"
            >
              <input type="checkbox" className="accent-indigo-600" />
              <span className="text-sm text-gray-700">{item}</span>
            </label>
          ))}
        </div>
      </div>

    </div>

  </div>
</div>
{/* SECTION 4 */}
<div className="bg-[#F4F6FB] py-10 px-4 flex justify-center">
  <div className="w-full max-w-5xl bg-white rounded-2xl border border-gray-200 p-8 md:p-12 relative">


   

    {/* Header */}
    <div className="mb-6">
      <p className="text-xs uppercase tracking-[0.2em] text-orange-500 font-semibold mb-2">
        Section 4
      </p>
      <h2 className="text-lg font-bold text-[#0B1260]">
        Submit Application
      </h2>
      <p className="text-sm text-gray-400">
        Complete your partnership application
      </p>
    </div>

    {/* PRIORITY CHECKBOX */}
    <div>
      <label className="text-xs font-semibold uppercase text-gray-700">
        Priority / Sector Focus
        <span className="text-orange-500 ml-1">*</span>
        <span className="text-gray-400 text-[10px] normal-case ml-2">
          (Multiple selections allowed)
        </span>
      </label>

      <div className="grid md:grid-cols-3 gap-3 mt-3">
        {[
          "Healthcare & Medtech",
          "Fintech",
          "Agritech",
          "Edtech",
          "CleanEnergy",
          "AI & E-Commerce",
          "IoT & Hardware",
          "Rural Innovation",
          "Other"
        ].map((item, i) => (
          <label
            key={i}
            className="flex items-center gap-2 bg-[#F4F6FB] border border-gray-200 rounded-lg px-3 py-2 cursor-pointer hover:border-indigo-400 transition"
          >
            <input type="checkbox" className="accent-indigo-600" />
            <span className="text-sm text-gray-700">{item}</span>
          </label>
        ))}
      </div>
    </div>

    {/* INFO BOX */}
    <div className="mt-6 bg-[#F9FAFF] border border-gray-200 rounded-xl p-5 border-l-4 border-orange-500">
      <h4 className="font-semibold text-[#0B1260] mb-3">
        What happens after you submit?
      </h4>

      <ul className="space-y-2 text-sm text-gray-600">
        <li className="flex gap-2">
          <span className="text-orange-500">→</span>
          Review your application within 7–10 business days
        </li>
        <li className="flex gap-2">
          <span className="text-orange-500">→</span>
          Conduct initial screening based on partnership criteria & alignment
        </li>
        <li className="flex gap-2">
          <span className="text-orange-500">→</span>
          Provide partnership agreement and onboarding protocols
        </li>
        <li className="flex gap-2">
          <span className="text-orange-500">→</span>
          Begin collaboration with appropriate partners
        </li>
      </ul>
    </div>

    {/* COMMENTS */}
    <div className="mt-6">
      <label className="text-xs font-semibold uppercase text-gray-700">
        Additional Comments / Questions
      </label>

      <textarea
        placeholder="Any other information you'd like to share, or questions you have for our partnerships team…"
        className="mt-2 w-full bg-[#F4F6FB] border border-gray-200 rounded-lg px-4 py-3 text-sm min-h-[100px] focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
    </div>

    {/* DECLARATIONS */}
    <div className="mt-6 space-y-3 text-sm text-gray-600">
      <label className="flex items-start gap-2">
        <input type="checkbox" className="mt-1 accent-indigo-600" />
        I certify that all information provided is accurate and that I am authorised to represent my organisation.
      </label>

      <label className="flex items-start gap-2">
        <input type="checkbox" className="mt-1 accent-indigo-600" />
        I agree to maintain confidentiality and abide by Aakam Shine's partnership policies and code of conduct.
      </label>

      <label className="flex items-start gap-2">
        <input type="checkbox" className="mt-1 accent-indigo-600" />
        I consent to the processing of organisational data for partnership evaluation and communication purposes.
      </label>
    </div>

    {/* BUTTONS */}
    <div className="mt-8 flex gap-4">
      <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold px-6 py-3 rounded-lg shadow">
        Submit Partnership Application →
      </button>

      <button className="border border-gray-300 text-gray-600 px-6 py-3 rounded-lg hover:border-indigo-500 hover:text-indigo-600">
        Reset Form
      </button>
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
  );
};

export default Partner;