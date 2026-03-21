import { useState } from 'react'
import myimage from '../assets/image.png'

const Login = () => {

  const [tab, setTab] = useState('signin')

  return (
    <div>

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-10 h-16 bg-white border-b border-gray-200">
        
        {/* Logo */}
        <img src={myimage} alt="logo" className="w-10" />

        {/* Links */}
        <div className="flex gap-8">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Our Startups</a>
          <a href="#">Our Ecosystem</a>
          <a href="#">Events</a>
          <a href="#">Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 border border-gray-300 rounded-md">
            Login
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded-md">
            Subscribe
          </button>
        </div>

      </nav>

      {/* HERO */}
      <div className="flex items-center justify-between px-16 py-20 bg-gray-50">

        {/* Left Text */}
        <div>
          <p className="text-orange-500 font-bold text-sm uppercase mb-4">
            User Portal
          </p>
          <h1 className="text-5xl font-bold text-[#0B1260]">Your Growth</h1>
          <h1 className="text-5xl font-light italic text-blue-700">Starts</h1>
          <h1 className="text-5xl font-bold text-[#0B1260]">Here</h1>
          <div className="w-10 h-1 bg-orange-500 my-5" />
          <p className="text-gray-500 max-w-sm">
            Log in to access your space. Access your personalized
            dashboard, track your applications, and connect with
            the startup ecosystem.
          </p>
        </div>

        {/* Right Card */}
        <div className="w-96 bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          
          {/* Top color bar */}
          <div className="h-1 bg-gradient-to-r from-blue-900 via-orange-500 to-blue-900" />

          <div className="p-8">

            {/* Brand */}
            <div className="text-center mb-4">
              <p className="text-xs text-orange-500 uppercase tracking-widest">aakam</p>
              <p className="text-xl font-bold text-[#0B1260]">Shine</p>
            </div>

            <h2 className="text-xl font-bold text-center mb-1">User Portal</h2>
            <p className="text-center text-gray-400 text-sm mb-5">
              Sign in to your account or create a new one
            </p>

            {/* Tabs */}
            <div className="flex border-b border-gray-200 mb-5">
              <button
                onClick={() => setTab('signin')}
                className={`flex-1 py-2 text-sm font-bold uppercase cursor-pointer border-none bg-transparent ${
                  tab === 'signin' ? 'text-[#0B1260] border-b-2 border-[#0B1260]' : 'text-gray-400'
                }`}
              >
                Sign In
              </button>
              <button
                onClick={() => setTab('signup')}
                className={`flex-1 py-2 text-sm font-bold uppercase cursor-pointer border-none bg-transparent ${
                  tab === 'signup' ? 'text-[#0B1260] border-b-2 border-[#0B1260]' : 'text-gray-400'
                }`}
              >
                Sign Up
              </button>
            </div>

            {/* Sign In Form */}
            {tab === 'signin' && (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full mt-1 px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full mt-1 px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg outline-none text-sm"
                  />
                </div>
                <button className="w-full py-3 bg-[#0B1260] text-white font-bold rounded-lg">
                  Sign In
                </button>
              </div>
            )}

            {/* Sign Up Form */}
            {tab === 'signup' && (
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full mt-1 px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Email *
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full mt-1 px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg outline-none text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase text-gray-500">
                    Password *
                  </label>
                  <input
                    type="password"
                    placeholder="Create a password"
                    className="w-full mt-1 px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg outline-none text-sm"
                  />
                </div>
                <button className="w-full py-3 bg-[#0B1260] text-white font-bold rounded-lg">
                  Create Account
                </button>
              </div>
            )}

          </div>
        </div>

      </div>

      {/* FOOTER */}
      <footer className="bg-[#0B1260] text-white px-16 py-12">

        <div className="grid grid-cols-4 gap-10 pb-8 border-b border-white/20">

          {/* Brand */}
          <div>
            <img src={myimage} alt="logo" className="w-8 mb-3" />
            <p className="text-sm text-white/50">
              Building a transformative rural incubation ecosystem
              to empower rural innovation and drive equitable
              economic development.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Quick Links
            </p>
            <div className="flex flex-col gap-2">
              <a href="#" className="text-sm text-white/60 hover:text-white">Home</a>
              <a href="#" className="text-sm text-white/60 hover:text-white">About</a>
              <a href="#" className="text-sm text-white/60 hover:text-white">Our Startups</a>
              <a href="#" className="text-sm text-white/60 hover:text-white">Our Ecosystem</a>
              <a href="#" className="text-sm text-white/60 hover:text-white">Events</a>
              <a href="#" className="text-sm text-white/60 hover:text-white">Contact</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Contact Us
            </p>
            <div className="flex flex-col gap-2 text-sm text-white/60">
              <p>Pullipalayam, Sankari,</p>
              <p>Tamil Nadu, India, 637304</p>
              <p>+91 7200 171 774</p>
              <p>support@aakamshine.com</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-white/40 mb-4">
              Newsletter
            </p>
            <p className="text-sm text-white/50 mb-3">
              Subscribe for the latest updates and innovations.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-3 py-2 text-sm bg-white/10 border border-white/20 rounded-l-md outline-none text-white placeholder-white/30"
              />
              <button className="px-4 py-2 bg-orange-500 text-white text-sm font-bold rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between pt-5">
          <p className="text-xs text-white/30">
            © 2025 Aakam Shine. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs text-white/30 hover:text-white">Terms of Use</a>
            <a href="#" className="text-xs text-white/30 hover:text-white">Cookie Policy</a>
          </div>
        </div>

      </footer>

    </div>
  )
}

export default Login