
import React, { useState } from "react";
const designaithon = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      q: "Who can participate in Designaithon?",
      a: "Students, alumni, early-stage startup founders, and innovators from any field are welcome to participate. Teams of 2–5 members are encouraged.",
    },
    {
      q: "Is there a registration fee?",
      a: "No, participation is completely free.",
    },
    {
      q: "What is the format of the event?",
      a: "The event includes workshops, mentorship, and live pitching.",
    },
  ];
  return (
    <div>
          <div className="bg-[#0B1260] text-white relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.08] 
      bg-[linear-gradient(#ffffff10_1px,transparent_1px),linear-gradient(90deg,#ffffff10_1px,transparent_1px)] 
      [background-size:60px_60px]" />

      {/* BIG FADED TEXT */}
      <h1 className="absolute right-10 bottom-10 text-[200px] font-bold text-white/5 hidden md:block select-none">
        DESIGN
      </h1>

      {/* MAIN CONTENT */}
      <div className="relative px-6 md:px-20 py-20 grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <div>

          {/* Breadcrumb */}
          <p className="text-xs uppercase tracking-widest text-white/40 mb-4">
            Events / Upcoming Events /{" "}
            <span className="text-orange-500">Designaithon</span>
          </p>

          {/* Tabs */}
          <div className="flex gap-3 mb-6">
            {["Pitch", "Investment", "Networking"].map((item, i) => (
              <span
                key={i}
                className={`px-4 py-1 text-xs rounded-md border ${
                  item === "Investment"
                    ? "bg-orange-500 text-white border-orange-500"
                    : "border-white/20 text-white/60"
                }`}
              >
                {item}
              </span>
            ))}
          </div>

          {/* TITLE */}
          <h1 className="text-6xl md:text-8xl font-extrabold leading-none mb-6">
            DESIGN
            <span className="text-orange-500">A</span>
            ITHON
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white/60 max-w-xl mb-6">
            Monthly pitch competition where early-stage startups present their
            ideas to investors and mentors across Tamil Nadu.
          </p>

          {/* DEADLINE */}
          <div className="inline-flex items-center gap-3 border border-orange-500/40 rounded-md px-4 py-2 text-sm">
            <span className="text-orange-500 uppercase text-xs tracking-wider">
              Last Date to Register
            </span>
            <span className="font-semibold">July 13th, 2025</span>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#1A237E] border border-white/10 rounded-2xl p-6 shadow-lg max-w-md ml-auto">

          <p className="text-xs uppercase text-orange-400 mb-2">
            Upcoming Event
          </p>

          <h3 className="text-lg font-semibold mb-4">
            Event at a Glance
          </h3>

          {/* ITEMS */}
          <div className="space-y-4 text-sm">

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-white/50">Date</span>
              <span className="font-semibold">Sep 28, 2025</span>
            </div>

            <div className="flex justify-between border-b border-white/10 pb-3">
              <span className="text-white/50">Time</span>
              <span className="font-semibold">9:00 am</span>
            </div>

            <div>
              <span className="text-white/50 block">Venue</span>
              <span className="font-semibold">
                Sri Shanmugha Educational
              </span>
              <p className="text-white/40 text-xs">
                Institutions, Sankari, Salem
              </p>
            </div>
          </div>

          {/* BUTTON */}
          <button className="mt-6 w-full bg-orange-500 hover:bg-orange-600 transition text-white py-3 rounded-lg font-semibold">
            Register Here →
          </button>
        </div>
      </div>

      {/* BOTTOM STATS */}
      <div className="relative px-6 md:px-20 pb-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

        <div>
          <h2 className="text-3xl font-bold text-orange-500">2-DAY</h2>
          <p className="text-xs text-white/40 uppercase">Event Duration</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">₹2.5L</h2>
          <p className="text-xs text-white/40 uppercase">Cash Prizes</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">200+</h2>
          <p className="text-xs text-white/40 uppercase">Participants</p>
        </div>

        <div>
          <h2 className="text-3xl font-bold">
            JUL <span className="text-orange-500">13</span>
          </h2>
          <p className="text-xs text-white/40 uppercase">
            Registration Deadline
          </p>
        </div>
      </div>
    </div>
    <div className="bg-[#F4F6FB] py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[1fr_320px] gap-6">

        {/* LEFT */}
        <div>

          {/* EVENT DETAILS */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="text-xs uppercase text-orange-500 mb-4">
              Event Details
            </h3>

            <div className="space-y-6 text-sm text-gray-600">
              <div>
                <p className="font-semibold text-[#0B1260]">
                  A 2-Day Transformation Experience
                </p>
                <p>
                  Presented by Aakam Shine in collaboration with Esperio Studio.
                  A 2-day event empowering students and startups.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#0B1260]">
                  Skills, Strategy & Support
                </p>
                <p>
                  Gain pitching skills, strategy insights, mentorship, funding
                  access, and incubation support.
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#0B1260]">
                  What You Win
                </p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {[
                    "₹2.5L Cash Prizes",
                    "Mentorship Access",
                    "Incubation Support",
                    "Investor Network",
                    "Expert Workshops",
                  ].map((item, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-md bg-[#F4F6FB] border border-gray-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-[#0B1260] text-white rounded-xl p-6 flex justify-between items-center mb-6">
            <div>
              <p className="text-xs text-white/50">Last Date to Register</p>
              <h2 className="text-xl font-bold">
                JULY <span className="text-orange-500">13th, 2025</span>
              </h2>
            </div>

            <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded text-sm transition">
              Register Now →
            </button>
          </div>

          {/* ORGANIZERS */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-6">
            <h3 className="text-xs uppercase text-orange-500 mb-4">
              Organizers & Partners
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400 mb-2">Organizers</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-md bg-[#F4F6FB] border border-gray-200 text-xs">
                    Aakam Shine
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#F4F6FB] border border-gray-200 text-xs">
                    Startup TN
                  </span>
                </div>
              </div>

              <div>
                <p className="text-xs text-gray-400 mb-2">
                  Association With
                </p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 rounded-md bg-[#F4F6FB] border border-gray-200 text-xs">
                    Sri Shanmugha Edu
                  </span>
                  <span className="px-3 py-1 rounded-md bg-[#F4F6FB] border border-gray-200 text-xs">
                    Aakam 360
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-xs uppercase text-orange-500 mb-4">
              FAQs
            </h3>

            {faqs.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-md mb-3 overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenFAQ(openFAQ === i ? -1 : i)
                  }
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-sm"
                >
                  <span>{item.q}</span>
                  <span className="text-orange-500 text-lg">
                    {openFAQ === i ? "×" : "+"}
                  </span>
                </button>

                {openFAQ === i && (
                  <div className="px-4 pb-4 text-sm text-gray-500">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="bg-[#1A237E] text-white rounded-xl p-6 h-fit">

          <h3 className="text-lg font-semibold mb-4">
            Secure Your Spot
          </h3>

          <div className="space-y-4 text-sm">

            <div>
              <p className="text-white/50">Event Date</p>
              <p>September 28, 2025</p>
            </div>

            <div>
              <p className="text-white/50">Time</p>
              <p>9:00 am onwards</p>
            </div>

            <div>
              <p className="text-white/50">Venue</p>
              <p>Sri Shanmugha Educational</p>
              <p className="text-xs text-white/40">
                Sankari, Salem
              </p>
            </div>

            <div>
              <p className="text-white/50">Registrations</p>
              <p>144 / 200 Registered</p>
              <div className="w-full bg-white/20 h-2 rounded mt-2">
                <div className="bg-orange-500 h-2 w-[70%] rounded"></div>
              </div>
            </div>

            <div>
              <p className="text-white/50">
                Registration Deadline
              </p>
              <p className="text-orange-400">July 13, 2025</p>
            </div>

            <button className="w-full bg-orange-500 hover:bg-orange-600 py-3 rounded mt-4 transition">
              Register Here →
            </button>

            <button className="w-full border border-white/30 py-2 rounded text-sm hover:border-white transition">
              Download Brochure
            </button>
          </div>
        </div>

      </div>
    </div>
    
    </div>
  )
}

export default designaithon