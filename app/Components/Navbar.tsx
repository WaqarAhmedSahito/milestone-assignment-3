"use client";
import React, { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to handle scroll
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold">
            <p>Hobbies</p>
          </div>
          {/* Hamburger Menu Button */}
          <button
            className="text-2xl md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-6">
            <li className="group">
              <button
                onClick={() => scrollToSection("home-section")}
                className="transition duration-300 ease-in-out hover:text-yellow-400"
              >
                Home
              </button>
              <div className="h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </li>
            
            <li className="group">
              <button
                onClick={() => scrollToSection("blogs-section")}
                className="transition duration-300 ease-in-out hover:text-yellow-400"
              >
                Blogs
              </button>
              <div className="h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </li>
            
            <li className="group">
              <button
                onClick={() => scrollToSection("about-section")}
                className="transition duration-300 ease-in-out hover:text-yellow-400"
              >
                About
              </button>
              <div className="h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </li>
            <li className="group">
              <button
                onClick={() => scrollToSection("contact-section")}
                className="transition duration-300 ease-in-out hover:text-yellow-400"
              >
                Contact
              </button>
              <div className="h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></div>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-2xl"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
          <ul className="space-y-6 text-xl">
            <li>
              <button
                onClick={() => {
                  scrollToSection("home-section");
                  toggleMenu();
                }}
                className="hover:text-yellow-400"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("blogs-section");
                  toggleMenu();
                }}
                className="hover:text-yellow-400"
              >
                Blogs
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("contact-section");
                  toggleMenu();
                }}
                className="hover:text-yellow-400"
              >
                Contact
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  scrollToSection("about-section");
                  toggleMenu();
                }}
                className="hover:text-yellow-400"
              >
                About
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
