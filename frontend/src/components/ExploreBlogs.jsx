import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ExploreBlogs = () => {
  const navigate = useNavigate();
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInsights = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/insights/getAll");
      setInsights(res.data.data);
    } catch (error) {
      console.error("Error fetching insights:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInsights();
    window.scrollTo(0, 0);
  }, []);

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="px-20 py-20 bg-white font-sans min-h-screen">
      <h2 className="text-4xl font-bold text-black mb-10 text-center">
        Explore All Blogs
      </h2>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-16">
          {insights.map((item, index) => (
            <div
              key={item._id || index}
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
      )}

      <div className="flex justify-end mb-6 mt-9">
        <button
          className="bg-blue-600 text-white text-lg px-6 py-2 rounded-full hover:bg-black transition"
          onClick={goBack}
        >
          <span className="text-xl">←</span> Go Back
        </button>
      </div>
    </div>
  );
};

export default ExploreBlogs;
