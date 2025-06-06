import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Insights = ({ isHomePage }) => {
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
  }, []);

  const displayedInsights = isHomePage ? insights.slice(0, 3) : insights;

  const exploreMore = () => {
    navigate("/explore-blogs");
  };

  return (
    <div className="px-78 py-12 font-sans">
      <div className="flex justify-between items-center mb-10">
        <h2 className="text-4xl font-bold text-black">Latest Insights</h2>
        {isHomePage && (
          <button
            className="bg-blue-600 text-white text-lg px-6 py-2 rounded-full hover:bg-black transition"
            onClick={exploreMore}
          >
            Explore All →
          </button>
        )}
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-3">
          {displayedInsights.map((item, index) => (
            <div
              key={item._id || index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all w-full max-w-sm cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-56 object-cover rounded-t-xl"
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
    </div>
  );
};

export default Insights;
