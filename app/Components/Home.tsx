"use client";
import React from "react";
import Image from "next/image";

const Home = () => {
  const handleScrollToBlogs = () => {
    const blogsSection = document.getElementById("blogs-section");
    if (blogsSection) {
      blogsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home-section" className="relative w-full h-screen text-white">
      {/* Full-screen background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/1.jpeg"
          alt="Nature Background"
          fill
          style={{ objectFit: "cover" }}
          quality={100}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative flex flex-col justify-center items-center h-full bg-black bg-opacity-30">
        <h1 className="text-5xl md:text-6xl font-bold mb-5 text-center">
          Welcome to My Home Page
        </h1>
        <p className="text-xl md:text-2xl leading-relaxed text-center max-w-3xl mb-6">
          Hi there! I&#39;m glad you&#39;re here. I have a variety of hobbies that I
          enjoy in my free time. From hiking in the mountains to reading science
          fiction novels, I love to explore new things and learn every day.
        </p>
        <button
          onClick={handleScrollToBlogs}
          className="px-8 py-3 text-lg bg-yellow-400 rounded-lg shadow-md hover:bg-yellow-500 transition duration-300"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Home;
