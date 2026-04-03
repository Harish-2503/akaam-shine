import React from 'react'
import { Layers, Users, Clock, Star, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();
  const menu = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Our Startups", path: "/startups" },
    { name: "Our Ecosystem", path: "/ecosystem" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" }
  ];
  const stats = [
    { value: "5", label: "PROGRAMS" },
    { value: "101", label: "STARTUPS" },
    { value: "20", label: "MENTORS" },
    { value: "100", label: "INNOVATORS" },
    { value: "6", label: "YEARS" },
  ];
  const data = [
    {
      icon: <Layers size={20} />,
      number: "5",
      title: "PROGRAMS",
      desc: "Active incubation tracks across sectors",
    },
    {
      icon: <Users size={20} />,
      number: "101",
      title: "STARTUPS",
      desc: "Incubated from idea to market",
    },
    {
      icon: <Clock size={20} />,
      number: "20",
      title: "MENTORS",
      desc: "Industry leaders guiding founders",
    },
    {
      icon: <Star size={20} />,
      number: "100",
      title: "INNOVATORS",
      desc: "Rural changemakers in our network",
    },
    {
      icon: <Calendar size={20} />,
      number: "6",
      title: "YEARS",
      desc: "Of rural impact since 2018",
    },
  ];
  const items = [
    "NASSCOM",
    "TAMIL NADU GOVT",
    "IIT MADRAS",
    "EDII INDIA",
    "CII",
    "FICCI",
    "NITI AAYOG",
    "MSME MINISTRY",
  ];
  const cards = [
    {
      id: "01",
      title: "Early-Stage Startup Founders",
      desc: "Get mentorship, funding access, co-working space, and a strong network to take your idea from zero to launch.",
      points: [
        "1-on-1 Mentor pairing from week one",
        "Access to ₹5L seed grants",
        "Co-working space in Sankari & Coimbatore",
        "Investor demo day every cohort",
      ],
      btn: "Apply as Founder →",
      gradient: "from-blue-900 to-blue-600",
    },
    {
      id: "02",
      title: "Rural & AgriTech Entrepreneurs",
      desc: "Build solutions for India's farmers and rural communities with dedicated support for agri-tech and rural innovation.",
      points: [
        "Field-based pilots with 500+ partner farmers",
        "Supply chain & market linkages",
        "AgriTech-specific curriculum",
        "Govt scheme access & navigation",
      ],
      btn: "Apply as Agri-Innovator →",
      gradient: "from-orange-500 to-orange-400",
    },
    {
      id: "03",
      title: "Industry Experts & Investors",
      desc: "Shape the next generation of rural startups. Join our mentor network or explore investment opportunities in high-impact ventures.",
      points: [
        "Curated deal flow from vetted startups",
        "Monthly mentor mixers & demo days",
        "Co-invest with SIDBI & angel networks",
        "Impact reporting & portfolio visibility",
      ],
      btn: "Join as Mentor / Investor →",
      gradient: "from-purple-700 via-blue-600 to-orange-500",
    },
  ];
  const Cards = [
    {
      id: "01",
      tag: "SKILL DEVELOPMENT",
      badge: "12-WEEK BOOTCAMP",
      title: "Founder Skill Development Program",
      desc: "A comprehensive bootcamp covering business model design, financial literacy, product development, and go-to-market strategy. Built for first-generation rural entrepreneurs with zero prior business experience.",
      stats: ["12 wks", "2×/wk", "Free"],
      labels: ["DURATION", "SESSIONS", "COST"],
    },
    {
      id: "02",
      tag: "ENTREPRENEURSHIP JOURNEY",
      badge: "6-MONTH INCUBATION",
      title: "Entrepreneurship Identity Journey",
      desc: "Our flagship incubation program that helps founders discover their unique identity as entrepreneurs, build mental resilience, and develop the leadership skills critical for long-term success in rural markets.",
      stats: ["6 mos", "₹5L", "20+"],
      labels: ["DURATION", "MAX GRANT", "MENTORS"],
      highlight: true,
    },
    {
      id: "03",
      tag: "INDUSTRY FOCUSED",
      badge: "SECTOR-SPECIFIC TRACK",
      title: "Industry Focused Growth Program",
      desc: "Deep-dive sector programs in agritech, textile innovation, rural fintech, and healthcare — connecting startups directly to industry players, supply chains, and distribution networks across Tamil Nadu.",
      stats: ["4 tracks", "50+", "Live"],
      labels: ["SECTORS", "PARTNERS", "STATUS"],
    },
  ];
  const cards_ = [
    {
      title: "FarmBridge — Connecting 500+ farmers to direct markets, cutting middlemen by 40%",
      tag: "AGRITECH",
      desc: "Founded by Senthil Raj, a second-generation farmer from Erode. FarmBridge built an end-to-end platform connecting smallholder farmers directly to urban retailers — increasing average farmer income by ₹18,000/year.",
      stats: "500+ farmers · ₹2.4Cr revenue",
      gradient: "from-blue-900 to-blue-700",
      big: true,
    },
    {
      title: "GrameenPay — Digital payments for rural kirana stores",
      tag: "FINTECH",
      desc: "Powering 1,200+ kirana stores across Tamil Nadu with zero-cost UPI infrastructure and micro-lending.",
      stats: "1,200+ stores · 3 districts",
      gradient: "from-orange-600 via-red-500 to-purple-700",
    },
    {
      title: "VillageDoc — Telemedicine reaching 200+ villages",
      tag: "HEALTHTECH",
      desc: "Delivering specialist consultations to patients who previously traveled 60km+ for care.",
      stats: "200+ villages · 8,000 consults/mo",
      gradient: "from-green-600 via-teal-500 to-blue-800",
    },
    {
      title: "LoomLink — Artisan marketplace for handloom weavers",
      tag: "TEXTILE",
      desc: "Connected 300 weavers in Salem to buyers across India and 5 export markets.",
      stats: "300 artisans · 5 countries",
      gradient: "from-red-700 via-orange-500 to-purple-800",
    },
    {
      title: "SunGram — Affordable solar for rural homes",
      tag: "CLEANTECH",
      desc: "Pay-as-you-go solar panels reaching off-grid households at ₹99/month.",
      stats: "1,500 homes · 4 districts",
      gradient: "from-blue-800 via-indigo-600 to-purple-700",
    },
  ];
  const testimonials = [
    {
      initials: "RK",
      name: "Ravi Kumar",
      role: "AGRITECH FOUNDER · COIMBATORE",
      text: "Aakam Shine gave me more than funding — they gave me the confidence that my rural roots are a competitive advantage, not a limitation.",
      meta: "Cohort 4 · 2023",
    },
    {
      initials: "PM",
      name: "Priya Murugan",
      role: "HANDLOOM ENTREPRENEUR · SALEM",
      text: "The network I built through Aakam Shine opened doors I didn’t even know existed. My weaving cooperative now exports to 5 countries.",
      meta: "Cohort 3 · 2022",
    },
    {
      initials: "AV",
      name: "Anand Venkatesan",
      role: "MENTOR & ANGEL INVESTOR",
      text: "I've mentored startups at IIT and IIM incubators — the quality of founders at Aakam Shine rivals anything I've seen in urban ecosystems.",
      meta: "Mentor since 2021",
    },
  ];
  const events = [
    {
      date: "14",
      month: "APR 2025",
      tag: "WORKSHOP",
      title: "Pitch Perfect: How to Win Investors",
      location: "Sankari, Tamil Nadu",
      time: "9:00 AM – 5:00 PM",
      seats: "In-person · 60 seats",
      button: "Free Entry",
    },
    {
      date: "22",
      month: "APR 2025",
      tag: "DEMO DAY",
      title: "Spring Cohort 2025 Demo Day",
      location: "Coimbatore + Online",
      time: "10:00 AM – 4:00 PM",
      seats: "Hybrid · Open to investors",
      button: "Register Now",
    },
    {
      date: "05",
      month: "MAY 2025",
      tag: "NETWORKING",
      title: "Rural Founders Meetup — Salem Edition",
      location: "Salem, Tamil Nadu",
      time: "6:00 PM – 9:00 PM",
      seats: "In-person · 40 seats",
      button: "Limited Seats",
    },
    {
      date: "18",
      month: "MAY 2025",
      tag: "MASTERCLASS",
      title: "AgriTech Innovation Masterclass",
      location: "Online · Zoom",
      time: "3:00 PM – 5:30 PM",
      seats: "Open to all",
      button: "Free Entry",
    },
  ];
  const news = [
    {
      tag: "PRESS RELEASE",
      title: "Aakam Shine Crosses 100 Startups Milestone",
      desc: "Our incubation program has now supported over 100 startups, with a combined revenue impact of ₹12 crores across Tamil Nadu's rural districts.",
      date: "March 15, 2025",
      gradient: "from-blue-900 to-blue-600",
    },
    {
      tag: "AWARD",
      title: "Best Rural Incubator Award at NSRCEL Summit 2025",
      desc: "Aakam Shine was recognized as India's best rural incubator at the prestigious NSRCEL National Summit held in Bangalore, beating 80+ competitors.",
      date: "February 28, 2025",
      gradient: "from-orange-600 to-purple-700",
    },
    {
      tag: "PARTNERSHIP",
      title: "New MoU with SIDBI for Rural Startup Funding",
      desc: "Aakam Shine signs a landmark agreement with SIDBI to provide dedicated funding access for rural startups, unlocking a ₹2 crore fund for our ecosystem.",
      date: "February 10, 2025",
      gradient: "from-green-600 to-blue-700",
    },
  ];

  return (
    <div>

      {/* NavBar */}
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
      {/* HERO PAGE */}
      <div className='bg-[#0f1e6b] min-h-[80vh] py-[px]
  bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]'>
        <div className='flex items-center justify-center'>
          <div className='text-center mt-30'>
            <h3 className="text-[12px] font-bold text-[#f97316] rounded-2xl border inline-block px-4 py-1.5 before:content-[''] before:w-[6px] before:h-[6px] before:bg-orange-500 before:rounded-full before:inline-block before:mr-2">RURAL INNOVATION ECOSYSTEM</h3>
            <p className='text-white text-7xl font-extrabold mt-6'>We're Here For</p>
            <p className='text-[#f97316] text-7xl font-extrabold'>Founders.</p>
            <p className='text-[#a2aacf] mt-10 text-md'> Mentoring, funding and industry networks to help you launch and </p>
            <p className='text-[#a2aacf] ' >grow your startup from rural India to the world.</p>
          </div>
        </div>
        {/* BUTTON */}
        <div className='flex items-center justify-center mt-15 gap-3'>
          <button className='border w-50 h-12 rounded-lg font-bold bg-[#f97316] text-white border-[#f97316] cursor-pointer transition-colors transition-shadow duration-300 hover:bg-[#ea7b2b]  shadow-[#ea7b2b] hover:shadow-sm '>Apply to Incubate →</button>
          <button className='border w-50 h-12 border-[#d1d7fb] rounded-lg text-white font-bold text-sm cursor-pointer transition-colors duration-300 hover:border-[#fcfcfc] hover:border-8xl '>Explore Ecosystem</button>
        </div>
        <div className='flex items-center mt-35 gap-5'>
          <p className='text-white ml-10  font-bold'>Support and <br />
          Hosted by</p>
        <div className='flex'>
          <img className='w-40 h-15' src="logo 2.png" alt="" />
          <img className='w-40 h-15' src="/ssei logo 2.png" alt="" />
        </div>
        </div>
      </div>
      {/* OUR IMPACT */}
      <div className='min-h-[80vh] bg-white'>
        <div>
          <p className='flex items-center justify-center mt-25 text-sm font-medium text-[#f97316]'>
            <span className='w-5 bg-[#f97316] h-[1.5px] mr-2'></span> OUR IMPACT
          </p>
          <p className='flex items-center justify-center text-4xl font-bold mt-5'>Growing Together</p>
          <p className='flex items-center justify-center mt-4 text-[#4a5175]'>Building a transformative rural incubation ecosystem that empowers</p>
          <p className='flex items-center justify-center mt-2 text-[#4a5175]'>innovation and drives equitable economic development.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">

          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-xl p-4 max-w-[180px] mx-auto h-48 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#ff967b]  mt-15 "
            >

              {/* Icon */}
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center rounded-lg border border-orange-200 text-orange-500 bg-orange-100">
                {item.icon}
              </div>

              {/* Number */}
              <h3 className="text-4xl text-center font-bold text-blue-900">
                {item.number}
                <span className="text-orange-500">+</span>
              </h3>

              {/* Title */}
              <p className="text-[10px] text-center tracking-[2px] text-gray-500 mt-1">
                {item.title}
              </p>

              {/* Description */}
              <p className="text-xs text-center text-gray-400 mt-1">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
        <div className='w-full h-0.5 bg-gray-100 mt-20'></div>
        <div className="overflow-hidden  py-6 w-full mt-5">
          <p className='flex items-center justify-center mb-5 text-gray-500 text-[12px] font-medium '>SUPPORTED BY</p>

          <div className="flex animate-[scroll_20s_linear_infinite] gap-10 whitespace-nowrap">

            {[...items, ...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-gray-500 flex-shrink-0"
              >

                <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-16">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className='text-[#f97316] text-sm font-bold'>
            WHO WE SERVE
          </p>
          <h2 className="text-4xl font-bold text-black">
            Built for Every Stakeholder in the Ecosystem
          </h2>
          <p className="text-gray-500 mt-4">
            From aspiring entrepreneurs to seasoned mentors — our platform is designed
            to serve every member of the rural innovation community.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Top Gradient Section */}
              <div className={`relative p-6 text-white bg-gradient-to-r ${card.gradient}`}>
                <p className="text-xs tracking-widest opacity-80">FOR</p>
                <h3 className="text-xl font-bold mt-2">{card.title}</h3>

                {/* Big Number */}
                <span className="absolute top-4 right-6 text-5xl font-bold opacity-10">
                  {card.id}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-4">{card.desc}</p>

                <ul className="space-y-2 mb-5">
                  {card.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></span>
                      {point}
                    </li>
                  ))}
                </ul>

                <button className="border border-orange-500 bg-orange-50 text-orange-500 px-4 py-2 rounded-lg text-sm hover:bg-orange-500 hover:text-white transition">
                  {card.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-white py-16  ">

        {/* Heading */}
        <div className="text-center mb-12 max-w-2xl mx-auto ">
          <p className="text-sm text-orange-500 font-medium tracking-wider">
            PROGRAMS
          </p>
          <h2 className="text-4xl font-bold text-[#0f1e6b] mt-3">
            Our Key Initiatives
          </h2>
          <p className="text-gray-500 mt-4">
            Structured programs designed to take startups from ideation to market,
            with hands-on support at every stage.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {Cards.map((Card, index) => (
            <div
              className="bg-white rounded-2xl p-6 
           border border-gray-200 
           hover:border-orange-500 
           transition-all duration-300 
           hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Top */}
              <div className="mb-4">
                <p className="text-xs text-orange-500 font-semibold tracking-widest">
                  {Card.id} — {Card.tag}
                </p>

                <span className="inline-block mt-3 px-3 py-1 text-xs border border-orange-300 rounded-full text-orange-500">
                  {Card.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0f1e6b] mt-4">
                {Card.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                {Card.desc}
              </p>

              {/* Divider */}
              <div className="h-px bg-gray-200 my-6"></div>

              {/* Stats */}
              <div className="flex justify-between text-center">
                {Card.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="font-bold text-[#0f1e6b]">{stat}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      {Card.labels[i]}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" py-16 ">

        {/* Heading */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm text-orange-500 tracking-wider font-medium">
            IMPACT
          </p>
          <h2 className="text-4xl font-bold text-[#0f1e6b] mt-3">
            Business Stories From Our Ecosystem
          </h2>
          <p className="text-gray-500 mt-4">
            Real founders, real impact. Discover how startups from Aakam Shine are
            transforming rural India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-4 gap-6 max-w-7xl mx-auto px-4 auto-rows-[240px] ">

          {/* BIG CARD */}
          <div className="md:row-span-2 bg-gradient-to-b  hover:-translate-y-2 hover:shadow-lg hover:shadow-gray-600 from-blue-900 to-blue-700 text-white p-6 rounded-2xl flex flex-col justify-end">
            <p className="text-xs font-bold text-orange-400 mb-2">AGRITECH</p>
            <h3 className="text-xl font-bold leading-snug">
              FarmBridge — Connecting 500+ farmers to direct markets, cutting middlemen by 40%
            </h3>
            <p className="text-sm text-gray-200 mt-3">
              Founded by Senthil Raj, a second-generation farmer from Erode. FarmBridge built an end-to-end platform connecting smallholder farmers directly to urban retailers — increasing average farmer income by ₹18,000/year.
            </p>
            <span className="mt-4 text-xs bg-white/20 px-3 py-1 rounded-full w-fit">
              500+ farmers · ₹2.4Cr revenue
            </span>
          </div>

          {/* SMALL CARDS */}
          {cards_.slice(1).map((cards_, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br  hover:-translate-y-2 hover:shadow-sm hover:shadow-gray-600 ${cards_.gradient} text-white p-2 rounded-2xl flex flex-col justify-end`}
            >
              <p className="text-xs font-bold text-orange-300 mb-2">{cards_.tag}</p>

              <h3 className="text-lg font-semibold leading-snug">
                {cards_.title}
              </h3>

              <p className="text-sm text-gray-200 mt-2">
                {cards_.desc}
              </p>

              <span className="mt-4 text-xs bg-white/20 px-3 py-1 rounded-full w-fit">
                {cards_.stats}
              </span>
            </div>
          ))}
        </div>
        <section className="bg-[#0f1e6b] text-white py-20  mt-10">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT SIDE */}
            <div>
              <p className="text-sm tracking-widest text-gray-300 mb-4 flex items-center">
                <span className="w-8 h-[1px] bg-gray-400 mr-3"></span>
                FUNDING
              </p>

              <h1 className="text-5xl font-bold leading-tight mb-6">
                Get Funded <br /> to Shine
              </h1>

              <p className="text-gray-300 mb-8 max-w-md">
                At Aakam Shine, we don't just incubate startups — we fund them.
                Access a range of funding opportunities tailored to every stage of your journey.
              </p>

              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">
                Apply for Funding →
              </button>
            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6">

              {/* CARD 1 */}
              <div className="flex items-center justify-between hover:-translate-y-2 hover:shadow-sm hover:shadow-[#f97316] bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/20 text-orange-400 font-bold">
                    SG
                  </div>
                  <div>
                    <h3 className="font-semibold">Seed Grants</h3>
                    <p className="text-sm text-gray-300">
                      Non-dilutive grants for early-stage startups with validated ideas.
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-orange-400 font-bold">₹5L</p>
                  <p className="text-xs text-gray-400">MAX GRANT</p>
                </div>
              </div>

              {/* CARD 2 */}
              <div className="flex items-center hover:-translate-y-2 hover:shadow-sm hover:shadow-[#f97316] justify-between bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/20 text-orange-400 font-bold">
                    GI
                  </div>
                  <div>
                    <h3 className="font-semibold">Growth Investment</h3>
                    <p className="text-sm text-gray-300">
                      Connect with our investor network for Series A-ready startups.
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-orange-400 font-bold">₹50L+</p>
                  <p className="text-xs text-gray-400">AVG TICKET</p>
                </div>
              </div>

              {/* CARD 3 */}
              <div className="flex items-center hover:-translate-y-2 hover:shadow-sm hover:shadow-[#f97316] justify-between bg-white/5   rounded-xl p-5 backdrop-blur-md ">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-500/20 text-orange-400 font-bold">
                    GS
                  </div>
                  <div>
                    <h3 className="font-semibold">Govt Scheme Navigation</h3>
                    <p className="text-sm text-gray-300">
                      Expert guidance to access MSME, SIDBI, and state government schemes.
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-orange-400 font-bold">10+</p>
                  <p className="text-xs text-gray-400">SCHEMES</p>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>
      <section className=" text-white py-20 ">
        <div className="max-w-7xl mx-auto text-center">

          {/* TOP HEADING */}
          <p className="text-sm text-orange-500 tracking-widest flex font-bold justify-center items-center mb-3">
            <span className="w-6 h-[1px] bg-orange-500 mr-2"></span>
            VOICES
          </p>

          <h2 className="text-4xl font-bold text-[#0f1e6b] mb-4">
            Community Highlights
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mb-12">
            Hear from the founders, mentors, and innovators who are building the future from rural India.
          </p>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-left border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >

                {/* HEADER */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">

                    {/* AVATAR */}
                    <div className="w-12 h-12 flex items-center justify-center rounded-full 
                  bg-gradient-to-r from-orange-500 to-blue-600 text-white font-bold">
                      {item.initials}
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#0f1e6b]">
                        {item.name}
                      </h3>
                      <p className="text-xs text-orange-500 tracking-wide">
                        {item.role}
                      </p>
                    </div>
                  </div>

                  {/* QUOTE ICON */}
                  <span className="text-4xl text-gray-200">”</span>
                </div>

                {/* TEXT */}
                <p className="text-gray-500 text-sm mb-6">
                  {item.text}
                </p>

                <hr className="mb-4" />

                {/* FOOTER */}
                <div className="flex items-center justify-between text-sm">
                  <div className="text-orange-500">★★★★★</div>
                  <p className="text-gray-400">{item.meta}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      <section className="bg-[#f8f9fc] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          {/* HEADER */}
          <p className="text-sm text-orange-500 tracking-widest flex justify-center items-center mb-3">
            <span className="w-6 h-[1px] bg-orange-500 mr-2"></span>
            CALENDAR
          </p>

          <h2 className="text-4xl font-bold text-[#0f1e6b] mb-4">
            Upcoming Events
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mb-12">
            Workshops, demo days, and networking events designed to accelerate your startup journey.
          </p>

          {/* CARDS */}
          <div className="grid md:grid-cols-4 gap-6">
            {events.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
              >

                {/* TOP BLUE */}
                <div className="bg-[#1e2c7b] text-white p-4 flex justify-between items-center">
                  <div>
                    <p className="text-3xl font-bold">{item.date}</p>
                    <p className="text-xs opacity-80">{item.month}</p>
                  </div>

                  <span className="text-xs border border-orange-500 text-orange-400 px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-[#0f1e6b] mb-3">
                    {item.title}
                  </h3>

                  <ul className="text-sm text-gray-500 space-y-2 mb-4">
                    <li>• {item.location}</li>
                    <li>• {item.time}</li>
                    <li>• {item.seats}</li>
                  </ul>

                  <button className="text-xs border border-orange-500 text-orange-500 px-4 py-1.5 rounded-full hover:bg-orange-500 hover:text-white transition">
                    {item.button}
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
      <section className="bg-[#f8f9fc] py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">

          {/* HEADER */}
          <p className="text-sm text-orange-500 tracking-widest flex justify-center items-center mb-3">
            <span className="w-6 h-[1px] bg-orange-500 mr-2"></span>
            MEDIA
          </p>

          <h2 className="text-4xl font-bold text-[#0f1e6b] mb-4">
            Latest News & Updates
          </h2>

          <p className="text-gray-500 max-w-xl mx-auto mb-12">
            Stay updated with the latest from Aakam Shine, our startups, and the rural innovation ecosystem.
          </p>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
              >

                {/* TOP GRADIENT */}
                <div className={`h-40 bg-gradient-to-br ${item.gradient} relative flex items-end p-4`}>
                  <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                </div>

                {/* CONTENT */}
                <div className="p-5 text-left">
                  <h3 className="font-semibold text-[#0f1e6b] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-500 mb-4">
                    {item.desc}
                  </p>

                  <hr className="mb-4" />

                  <div className="flex justify-between items-center text-sm">
                    <p className="text-gray-400">{item.date}</p>
                    <span className="text-orange-500 font-medium cursor-pointer hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
      <div>

        {/* 🔵 CTA SECTION */}
        <section className="bg-[#1b2a7a] text-white py-24 px-6 relative overflow-hidden">

          {/* GRID BACKGROUND */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

          <div className="relative max-w-5xl mx-auto text-center">

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to Transform Your <br />
              <span className="text-orange-500">Startup Journey?</span>
            </h2>

            <p className="text-gray-300 mt-6 max-w-2xl mx-auto">
              Together let's build Tamil Nadu's and India's most vibrant rural startup ecosystem.
              Your idea deserves a chance to shine.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">

              <button className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-lg font-semibold transition">
                Apply to Incubate →
              </button>

              <button className="border border-white/30 hover:border-white px-6 py-3 rounded-lg font-semibold transition">
                Talk to a Mentor
              </button>

            </div>

          </div>
        </section>


        {/* ⚪ NEWSLETTER SECTION */}
        <section className="bg-[#eef1f7] py-16 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">

            {/* LEFT TEXT */}
            <div>
              <h3 className="text-3xl font-bold text-[#0f1e6b] mb-3">
                Stay Updated with <br /> Our Newsletter
              </h3>

              <p className="text-gray-500 max-w-md">
                Get the latest news, events, and opportunities from Aakam Shine
                delivered straight to your inbox.
              </p>
            </div>

            {/* INPUT + BUTTON */}
            <div className="flex w-full md:w-auto">

              <input
                type="email"
                placeholder="Enter your email address"
                className="px-5 py-3 w-full md:w-80 rounded-l-lg border border-gray-300 focus:outline-none"
              />

              <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-r-lg font-medium">
                Subscribe
              </button>

            </div>

          </div>
        </section>

      </div>
      <div className="bg-[#0b1260] text-white px-16 py-16">

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

export default Home