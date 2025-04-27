import { Link } from "react-router-dom";
import Logo1 from "../assets/logos/investor_logo1.svg";
import Logo2 from "../assets/logos/investor_logo2.svg";
import Logo3 from "../assets/logos/investor_logo3.svg";


export default function Experts() {
  return (
    <section className="pt-20 pb-20">
        <div className="w-full pr-10 pl-10">
            <div className="z-1 text-center flex flex-col flex-nowrap items-center relative">
                <h2 className="text-3xl sm:text-4xl md:text-5xl mt-0 mb-0 font-serif font-semibold leading-[140%] ">Led by Experts and <br /> Backed by Top Investors</h2>
                <div className="w-[50%] max-md:w-[80%] text-center mb-8 text-sm sm:text-base font-serif leading-[150%]">At TEN AI, our team is composed of engineers from the world’s leading tech companies and top educational institutions. These experts drive the innovative capabilities of our agents, ensuring we deliver cutting-edge AI solutions.</div>
                <div className="flex gap-x-8 gap-y-8 justify-center mt-4 mr-auto mb-6 ml-auto">
                    <img src={Logo1} className="h-[2rem] dark:invert rounded-full align-middle max-w-full max-md:w-[25%] inline-block" />
                    <div className="border-l-2 dark:border-l-white"></div>
                    <img src={Logo2} className="h-[2rem] dark:invert rounded-full p-2 align-middle max-w-full inline-block max-md:w-[25%]" />
                    <div className="border-l-2 dark:border-l-white"></div>
                    <img src={Logo3} className="h-[2rem] dark:invert rounded-full p-2 align-middle max-w-full inline-block max-md:w-[25%] " />
                </div>
                <Link to='company' className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs h-9 has-[>svg]:px-3 z-50 cursor-pointer p-5 mt-6 text-sm text-white dark:hover:text-black bg-[#245ae2] hover:bg-black dark:hover:bg-white rounded-full">
                Meet the team →
                </Link>
            </div>
        </div>
    </section>
  )
}
