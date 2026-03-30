import React from 'react'
import { useState } from 'react';
// import images from "../assets/images.png"
const Signup = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div>

      {/* NAVBAR */}
      <div className='flex items-center justify-between px-12 py-4 border-b border-orange-500-300 w-full'>
        <img src="/image.png" className='w-25 flex items-center justify-center' alt="" />


        <ul className='flex items-center gap-10 text-sm'>
          {["Home", "About Us", "Our Startups", "Our Ecosystem", "Events", "Contact"].map((item) => (
            <li key={item} className='cursor-pointer pb-1 border-b-2 border-transparent text-[#4a5175] font-[13px] hover:border-[#f97316]'>
              {item}
            </li>
          ))}
        </ul>

        <div className='flex gap-6 items-center'>
          <button className='rounded-md border border-gray-400 py-2 px-5 text-sm'>Log in</button>
          <button className='bg-[#f97316] text-white font-semibold rounded-md py-2 px-5 text-sm'>Subscribe</button>
        </div>
      </div>

      {/* SCROLL */}
      <div className="bg-[#0b1260] text-green-400 overflow-hidden whitespace-nowrap">
        <div className="flex w-max scroll-animation">

          {[1, 2].map((_, i) => (
            <div key={i} className="flex gap-10 px-4 py-2 text-sm">
              <span className='text-[#f97316]'>6+ <span className='text-white'>YEARS OF IMPACT</span></span>
              <span className='text-[#f97316]'>◆</span>
              <span className='text-[#f97316]'>RURAL <span className='text-white'>INNOVATION ECOSYSTEM</span></span>
              <span className='text-[#f97316]'>◆</span>
              <span className='text-[#f97316]'>YOUR GROWTH <span className='text-white'>STARTS HERE</span></span>
              <span className='text-[#f97316]'>◆</span>
              <span className='text-[#f97316]'>50+ <span className='text-white'>STARTUPS INCUBATED</span></span>
              <span className='text-[#f97316]'>◆</span>
              <span className='text-[#f97316]'>12K <span className='text-white'>INNOVATORS CONNECTED</span></span>
            </div>
          ))}

        </div>
      </div>

      {/*HERO + LOGIN WRAPPER */}
      <div className="flex ">

        {/* LEFT HERO */}
        <div className="w-[70%] pl-6 pr-80  bg-[rgb(236,239,250)] min-h-screen flex items-start justify-center pt-30 ">

          <div className="text-left">

            <p className="text-[#f97316] text-sm tracking-widest mb-4 font-bold">
              USER PORTAL
            </p>

            <h1 className="leading-tight">
              <p className="font-stretch-90% font-extrabold text-white text-transparent stroke-text text-[85px]">
                YOUR GROWTH
              </p>

              <span className="block text-7xl font-black text-[#0b1260]">
                STARTS
              </span>

              <span className="block text-7xl font-black text-[#f97316]">
                HERE.
              </span>
            </h1>
            <div className="mt-6 w-[120px] h-[3px] bg-gradient-to-r from-[#f97316] to-transparent"></div>
            <p className="mt-6 text-gray-600 max-w-md">
              Log in to access your space. Access your{" "}
              <span className="font-bold text-black">
                personalized dashboard
              </span>
              , track your applications, and connect with the startup ecosystem.
            </p>
            <div className="mt-6 w-[450px] h-[1px] bg-gradient-to-r from-[#f97316] to-transparent"></div>
            <p>
              Building a transformative rural incubation ecosystem to
            </p>
            <p>
              empower rural innovation and drive equitable economic
            </p>
            <p>
              development.
            </p>
          </div>
        </div>

        {/*RIGHT SIGN IN */}
        <div className="w-[30%] bg-white flex items-start justify-end pt-[44px] pr-[80px] relative border-l border-white shadow-xl">
          <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-[#f97316] via-[#f97316] to-black"></div>
          <div className="w-[320px]">

            <p className="text-[#f97316] text-sm tracking-widest mb-3">
              — USER PORTAL
            </p>

            <h2 className="text-4xl font-black mb-2">SIGN IN</h2>

            <p className="text-gray-500 text-[13px] mb-6">
              Sign in to your account or create a new one
            </p>

            {/* Tabs */}
        
            <div className="flex border w-90 border-[#dee4f8] bg-[#eef1f9]  rounded-lg h-10 overflow-hidden mb-4 p-0.5">
              <button
                onClick={() => setIsLogin(true)}
                className={`w-1/2 py-1 rounded-lg ${isLogin ? "bg-blue-900 text-white" : "text-gray-500 "
                  }`}>
                Sign In
              </button>
              <button
                onClick={() => setIsLogin(false)
                
                
                }
                className={`w-1/2 py-1 rounded-lg ${!isLogin ? "bg-blue-900 text-white" : "text-gray-500"
                  }`}>
                Sign Up
              </button>
            </div>
            
            {isLogin ? (

<div>
  {/* Full Name */}
  <div className="text-[12px] font-medium text-[#8890aa] mb-2">
    FULL NAME <span className='text-[#f97316]'>*</span>
  </div>

  <input
    type="text"
    placeholder="Enter your full name"
    className="w-90 h-10 mt-2 text-[#8890aa] mb-2 border border-[rgb(226,230,243)] rounded-lg px-4 py-3 bg-[#eaf2ff]"
  />

  {/* Password */}
  <label className="text-[12px] font-medium text-[#8890aa]">
    PASSWORD
  </label>

  <input
    type="password"
    placeholder="Enter your password"
    className="w-90 h-10 text-[#8890aa] mt-2 mb-2 border border-[rgb(226,230,243)] rounded-lg px-4 py-3 bg-[#eaf2ff]"
  />

  <div className="text-right text-sm text-gray-500 mb-6 cursor-pointer">
    Forgot password?
  </div>

  <button className="w-90 bg-[#0b1260] text-white py-2 rounded-xl font-bold text-lg">
    SIGN IN →
  </button>
</div>

) : (

<div className="mt-4">

{/* FULL NAME */}
<label className="text-[12px] font-semibold text-[#7c85a3]">
  FULL NAME <span className="text-[#f97316]">*</span>
</label>

<div className="flex items-center mt-2 mb-4 border border-[#e3e7f2] rounded-xl bg-[#eef2fb] px-4 h-11 w-90">
  <input
    type="text"
    placeholder="Enter your full name"
    className="bg-transparent outline-none w-full text-sm text-[#7c85a3]"
  />
</div>

{/* EMAIL */}
<label className="text-[12px] font-semibold text-[#7c85a3]">
  EMAIL ADDRESS <span className="text-[#f97316]">*</span>
</label>

<div className="flex items-center mt-2 mb-4 border border-[#e3e7f2] rounded-xl bg-[#eef2fb] px-4 h-11 w-90">
  
  <input
    type="email"
    placeholder="Enter your email address"
    className="bg-transparent outline-none w-full text-sm text-[#7c85a3]"
  />
</div>

{/* PASSWORD */}
<label className="text-[12px] font-semibold text-[#7c85a3]">
  PASSWORD <span className="text-[#f97316]">*</span>
</label>

<div className="flex items-center mt-2 mb-4 border border-[#e3e7f2] rounded-xl bg-[#eef2fb] px-4 h-11 w-90">

  <input
    type="password"
    placeholder="Create a password"
    className="bg-transparent outline-none w-full text-sm text-[#7c85a3]"
  />
</div>

{/* CONFIRM PASSWORD */}
<label className="text-[12px] font-semibold text-[#7c85a3] w-full">
  CONFIRM PASSWORD
</label>

<div className="flex items-center mt-2 mb-4 border border-[#e3e7f2] rounded-xl bg-[#eef2fb] px-4 h-11 w-90">
 
  <input
    type="password"
    placeholder="Confirm password"
    className="bg-transparent outline-none w-full text-sm text-[#7c85a3]"
  />
</div>

{/* CHECKBOX */}
<div className="flex items-center gap-2 mb-5 text-sm text-gray-600">
  <input type="checkbox" className="accent-blue-600 w-4 h-4" />
  <span>
    I agree to{" "}
    <span className="underline cursor-pointer">Terms & Conditions</span>
  </span>
</div>

{/* BUTTON */}
<button className="w-90 bg-[#0b1260] text-white py-3 rounded-xl font-bold text-lg hover:opacity-90 transition ">
  CREATE ACCOUNT →
</button>

</div>

)}
            {/* Divider */}
            <div className="flex items-center my-6">
              <div className="flex-1 h-px bg-[#e8ebf4]"></div>
              <span className=" text-blue-400 text-sm">or</span>
              <div className="flex-1 h-px w-100 bg-[#e8ebf4]"></div>
            </div>

            {/* Newsletter */}
            <div className="border border-blue-200 rounded-xl p-3 w-90 mr-5 bg-[#eef1f9]">
              <p className="text-[12px] text-[#8890aa] font-semibold mb-4 h-2">
                SUBSCRIBE TO NEWSLETTER
              </p>

              <div className="flex gap-2 items-center">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1  text-[#8890aa] border text-sm bg-white border-blue-200 px-4 py-3 rounded-xl h-10"
                />
                <button className="bg-[#0b1260] text-white px-5 rounded-xl h-10">
                  Subscribe
                </button>
              </div>
            </div>

          </div>
        </div>

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

export default Signup