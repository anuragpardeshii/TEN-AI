import { useNavigate } from "react-router-dom";

const categories = [
  {
    title: "Insurance",
    description: "Get help with policy details and file claims easily. Try our agents here.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fb7185"
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-umbrella mt-2"
      >
        <path d="M22 12a10.06 10.06 1 0 0-20 0Z"></path>
        <path d="M12 12v8a2 2 0 0 0 4 0"></path>
        <path d="M12 2v1"></path>
      </svg>
    ),
    color: "text-red-900",
    hover: "hover:bg-red-50 hover:ring ring-red-400",
    link:"/agent-card/insurance"
  },
  {
    title: "Retail",
    description: "Check order details or make changes with ease. Experience our agent here.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="19"
        height="19"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fb923c"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-store mt-2"
      >
        <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7"></path>
        <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
        <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4"></path>
        <path d="M2 7h20"></path>
        <path d="M22 7v3a2 2 0 0 1-2 2a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12a2 2 0 0 1-2-2V7"></path>
      </svg>
    ),
     link:"/agent-card/retail",
    color: "text-amber-900",
    hover: "hover:bg-amber-50 hover:ring ring-amber-400",
  },
  {
    title: "Travel",
    description: "Simplify flight rescheduling in just a few steps. Experience our agent here.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#34d399"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-tree-palm mt-2"
      >
        <path d="M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4"></path>
        <path d="M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3"></path>
        <path d="M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35"></path>
        <path d="M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14"></path>
      </svg>
    ),
    link:"/agent-card/travel",
    color: "text-emerald-900",
    hover: "hover:bg-emerald-50 hover:ring ring-emerald-400",
    onClick: true,
  },
  {
    title: "Hospitality",
    description: "Make hotel bookings, check-ins, and room service seamless. Try our bot now.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#60a5fa"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-concierge-bell mt-2"
      >
        <path d="M3 20h18"></path>
        <path d="M20 16a8 8 0 1 0-16 0"></path>
        <path d="M12 4v4"></path>
        <path d="M10 4h4"></path>
      </svg>
    ),
    link:"/agent-card/hospitally",

    color: "text-blue-900",
    hover: "hover:bg-blue-50 hover:ring ring-blue-400",
  },
  {
    title: "Banking",
    description: "Automate common banking queries and KYC updates. Try the bot in action.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#c084fc"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-bank mt-2"
      >
        <path d="m3 11 9-9 9 9"></path>
        <path d="M4 22h16"></path>
        <path d="M5 12v5"></path>
        <path d="M9 12v5"></path>
        <path d="M15 12v5"></path>
        <path d="M19 12v5"></path>
      </svg>
    ),
    link:"/agent-card/banking",

    color: "text-purple-900",
    hover: "hover:bg-purple-50 hover:ring ring-purple-400",
  },
  {
    title: "Real Estate",
    description: "Schedule property visits and answer queries with ease. Try the agent here.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#facc15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-home mt-2"
      >
        <path d="M3 9.5 12 4l9 5.5"></path>
        <path d="M12 4v16"></path>
        <path d="M8 20v-6h8v6"></path>
      </svg>
    ),
    link:"/agent-card/realEstate",

    color: "text-yellow-900",
    hover: "hover:bg-yellow-50 hover:ring ring-yellow-400",
  },
];


export default function Categories() {
  const navigate = useNavigate();

  return (
    <section>
      <div className="dark:invert bg-[url(./src/assets/images/static_bg.png)] bg-cover bg-no-repeat justify-items-center justify-center bg-position-[50%] ">
        <div className="dark:invert flex flex-col items-center relative w-full pt-20 pb-5 max-[480px]:pt-10 max-[480px]:pb-10 pl-10 pr-10 max-[480px]:pl-6 max-[480px]:pr-6">
          <div className="flex flex-col justify-center items-center w-full">
            <div className=" flex flex-row px-2.5 py-0.5 mt-12 w-fit border-solid border-1 border-[#0000001a] dark:border-gray-400 rounded-2xl cursor-pointer items-center">
              <div className="pr-0.5 ">
                <img src="./src/assets/logos/convlogo.png" alt="convlogo" className="" />
              </div>
              <div className="text-[12px] pb-0.5">Human-like conversations</div>
            </div>
            <div className="flex flex-col justify-items-center pt-5">
              <h1 className="text-center font-medium leading-7 text-4xl max-md:text-3xl pb-5">
                Select your use case
              </h1>
              <p className="font-[400] text-sm opacity-[.6] leading-5 text-center">
                Experience our AI agents for enterprise use cases.
              </p>
              <p className="font-[400] text-sm opacity-[.6] leading-5 text-center">
                Feel free to try them out yourself.
              </p>
            </div>
          </div>
          <div className="flex flex-row relative z-2 justify-center items-center">
            <div className="py-5">
              <div className="border rounded-2xl p-6 pt-6 md:w-[910px] shadow shadow-accent-foreground dark:bg-black bg-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {categories.map((cat, index) => (
                    <div
                      key={index}
                      className={`border w-full rounded-lg cursor-pointer ${cat.hover} shadow shadow-accent-foreground justify-self-center p-4 ${cat.color}`}
                      onClick={()=>navigate(cat.link)}
                    >
                      {cat.icon}
                      <div className="grayscale hover:grayscale-0">
                        <div className="font-medium text-left w-full mt-1 mr-auto">
                          {cat.title}
                        </div>
                        <div className="text-[12.5px] leading-5 opacity-75 text-left mr-auto mt-2 mb-2">
                          {cat.description}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
