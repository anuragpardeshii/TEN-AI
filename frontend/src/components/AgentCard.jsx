import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PhoneCall, MessageSquare } from "lucide-react";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";

const AgentCard = () => {
  return (
    <div className="flex flex-col items-center p-50">
      <div className="mb-4 bg-green-100 px-4 py-1 rounded-full text-sm text-green-700 font-medium">
        ✨ Human-like conversations
      </div>
      <h2 className="text-3xl font-bold text-center">
        Experience Our Travel Agents
      </h2>
      <p className="text-gray-600 text-center mt-2 mb-6 max-w-md">
        Experience our AI agents for enterprise use cases. Feel free to try them
        out yourself.
      </p>

      <Card className="w-full h-full max-w-sm rounded-2xl shadow-md">
        <div className="flex flex-col items-center bg-gradient-to-b from-green-100 to-white pt-6 rounded-t-2xl">
          <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4140/4140048.png" // Replace with actual avatar path
              alt="Myra avatar"
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
          <h3 className="text-lg font-semibold text-black mt-2">Myra</h3>
          <p className="text-gray-600 mb-4">Flight Rescheduling</p>
        </div>
        <CardContent>
          <div className="bg-gray-100 p-3 rounded-lg space-y-2 mb-4">
            <div className="space-y-2 border-t border-gray-200 pt-2">
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Reschedule flight
              </div>
              <div className="flex items-center text-sm text-gray-700">
                <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                Answer basic FAQs
              </div>
            </div>
          </div>
          <div className="flex justify-around gap-4">
            <Button className=" w-30 flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-colors duration-300">
              <PhoneCall size={16} /> Call
            </Button>
            <Button
              className=" w-30 flex items-center gap-2 hover:bg-blue-500 hover:text-white transition-colors duration-300"
              variant="secondary"
            >
              <MessageSquare size={16} /> Chat
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AgentCard;
