import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaCertificate,
    FaShieldAlt,
    FaLock,
    FaAward,
  } from "react-icons/fa";
import { Link } from "react-router-dom";
  
  const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="flex flex-col md:flex-row md:justify-between gap-10">
  
        
            <div className="w-full md:w-1/2 md:pl-12">
              <h2 className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text">
                TEN AI
              </h2>
              <p className="mt-2 text-gray-400">
                Empowering businesses with AI-driven solutions.
              </p>
  
              <div className="mt-6">
                <p className="text-gray-300 mb-2 font-medium">Subscribe to Newsletter</p>
                <div className="relative w-full sm:w-[74%]">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-full py-2 pl-4 pr-10 bg-white text-black placeholder-gray-500 focus:outline-none"
                  />
                  <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-blue-600 font-bold text-xl cursor-pointer">
                    →
                  </span>
                </div>
              </div>
  
            
              {/* <div className="mt-6">
                <p className="text-gray-300 mb-2 font-medium">Certifications</p>
                <ul className="flex flex-wrap gap-6 sm:w-[80%]">
                  <li className="flex items-center gap-2 text-gray-400">
                    <FaCertificate className="text-yellow-400" />
                    <span>ISO</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <FaAward className="text-blue-400" />
                    <span>SCO</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <FaLock className="text-green-400" />
                    <span>GDPR</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-400">
                    <FaShieldAlt className="text-red-400" />
                    <span>SOC2</span>
                  </li>
                </ul>
              </div> */}
            </div>
  
           
            <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-6">
             
              <div>
                <h3 className="text-lg font-semibold">Quick Links</h3>
                <ul className="mt-2 space-y-2">
                  <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
                  <li><Link to="/company" className="text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link to="/aiservices" className="text-gray-400 hover:text-white">Services</Link></li>
                  <li><Link to="/contact-us" className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
              </div>
  
              <div>
                <h3 className="text-lg font-semibold">Solutions</h3>
                <ul className="mt-2 space-y-2">
                  <li><Link to="/ai-agents" className="text-gray-400 hover:text-white">AI Agents</Link></li>
                  <li><Link to="/aiservices" className="text-gray-400 hover:text-white">AI Services for Startups</Link></li>
                  <li><Link to="/whyten" className="text-gray-400 hover:text-white">Why AI?</Link></li>
                  <li><Link to="/categories" className="text-gray-400 hover:text-white">Try Our AI Agents</Link></li>
                </ul>
              </div>
  
           
              <div>
                <h3 className="text-lg font-semibold">Follow Us</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="#" className="text-gray-400 hover:text-white"><FaFacebook size={24} /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaTwitter size={24} /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaInstagram size={24} /></a>
                  <a href="#" className="text-gray-400 hover:text-white"><FaLinkedin size={24} /></a>
                </div>
              </div>
            </div>
          </div>
  
          <div className="mt-10 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TEN AI. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  