import React from 'react'
import {
  Megaphone,
  Calendar,
  Rocket,
  Trophy,
  TrendingUp,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
const subscribe = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className='flex min-h-[40vh] bg-[#0b1260] items-center pl-10'>
        <div>
          <p className='text-white text-7xl font-bold'>
            Stay <span className='text-[#8890aa] font-light '>Connected</span>
          </p>
          <p className='text-white text-7xl font-bold'>
            With <span className='text-[#f97316]'>Aakam Shine</span> 
          </p>
        </div>
      </div>
      <section className="bg-[#f3f5fb] py-20 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* LEFT SIDE */}
        <div>
          <p className="text-orange-500 text-sm font-semibold mb-4">
            — WHAT YOU’LL GET
          </p>

          <h2 className="text-4xl font-bold text-[#0f1e6b] leading-tight mb-4">
            Everything You Need to <br />
            <span className="text-orange-500">Stay Ahead</span>
          </h2>

          <p className="text-gray-500 mb-8 max-w-md">
            Get the latest updates on incubation programs, startup opportunities,
            workshops, and events — delivered straight to your inbox.
          </p>

          {/* CARDS */}
          <div className="grid grid-cols-2 gap-4">
          {[
  {
    title: "Program Updates",
    desc: "Latest news about incubation programs, application deadlines, and selection updates.",
    icon: <Megaphone size={18} />,
  },
  {
    title: "Events & Workshops",
    desc: "Upcoming events, webinars, and hands-on workshops to grow your startup skills.",
    icon: <Calendar size={18} />,
  },
  {
    title: "Startup Opportunities",
    desc: "Exclusive opportunities for funding, partnerships, and accelerator programs.",
    icon: <Rocket size={18} />,
  },
  {
    title: "Success Stories",
    desc: "Real stories of startups that succeeded through our incubation program.",
    icon: <Trophy size={18} />,
  },
  {
    title: "Industry Insights",
    desc: "Insights on industry trends, market analysis, and innovation updates.",
    icon: <TrendingUp size={18} />,
  },
  {
    title: "Monthly Newsletter",
    desc: "A monthly digest of all the important happenings at Aakam Shine.",
    icon: <Mail size={18} />,
  },
].map((item, i) => (
  <div
    key={i}
    className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md  hover:border-[#f97316] "
  >
    <div className="w-10 h-10 bg-blue-900 text-white flex items-center justify-center rounded-lg mb-3">
      {item.icon}
    </div>
    <h4 className="font-semibold text-[#0f1e6b] text-sm">
      {item.title}
    </h4>
    <p className="text-gray-400 text-xs mt-1">
      {item.desc}
    </p>
  </div>
))}

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">

          <p className="text-orange-500 text-sm font-semibold mb-2">
            • JOIN OUR COMMUNITY
          </p>

          <h3 className="text-xl font-bold text-[#0f1e6b] mb-2">
            Subscribe to Our Updates
          </h3>

          <p className="text-gray-500 text-sm mb-6">
            Never miss an important announcement or opportunity.
          </p>

          {/* FORM */}
          <form className="space-y-4">

            <div>
              <label className="text-sm font-medium text-gray-600">
                FULL NAME *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 text-[#8890aa] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#eaf2ff]"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#8890aa]">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                placeholder="your.email@example.com"
                className="w-full mt-1 px-4 py-2 rounded-lg border border-gray-300 text-[#8890aa] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#eaf2ff]"
              />
            </div>

            {/* CHECKBOX OPTIONS */}
            <div>
              <label className="text-sm font-medium text-gray-600">
                I'M INTERESTED IN
              </label>

              <div className="space-y-2 mt-2">

                {[
                  "I'm a Startup Founder",
                  "I'm a Mentor / Professional",
                  "I'm a Student Innovator",
                  "I'm an Investor / Partner",
                ].map((item, i) => (
                  <label
                    key={i}
                    className="flex items-center gap-2 bg-[#eaf2ff] px-3 py-2 rounded-lg cursor-pointer"
                  >
                    <input type="checkbox" />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}

              </div>
            </div>

            {/* TERMS */}
            <div className="flex items-start gap-2 text-sm text-gray-500">
              <input type="checkbox" className="mt-1" />
              <p>
                By subscribing, you agree to receive communications.
                You can unsubscribe anytime.
              </p>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
            >
              Subscribe Now →
            </button>

            

          </form>
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

export default subscribe