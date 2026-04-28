import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
const nextgen = () => {
    const [active, setActive] = useState("All");
const navigate = useNavigate();
  const tabs = [
    "All",
    "Leadership",
    "Technology",
    "Fintech",
    "Healthcare",
    "Consulting",
    "Cybersecurity",
  ];

  const data = [
    { tag: "Technology", stage: "Early Revenue" },
    { tag: "Healthcare", stage: "Growth Stage" },
    { tag: "Fintech", stage: "MVP Stage" },
    { tag: "Technology", stage: "Pre-Revenue" },
    { tag: "Consulting", stage: "Scale-Up Stage" },
    { tag: "Cybersecurity", stage: "Early Revenue" },
  ];

  const filtered =
    active === "All"
      ? data
      : data.filter((item) => item.tag === active);
  return (
    <div>
      <div className="bg-[#0B1260] text-white px-6 py-20 relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.08] 
      bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] 
      [background-size:60px_60px]" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative">

        {/* LEFT CONTENT */}
        <div>

          {/* BREADCRUMB */}
          <p className="text-xs uppercase tracking-widest text-white/50 mb-4">
            Home / <span className="text-orange-500">Our Incubatees</span>
          </p>

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-500/40 rounded-full text-xs mb-6 bg-white/5">
            🚀 Aakam Shine Portfolio
          </div>

          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            Our Incubatees
          </h1>

          <h2 className="text-4xl md:text-6xl font-light italic text-white/40 mb-6">
            Next Generation
          </h2>

          {/* DESCRIPTION */}
          <p className="text-white/60 max-w-lg">
            Meet the industry-leading startups shaping Tamil Nadu's innovation
            ecosystem — built with technology, purpose, and a relentless drive
            to create impact.
          </p>
        </div>

        {/* RIGHT CONTENT */}
        <div>

          <p className="text-xs uppercase tracking-widest text-white/50 mb-6">
            Our Incubation Journey
          </p>

          <div className="space-y-8 relative">

            {/* LINE */}
            <div className="absolute left-4 top-0 bottom-0 w-[1px] bg-white/10"></div>

            {[
              {
                step: "01",
                title: "Apply & Get Selected",
                desc: "Submit your startup idea and go through our screening process",
              },
              {
                step: "02",
                title: "Incubate & Build",
                desc: "Access mentorship, resources, and a thriving network",
              },
              {
                step: "03",
                title: "Scale & Graduate",
                desc: "Launch to market, attract investors, and grow beyond borders",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4 relative">

                {/* STEP NUMBER */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg 
                border border-orange-500/50 text-orange-500 bg-white/5 z-10">
                  {item.step}
                </div>

                {/* TEXT */}
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/60">
                    {item.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>

      {/* RIGHT CIRCLE DECORATION */}
      <div className="absolute right-[-100px] top-20 w-[400px] h-[400px] border border-white/10 rounded-full"></div>
      <div className="absolute right-[0px] top-40 w-[300px] h-[300px] border border-white/10 rounded-full"></div>

    </div>

      <div className="bg-[#F4F6FB] min-h-screen py-16 px-6 flex justify-center">

      {/* MAIN CONTAINER */}
      <div className="bg-white rounded-3xl border border-gray-200 p-10 w-full max-w-6xl relative">

        {/* TOP GRADIENT BORDER */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-orange-500 via-purple-500 to-blue-600 rounded-t-3xl" />

        {/* HEADER */}
        <p className="text-xs uppercase tracking-widest text-orange-500 mb-2">
          Our Incubatees
        </p>

        <h2 className="text-2xl font-semibold text-[#0B1260] mb-1">
          Meet the Portfolio
        </h2>

        <p className="text-sm text-gray-500 mb-6">
          Industry leaders shaping the next generation
        </p>

        {/* TABS */}
        <div className="flex flex-wrap gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActive(tab)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-200
                ${
                  active === tab
                    ? "bg-[#0B1260] text-white"
                    : "bg-white border border-gray-300 text-gray-600 hover:border-gray-400"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {filtered.map((item, i) => (
            <div
              key={i}
              className={`bg-[#F4F6FB] rounded-2xl p-6 border transition-all duration-200 hover:shadow-md
                ${
                  i === 0
                    ? "border-[#0B1260]"
                    : "border-gray-200"
                }
              `}
            >

              {/* TOP SECTION */}
              <div className="flex gap-4 mb-4">
                
                {/* LOGO */}
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#0B1260] font-bold">
                  E
                </div>

                <div>
                  <h3 className="font-semibold text-[#0B1260]">
                    KYM Technologies
                  </h3>
                  <p className="text-sm text-gray-500">
                    Transforming maternity and child care with trust and transparency
                  </p>
                </div>
              </div>

              {/* TAGS */}
              <div className="flex gap-2 mb-4 text-xs">
                <span className="px-3 py-1 border border-blue-400 text-blue-500 rounded-full">
                  Technology
                </span>
                <span className="px-3 py-1 border border-orange-400 text-orange-500 rounded-full">
                  Healthcare
                </span>
              </div>

              {/* DIVIDER */}
              <div className="h-[1px] bg-gray-200 mb-4"></div>

              {/* FOOTER */}
              <div className="flex justify-between items-center">
                <p className="text-xs text-gray-500 uppercase">
                  {item.stage}
                </p>

                <button
                  className="w-9 h-9 cursor-pointer rounded-lg bg-[#0B1260] text-white flex items-center justify-center hover:bg-[#1a237e]"
                  onClick={()=>navigate("/incubatee")} type="button"
                  >
                  ↗
                </button>
              </div>

            </div>
          ))}

        </div>

      </div>
    </div>
    </div>
  )
}

export default nextgen