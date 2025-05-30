import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, MessageSquare, CheckCircle } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const agentData = [
  {
    category: "Insurance",
    title: "Insurance Agent",
    description:
      "Get help with policy details and file claims easily. Try our agents here.",
    agentName: "Jack",
    tasks: ["View policy details", "File claims"],
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140048.png",
  },
  {
    category: "Retail",
    title: "Retail Agent",
    description:
      "Check order details or make changes with ease. Experience our agent here.",
    agentName: "Alex",
    tasks: ["Check order status", "Modify orders"],
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140061.png",
  },
  {
    category: "Travel",
    title: "Travel Agent",
    description:
      "Simplify flight rescheduling in just a few steps. Experience our agent here.",
    agentName: "Myra",
    tasks: ["Reschedule flight", "Answer basic FAQs"],
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140047.png",
  },
  {
    category: "Hospitality",
    title: "Hospitality Agent",
    description:
      "Book rooms quickly and get answers to hotel FAQs. Try our agent here.",
    agentName: "Emma",
    tasks: ["Book rooms", "Answer hotel FAQs"],
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140051.png",
  },
  {
    category: "Banking",
    title: "Banking Agent",
    description:
      "Handle account inquiries and card services seamlessly. Try our agent here.",
    agentName: "Liam",
    tasks: ["Account inquiries", "Card services"],
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140037.png",
  },
  {
    category: "Real Estate",
    title: "Real Estate Agent",
    description:
      "Find properties, schedule viewings, and get mortgage assistance. Try our agent here.",
    agentName: "Sophia",
    tasks: ["Find properties", "Schedule viewings"],
    avatar: "https://cdn-icons-png.flaticon.com/512/4140/4140060.png",
  },
];

const AgentCard = () => {
  const { category } = useParams();


  const filteredAgents = category
    ? agentData.filter(
      (agent) => agent.category.toLowerCase() === category.toLowerCase()
    )
    : agentData;

  const formatCategory = category
    ? category
      .split(" ")
      .map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(" ")
    : "AI";

  return (
    <div className="flex flex-col items-center p-50">
      <div className="mb-4 bg-green-100 px-4 py-1 rounded-full text-sm text-green-700 font-medium">
        ✨ Human-like conversations
      </div>
      <h2 className="text-3xl font-bold text-center">
        Experience Our {formatCategory} Agent
      </h2>
      <p className="text-gray-600 text-center mt-2 mb-6 max-w-md">
        Experience our AI {formatCategory} agent for enterprise use cases. Feel
        free to try it out yourself.
      </p>

      {filteredAgents.length > 0 ? (
        <div className="flex items-center justify-center">
          {filteredAgents.map((agent) => (
            <Card
              key={agent.category}
              className="w-full h-full max-w-sm rounded-2xl shadow-md"
            >
              <div className="flex flex-col items-center bg-gradient-to-b from-green-100 to-white pt-6 rounded-t-2xl">
                <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center">
                  <img
                    src={agent.avatar}
                    alt={`${agent.agentName} avatar`}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-black mt-2">
                  {agent.agentName}
                </h3>
                <p className="text-gray-600 mb-4">{agent.title}</p>
              </div>
              <CardContent>
                <div className="bg-gray-100 p-3 rounded-lg space-y-2 mb-4">
                  <div className="space-y-2 border-t border-gray-200 pt-2">
                    {agent.tasks.map((task, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                        {task}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex justify-around gap-4 pb-6">
                  <Link to={`/voice-call/${agent.category.toLowerCase()}`}>
                    <Button
                      className="w-30 flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                      variant="secondary"
                    >
                      <PhoneCall size={16} /> Call
                    </Button>
                  </Link>

                  <Link to={`/chat-box/${agent.category.toLowerCase()}`}>
                    <Button
                      className="w-30 flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
                      variant="secondary"
                    >
                      <MessageSquare size={16} /> Chat
                    </Button>
                  </Link>
                </div>
                {/* <div>{agent.category.toLowerCase()}</div> */}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <p className="text-gray-600 text-center">
          Sorry, no agents found for the category "{category}".
        </p>
      )}
    </div>
  );
};

export default AgentCard;
