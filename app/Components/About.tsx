"use client";
import React from "react";

const About = () => {
 

  return (
    <div id="about-section" className="bg-gray-100 py-16 px-5">
      {/* Outer container with max-width like main and navbar */}
      <div className="max-w-7xl mx-auto">
        {/* Inner container */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          {/* Header */}
          <h1 className="text-3xl md:text-4xl font-bold mb-5 text-center">
            Get In Touch
          </h1>

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-6">
            <p className="text-lg md:text-5xl leading-7 text-center md:text-left flex-1">
              Have questions, suggestions, or just want to share your favorite
              hobbies with us? We love to hear from you!
            </p>
            <img
              src="/image2.png"
              alt="Contact Us"
              className="rounded-lg shadow-lg max-w-full md:max-w-xs w-full"
            />
          </div>

          {/* Button */}
          <div className="text-center mt-6">
            <button
              className="px-6 py-3 text-lg bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300 text-white"
            >
              Find out now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
