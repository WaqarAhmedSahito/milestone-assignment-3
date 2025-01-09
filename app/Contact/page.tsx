"use client"; 

import React from "react";

const Contact: React.FC = () => {
  const handleContactClick = () => {
    window.location.href = "mailto:wa005423@gmail.com";
  };

  return (
    <div className="min-h-screen bg-white font-body">
     
      <div
        className="h-72 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://websitedemos.net/love-nature-02/wp-content/uploads/sites/988/2021/11/contact-hero-1.jpg')",
        }}
      >
        <div className="flex items-center justify-center h-full">
          <h1 className="text-black text-6xl font-bold font-body">Contact Us</h1>
        </div>
      </div>

     
      <div className="flex items-center justify-center min-h-[calc(100vh-18rem)] px-6 py-16">
        <div className="w-full max-w-lg">
          <h2 className="text-4xl font-bold mb-6 text-center">
            Let&apos;s get in touch
          </h2>
          <form className="space-y-6 text-xl">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <input
              type="email"
              placeholder="example@domain.com"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="Message"
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
              rows={5}
            ></textarea>
            <button
              type="button"
              onClick={handleContactClick}
              className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

     
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>
            Hi, I&apos;m Waqar, the creator of this Hobby Blog!
          </p>
          <p className="mt-4">
            Hobbies have always been a source of inspiration and relaxation for
            me. Whether it&apos;s exploring new creative activities, learning
            skills, or simply enjoying a moment of calm, I believe hobbies have
            the power to enrich our lives and connect us with our passions.
          </p>
          <p className="mt-4">
            Through this blog, I aim to share insights, tips, and stories about
            a variety of hobbies—from crafting and photography to fitness and
            gardening. My mission is to inspire you to try something new,
            embrace your interests, and find joy in the little things that make
            life meaningful.
          </p>
          <p className="mt-4">
            Feel free to explore, leave a comment, or even share your own
            hobbies with me. Let&apos;s grow and create together!
          </p>
          <p className="mt-4 font-bold">Looking forward to connecting,</p>
          <p>Waqar</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
