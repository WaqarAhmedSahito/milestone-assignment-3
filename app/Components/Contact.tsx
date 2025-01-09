import React from "react";
import Link from "next/link";

const QuestionsSection = () => {
  return (
    <>
      

      {/* Section */}
      <div
        id="contact-section"
        className=" relative bg-cover bg-center h-[400px] flex flex-col items-center justify-center text-center px-4 sm:h-[500px] md:h-[600px]"
        style={{
          backgroundImage:
            "url('https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/footer-hero-big.jpg')",
        }}
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4 font-body">
          Questions?
        </h2>

        {/* Paragraph */}
        <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 max-w-md mb-6 font-body">
          Whether you&apos;re curious about features, a free trial, or even press, we&apos;re
          here to answer any questions.
        </p>

        {/* Button */}
        <button className="mt-6 px-8 sm:px-10 text-xl sm:text-2xl py-2 bg-yellow-500 text-white font-semibold rounded hover:bg-yellow-600 font-body">
          <Link href="/Contact/">
            Let&apos;s Talk Now
          </Link>
        </button>
      </div>
    </>
  );
};

export default QuestionsSection;
