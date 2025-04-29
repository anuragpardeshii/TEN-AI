
import { Link } from 'react-router-dom';

// import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  // const navigate = useNavigate();
  // const agentCard = () => {
  //   navigate("/agent-card");
  // };
  return (
    <div>
      <section className="w-full py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 ">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            <span className="block">Empower Your</span>
            <span className="block">Enterprise with AI Agents</span>
          </h1>
          <p className="text-gray-600 text-sm mb-4 leading-tight max-w-2xl mx-auto">
            Automate your existing workflows to enhance <br />
            customer experiences and improve internal
            <br />
            productivity with tailored AI solutions.
          </p>
          {/* button */}
          {/* <div className="flex justify-center mt-4">
            <button
              className="bg-blue-600 hover:bg-blue-950 text-white px-3 py-2 rounded-full text-xs  transition-all duration-200"
              onClick={agentCard}
            >
              Book a Demo →
            </button>
          </div> */}
          <Link to='/custom-ai-agents#demo_details' className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-9 has-[>svg]:px-3 z-50 cursor-pointer p-4 mt-6 text-[12px] text-white dark:hover:text-black bg-[#245ae2] hover:bg-black dark:hover:bg-white rounded-full">
            Book a Demo →
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
