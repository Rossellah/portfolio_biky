import React, { useState, useEffect } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("cisco");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('nav')) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Certificates", href: "#certificates" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const certificates = [
    { img: "/cert.modernai.jpg", name: "Modern AI Certification", issuer: "Cisco" },
    { img: "/Screenshot 2026-01-28 153621.png", name: "Apply AI: Update Your Resume", issuer: "Cisco" },
    { img: "/Screenshot 2026-01-28 153800.png", name: "AI Fundamentals with IBM SkillsBuild", issuer: "Cisco" },
    { img: "/cert.datascience.jpg", name: "Data Science Certificate", issuer: "Cisco" },
    { img: "/Screenshot 2026-01-28 153722.png", name: "Apply AI: Analyze Customer Reviews", issuer: "Cisco" },
  ];

  const projects = [
    { title: "Calculator", path: "calculator/index.html", description: "Advanced calculator with responsive design", tech: ["HTML", "CSS", "JavaScript"] },
    { title: "Array Object Manager", path: "array_object_Flix_Vixen/index.html", description: "Data structure visualization and management tool", tech: ["JavaScript", "LocalStorage"] },
    { title: "Unit Converter", path: "converter-activities-flix/index.html", description: "Multi-unit conversion application", tech: ["HTML", "CSS", "JS"] },
    { title: "To-Do App", path: "todo-app/index.html", description: "Productivity task management system", tech: ["React", "LocalStorage"] },
  ];

  const socialLinks = [
    { icon: faEnvelope, href: "mailto:flixvixenbarbero27@gmail.com", label: "Email" },
    { icon: faLinkedin, href: "https://linkedin.com/in/flixvixenbarbero", label: "LinkedIn" },
    { icon: faGithub, href: "https://github.com/flixvixen", label: "GitHub" },
    { icon: faFacebook, href: "https://facebook.com/flixpadillabarbero", label: "Facebook" },
    { icon: faInstagram, href: "https://instagram.com/_skiflix", label: "Instagram" },
    { icon: faTwitter, href: "https://twitter.com/flixvixen", label: "Twitter" },
  ];

  const skills = [
    { name: "React.js", level: 90, color: "from-cyan-500 to-blue-500" },
    { name: "Node.js", level: 85, color: "from-green-500 to-emerald-500" },
    { name: "JavaScript", level: 92, color: "from-yellow-500 to-orange-500" },
    { name: "CSS/Tailwind", level: 88, color: "from-blue-400 to-indigo-500" },
    { name: "Python", level: 75, color: "from-blue-500 to-purple-500" },
  ];

  return (
    <div className="min-h-screen text-gray-100 font-sans overflow-x-hidden">
      {/* Enhanced Responsive Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/95 backdrop-blur-lg py-2 md:py-3 shadow-2xl" : "bg-transparent py-4 md:py-5"
      }`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2 md:space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg blur opacity-75 animate-pulse hidden sm:block"></div>
                <div className="relative rounded-lg bg-gray-900 p-1.5 md:p-2 border border-cyan-500/30">
                  <span className="font-bold text-lg md:text-xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">FB</span>
                </div>
              </div>
              <h1 className="font-bold text-lg md:text-xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                Flix Barbero
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-3 lg:px-4 py-2 text-gray-300 hover:text-white font-medium transition-all duration-200 rounded-lg hover:bg-gray-800/50 group text-sm lg:text-base"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                  <span className="block h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-300"></span>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-300 hover:text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 pb-3 bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-800 animate-slideDown">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-gray-800/50 font-medium border-b border-gray-800 last:border-b-0 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 pt-20 sm:pt-24 md:pt-28 pb-8 md:pb-12 lg:pb-16">
        {/* Enhanced Responsive Header with Hero Section */}
        <header className="text-center mb-12 sm:mb-16 md:mb-20 relative px-2">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-blue-500/10 blur-3xl -z-10"></div>
          
          <div className="relative inline-block mb-6 sm:mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <img
              src="/flixprofile.jpg"
              alt="Flix Profile"
              className="relative mx-auto rounded-full border-4 border-gray-900 w-40 h-40 sm:w-48 sm:h-48 md:w-52 md:h-52 object-cover shadow-2xl z-10"
            />
            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center z-20 border-4 border-gray-900 shadow-xl">
              <span className="text-xs sm:text-sm font-bold">DEV</span>
            </div>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2">
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Flix Vixen P. Barbero
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-medium mb-4 sm:mb-6 max-w-2xl mx-auto px-4">
            Full Stack Developer & AI Enthusiast crafting digital experiences with cutting-edge technology
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 sm:mb-8 px-2">
            {["React.js", "Node.js", "Express", "Python", "AI/ML", "TypeScript"].map((tech, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 sm:px-4 sm:py-2 bg-gray-800/50 backdrop-blur-sm text-cyan-300 rounded-full text-xs sm:text-sm font-medium border border-cyan-500/30 hover:border-cyan-400 transition-colors cursor-pointer hover:bg-gray-800/70"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
            <a href="#contact" className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 sm:hover:-translate-y-1 text-sm sm:text-base">
              Get In Touch
            </a>
            <a href="#projects" className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-800/70 transition-all duration-300 text-sm sm:text-base">
              View Projects
            </a>
          </div>
        </header>

        {/* Enhanced Responsive About Section */}
        <section
          id="about"
          className="mb-12 sm:mb-16 md:mb-20 bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl border border-gray-800 hover:border-cyan-500/30 transition-all duration-300"
        >
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">01</span>
            </div>
            <h2 className="ml-3 sm:ml-4 text-xl sm:text-2xl md:text-3xl font-bold text-white">
              About <span className="text-cyan-300">Me</span>
            </h2>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg mb-4 sm:mb-6">
                Passionate Full Stack Developer with expertise in building scalable web applications 
                and elegant user experiences. I specialize in JavaScript ecosystems and have a strong 
                foundation in modern technologies, continuously learning and adapting to new trends 
                in web development and AI.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                My journey in technology is driven by curiosity and a desire to create impactful 
                solutions. When I'm not coding, I'm exploring new frameworks, contributing to open-source 
                projects, or diving into AI research.
              </p>
            </div>
            
            <div className="mt-6 lg:mt-0">
              <h3 className="font-bold text-lg sm:text-xl text-white mb-4 sm:mb-6">Technical Skills</h3>
              <div className="space-y-3 sm:space-y-4">
                {skills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1.5 sm:mb-2">
                      <span className="text-gray-300 font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className="text-cyan-300 font-bold text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 sm:h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Responsive Certificates Section */}
        <section
          id="certificates"
          className="mb-12 sm:mb-16 md:mb-20 bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl border border-gray-800"
        >
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">02</span>
            </div>
            <h2 className="ml-3 sm:ml-4 text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Certifications & <span className="text-cyan-300">Achievements</span>
            </h2>
          </div>

          {/* Enhanced Responsive Tabs */}
          <div className="flex flex-wrap gap-1 sm:gap-2 mb-6 sm:mb-8 border-b border-gray-800 pb-2">
            {["cisco", "webinars"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 sm:px-6 sm:py-3 font-medium text-sm sm:text-lg rounded-t-lg relative flex-1 sm:flex-none ${
                  activeTab === tab
                    ? "text-white bg-gradient-to-r from-gray-800 to-gray-900 border-t border-x border-gray-700"
                    : "text-gray-400 hover:text-gray-300"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {activeTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
                )}
              </button>
            ))}
          </div>

          {/* Cisco Certificates Grid - Responsive */}
          {activeTab === "cisco" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {certificates.map((cert, idx) => (
                <div 
                  key={idx} 
                  className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gray-900/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-gray-900">
                    <img
                      src={cert.img}
                      alt={cert.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-3 sm:p-4 w-full">
                      <a 
                        href={cert.img} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-xs sm:text-sm font-medium rounded-lg hover:shadow-lg text-center"
                      >
                        View Certificate
                      </a>
                    </div>
                  </div>
                  <div className="p-3 sm:p-4 md:p-5">
                    <h3 className="font-bold text-white group-hover:text-cyan-300 transition-colors text-sm sm:text-base md:text-lg">{cert.name}</h3>
                    <p className="text-xs sm:text-sm text-gray-400 mt-1 sm:mt-2">Issued by {cert.issuer}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Webinars - Responsive */}
{activeTab === "webinars" && (
  <div className="text-center py-8 sm:py-12 md:py-16 px-2">
    <div className="inline-block p-4 sm:p-6 md:p-8 bg-gray-900/70 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-800 max-w-md sm:max-w-lg w-full">

      {/* Certificate Image */}
      <div className="mb-4 sm:mb-6">
        <img
          src="BIKY.png"   // 👈 image from public folder
          alt="Webinar Certificate"
          className="w-full h-auto rounded-lg border border-gray-700 shadow-lg"
        />
      </div>

      {/* Certificate Details */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
        Cybersecurity
      </h3>

      <p className="text-gray-400 mb-4 text-sm sm:text-base">
        Digital Safety Protocol
      </p>

      {/* Optional Action */}
      <a
        href="/certificates/webinar-cert.png"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
      >
        View Full Certificate
      </a>

    </div>
  </div>
)}

        </section>

        {/* Enhanced Responsive Projects Section */}
        <section
          id="projects"
          className="mb-12 sm:mb-16 md:mb-20 bg-gray-900/50 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl border border-gray-800"
        >
          <div className="flex items-center mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg sm:text-xl">03</span>
            </div>
            <h2 className="ml-3 sm:ml-4 text-xl sm:text-2xl md:text-3xl font-bold text-white">
              Featured <span className="text-cyan-300">Projects</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-900/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className="p-4 sm:p-5 md:p-6">
                  <div className="flex items-start justify-between mb-3 sm:mb-4">
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 sm:mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech.map((tech, techIdx) => (
                          <span key={techIdx} className="px-2 py-0.5 sm:px-3 sm:py-1 bg-cyan-900/30 text-cyan-300 text-xs rounded-full border border-cyan-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="text-xl sm:text-2xl text-gray-600 group-hover:text-cyan-400 transition-colors ml-2 sm:ml-4">
                      ↗
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3 sm:pt-4 border-t border-gray-800">
                    <a
                      href={project.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 sm:px-5 sm:py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 text-sm sm:text-base"
                    >
                      View Live
                    </a>
                    <span className="text-xs sm:text-sm text-gray-500 hover:text-gray-300 transition-colors">
                      Interactive Demo
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enhanced Responsive Contact Section */}
        <footer
          id="contact"
          className="relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl sm:shadow-2xl"
        >
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 via-blue-900/20 to-purple-900/20 -z-10"></div>
          <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm -z-10"></div>
          
          <div className="text-center relative z-10 px-2">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">
              Let's Build <span className="text-cyan-300">Something Amazing</span>
            </h2>
            <p className="text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            {/* Contact Info - Responsive */}
            <div className="mb-8 sm:mb-10">
              <a 
                href="mailto:flixvixenbarbero27@gmail.com"
                className="inline-flex items-center gap-2 sm:gap-3 px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-4 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl border border-gray-700 hover:border-cyan-500 transition-all duration-300 group w-full sm:w-auto"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={faEnvelope} className="text-white text-sm sm:text-base" />
                </div>
                <div className="text-left flex-1 min-w-0">
                  <div className="text-xs sm:text-sm text-gray-400">Email me at</div>
                  <div className="text-sm sm:text-base md:text-lg font-medium text-white group-hover:text-cyan-300 transition-colors truncate">
                    flixvixenbarbero27@gmail.com
                  </div>
                </div>
              </a>
            </div>
            
            {/* Social Links - Responsive */}
            <div className="mb-8 sm:mb-10">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Connect with me</h3>
              <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 hover:border-cyan-400 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
                    aria-label={link.label}
                  >
                    <FontAwesomeIcon icon={link.icon} className="text-gray-300 hover:text-white text-base sm:text-lg md:text-xl" />
                  </a>
                ))}
              </div>
            </div>
            
            {/* Footer - Responsive */}
            <div className="pt-6 sm:pt-8 border-t border-gray-800">
              <p className="text-gray-500 text-xs sm:text-sm">
                © {new Date().getFullYear()} Flix Vixen P. Barbero. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-1 sm:mt-2">
                Crafted with ❤️ using React & Tailwind CSS
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;