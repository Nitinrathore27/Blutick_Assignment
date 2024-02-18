import React from "react";

const BlogsSection = () => {
  // Array containing blog post data
  const slides = [
    {
      title: "Speaking SQL: Turning Natural Language into Database Dialogues",
      description:
        "Bridging Language and Data in the Enterprise Sphere: In the realm of enterprise data management, SQL databases have long stood as the backbone, housing vast quantities of invaluable information. As enterprises increasingly lean on business intelligence (BI) tools to extract insights from these data repositories, the quest for more intuitive and accessible querying methods gains momentum. The emerging solution? Leveraging Large Language Models (LLMs) to interact with SQL databases using natural language.",
      url: "https://www.bluetickconsultants.com/speaking-sql-turning-natural-language-into-database-dialogues.html",
    },
    {
      title:
        "Beyond Basics: Elevating AI with Reinforcement Learning from Human Feedback",
      description:
        "Reinforcement Learning from Human Feedback (RLHF) was arguably the key behind the success of ChatGPT, marking a significant advancement in AI's ability to understand and engage in human language. This method, vital for fine-tuning language models, addresses the complexities and nuances of communication, ensuring AI interactions are natural and intuitive. It navigates the challenges of training AI with diverse internet data, carefully guiding models to avoid replicating inappropriate language or tones.",
      url: "https://www.bluetickconsultants.com/beyond-basics-elevating-ai-with-reinforcement-learning-from-human-feedback.html",
    },
    {
      title: "The Fine Art of Tuning: Parameter-Efficient Fine-Tuning",
      description:
        "Welcome to our exploration of the fascinating world of large language models! As many of you are aware, the scale of these models has skyrocketed recently. Take, for instance, GPT-4, which boasts a staggering 1.8 trillion parameters. The desire to fine-tune these behemoths with custom datasets is growing, yet it poses significant challenges. Fine-tuning requires adjusting countless parameters, which is time-consuming, and the GPU demands are nothing short of immense.",
      url: "https://www.bluetickconsultants.com/the-fine-art-of-tuning-parameter-efficient-fine-tuning.html",
    },
    {
      title: "PrivAIcy Matters: Balancing Privacy, Price, and Performance",
      description:
        "Welcome to the enthralling universe of Generative AI! Recognized as a realm of artificial intelligence algorithms with the magic to conjure fresh content based on available data, this technology has unassumingly become the new frontier for a plethora of industries, including tech, banking, and media. And, no surprises here, the technological world has openly embraced it in myriad innovative ways.",
      url:"https://www.bluetickconsultants.com/privaicy-matters-balancing-privacy-price-and-performance-in-in-house-llm-deployments.html",
    },
  ];

  return (
    // Section containing blog posts
    <section className="container mx-auto items-center justify-center text-center bg-blue-500 py-20">
      {/* Title of the Blogs Section */}
      <div className="text-5xl font-bold text-gray-100">Blogs</div>
      {/* Grid layout for displaying blog posts */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
        {/* Map through each blog post and create a card for it */}
        {slides.map((card, index) => (
          // Link to the full blog post, opens in a new tab
          <a
            key={index}
            href={card.url}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-full hover:shadow-md"
          >
            {/* Card containing blog post title, description, and link */}
            <div className="bg-blue-100 rounded-md border border-gray-300 shadow-md p-6 h-full">
              {/* Container for title and description */}
              <div className="max-w-xs mx-auto h-full flex flex-col justify-between">
                {/* Blog post title */}
                <div>
                  <div className="font-bold text-xl mb-2">{card.title}</div>
                  {/* Blog post description */}
                  <p className="text-gray-700 text-base">{card.description}</p>
                </div>
                {/* Button to visit the full blog post */}
                <a
                  href={card.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block mt-4 bg-gray-900 text-white font-bold py-2 px-4 rounded hover:bg-gray-800"
                >
                  Visit
                </a>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
