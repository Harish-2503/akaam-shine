import React, { useRef,useState } from "react";
import { useNavigate } from "react-router-dom";
import { MapPin, Mail, Phone, Upload, Clock, } from "lucide-react";

const Contact = () => {
  const navigate = useNavigate();

  const menu = [
    { name: "Home", path: "/home" },
    { name: "About Us", path: "/about" },
    { name: "Our Startups", path: "/startups" },
    { name: "Our Ecosystem", path: "/ecosystem" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];
  const fileInputRef = useRef();

  const handleClick = () => {
    fileInputRef.current.click(); // open file picker
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    console.log(file); // you can use this file
  };

  const fileInputref = useRef(null);

  const handleclick = () => fileInputRef.current.click();
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Who can apply to the Aakam Shine incubation program?",
      answer:
        "Any innovator, student, or founder with a scalable idea is welcome. We especially focus on founders from rural Tamil Nadu and underrepresented communities.",
    },
    {
      question: "Is there a fee to join the incubation program?",
      answer:
        "Most core programs are subsidised or free for selected founders. Some programs may have nominal fees.",
    },
    {
      question: "How long does the incubation program last?",
      answer:
        "Program duration varies from 3 to 12 months depending on the cohort and startup stage.",
    },
    {
      question: "Can I partner with Aakam Shine as an organization?",
      answer:
        "Yes, we welcome partnerships, CSR collaborations, and co-incubation opportunities.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      {/* Navbar */}
      <div className="flex items-center justify-between px-12 py-4 border-b border-orange-500 w-full">
        <img src="/image.png" className="w-25" alt="" />

        <ul className="flex items-center gap-10 text-sm">
          {menu.map((item) => (
            <li
              key={item.name}
              onClick={() => navigate(item.path)}
              className="cursor-pointer pb-1 border-b-2 border-transparent text-[#4a5175] hover:border-[#f97316]"
            >
              {item.name}
            </li>
          ))}
        </ul>

        <div className="flex gap-6 items-center">
          <button className="rounded-md border border-gray-400 py-2 px-5 text-sm">
            Log in
          </button>
          <button
            onClick={() => navigate("/subscribe")}
            className="bg-[#f97316] text-white rounded-md py-2 px-5 text-sm hover:bg-orange-400"
          >
            Subscribe
          </button>
        </div>
      </div>
      <section className="relative bg-[#0f1e6b] text-white overflow-hidden">
        {/* Grid Background */}
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-20">

          {/* Breadcrumb */}
          <p className="text-sm text-gray-300 tracking-widest mb-6">
            HOME <span className="mx-2">/</span>{" "}
            <span className="text-orange-400 font-semibold">CONTACT</span>
          </p>

          {/* Heading */}
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Let’s{" "}
            <span className="text-gray-400 font-light">Connect</span>{" "}
            & <br />
            Build Together
          </h1>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mt-16 border-t border-white/20 pt-10">

            <div>
              <h3 className="text-3xl font-bold">
                &lt;2<span className="text-orange-400">d</span>
              </h3>
              <p className="text-xs text-gray-300 mt-1 tracking-widest">
                RESPONSE TIME
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                20<span className="text-orange-400">+</span>
              </h3>
              <p className="text-xs text-gray-300 mt-1 tracking-widest">
                EXPERT MENTORS
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                101<span className="text-orange-400">+</span>
              </h3>
              <p className="text-xs text-gray-300 mt-1 tracking-widest">
                STARTUPS SUPPORTED
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">
                6<span className="text-orange-400">+</span>
              </h3>
              <p className="text-xs text-gray-300 mt-1 tracking-widest">
                YEARS OF EXCELLENCE
              </p>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-[#f5f7fb] py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>
            <p className="text-orange-500 text-xs tracking-widest font-semibold mb-2">
              — REACH US
            </p>

            <h2 className="text-4xl font-bold text-[#0f1e6b] leading-tight">
              We'd Love to <br />
              <span className="text-orange-500">Hear From You</span>
            </h2>

            <p className="text-gray-500 mt-4 text-sm leading-relaxed">
              Whether you're a startup founder, aspiring mentor, or partner, we're
              here to help. Reach out to our team and we'll get back to you within 2
              working days.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 space-y-4">

              {/* Address */}
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="bg-[#1e2a78] text-white p-3 rounded-lg">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-orange-500 font-semibold">ADDRESS</p>
                  <p className="text-sm font-medium text-[#0f1e6b]">
                    Aakam Shine, Sri Shanmugha Educational Institutions
                  </p>
                  <p className="text-xs text-gray-500">
                    Salem, Tamil Nadu, India — 637304
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="bg-[#1e2a78] text-white p-3 rounded-lg">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-orange-500 font-semibold">EMAIL</p>
                  <p className="text-sm font-medium text-[#0f1e6b]">
                    info@aakamshine.com
                  </p>
                  <p className="text-xs text-gray-500">
                    For general inquiries & partnerships
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm">
                <div className="bg-[#1e2a78] text-white p-3 rounded-lg">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs text-orange-500 font-semibold">PHONE</p>
                  <p className="text-sm font-medium text-[#0f1e6b]">
                    +91 7200171774
                  </p>
                  <p className="text-xs text-gray-500">
                    Mon–Fri, 9:00 AM – 6:00 PM IST
                  </p>
                </div>
              </div>
            </div>

            {/* Info Badge */}
            <div className="mt-6 inline-block bg-green-100 text-green-700 text-xs px-4 py-2 rounded-full">
              ● We typically respond within 2 working days
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              {[
                "Apply to Incubate",
                "Become a Mentor",
                "View Events",
                "Partnership",
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-4 rounded-xl shadow-sm text-sm text-[#0f1e6b] font-medium hover:shadow-md cursor-pointer"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <p className="text-xs text-orange-500 font-semibold mb-1">
              ● WE'RE ONLINE
            </p>

            <h3 className="text-xl font-bold text-[#0f1e6b]">
              Get In Touch
            </h3>

            <p className="text-gray-500 text-sm mb-4">
              Fill out the form below and we'll respond promptly.
            </p>

            <div className="space-y-4">

              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full p-3 border rounded-lg text-sm outline-none"
              />

              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="p-3 border rounded-lg text-sm outline-none"
                />
                <input
                  type="text"
                  placeholder="+91 00000 00000"
                  className="p-3 border rounded-lg text-sm outline-none"
                />
              </div>

              <select className="w-full p-3 border rounded-lg text-sm outline-none">
                <option>Select query type</option>
                <option>Startup</option>
                <option>Mentorship</option>
                <option>Partnership</option>
              </select>

              <textarea
                placeholder="Tell us how we can help you..."
                rows="4"
                className="w-full p-3 border rounded-lg text-sm outline-none"
              ></textarea>

              <div>
                {/* Hidden Input */}
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />

                {/* Upload Box */}
                <div
                  onClick={handleClick}
                  className="border border-dashed p-4 rounded-lg text-center text-sm text-gray-500 flex items-center justify-center gap-2 cursor-pointer hover:bg-gray-50"
                >
                  <Upload size={16} />
                  Click to upload or drag & drop
                </div>
              </div>

              {/* Checkbox */}
              <div className="flex items-start gap-2 text-xs text-gray-500">
                <input type="checkbox" />
                <p>
                  By submitting, you agree to receive communications.{" "}
                  <span className="text-orange-500">Unsubscribe anytime.</span>
                </p>
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <button className="px-4 py-2 border rounded-lg text-sm">
                  Reset
                </button>
                <button className="flex-1 bg-[#1e2a78] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#16205c]">
                  Send Message →
                </button>
              </div>

              <p className="text-xs text-gray-400 text-center">
                🔒 No spam, ever. Your data is kept private & secure.
              </p>

            </div>
          </div>

        </div>
      </section>
      <section className="bg-[#f5f7fb] py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          {/* Label */}
          <p className="text-orange-500 text-xs font-semibold tracking-widest mb-3 flex items-center gap-2">
            <span className="w-6 h-[2px] bg-orange-500"></span>
            FIND US
          </p>

          {/* Heading */}
          <h2 className="text-5xl font-bold text-[#0f1e6b] leading-tight">
            Our <br />
            <span className="text-orange-500">Location</span>
          </h2>

          {/* Description */}
          <p className="text-gray-500 mt-4 text-sm leading-relaxed max-w-md">
            Situated within Sri Shanmugha Educational Institutions in Salem,
            Tamil Nadu — at the heart of rural innovation in South India.
          </p>

          {/* Time Cards */}
          <div className="grid grid-cols-2 gap-4 mt-8">

            {/* Mon-Fri */}
            <div className="bg-[#eef1f7] p-5 rounded-xl">
              <p className="text-orange-500 text-xs font-semibold tracking-wide">
                MON - FRI
              </p>
              <p className="text-[#0f1e6b] font-bold mt-1">
                9:00 AM – 6:00 PM
              </p>
              <p className="text-xs text-gray-500">Office Hours (IST)</p>
            </div>

            {/* Saturday */}
            <div className="bg-[#eef1f7] p-5 rounded-xl">
              <p className="text-orange-500 text-xs font-semibold tracking-wide">
                SATURDAY
              </p>
              <p className="text-[#0f1e6b] font-bold mt-1">
                10:00 AM – 2:00 PM
              </p>
              <p className="text-xs text-gray-500">By Appointment</p>
            </div>

            {/* Sunday */}
            <div className="bg-[#eef1f7] p-5 rounded-xl">
              <p className="text-orange-500 text-xs font-semibold tracking-wide">
                SUNDAY
              </p>
              <p className="text-[#0f1e6b] font-bold mt-1">
                Closed
              </p>
              <p className="text-xs text-gray-500">Rest day</p>
            </div>

            {/* Online Support */}
            <div className="bg-[#fff4ee] border border-orange-200 p-5 rounded-xl">
              <p className="text-orange-500 text-xs font-semibold tracking-wide">
                ONLINE SUPPORT
              </p>
              <p className="text-[#0f1e6b] font-bold mt-1">
                24 / 7
              </p>
              <p className="text-xs text-gray-500">Email anytime</p>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (MAP CARD) */}
        <div className="relative bg-[#eef1f7] rounded-2xl h-[300px] flex items-center justify-center overflow-hidden">

          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(0,0,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.05)_1px,transparent_1px)] bg-[size:30px_30px]" />

          {/* Pin */}
          <div className="relative z-10 flex flex-col items-center">

            <div className="bg-[#1e2a78] p-4 rounded-full shadow-lg">
              <MapPin className="text-white" size={20} />
            </div>

            {/* Tooltip */}
            <div className="mt-4 bg-white px-4 py-2 rounded-xl shadow text-center">
              <p className="text-sm font-semibold text-[#0f1e6b]">
                Aakam Shine Incubator
              </p>
              <p className="text-xs text-gray-500">
                Pullipalayam, Sankari, Salem — 637304
              </p>

              <button className="mt-2 bg-[#1e2a78] text-white px-4 py-1 rounded-md text-xs hover:bg-[#16205c]">
                Open in Maps →
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
    <section className="py-20 px-6 bg-[#f5f7fb]">
      <div className="max-w-3xl mx-auto text-center">

        {/* Heading */}
        <p className="text-orange-500 text-xs font-semibold tracking-widest mb-2">
          — FAQ
        </p>

        <h2 className="text-3xl font-bold text-[#0f1e6b]">
          Common Questions
        </h2>

        <p className="text-gray-500 text-sm mt-2">
          Quick answers to things people often ask before reaching out.
        </p>

        {/* FAQ List */}
        <div className="mt-10 space-y-4 text-left">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-5 cursor-pointer transition"
              onClick={() => toggleFAQ(index)}
            >
              {/* Question */}
              <div className="flex justify-between items-center">
                <h4 className="text-[#0f1e6b] font-medium text-sm">
                  {faq.question}
                </h4>

                {/* Plus / Close */}
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-500 text-white text-xs">
                  {activeIndex === index ? "×" : "+"}
                </div>
              </div>

              {/* Answer */}
              {activeIndex === index && (
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}

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
  );
};

export default Contact;