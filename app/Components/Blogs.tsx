"use client";
import { useRouter } from "next/navigation";

export default function Blogs() {
  const router = useRouter();

  const navigateToPosts = () => {
    router.push("/Posts");
  };

  return (
    <div id="blogs-section" className="bg-gray-100 py-16 px-5">
      {/* Container with max-width */}
      <div className="max-w-7xl mx-auto">
        {/* Blog card */}
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Welcome to Our Blogs
          </h1>
          <p className="text-xl md:text-xl text-gray-700 text-center mb-6">
            Discover a variety of articles on different hobbies, from outdoor
            adventures and creative projects to reading, gaming, and more. Dive
            in and explore content crafted to inspire and help you find your
            next favorite pastime!
          </p>
          <div className="flex justify-center">
            <button
              onClick={navigateToPosts}
              className="inline-block px-6 py-3 text-lg bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 text-white"
            >
              Go to Blogs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
