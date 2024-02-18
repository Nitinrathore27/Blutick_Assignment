import React, { useState } from "react";

const WhatWeOfferSection = () => {
  // State variables to manage dropdown state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  // Data for sections
  const sections = [
    {
      title: "Explore AI Opportunities for Your Enterprise",
      content:
        "Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.",
    },
    {
      title: "Design AI Trust Layer",
      content:
        "Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.",
    },
    {
      title: "Scalability-Focused Solutions",
      content:
        "Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.",
    },
    {
      title: "End to end Workflow automation",
      content:
        "Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.",
    },
  ];

  // Handler to open dropdown
  const handleDropdownClick = (option) => {
    setSelectedOption(option);
    setIsOpen(true);
  };

  // Handler to close dropdown
  const handleClose = () => {
    setSelectedOption(null);
    setIsOpen(false);
  };

  return (
    <section className="container mx-auto items-center justify-center text-center bg-blue-700 py-10">
      {/* Section Heading */}
      <div className="text-5xl font-bold text-gray-100">What We Offer</div>
      {/* Section Content */}
      <div className="p-5 md:p-10">
        {/* Mapping over sections to display them */}
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-white rounded-md border border-gray-300 shadow-md p-6 mb-5 md:mb-10"
          >
            {/* Section Title and See More button */}
            <div className="flex flex-col md:flex-row items-center justify-between mb-4">
              <p className="text-xl font-semibold mb-4 md:mb-0 md:mr-4">{section.title}</p>
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                onClick={() => handleDropdownClick(`Text${index}`)}
              >
                See More!
              </button>
            </div>
            {/* Dropdown content */}
            {isOpen && selectedOption === `Text${index}` && (
              <div>
                <p className="font-mono text-gray-700">{section.content}</p>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
