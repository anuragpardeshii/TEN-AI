"use client";
import { MoveRight } from "lucide-react";
import { Boxes } from "./ui/background-boxes";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function Connect() {
  const navigate = useNavigate();
  const contactForm = () => {
    navigate("/contact-us");
  };
  return (
    <div className="h-[70vh] relative w-full overflow-hidden bg-blue-600 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-white z-20 [mask-image:radial-gradient(transparent,transparent)] pointer-events-none" />
      <Boxes />
      <h1
        className={
          "text-center text-3xl md:text-5xl font-bold text-white relative z-20"
        }
      >
        Start Your Journey with TenAI Today
      </h1>
      <Button
        className="z-40 cursor-pointer p-5 mt-6 text-sm text-black hover:text-white bg-white hover:bg-black rounded-full transition-all duration-300 ease-in-out"
        onClick={contactForm}
      >
        Contact us <MoveRight />
      </Button>
    </div>
  );
}
