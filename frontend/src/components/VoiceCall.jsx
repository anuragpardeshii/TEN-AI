import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PhoneCall } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = SpeechRecognition ? new SpeechRecognition() : null;

const VoiceCall = ({ onEndCall, useCase }) => {
  const [seconds, setSeconds] = useState(0);
  const [listening, setListening] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    agentSpeak("Hello, I am your AI agent. How may I assist you today?");
  }, []);

  const agentSpeak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.onend = () => {
      startListening();
    };
    window.speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    if (!recognition) {
      alert("Speech recognition not supported in this browser.");
      return;
    }
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.start();
    setListening(true);

    recognition.onresult = async (event) => {
      const userSpeech = event.results[0][0].transcript;
      console.log("User said:", userSpeech);
      setListening(false);
      await getAgentResponse(userSpeech); // Send query along with useCase to backend
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
      agentSpeak("There was an error with speech recognition. Please try again.");
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
    };
  };

  const getAgentResponse = async (query) => {
    console.log("Sending query to backend:", query);
    try {
      const domainToSend = useCase || 'travel'; // Use 'travel' if useCase is not provided

      const res = await fetch("http://localhost:5000/api/voice/voice-input", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ domain: domainToSend, query }),
      });

      const data = await res.json();
      console.log("Backend response:", data);

      if (res.ok && data.response) {
        agentSpeak(data.response);  // Agent speaks the refined response from backend
      } else {
        console.error("AI response not found:", data);
        agentSpeak("Sorry, I couldn't understand. Please try again.");
      }
    } catch (error) {
      console.error("API Error:", error);
      agentSpeak("There was a problem connecting to the server.");
    }
  };

  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const secs = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${mins}:${secs}`;
  };

  const currentDate = new Date().toLocaleDateString();

  const handleEndCall = () => {
    if (onEndCall) {
      onEndCall();
    } else {
      navigate(`/agent-card/${useCase}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 w-full max-w-2xl">
        <div className="flex justify-between items-center border-b pb-4 mb-6">
          <h2 className="text-xl font-semibold">Voice Call</h2>
          <span className="text-sm text-gray-500">{currentDate}</span>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-6">
          <div className="flex items-center justify-center w-full">
            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4140/4140051.png"
                alt="Agent"
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="mt-2 font-semibold">Sarah</span>
            </div>
            <div className="flex-grow border-t-2 border-dotted border-gray-300 mx-6"></div>
            <div className="flex flex-col items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/847/847969.png"
                alt="User"
                className="w-16 h-16 rounded-full object-cover"
              />
              <span className="mt-2 font-semibold">You</span>
            </div>
          </div>

          <div className="text-xl font-bold text-gray-700">{formatTime(seconds)}</div>
          {listening && <div className="text-sm text-green-500">Listening...</div>}
        </div>

        <div className="flex justify-center">
          <Button
            onClick={handleEndCall}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-full"
          >
            End Call
          </Button>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center">
          This AI agent is a demo and may not provide fully accurate responses or take any actions.
        </p>
      </div>
    </div>
  );
};

export default VoiceCall;
