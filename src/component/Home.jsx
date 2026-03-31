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
        <div className='flex items-center gap-5 justify-center '>
          <button className='border py-2 px-5 rounded-lg border-[#dde2ee] font-medium text-[#4a5175]'>Login</button>
          <button className='border py-2 px-6 rounded-lg bg-[#f97316] border-[#f97316] text-white'>Subscribe</button>
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
        <div className=''>
          <p className='text-white ml-10 mt-43'>Support and</p>
          <p className='text-white ml-10'>Hosted by</p>
        </div>
      </div>
      {/* OUR IMPACT */}
      <div className='min-h-screen bg-white'>
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
          className="bg-white border-2 border-gray-200 rounded-xl p-4 
          max-w-[180px] mx-auto h-48 cursor-pointer
          transition-all duration-300
          hover:-translate-y-2 hover:shadow-xl hover:border-[#f97316] mt-15" 
        >

              {/* Icon */}
              <div className="w-10 h-10 mx-auto mb-3 flex items-center justify-center 
   rounded-lg border border-orange-200 text-orange-500 bg-orange-100">
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
      </div>

  )
}

export default Home