import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";
import CustomAIAgents from "./pages/CustomAIAgents";
import AiServices from "./pages/AiServices";
import WhyTEN from "./pages/WhyTEN";
import Contact from "./components/Contact";
import Retail from "./pages/Retail";
function App() {
	return (
		<BrowserRouter>
			<ThemeProvider>
				<Routes>
					<Route element={<Layout />}>
						<Route path="/" element={<Home />} />
						<Route path ="/custom-ai-agents" element ={<CustomAIAgents/>}/>
						<Route path ="/aiservices" element ={<AiServices/>}/>
						<Route path ="/whyten" element ={<WhyTEN/>}/>
						<Route path ="/contact-us" element ={<Contact/>}/>
						<Route path = "/retail" element ={<Retail/>}/>
					</Route>
				</Routes>
			</ThemeProvider>
		</BrowserRouter>
	);
}

export default App;
