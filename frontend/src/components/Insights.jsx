import React from "react";

const insights = [
  {
    category: "Artificial Intelligence",
    date: "25 May, 2024",
    title: "GPUs Part 1 - Understanding GPU Internals",
    description: "LLMs are pretty big and can use a lot of computing power.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC3s5ATIPCMCM-WTyTccPt4fXcRD9pFxZq5A&s"
  },
  {
    category: "Artificial Intelligence",
    date: "19 December, 2024",
    title: "How To Prepare Your Organization For Generative AI?",
    description:
      "Generative AI (GenAI) is revolutionizing industries, transforming how businesses operate, innovate, and create...",
    image:
      "https://endertech.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Ffswbkokbwqb5%2F4vBAsCbQ9ITwI7Ym0MtXgY%2F96c4ec25d505f1b702f46a5a3d9dbe77%2FAI-Article-00.png&w=3840&q=75"
  },
  {
    category: "Artificial Intelligence",
    date: "13 January, 2025",
    title:
      "AI Technologies And Copilots For Customer Support: What To Know And Expect",
    description: "Explore how AI copilots for customer support...",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd-M_r7bEyuBQzUODeKwobumjZ2bnoB_uelw&s"
  }
];

const Insights = () => {
  return (
    <div className="px-78 py-12 bg-white font-sans">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-black">Latest Insights</h2>
        <div>
          <button className="bg-blue-600 text-white text-lg px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Explore All →
          </button>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-16">
        {insights.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all w-full max-w-sm cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-92 object-cover rounded-t-xl"
            />
            <div className="px-5 py-4">
              <div className="flex gap-4 text-sm mb-2">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-md">
                  {item.category}
                </span>
                <span className="text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-xl text-black font-semibold mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;
