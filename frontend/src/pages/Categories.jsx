import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  const agentCard = () => {
    navigate("/agent-card");
  };
  return (
    <section>
      <div className="bg-[url(./src/assets/images/static_bg.png)] bg-cover bg-no-repeat justify-items-center justify-center bg-position-[50%] ">
        <div className="flex flex-col items-center relative w-full pt-20 pb-5 max-[480px]:pt-10 max-[480px]:pb-10 pl-10 pr-10 max-[480px]:pl-6 max-[480px]:pr-6">
          <div className="flex flex-col justify-center items-center w-full">
            <div className=" flex flex-row px-2.5 py-0.5 mt-12 w-fit border-solid border-1 border-[#0000001a] rounded-2xl cursor-pointer items-center">
              <div className="pr-0.5">
                <img src="./src/assets/logos/convlogo.png" alt="convlogo" />
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
              <div className="border-1 rounded-2xl p-6 pt-6 bg-white md:w-[910px]">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div className="border w-full rounded-lg cursor-pointer hover:bg-red-50 hover:ring ring-red-400 justify-self-center p-4 text-red-900">
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
                    <div className="grayscale hover:grayscale-0">
                      <div className="font-medium text-left w-full mt-1 mr-auto">
                        Insurance
                      </div>
                      <div className="text-[12.5px] leading-5 opacity-75 text-left mr-auto mt-2 mb-2">
                        Get help with policy details and file claims easily. Try
                        our agents here.
                      </div>
                    </div>
                  </div>
                  <div className="border w-full rounded-lg cursor-pointer hover:bg-amber-50 hover:ring ring-amber-400 justify-self-center p-4 text-amber-900">
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
                    <div className="grayscale hover:grayscale-0">
                      <div className="font-medium text-left w-full mt-1 mr-auto">
                        Retail
                      </div>
                      <div className="text-[12.5px] leading-5 opacity-75 text-left mr-auto mt-2 mb-2">
                        Check order details or make changes with ease.
                        Experience our agent here.
                      </div>
                    </div>
                  </div>
                  <div
                    className="border w-full rounded-lg cursor-pointer hover:bg-emerald-50 hover:ring ring-emerald-400 justify-self-center p-4 text-emerald-900"
                    onClick={agentCard}
                  >
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
                    <div className="grayscale hover:grayscale-0">
                      <div className="font-medium text-left w-full mt-1 mr-auto">
                        Travel
                      </div>
                      <div className="text-[12.5px] leading-5 opacity-75 text-left mr-auto mt-2 mb-2">
                        Simplify flight rescheduling in just a few steps.
                        Experience our agent here.
                      </div>
                    </div>
                  </div>
                  <div className="border w-full rounded-lg cursor-pointer hover:bg-sky-50 hover:ring ring-sky-400 justify-self-center p-4 text-sky-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0ea5e9"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-hand-platter mt-2"
                    >
                      <path d="M12 3V2"></path>
                      <path d="M5 10a7.1 7.1 0 0 1 14 0"></path>
                      <path d="M4 10h16"></path>
                      <path d="M2 14h12a2 2 0 1 1 0 4h-2"></path>
                      <path d="m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18"></path>
                      <path d="M5 14v7H2"></path>
                    </svg>
                    <div className="grayscale hover:grayscale-0">
                      <div className="font-medium text-left w-full mt-1 mr-auto">
                        Hospitality
                      </div>
                      <div className="text-[12.5px] leading-5 opacity-75 text-left mr-auto mt-2 mb-2">
                        Book rooms quickly and get answers to hotel FAQs. Try
                        our agent here.
                      </div>
                    </div>
                  </div>
                  <div className="border w-full rounded-lg cursor-pointer hover:bg-purple-50 hover:ring ring-purple-400 justify-self-center p-4 text-purple-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#9333ea"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-landmark mt-2"
                    >
                      <line x1="3" x2="21" y1="22" y2="22"></line>
                      <line x1="6" x2="6" y1="18" y2="11"></line>
                      <line x1="10" x2="10" y1="18" y2="11"></line>
                      <line x1="14" x2="14" y1="18" y2="11"></line>
                      <line x1="18" x2="18" y1="18" y2="11"></line>
                      <polygon points="12 2 20 7 4 7"></polygon>
                    </svg>
                    <div className="grayscale hover:grayscale-0">
                      <div className="font-medium text-left w-full mt-1 mr-auto">
                        Banking
                      </div>
                      <div className="text-[12.5px] leading-5 opacity-75 text-left mr-auto mt-2 mb-2">
                        Handle account inquiries and card services seamlessly.
                        Try our agent here.
                      </div>
                    </div>
                  </div>
                  <div className="border w-full rounded-lg cursor-pointer hover:bg-rose-50 hover:ring ring-rose-400 justify-self-center p-4 text-rose-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#e11d48"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-building mt-2"
                    >
                      <rect
                        width="16"
                        height="20"
                        x="4"
                        y="2"
                        rx="2"
                        ry="2"
                      ></rect>
                      <path d="M9 22v-4h6v4"></path>
                      <path d="M8 6h.01"></path>
                      <path d="M16 6h.01"></path>
                      <path d="M12 6h.01"></path>
                      <path d="M12 10h.01"></path>
                      <path d="M12 14h.01"></path>
                      <path d="M16 10h.01"></path>
                      <path d="M16 14h.01"></path>
                      <path d="M8 10h.01"></path>
                      <path d="M8 14h.01"></path>
                    </svg>
                    <div className="grayscale hover:grayscale-0">
                      <div className="font-medium text-left w-full mt-1 mr-auto">
                        Real Estate
                      </div>
                      <div className="text-[12.5px] leading-5 opacity-75 text-left mr-auto mt-2 mb-2">
                        Find properties, schedule viewings, and get mortgage
                        assistance. Try our agent here.
                      </div>
                    </div>
                  </div>
                  <div className="border w-full rounded-lg cursor-pointer hover:bg-sky-50 hover:ring ring-sky-400 justify-self-center p-4 text-sky-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0ea5e1"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-book-user mt-2"
                    >
                      <path d="M15 13a3 3 0 1 0-6 0"></path>
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path>
                      <circle cx="12" cy="8" r="2"></circle>
                    </svg>
                    <div className="grayscale hover:grayscale-0">
                      <div className="font-medium text-left w-full mt-1 mr-auto">
                        Staffing and Recruiting
                      </div>
                      <div className="text-[12.5px] leading-5 opacity-75 text-left mr-auto mt-2 mb-2">
                        Simplify candidate screening and onboarding
                        effortlessly. Try our agent here.
                      </div>
                    </div>
                  </div>
                  <div className="border w-full rounded-lg cursor-pointer hover:bg-rose-50 hover:ring ring-rose-400 justify-self-center p-4 text-rose-900">
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
                    <div className="grayscale hover:grayscale-0">
                      <div className="font-medium text-left w-full mt-1 mr-auto">
                        Retail Multilingual
                      </div>
                      <div className="text-[12.5px] leading-5 opacity-75 text-left mr-auto mt-2 mb-2">
                        Check order details or make changes with ease.
                        Experience our agents here.
                      </div>
                    </div>
                  </div>
                  <div className="border w-full rounded-lg cursor-pointer hover:bg-pink-50 hover:ring ring-pink-400 justify-self-center p-4 text-pink-900">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#ec4899"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-building2 mt-2"
                    >
                      <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                      <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                      <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                      <path d="M10 6h4"></path>
                      <path d="M10 10h4"></path>
                      <path d="M10 14h4"></path>
                      <path d="M10 18h4"></path>
                    </svg>
                    <div className="grayscale hover:grayscale-0">
                      <div className="font-medium text-left w-full mt-1 mr-auto">
                        BFSI Multilingual
                      </div>
                      <div className="text-[12.5px] leading-5 opacity-75 text-left mr-auto mt-2 mb-2">
                        Handle banking, financial services, and insurance
                        queries for the Indian market.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
