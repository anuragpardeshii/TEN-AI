
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Whytenai = () => {


  const advantages = [
    {
      id: "01",
      title: "Data Integrity",
      description: "Ensuring accurate generative AI outputs through robust data ingestion, embedding, and monitoring processes.",
      icon: (
        <svg
          className="w-16 h-16 text-white mb-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 3L4 7l8 4 8-4-8-4z" />
          <path d="M4 11l8 4 8-4" />
          <path d="M4 15l8 4 8-4" />
        </svg>
      ),
      link: "/whyten#data-integrity",
    },
    {
      id: "02",
      title: "System Integration",
      description: "Secure and scalable data integration for generative AI, enabling rapid onboarding and harmonization of enterprise data.",
      icon: (
        <svg
          className="w-16 h-16 text-white mb-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="6" cy="12" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="18" cy="18" r="2" />
          <path d="M8 12h8M18 8v8" />
        </svg>
      ),
      link: "/whyten#system-integration",
    },
    {
      id: "03",
      title: "Evaluation & Guardrailing",
      description: "Continuous monitoring and updating to maintain data integrity, ensuring AI outputs remain grounded in truth.",
      icon: (
        <svg
          className="w-16 h-16 text-white mb-8"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l7 4v6c0 5.25-3.5 10-7 10s-7-4.75-7-10V6l7-4z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      link: "/whyten#evaluation",
    },
  ];

  return (
    <div className="w-full pt-45 pb-20">
      <div className="max-w-[800px] mx-auto px-4">
        <div className="text-center mb-14">
          <div className="bg-white w-fit pr-2 pl-0.5 py-0.5 gap-2 place-self-center dark:bg-slate-800 border border-slate-300 dark:border-slate-300 font-[Manrope] text-slate-700 dark:text-slate-300 text-xs flex align-center rounded-4xl">
            <img
              className="bg-lime-300 rounded-4xl overflow-auto p-0.5 w-4 h-4"
              src="https://cdn.prod.website-files.com/66796a37e9aadbf3722c4340/668f703d2aa0bf69a597c3d9_Label%20Arrow.svg"
              alt=""
            />
            Advantages
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold mt-4">
            The TEN Advantage
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              id={advantage.classId}
              className="bg-[#00154D] text-white rounded-sm py-8 px-8 flex flex-col items-center text-center shadow-md transition-transform hover:scale-[1.015]"
            >
              <div className="text-sm bg-lime-300 text-black px-2 py-1 rounded-full mb-3">
                {advantage.id}
              </div>
              <h3 className="text-lg text-nowrap font-semibold mb-6">{advantage.title}</h3>
              {advantage.icon}
              <p className="mb-6">{advantage.description}</p>
              <Link to={advantage.link} className="bg-blue-700 hover:bg-black text-white px-6 py-2 rounded-full text-sm flex items-center gap-2">
                Explore More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whytenai;
