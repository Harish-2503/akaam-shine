import React from 'react'
import {
  LayoutDashboard,
  User,
  Layers,
  RefreshCw,
  Calendar,
  BarChart2,
  Settings,
  HelpCircle,
  LogOut,
} from "lucide-react";

const dashboard = () => {
  return (
<div>
      <div className="w-64 h-screen bg-[#0E1A5A] text-white flex flex-col justify-between fixed overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600">

      <div>
        {/* Logo */}
        <div className="p-6 border-b border-[#1f2b6c]">
          <p className="text-orange-400 text-xs tracking-widest">AAKAM</p>
          <h1 className="text-2xl font-bold">Shine</h1>
        </div>

        {/* Company */}
        <div className="m-4 p-4 bg-[#1B2A6B] rounded-xl flex items-center gap-3">
          <div className="bg-orange-500 w-12 h-12 rounded-lg flex items-center justify-center font-bold">
            GL
          </div>
          <div>
            <p className="font-semibold">GreenLeaf AgriTech</p>
            <p className="text-sm text-gray-300">Founder</p>
          </div>
        </div>

        {/* MAIN MENU */}
        <div className="mt-6 px-4">
          <p className="text-xs text-gray-400 mb-3">MAIN MENU</p>

          <div className="flex items-center gap-3 p-3 mb-2 bg-[#2A2F6C] border-r-4 border-orange-500 rounded-lg">
            <div className="bg-[#26317a] p-2 rounded-lg">
              <LayoutDashboard size={18} />
            </div>
            Dashboard
          </div>

          <div className="flex items-center gap-3 p-3 mb-2 hover:bg-[#1B2A6B] rounded-lg cursor-pointer">
            <div className="bg-[#26317a] p-2 rounded-lg">
              <User size={18} />
            </div>
            My Profile
          </div>

          <div className="flex items-center gap-3 p-3 mb-2 hover:bg-[#1B2A6B] rounded-lg cursor-pointer">
            <div className="bg-[#26317a] p-2 rounded-lg">
              <Layers size={18} />
            </div>
            Service Requests
          </div>

          <div className="flex items-center gap-3 p-3 mb-2 hover:bg-[#1B2A6B] rounded-lg cursor-pointer">
            <div className="bg-[#26317a] p-2 rounded-lg">
              <RefreshCw size={18} />
            </div>
            Monthly Updates
          </div>

          <div className="flex items-center gap-3 p-3 mb-2 hover:bg-[#1B2A6B] rounded-lg cursor-pointer">
            <div className="bg-[#26317a] p-2 rounded-lg">
              <Calendar size={18} />
            </div>
            Mentor Sessions
          </div>

          <div className="flex items-center gap-3 p-3 mb-2 hover:bg-[#1B2A6B] rounded-lg cursor-pointer">
            <div className="bg-[#26317a] p-2 rounded-lg">
              <Calendar size={18} />
            </div>
            Events
          </div>

          <div className="flex items-center gap-3 p-3 mb-2 hover:bg-[#1B2A6B] rounded-lg cursor-pointer">
            <div className="bg-[#26317a] p-2 rounded-lg">
              <BarChart2 size={18} />
            </div>
            Reports
          </div>
        </div>

        {/* SUPPORT */}
        <div className="mt-8 px-4">
          <p className="text-xs text-gray-400 mb-3">SUPPORT</p>

          <div className="flex items-center gap-3 p-3 mb-2 hover:bg-[#1B2A6B] rounded-lg cursor-pointer">
            <div className="bg-[#26317a] p-2 rounded-lg">
              <Settings size={18} />
            </div>
            Settings
          </div>

          <div className="flex items-center gap-3 p-3 mb-2 hover:bg-[#1B2A6B] rounded-lg cursor-pointer">
            <div className="bg-[#26317a] p-2 rounded-lg">
              <HelpCircle size={18} />
            </div>
            Help
          </div>

          <div className="flex items-center gap-3 p-3 mb-2 hover:bg-[#1B2A6B] rounded-lg cursor-pointer">
            <div className="bg-[#26317a] p-2 rounded-lg">
              <LogOut size={18} />
            </div>
            Logout
          </div>
        </div>
      </div>

      {/* USER */}
      <div className="p-4 border-t border-[#1f2b6c]">
        <div className="bg-[#1B2A6B] p-3 rounded-xl flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center font-bold">
            PS
          </div>
          <div>
            <p className="text-sm font-semibold">Priya Sharma</p>
            <p className="text-xs text-gray-300">founder@greenleaf.in</p>
          </div>
        </div>
      </div>

    </div>
    <div className="ml-64 bg-[#F5F7FB] min-h-screen">

      {/* Top Header */}
      <div className="flex justify-between items-center px-8 py-4 border-b border-gray-300 bg-white">
        <h1 className="text-xl font-semibold text-[#1B2559]">Dashboard</h1>

        <div className="flex items-center gap-3">
          <button className="px-4 py-2 border rounded-lg flex items-center gap-2 text-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            Notifications
          </button>

          <button className="px-4 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium">
            + New Request
          </button>
        </div>
      </div>

      {/* Welcome Card */}
      <div className="p-8">
        <div className="bg-[#111C6D] text-white rounded-2xl px-8 py-6 flex justify-between items-center shadow-lg">
          
          {/* Left Text */}
          <div>
            <h2 className="text-2xl font-bold">
              Welcome back, <span className="text-orange-400">Priya!</span>
            </h2>
            <p className="text-sm text-gray-300 mt-1">
              Here's an overview of your startup's progress and activities.
            </p>
          </div>

          {/* Right Buttons */}
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-white/30 rounded-lg text-sm">
              View Reports
            </button>

            <button className="px-4 py-2 bg-orange-500 rounded-lg text-sm font-medium">
              Submit Update
            </button>
          </div>

        </div>
        <div className="mt-6">

  {/* 🔹 STATS ROW */}
  <div className="grid grid-cols-4 gap-6 mb-6">

    {/* Card */}
    <div className="bg-[#F8FAFC] h-[110px] rounded-2xl px-6 py-5 border border-gray-200 flex flex-col justify-between">
      <h2 className="text-[32px] font-bold text-[#1B2559] leading-none">
        85 <span className="text-gray-400 text-lg">/100</span>
      </h2>
      <p className="text-xs tracking-widest text-gray-400">
        MILESTONE SCORE
      </p>
    </div>

    <div className="bg-[#F8FAFC] h-[110px] rounded-2xl px-6 py-5 border border-gray-200 flex flex-col justify-between">
      <h2 className="text-[32px] font-bold text-[#1B2559] leading-none">
        <span className="text-orange-500 mr-1">₹</span>125K
      </h2>
      <p className="text-xs tracking-widest text-gray-400">
        MONTHLY REVENUE
      </p>
    </div>

    <div className="bg-[#F8FAFC] h-[110px] rounded-2xl px-6 py-5 border border-gray-200 flex flex-col justify-between">
      <h2 className="text-[32px] font-bold text-[#1B2559] leading-none">
        45
      </h2>
      <p className="text-xs tracking-widest text-gray-400">
        ACTIVE CUSTOMERS
      </p>
    </div>

    <div className="bg-[#F8FAFC] h-[110px] rounded-2xl px-6 py-5 border border-gray-200 flex flex-col justify-between">
      <h2 className="text-[32px] font-bold text-[#1B2559] leading-none">
        14 <span className="text-gray-400 text-lg">mo</span>
      </h2>
      <p className="text-xs tracking-widest text-gray-400">
        RUNWAY LEFT
      </p>
    </div>

  </div>

  {/* 🔹 ACTION CARDS */}
  <div className="grid grid-cols-3 gap-6">

    {/* Card */}
    <div className="bg-[#F8FAFC] h-[100px] rounded-2xl px-6 flex items-center justify-between border border-gray-200">
      <div className="flex items-center gap-4">
        <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-xl">
          📋
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1B2559]">
            Submit Monthly Update
          </h3>
          <p className="text-xs text-gray-400">Due in 5 days</p>
        </div>
      </div>
      <span className="text-gray-400 text-xl">→</span>
    </div>

    <div className="bg-[#F8FAFC] h-[100px] rounded-2xl px-6 flex items-center justify-between border border-gray-200">
      <div className="flex items-center gap-4">
        <div className="bg-gray-200 w-12 h-12 rounded-xl flex items-center justify-center text-xl">
          ⚡
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1B2559]">
            Request Service
          </h3>
          <p className="text-xs text-gray-400">
            Legal, Design, PR & more
          </p>
        </div>
      </div>
      <span className="text-gray-400 text-xl">→</span>
    </div>

    <div className="bg-[#F8FAFC] h-[100px] rounded-2xl px-6 flex items-center justify-between border border-gray-200">
      <div className="flex items-center gap-4">
        <div className="bg-orange-100 w-12 h-12 rounded-xl flex items-center justify-center text-xl">
          🎯
        </div>
        <div>
          <h3 className="text-sm font-semibold text-[#1B2559]">
            Book Mentor Session
          </h3>
          <p className="text-xs text-gray-400">
            12h used this month
          </p>
        </div>
      </div>
      <span className="text-gray-400 text-xl">→</span>
    </div>

  </div>

</div>
<div className="mt-8">

  {/* ===== TOP ROW ===== */}
  <div className="grid grid-cols-3 gap-6 mb-6">

    {/* 🔹 Active Service Requests */}
    <div className="col-span-2 bg-[#F8FAFC] rounded-2xl p-6 border border-gray-200">

      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-[#1B2559]">
          Active Service Requests
        </h3>
        <button className="text-sm border px-3 py-1 rounded-lg">
          View All
        </button>
      </div>

      <div className="space-y-4">

        <div className="flex justify-between items-center border-gray-300 border-b pb-3">
          <div>
            <p className="text-sm font-medium">
              Need NDA template for enterprise client discussions
            </p>
            <p className="text-xs text-gray-400">Due in 5 days</p>
          </div>
          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            In Progress
          </span>
        </div>

        <div className="flex justify-between items-center border-gray-300 border-b pb-3">
          <div>
            <p className="text-sm font-medium">
              Press release for upcoming product launch
            </p>
            <p className="text-xs text-gray-400">PR</p>
          </div>
          <span className="text-xs bg-orange-100 text-orange-600 px-3 py-1 rounded-full">
            Pending
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">
              Looking for AgriTech focused seed investors
            </p>
            <p className="text-xs text-gray-400">Investor Intro</p>
          </div>
          <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
            Assigned
          </span>
        </div>

      </div>
    </div>

    {/* 🔹 Upcoming Events */}
    <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-200">

      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-[#1B2559]">
          Upcoming Events
        </h3>
        <button className="text-sm border border-gray-300 px-3 py-1 rounded-lg">
          View All
        </button>
      </div>

      <div className="space-y-4">

        <div className="flex justify-between items-center border-b border-gray-300 pb-3">
          <div>
            <p className="text-sm font-medium">Pitch Day Q4 2025</p>
            <p className="text-xs text-gray-400">Nov 15 — 10:00 AM</p>
          </div>
          <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
            Registered
          </span>
        </div>

        <div className="flex justify-between items-center border-b border-gray-300 pb-3">
          <div>
            <p className="text-sm font-medium">AgriTech Founders Mixer</p>
            <p className="text-xs text-gray-400">Nov 8 — 6:00 PM</p>
          </div>
          <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
            Registered
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">Fundraising Masterclass</p>
            <p className="text-xs text-gray-400">Nov 22 — 2:00 PM</p>
          </div>
          <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
            Registered
          </span>
        </div>

      </div>
    </div>

  </div>

  {/* ===== BOTTOM ROW ===== */}
  <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-200">

    <div className="flex justify-between items-center mb-6">
      <h3 className="font-semibold text-[#1B2559]">
        Recent Mentor Sessions
      </h3>
      <button className="text-sm border border-gray-300 px-3 py-1 rounded-lg">
        View All
      </button>
    </div>

    <div className="grid grid-cols-3 gap-6">

      {/* Card */}
      <div className="bg-white rounded-xl p-4 border border-gray-300 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full font-bold">
              RI
            </div>
            <div>
              <p className="text-sm font-semibold">Dr. Ramesh Iyer</p>
              <p className="text-xs text-gray-400">60 min session</p>
            </div>
          </div>
          <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
            Scheduled
          </span>
        </div>

        <p className="text-sm font-medium">
          Series A Fundraising Strategy
        </p>
        <p className="text-xs text-gray-400">
          11/5/2025 · 10:00 AM
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl p-4 border border-gray-300 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full font-bold">
              RI
            </div>
            <div>
              <p className="text-sm font-semibold">Dr. Ramesh Iyer</p>
              <p className="text-xs text-gray-400">60 min session</p>
            </div>
          </div>
          <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
            Completed
          </span>
        </div>

        <p className="text-sm font-medium">
          Series A Fundraising Strategy
        </p>
        <p className="text-xs text-gray-400">
          11/5/2025 · 10:00 AM
        </p>
      </div>

      {/* Card */}
      <div className="bg-white rounded-xl p-4 border border-gray-300 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-full font-bold">
              RI
            </div>
            <div>
              <p className="text-sm font-semibold">Dr. Ramesh Iyer</p>
              <p className="text-xs text-gray-400">60 min session</p>
            </div>
          </div>
          <span className="text-xs bg-green-100 text-green-600 px-3 py-1 rounded-full">
            Completed
          </span>
        </div>

        <p className="text-sm font-medium">
          Series A Fundraising Strategy
        </p>
        <p className="text-xs text-gray-400">
          11/5/2025 · 10:00 AM
        </p>
      </div>

    </div>
  </div>

</div>




      </div>

    </div>
    
</div>
  )
}

export default dashboard