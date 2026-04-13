import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const mentor = () => {
  const navigate = useNavigate();
   const [checked, setChecked] = useState(false);
  const sectors = [
    "Healthcare & Medtech",
    "Sustainability & Clean Tech",
    "Fintech",
    "Edtech",
    "Agritech",
    "Connectivity",
    "AI/ML & Data Analytics",
    "IoT & Hardware",
    "Food Processing & Livelihood",
  ];
  const areas = [
    "Business Strategy & Planning",
    "Market Research & Go-to-market",
    "Fundraising & Investor Pitching",
    "Financial Modelling & Budgeting",
    "Technology Development & Product Roadmap",
    "Regulatory & Compliance",
    "Marketing & Branding",
    "Sales & Distribution",
    "Team Building & HR",
    "Legal & IP Protection",
    "Operations & Supply Chain",
    "International Expansion",
  ];
  const skills = [
    "Product Development",
    "UI/UX Design",
    "Full Stack Development",
    "Data Science & Analytics",
    "Digital Marketing",
    "Finance & Accounting",
    "Sales & Business Development",
    "Operations & Logistics",
  ];
  const [files, setFiles] = useState({});

  const handleFileChange = (e, key) => {
    setFiles({
      ...files,
      [key]: e.target.files[0]?.name || "",
    });

  }

    return (
    <div>
      <div className="relative bg-[#0B1B5E] text-white overflow-hidden">
      
      {/* Grid + dots background */}
      <div className="absolute inset-0 opacity-10 
        bg-[radial-gradient(circle,rgba(255,255,255,0.15)_1px,transparent_1px)] 
        bg-[size:30px_30px]" />

      <div className="absolute inset-0 opacity-10 
        bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),
        linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:80px_80px]" />

      {/* Right circle glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/10 rounded-full" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[650px] h-[650px] border border-white/5 rounded-full" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center ">

        {/* LEFT SIDE */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
            <span className="w-3 h-3 bg-orange-400 rounded-full" />
            <span className="text-sm font-medium">
              AAKAM SHINE MENTORSHIP PROGRAM
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Apply for <br />
            <span className="italic text-gray-400 font-medium">
              Mentorship
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-300 mt-6 max-w-xl leading-relaxed">
            Unlock guidance, growth, and new opportunities by connecting with
            experienced industry mentors from Aakam Shine’s extensive network.
          </p>
        </div>

        {/* RIGHT SIDE (Steps) */}
        <div className="relative">
          
          <p className="text-gray-400 text-sm tracking-widest mb-8">
            HOW IT WORKS
          </p>

          <div className="space-y-10 relative">

            {/* Vertical Line */}
            <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-white/10" />

            {/* Step 1 */}
            <div className="flex items-start gap-6 relative">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-orange-400/40 flex items-center justify-center text-orange-400 font-bold">
                01
              </div>
              <div>
                <h3 className="font-semibold text-lg">Fill the Application</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Share your startup details and mentorship goals
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start gap-6 relative">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-orange-400/40 flex items-center justify-center text-orange-400 font-bold">
                02
              </div>
              <div>
                <h3 className="font-semibold text-lg">Get Matched</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Our team curates the best mentor fit for you
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start gap-6 relative">
              <div className="w-12 h-12 rounded-xl bg-white/10 border border-orange-400/40 flex items-center justify-center text-orange-400 font-bold">
                03
              </div>
              <div>
                <h3 className="font-semibold text-lg">Begin Your Journey</h3>
                <p className="text-gray-400 text-sm mt-1">
                  Start sessions, track milestones, grow faster
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
    <div className="bg-[#F5F7FB] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm p-10 border border-gray-100 relative overflow-hidden">

        {/* Top Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-500" />

        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-orange-500" />
            <p className="text-orange-500 text-sm font-semibold tracking-widest">
              SECTION 1
            </p>
          </div>

          <h2 className="text-xl font-bold text-[#1E2A5A]">
            Startup & Founder Information
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Basic information about your startup and founding team
          </p>
        </div>

        {/* Form */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Startup Name */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Startup Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your startup name"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Date of Incorporation <span className="text-orange-500">*</span>
            </label>
            <input
              type="date"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Registered Address <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Enter your registered address"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
            />
          </div>

          {/* Website */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Website URL
            </label>
            <input
              type="text"
              placeholder="https://yourstartup.com"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              LinkedIn Company Page
            </label>
            <input
              type="text"
              placeholder="LinkedIn profile URL"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
            />
          </div>

          {/* Social Media */}
          <div className="md:col-span-2">
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Other Social Media
            </label>
            <input
              type="text"
              placeholder="Twitter, Instagram, Facebook, etc."
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
            />
          </div>

          {/* Founder Name */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Founder / Primary Contact Name <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Full name"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
            />
          </div>

          {/* Role */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Role / Title
            </label>
            <input
              type="text"
              placeholder="e.g. CEO, Co-Founder"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Email Address <span className="text-orange-500">*</span>
            </label>
            <input
              type="email"
              placeholder="founder@startup.com"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Phone Number <span className="text-orange-500">*</span>
            </label>
            <input
              type="text"
              placeholder="+91XXXXXXXXXX"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
            />
          </div>

          {/* Co-founder */}
          <div className="md:col-span-2">
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Co-Founder(s)
            </label>
            <input
              type="text"
              placeholder="Name(s) and role(s) of co-founders, if any"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
            />
          </div>

        </div>
      </div>
    </div>
 <div className="bg-[#F5F7FB] ">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm p-10 border border-gray-100 relative overflow-hidden">

        {/* Top Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-500" />

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-orange-500" />
            <p className="text-orange-500 text-sm font-semibold tracking-widest">
              SECTION 2
            </p>
          </div>

          <h2 className="text-xl font-bold text-[#1E2A5A]">
            Business Overview
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Tell us about your business and current traction
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">

          {/* Description */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Brief Description of Your Startup <span className="text-orange-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Describe what your startup does, the problem it solves, and your value proposition..."
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-[#1E2A5A]"
            />
          </div>

          {/* Industry Sector */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Industry Sector <span className="text-orange-500">*</span>
            </label>

            <div className="grid md:grid-cols-3 gap-4 mt-3">
              {sectors.map((sector, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 cursor-pointer hover:border-gray-400 transition"
                >
                  <input type="checkbox" className="w-4 h-4" />
                  <span className="text-sm text-[#1E2A5A]">{sector}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Row */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Current Stage */}
            <div>
              <label className="text-xs font-semibold text-gray-700 uppercase">
                Current Stage <span className="text-orange-500">*</span>
              </label>
              <select className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 focus:outline-none">
                <option>Select current stage</option>
                <option>Idea & Concept</option>
                <option>Prototype / MVP</option>
                <option>Early Revenue ( less than 10 lakhs )</option>
                <option>Growth ( more than 10 lakhs )</option>
              </select>
            </div>

            {/* Customers */}
            <div>
              <label className="text-xs font-semibold text-gray-700 uppercase">
                Monthly Active Customers
              </label>
              <input
                type="text"
                placeholder="e.g. 250"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
              />
            </div>

            {/* Revenue */}
            <div>
              <label className="text-xs font-semibold text-gray-700 uppercase">
                Monthly Revenue
              </label>
              <input
                type="text"
                placeholder="e.g. ₹1,50,000"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
              />
            </div>

            {/* Funding */}
            <div>
              <label className="text-xs font-semibold text-gray-700 uppercase">
                Funding Raised to Date
              </label>
              <input
                type="text"
                placeholder="e.g. ₹25,00,000 or None"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100"
              />
            </div>

          </div>

        </div>
      </div>
    </div>
    <div className="bg-[#F5F7FB] py-20 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm p-10 border border-gray-100 relative overflow-hidden">

        {/* Top Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-500" />

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-orange-500" />
            <p className="text-orange-500 text-sm font-semibold tracking-widest">
              SECTION 3
            </p>
          </div>

          <h2 className="text-xl font-bold text-[#1E2A5A]">
            Mentorship Needs
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            What specific mentorship are you looking for?
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">

          {/* Areas */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Primary Areas Where You Seek Mentorship{" "}
              <span className="text-orange-500">*</span>
              <span className="text-gray-400 normal-case ml-2">
                (Select up to 3)
              </span>
            </label>

            <div className="grid md:grid-cols-3 gap-4 mt-3">
              {areas.map((area, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 cursor-pointer hover:border-blue-500 transition"
                >
                  <input type="checkbox" className="w-4 h-4 accent-[#1E2A5A]" />
                  <span className="text-sm text-[#1E2A5A]">{area}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Challenges */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Specific Challenges or Goals{" "}
              <span className="text-orange-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Describe the specific challenges you're facing and what outcomes you hope to achieve through mentorship..."
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-[#1E2A5A]"
            />
          </div>

          {/* Bottom Row */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Format */}
            <div>
              <label className="text-xs font-semibold text-gray-700 uppercase">
                Preferred Mentorship Format{" "}
                <span className="text-orange-500">*</span>
              </label>
              <select className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100">
                <option>Select format</option>
                <option>One-on-One Video Calls</option>
                <option>On-Site Visits at Aakam Shine</option>
                <option>Group Workshops & Masterclasses</option>
                <option value=""> Emails & Chat Support</option>
                <option value="">Hybrid (Combination)</option>
              </select>
            </div>

            {/* Frequency */}
            <div>
              <label className="text-xs font-semibold text-gray-700 uppercase">
                Desired Frequency & Duration{" "}
                <span className="text-orange-500">*</span>
              </label>
              <select className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100">
                <option>Select frequency</option>
                <option>Weekly(1hr)</option>
                <option>Bi-weekly(1hr)</option>
                <option>Monthly(1-2hrs)</option>
                <option value="">As-Needed</option>
              </select>
            </div>

          </div>

        </div>
      </div>
    </div>
    <div className="bg-[#F5F7FB] ">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm p-10 border border-gray-100 relative overflow-hidden">

        {/* Top Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-500" />

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-orange-500" />
            <p className="text-orange-500 text-sm font-semibold tracking-widest">
              SECTION 4
            </p>
          </div>

          <h2 className="text-xl font-bold text-[#1E2A5A]">
            Team & Capability
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Information about your team and capabilities
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">

          {/* Founding Team Summary */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Founding Team Summary{" "}
              <span className="text-orange-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Briefly describe your founding team — backgrounds, expertise, and relevant experience..."
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-[#1E2A5A]"
            />
          </div>

          {/* Key Team Members */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Key Team Members
            </label>
            <textarea
              rows="4"
              placeholder="List key team members with their roles and relevant skills..."
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-[#1E2A5A]"
            />
          </div>

          {/* Skills */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Technical & Business Skills
            </label>

            <div className="grid md:grid-cols-3 gap-4 mt-3">
              {skills.map((skill, index) => (
                <label
                  key={index}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 cursor-pointer hover:border-blue-500 transition"
                >
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-[#1E2A5A]"
                  />
                  <span className="text-sm text-[#1E2A5A]">
                    {skill}
                  </span>
                </label>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
     <div className="bg-[#F5F7FB] ">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm p-10 border border-gray-100 relative overflow-hidden">

        {/* Top Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-500 rounded-t-3xl" />

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-orange-500" />
            <p className="text-orange-500 text-sm font-semibold tracking-widest">
              SECTION 5
            </p>
          </div>

          <h2 className="text-xl font-bold text-[#1E2A5A]">
            Commitment & Expectations
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Your commitment and what you expect from mentorship
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">

          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">

            {/* Hours */}
            <div>
              <label className="text-xs font-semibold text-gray-700 uppercase">
                Hours per month you can commit{" "}
                <span className="text-orange-500">*</span>
              </label>
              <input
                type="text"
                placeholder="e.g. 8"
                className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#1E2A5A]"
              />
            </div>

            {/* Mentor Background */}
            <div>
              <label className="text-xs font-semibold text-gray-700 uppercase">
                Preferred mentor background
              </label>
              <select className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 focus:outline-none">
                <option>Select preference</option>
                <option >Industry veteran</option>
                <option>Successful entrepreneur</option>
                <option>Technical expert</option>
                <option>Investor/NC parter</option>
                <option>Academic/Researcher</option>
              </select>
            </div>

          </div>

          {/* Milestones */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              Key milestones within 3 months{" "}
              <span className="text-orange-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="What specific milestones do you aim to achieve within the next 3 months of mentorship?"
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-[#1E2A5A]"
            />
          </div>

          {/* Expectations */}
          <div>
            <label className="text-xs font-semibold text-gray-700 uppercase">
              What you expect from a mentor{" "}
              <span className="text-orange-500">*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Describe the type of support, introductions, or expertise you expect your mentor to provide..."
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-gray-100 resize-none focus:outline-none focus:ring-2 focus:ring-[#1E2A5A]"
            />
          </div>

        </div>

      </div>
    </div>
    <div className="bg-[#F5F7FB] py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm p-10 border border-gray-100 relative overflow-hidden">

        {/* Top Gradient Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-500 rounded-t-3xl" />

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-orange-500" />
            <p className="text-orange-500 text-xs font-semibold tracking-widest">
              SECTION 6
            </p>
          </div>

          <h2 className="text-xl font-bold text-[#1E2A5A]">
            Supporting Documents
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Upload relevant documents (optional)
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6">

          {/* Pitch Deck */}
          <div>
            <label className="text-xs font-semibold text-[#1E2A5A] uppercase">
              Pitch Deck (PDF or PPT)
            </label>
            <div className="mt-2 flex items-center gap-3 border border-gray-300 bg-[#F1F3F7] rounded-xl px-4 py-3 focus-within:border-[#1E2A5A]">
              <label className="cursor-pointer bg-gray-200 px-4 py-2 rounded-lg text-sm text-[#1E2A5A]">
                Choose File
                <input type="file" className="hidden" onChange={(e)=>handleFileChange(e,"pitch")} />
              </label>
              <span className="text-gray-500 text-sm">{files.pitch || "No file chosen"}</span>
            </div>
          </div>

          {/* Business Plan */}
          <div>
            <label className="text-xs font-semibold text-[#1E2A5A] uppercase">
              Business Plan / Executive Summary
            </label>
            <div className="mt-2 flex items-center gap-3 border border-gray-300 bg-[#F1F3F7] rounded-xl px-4 py-3 focus-within:border-[#1E2A5A]">
              <label className="cursor-pointer bg-gray-200 px-4 py-2 rounded-lg text-sm text-[#1E2A5A]">
                Choose File
                <input type="file" className="hidden" onChange={(e)=>handleFileChange(e,"plan")} />
              </label>
              <span className="text-gray-500 text-sm">{files.plan || "No file chosen"}</span>
            </div>
          </div>

          {/* Financials */}
          <div>
            <label className="text-xs font-semibold text-[#1E2A5A] uppercase">
              Financial Projections
            </label>
            <div className="mt-2 flex items-center gap-3 border border-gray-300 bg-[#F1F3F7] rounded-xl px-4 py-3 focus-within:border-[#1E2A5A]">
              <label className="cursor-pointer bg-gray-200 px-4 py-2 rounded-lg text-sm text-[#1E2A5A]">
                Choose File
                <input type="file" className="hidden" onChange={(e)=>handleFileChange(e,"finance")} />
              </label>
              <span className="text-gray-500 text-sm">{files.finance || "No file chosen"}</span>
            </div>
          </div>

          {/* Other Docs */}
          <div>
            <label className="text-xs font-semibold text-[#1E2A5A] uppercase">
              Other Relevant Documents
            </label>
            <div className="mt-2 flex items-center gap-3 border border-gray-300 bg-[#F1F3F7] rounded-xl px-4 py-3 focus-within:border-[#1E2A5A]">
              <label className="cursor-pointer bg-gray-200 px-4 py-2 rounded-lg text-sm text-[#1E2A5A]">
                Choose File
                <input type="file" className="hidden" onChange={(e)=>handleFileChange(e,"other")} />
              </label>
              <span className="text-gray-500 text-sm">{files.other || "No file chosen"}</span>
            </div>
          </div>

          {/* MOA */}
          <div>
            <label className="text-xs font-semibold text-[#1E2A5A] uppercase">
              MOA / POA Documents
            </label>
            <div className="mt-2 flex items-center gap-3 border border-gray-300 bg-[#F1F3F7] rounded-xl px-4 py-3 focus-within:border-[#1E2A5A]">
              <label className="cursor-pointer bg-gray-200 px-4 py-2 rounded-lg text-sm text-[#1E2A5A]">
                Choose File
                <input type="file" className="hidden" onChange={(e)=>handleFileChange(e,"moa")} />
              </label>
              <span className="text-gray-500 text-sm">{files.moa || "No file chosen"}</span>
            </div>
          </div>

          {/* Product Demo */}
          <div>
            <label className="text-xs font-semibold text-[#1E2A5A] uppercase">
              Product Demo (Video Link)
            </label>
            <input
              type="text"
              placeholder="https://youtube.com/watch?v=..."
              className="mt-2 w-full px-4 py-3 rounded-xl border border-gray-300 bg-[#F1F3F7] focus:outline-none focus:ring-2 focus:ring-[#1E2A5A]"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-[#F5F7FB] py-15">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm p-10 border border-gray-100 relative overflow-hidden">

        {/* Gradient Top Border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-blue-500 rounded-t-3xl" />

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-orange-500" />
            <p className="text-orange-500 text-xs font-semibold tracking-widest">
              SECTION 7
            </p>
          </div>

          <h2 className="text-xl font-bold text-[#1E2A5A]">
            Declarations & Consent
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Please review and agree to our terms before submitting
          </p>
        </div>

        {/* Info Box */}
        <div className="bg-[#F1F3F7] rounded-xl p-5 text-sm text-gray-600 leading-relaxed">
          By submitting this application, you confirm that all information provided is accurate and true. 
          You understand that mentorship does not guarantee funding or business outcomes. 
          You agree to maintain confidentiality of mentor communications pursuant to Aakam Shine's policies 
          that include non-disclosure agreements and privacy.
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3 mt-6">
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
            className="mt-1 w-4 h-4 accent-[#1E2A5A]"
          />

          <p className="text-sm text-gray-700">
            I certify that the information provided is accurate and I understand that mentorship does not 
            guarantee funding or business outcomes. I agree to maintain confidentiality of mentor 
            communications pursuant to Aakam Shine's policies that include non-disclosure agreements and privacy.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4 mt-8">

          {/* Submit */}
          <button
            disabled={!checked}
            className={`px-6 py-3 rounded-xl text-white font-semibold transition ${
              checked
                ? "bg-[#1E2A5A] hover:bg-[#16204A]"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Submit Application →
          </button>

          {/* Reset */}
          <button
            className="px-6 py-3 rounded-xl border border-gray-300 text-gray-600 font-medium hover:bg-gray-100 transition"
          >
            Reset Form
          </button>

        </div>

      </div>
    </div>
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

export default mentor