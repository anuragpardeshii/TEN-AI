import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import CustomAIAgents from "./pages/CustomAIAgents";
import AiServices from "./pages/AiServices";
import WhyTEN from "./pages/WhyTEN";
import Contact from "./components/Contact";
import Retail from "./pages/Retail";
import ExploreBlogs from "./components/ExploreBlogs";
import Insurance from "./pages/Insurance";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Categories from "./pages/Categories";
import AgentCard from "./components/AgentCard";
import Company from "./pages/Company";
import ChatBox from "./components/ChatBox";
import Career from "./pages/Career";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/custom-ai-agents" element={<CustomAIAgents />} />
            <Route path="/aiservices" element={<AiServices />} />
            <Route path="/whyten" element={<WhyTEN />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/company" element={<Company />} />
            <Route path="/career" element={<Career />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/explore-blogs" element={<ExploreBlogs />} />
            <Route path="/insurance" element={<Insurance />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/agent-card/:category" element={<AgentCard />} />
            <Route path="/chat-box" element={<ChatBox />} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
