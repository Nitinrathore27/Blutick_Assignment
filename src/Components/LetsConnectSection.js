import React from "react";

const LetsConnectSection = () => {
  return (
    <section className="bg-blue-100 p-8 sm:p-12 lg:p-20 lets-connect-section">
      {/* Section Heading */}
      <div className="text-center">
        <div className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-700">
          Let's Connect
        </div>
        <div className="mb-8 text-xl text-blue-500">
          Connect to our support team
        </div>
      </div>
      {/* Form Section */}
      <div>
        <div className="my-5 relative px-4 sm:px-8 lg:px-20 py-6 sm:py-10 lg:py-12 flex flex-col justify-center border-2 border-black overflow-hidden">
          <form className="mt-6">
            {/* Name Input */}
            <div className="mb-4">
              <label htmlFor="name" className="text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Write your name"
              />
            </div>
            {/* Email Input */}
            <div className="mb-4">
              <label htmlFor="email" className="text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="abc@example.com"
              />
            </div>
            {/* Contact No Input */}
            <div className="mb-4">
              <label htmlFor="contact" className="text-gray-700">Contact No</label>
              <input
                type="text"
                id="contact"
                name="contact"
                className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="+91 8xxx8-99xxx"
              />
            </div>
            {/* Subject Input */}
            <div className="mb-4">
              <label htmlFor="subject" className="text-gray-700">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter subject"
              />
            </div>
            {/* Message Input */}
            <div className="mb-4">
              <label htmlFor="message" className="text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="block w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Write your message"
              ></textarea>
            </div>
            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full h-12 px-6 text-blue-100 bg-blue-700 rounded-lg duration-150 hover:bg-blue-800"
              >
                Connect Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LetsConnectSection;
