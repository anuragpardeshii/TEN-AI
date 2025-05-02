import { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const agentEndpoints = {
  insurance: "http://localhost:5000/api/groqrouter/generate/travel",
  travel: "http://localhost:5000/api/groqrouter/generate/travel",
  retail: "http://localhost:5000/api/groqrouter/generate/retail"
};
const initialBotMessage = {
  travel: "Hello! I'm your travel assistant. Where would you like to go?",
  retail: "Hi there! Looking for some great retail deals?",
  default: "Hello! How can I help you today?"
};
export default function ChatBox() {
  const { category } = useParams();
  console.log(category);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text:
        initialBotMessage[category?.toLowerCase()] || initialBotMessage.default
    }
  ]);
  const [newMessage, setNewMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (newMessage.trim() === "") return;

    const endpoint = agentEndpoints[category?.toLowerCase()];

    const userMessage = {
      id: messages.length + 1,
      sender: "user",
      text: newMessage
    };

    setMessages((prev) => [...prev, userMessage]);
    setNewMessage("");
    setLoading(true);

    try {
      const response = await axios.post(endpoint, {
        prompt: newMessage
      });

      const botMessage = {
        id: messages.length + 2,
        sender: "bot",
        text:
          response.data?.response?.content ||
          "Sorry, I couldn’t understand that."
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        {
          id: messages.length + 2,
          sender: "bot",
          text: "There was an error connecting to the assistant."
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col pt-20 h-[85vh] w-[70%] mx-auto p-4 border mb-5">
      <div className="flex-1 overflow-y-auto p-4 bg-cyan-950 rounded-md shadow-md">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`mb-3 flex ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`p-2 rounded-lg max-w-xs ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
        {loading && (
          <div className="text-white text-sm italic mt-2">
            Assistant is typing...
          </div>
        )}
      </div>

      <div className="mt-4 flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 p-2 border rounded-l-md focus:outline-none"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 p-2 rounded-r-md hover:bg-blue-600 text-white"
        >
          Send
        </button>
      </div>
    </div>
  );
}
