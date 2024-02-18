import React from "react";

const HeroSection = () => {
  return (
    <section className="hero-section bg-blue-500">
      {/* Container for responsive layout */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center">
        {/* Left Content */}
        <div className="container mx-auto p-4 md:w-1/2">
          <h1 className="text-4xl font-bold text-white">
            Founded in 2017, Bluetick Consultants...
          </h1>
          <p className="text-lg text-gray-700 mt-2">
            Transforming Enterprises with cutting-edge, scalable,
            privacy-focused Generative AI Solutions
          </p>
          <a
            href="https://www.bluetickconsultants.com/generative-ai.html"
            target="_blank"
          >
            <button className="bg-blue-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full mt-4">
              Learn More
            </button>
          </a>
        </div>
        {/* Right Content */}
        <div className="md:w-1/2">
          <img
            src="https://img.freepik.com/free-vector/blue-star-check-mark_78370-4478.jpg?w=740&t=st=1708191325~exp=1708191925~hmac=3ba38581967f3e17d1bd478d0f78c0715e255fbd0d2f9f3b29e20e59ff5b1220"
            alt="Hero Image"
            className="w-full h-auto mx-auto md:mx-0 md:w-84" // Adjusted image size and margin for responsiveness
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
