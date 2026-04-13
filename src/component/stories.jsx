import React from "react";
import { useNavigate } from "react-router-dom";
const Stories = () => {
  const navigate = useNavigate();
  const menu = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Our Startups", path: "/startups" },
    { name: "Our Ecosystem", path: "/ecosystem" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" }
  ];
  const stories = [
    {
      title: "FarmBridge — Connecting farmers to direct markets",
      desc: "Connecting 500+ farmers to direct markets, reducing dependency on middlemen and increasing farmer income by up to 40%.",
      stats: "500+ farmers • ₹2.4Cr revenue",
    },
    {
      title: "GrameenPay — Digital payments for rural stores",
      desc: "Powering 1,200+ kirana stores with UPI infrastructure, micro-lending, and digital tools.",
      stats: "1,200+ stores • 3 districts",
    },
    {
      title: "VillageDoc — Telemedicine for rural India",
      desc: "Providing specialist consultations to 200+ villages through mobile health units.",
      stats: "200+ villages • 8,000 consults/mo",
    },
    {
      title: "LoomLink — Marketplace for weavers",
      desc: "Connecting 300+ weavers to buyers across India and global markets.",
      stats: "300 artisans • 5 countries",
    },
    {
      title: "SunGram — Solar for rural homes",
      desc: "Affordable solar panels for off-grid homes using pay-as-you-go model.",
      stats: "1,500 homes • 4 districts",
    },
    {
      title: "SkillBridge — Rural skill development",
      desc: "Job-ready training programs for rural youth in digital skills and trades.",
      stats: "5,000+ students • 10 centers",
    },
    {
      title: "AgroSmart — AI-based crop advisory",
      desc: "AI-powered insights for farmers with weather alerts and crop analytics.",
      stats: "10,000 acres • 2 states",
    },
    {
      title: "RuralMove — Last-mile delivery network",
      desc: "Logistics network connecting rural sellers to urban markets.",
      stats: "50 hubs • 20,000 deliveries",
    },
    {
      title: "MicroFund — Rural microfinance platform",
      desc: "Providing micro-loans to small entrepreneurs and SHGs.",
      stats: "₹5Cr disbursed • 3,000 users",
    },
    {
      title: "CareMobile — Mobile health clinics",
      desc: "Healthcare services delivered to remote villages through mobile units.",
      stats: "150 villages • 25,000 patients",
    },
    {
      title: "FreshKart — Farm-to-home delivery",
      desc: "Direct farmer-to-consumer marketplace ensuring fresh produce.",
      stats: "2,000 orders/day • 5 cities",
    },
    {
      title: "WeaveTech — Digital weaving solutions",
      desc: "Smart tools for traditional weavers to modernize production.",
      stats: "800 looms • 6 clusters",
    },
  ];

  const gradients = [
    "from-blue-500 to-indigo-600",
    "from-pink-500 to-purple-600",
    "from-green-500 to-teal-600",
    "from-orange-500 to-red-500",
    "from-cyan-500 to-blue-500",
    "from-violet-500 to-fuchsia-500",
    "from-yellow-500 to-orange-500",
    "from-emerald-500 to-green-700",
    "from-rose-500 to-pink-600",
    "from-sky-500 to-indigo-500",
    "from-lime-500 to-green-600",
    "from-purple-500 to-indigo-700",
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
        <div className='flex items-center gap-5 justify-center mr-10'>
          <button className='border py-2 px-5 rounded-lg border-[#dde2ee] font-medium text-[#4a5175] hover:shadow-xl hover:border-black'>Login</button>
          <button className='border py-2 px-6 rounded-lg bg-[#f97316] border-[#f97316] text-white font-bold'>Get Startd</button>
        </div>
      </div>
    <section className="py-16 px-6 md:px-16 bg-[#f5f7fb] min-h-screen">
      
      {/* Title */}
      <h2 className="text-3xl font-bold text-center mb-12">
        All Business Stories
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {stories.map((item, index) => (
          <div
            key={index}
            className={`p-6 rounded-xl text-white bg-gradient-to-r ${
              gradients[index % gradients.length]
            } transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <h3 className="text-lg font-bold mb-3 leading-snug">
              {item.title}
            </h3>

            <p className="text-sm text-white/90 mb-4">
              {item.desc}
            </p>

            <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
              {item.stats}
            </span>
          </div>
        ))}
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
  );
};

export default Stories;