import React, { useState } from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("cisco");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-200 to-indigo-200 text-blue-900 font-sans">

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white bg-opacity-80 backdrop-blur border-b border-blue-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="font-bold text-xl">Flix Barbero</h1>
          <ul className="flex gap-6 font-medium text-blue-700">
            <li><a href="#about" className="hover:text-blue-900">About</a></li>
            <li><a href="#certificates" className="hover:text-blue-900">Certificates</a></li>
            <li><a href="#projects" className="hover:text-blue-900">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-900">Contact</a></li>
          </ul>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto p-6">

        {/* Header */}
        <header className="text-center mb-16">
          <img
            src="/flixprofile.jpg"
            alt="Flix Profile"
            className="mx-auto rounded-full border-4 border-blue-300 w-40 h-40 object-cover shadow-lg"
          />
          <h1 className="text-5xl font-extrabold mt-6">
            Flix Vixen P. Barbero
          </h1>
          <p className="text-lg text-blue-700 font-semibold mt-3">
            Full Stack Developer • Creative Technologist
          </p>
        </header>

        {/* About */}
        <section
          id="about"
          className="mb-16 bg-white bg-opacity-70 backdrop-blur rounded-lg p-8 shadow border border-blue-200"
        >
          <h2 className="text-3xl font-bold border-b border-blue-300 pb-3 mb-6">
            About Me
          </h2>
          <p className="leading-relaxed">
            I'm a driven full-stack developer with a passion for building
            scalable applications and elegant user experiences. I specialize
            in JavaScript, React, and Node.js, and I continuously sharpen my
            skills through certifications, hands-on projects, and collaboration.
          </p>
        </section>

        {/* Certificates */}
        <section
          id="certificates"
          className="mb-16 bg-white bg-opacity-70 rounded-lg p-8 shadow border border-blue-200"
        >
          <h2 className="text-3xl font-bold border-b border-blue-300 pb-3 mb-6">
            Certificates & Webinars
          </h2>

          {/* Tabs */}
          <div className="flex gap-4 mb-8">
            <button
              onClick={() => setActiveTab("cisco")}
              className={`px-4 py-2 rounded font-medium transition ${
                activeTab === "cisco"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-800 hover:bg-blue-200"
              }`}
            >
              Cisco Certificates
            </button>

            <button
              onClick={() => setActiveTab("webinars")}
              className={`px-4 py-2 rounded font-medium transition ${
                activeTab === "webinars"
                  ? "bg-blue-600 text-white"
                  : "bg-blue-100 text-blue-800 hover:bg-blue-200"
              }`}
            >
              Webinars
            </button>
          </div>

          {/* Cisco Certificates */}
          {activeTab === "cisco" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { img: "/cert.modernai.jpg", name: "Modern AI Certification" },
                { img: "/Screenshot 2026-01-28 153621.png", name: "Apply AI: Update Your Resume" },
                { img: "/Screenshot 2026-01-28 153800.png", name: "AI Fundamentals with IBM SkillsBuild" },
                { img: "/cert.datascience.jpg", name: "Data Science Certificate" },
                { img: "/Screenshot 2026-01-28 153722.png", name: "Apply AI: Analyze Customer Reviews" },
              ].map((cert, idx) => (
                <div key={idx} className="text-center">
                  <img
                    src={cert.img}
                    alt={cert.name}
                    className="w-full rounded border border-blue-300 shadow mb-3"
                  />
                  <p className="font-medium">{cert.name}</p>
                </div>
              ))}
            </div>
          )}

          {/* Webinars */}
          {activeTab === "webinars" && (
            <div className="text-center py-12 text-blue-700">
              <p className="italic">
                No webinars added yet.
              </p>
            </div>
          )}
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="mb-16 bg-white bg-opacity-70 rounded-lg p-8 shadow border border-blue-200"
        >
          <h2 className="text-3xl font-bold border-b border-blue-300 pb-3 mb-6">
            Projects
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Calculator", path: "calculator/index.html" },
              { title: "Array Object", path: "array_object_Flix_Vixen/index.html" },
              { title: "Converter", path: "converter-activities-flix/index.html" },
              { title: "To-Do App", path: "todo-app/index.html" },
            ].map((proj, idx) => (
              <div
                key={idx}
                className="p-5 rounded-lg border border-blue-300 bg-gradient-to-tr from-blue-100 to-purple-200 shadow"
              >
                <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
                <a
                  href={proj.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 underline"
                >
                  View Live Demo
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <footer
          id="contact"
          className="bg-white bg-opacity-70 rounded-lg p-8 shadow border border-blue-200 text-center"
        >
          <h2 className="text-3xl font-bold border-b border-blue-300 pb-3 mb-6">
            Contact Me
          </h2>

          <div className="flex justify-center gap-6 text-2xl text-blue-600 mb-6">
            <a href="mailto:flixvixenbarbero27@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            <a href="https://linkedin.com/in/flixvixenbarbero" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a>
            <a href="https://github.com/flixvixen" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            <a href="https://facebook.com/flixpadillabarbero" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="https://instagram.com/_skiflix" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="https://twitter.com/flixvixen" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} /></a>
          </div>
        </footer>

      </div>
    </div>
  );
};

export default Portfolio;
