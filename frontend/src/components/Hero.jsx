import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { motion } from "motion/react";

function Hero() {
	return (
		<BackgroundLines className="hero-section min-h-[80vh] w-full ">
			<section className="h-full flex flex-col gap-10 text-center w-full items-center justify-center">
				<div className="flex flex-col gap-3">
					<h1 className="text-4xl sm:text-6xl font-bold">
						AI Agents <br /> to Re-imagine
					</h1>
					<h1 className="text-4xl sm:text-6xl font-bold text-gray-500">
						Enterprise Workflows
					</h1>
				</div>
				<motion.p 
          initial={{opacity : 0, y : 50}}
          animate={{opacity : 1, y : 0}}
          transition={{duration : 1}}
		  className="text-sm sm:text-[1rem]"
        >
					Our custom agents transform how work happens, <br className="sm:block hidden" />{" "}
					providing <span className="font-bold"> 100% ROI </span>
					on all deployments
				</motion.p>
			</section>
		</BackgroundLines>
	);
}

export default Hero;
