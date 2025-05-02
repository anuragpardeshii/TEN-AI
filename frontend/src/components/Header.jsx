import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Briefcase,
  Handshake,
  Headset,
  Menu,
  Moon,
  MoveRight,
  Newspaper,
  ShieldCheck,
  Sun,
  Tag
} from "lucide-react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from "@/components/ui/menubar";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseEnter = (menu) => setHoveredMenu(menu);
  const handleMouseLeave = () => setHoveredMenu(null);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 8, opacity: 1, scaleX: isScrolled ? 0.8 : 1, originX: 0.5 }}
      transition={{ duration: 0.3 }}
      className={`fixed max-w-screen w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/60 dark:bg-gray-800 rounded-2xl text-gray-300 backdrop-blur-lg shadow-lg"
          : "bg-white dark:bg-black border-b-2"
      }`}
    >
      <div className="flex justify-between items-center px-8">
        <Link to="/">
          <motion.h1
            className="text-2xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Link to="/">
              <span className="dark:text-white">TEN</span>
              <span className="text-blue-500">AI</span>
            </Link>
          </motion.h1>
        </Link>

        <nav className="hidden md:flex">
          <Menubar className="gap-5">
            {["Solutions", "Industries", "Blogs"].map((menuKey) => (
              <MenubarMenu key={menuKey} onMouseLeave={handleMouseLeave}>
                <MenubarTrigger onMouseEnter={() => handleMouseEnter(menuKey)}>
                  {menuKey} <CaretDownIcon />
                </MenubarTrigger>
                {hoveredMenu === menuKey && (
                  <MenubarContent forceMount>
                    {menuKey === "Solutions" && (
                      <div className="flex items-start p-2 min-w-[400px]">
                        <div className="flex flex-col pr-4">
                          <MenubarItem className="group">
                            <Link
                              to="/custom-ai-agents"
                              className="gap-2 flex items-start"
                            >
                              <Headset size={18} className="mt-1" />
                              <span className="flex flex-col text-left text-[16px] w-38">
                                <span className="group-hover:text-blue-500 font-medium">
                                  Custom AI Agents
                                </span>
                                <p className="text-[12px] text-gray-500">
                                  Automate end-to-end workflows with tailored
                                  solution
                                </p>
                              </span>
                            </Link>
                          </MenubarItem>
                          <hr className="h-[0.5px] bg-gray-300 w-full" />
                          <MenubarItem className="group">
                            <Link
                              to="/aiservices"
                              className="flex items-start gap-2"
                            >
                              <Handshake size={18} className="mt-1" />
                              <span className="flex flex-col text-left text-[16px] w-38">
                                <span className="group-hover:text-blue-500 font-medium">
                                  All Services For StartUp
                                </span>
                                <p className="text-[12px] text-gray-500">
                                  Partner to build your AI products from 0 to 1
                                </p>
                              </span>
                            </Link>
                          </MenubarItem>
                        </div>
                        <div className="w-px bg-gray-300 self-stretch mx-1" />
                        <div className="flex flex-col">
                          <MenubarItem className="group">
                            <Link
                              to="/whyten"
                              className="flex items-start gap-2"
                            >
                              <Handshake size={18} className="mt-1" />
                              <span className="flex flex-col text-left text-[16px] w-38">
                                <span className="group-hover:text-blue-500 font-medium">
                                  Why TEN AI ?
                                </span>
                                <p className="text-[12px] text-gray-500">
                                  Build reliable and enterprise ready Ai with
                                  TENAI
                                </p>
                              </span>
                            </Link>
                          </MenubarItem>
                        </div>
                      </div>
                    )}

                    {menuKey === "Industries" && (
                      <div className="flex gap-6 p-2">
                        <Link
                          to="/retail"
                          className="flex items-start gap-2 group"
                        >
                          <Tag size={18} className="mt-1" />
                          <span className="flex flex-col text-left text-[16px] w-38">
                            <span className="group-hover:text-blue-500 font-medium">
                              Retail
                            </span>
                            <p className="text-[12px] text-gray-500">
                              AI Agents for sales, operations, and customer
                              delight
                            </p>
                          </span>
                        </Link>

                        <div className="w-px bg-gray-300 self-stretch mx-1" />

                        <Link to ='/insurance' className="flex items-start gap-2 group">
                          <ShieldCheck size={18} className="mt-1" />
                          <span className="flex flex-col text-left text-[16px] w-38">
                            <span className="group-hover:text-blue-500 font-medium">
                              Insurance
                            </span>
                            <p className="text-[12px] text-gray-500">
                              Boost sales, streamline claims with AI
                            </p>
                          </span>
                        </Link>
                      </div>
                    )}

                    {menuKey === "Blogs" && (
                      <div className="flex flex-col gap-4 p-2">
                        <div className="flex items-start gap-2 group">
                          <Briefcase size={18} className="mt-1" />

                          <span className="flex flex-col text-left text-[16px] w-38">
                            <span className="group-hover:text-blue-500 font-medium">
                              Customer Stories
                            </span>
                          </span>
                        </div>

                        <div className="flex items-start gap-2 group">
                          <Newspaper size={18} className="mt-1" />

                          <span className="flex flex-col text-left text-[16px] w-38">
                            <Link to="explore-blogs">
                              <span className="group-hover:text-blue-500 font-medium">
                                Latest Insights
                              </span>
                            </Link>
                          </span>
                        </div>
                      </div>
                    )}
                  </MenubarContent>
                )}
              </MenubarMenu>
            ))}

            <MenubarMenu>
              <MenubarTrigger><Link to='company'>About Us</Link></MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </nav>

        {/* Theme + CTA */}
        <div className="flex gap-3 items-center">
          <button
            className="cursor-pointer z-50"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <Link
            to={"/contact-us"}
            className="hidden sm:flex gap-1 items-center bg-blue-500 hover:bg-black transition-all cursor-pointer text-white rounded-full px-4 py-2 text-sm font-semibold"
          >
            <span>Let's Talk</span> <MoveRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Menu className="w-8 h-8" />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
