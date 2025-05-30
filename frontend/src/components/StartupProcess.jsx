import { FaVideo, FaProjectDiagram, FaRocket } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const steps = [
  {
    icon: <FaVideo className="text-black text-xl" />,
    title: 'Discovery',
    description:
      'Deep-dive session to clarify your AI goals, define scope, and set a clear roadmap.',
  },
  {
    icon: <FaProjectDiagram className="text-black text-xl" />,
    title: 'Co-Develop',
    description:
      'Rapidly prototype and refine Agentic AI solutions in short, focused sprints.',
  },
  {
    icon: <FaRocket className="text-black text-xl" />,
    title: 'Launch',
    description:
      'Seamless deployment with actionable data for ongoing improvements.',
  },
];

const StartupProcess = () => {
  return (
    <section className="bg-[#001F4D] text-white py-20 relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 text-center gap-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Our Simple, Startup-<br />Centric Process
        </h2>

        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[6px] mb-20">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4">
              <div className="bg-lime-300 p-4 rounded-full">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold">{step.title}</h3>
              <p className="text-[14px] text-gray-300 max-w-xs">{step.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-[#2563eb] relative rounded-2xl px-6 md:px-16 py-16 md:py-24 text-white max-w-7xl mx-auto grid md:grid-cols-2 items-center justify-between gap-8 overflow-hidden">
        {/* CTA Grid Background */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-cover bg-center opacity-10 pointer-events-none" />

          {/* Left - Heading */}
          <div className="relative z-10 text-left">
          <h3 className="text-3xl md:text-4xl font-bold leading-tight">
  Ready to Build Something<br className="hidden md:block" /> Extraordinary?
</h3>

          </div>

          {/* Right - Subtext + Button */}
          <div className="relative z-10 flex flex-col md:items-end items-start space-y-4 md:text-right">
          <p className="text-white text-lg">
  Your Startup’s AI Partner is just a click away
</p>
<Link to='/sign-page' className="bg-lime-300 hover:bg-lime-400 text-center text-black font-semibold px-6 py-2 rounded-full min-w-[140px]">
  Get Started
</Link>

          </div>
        </div>
      </div>
    </section>
  );
};

export default StartupProcess;
