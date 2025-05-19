import React, { useState } from "react";

const VoiceCall = () => {
  const [response, setResponse] = useState("");
  const [recording, setRecording] = useState(false);

  const handleVoiceInput = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = "en-US";

    recognition.onstart = () => {
      setRecording(true);
      console.log("🎙️ Listening...");
    };

    recognition.onresult = async (event) => {
      const voiceText = event.results[0][0].transcript;
      console.log("You said:", voiceText);
      setRecording(false);

      try {
        const res = await fetch("/api/voice/voice-input", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            query: voiceText,
            domain: "travel", // 👈 Change this if needed (e.g., "retail", "insurance", etc.)
          }),
        });

        const data = await res.json();
        console.log("🧠 AI Response:", data);

        if (data.response) {
          setResponse(data.response);
        } else {
          setResponse("❌ AI response not found.");
        }
      } catch (error) {
        console.error("❗ Error calling voice API:", error);
        setResponse("Sorry, something went wrong.");
      }
    };

    recognition.onerror = (err) => {
      console.error("🎤 Voice recognition error:", err);
      setRecording(false);
      setResponse("Sorry, I couldn't understand you.");
    };

    recognition.start();
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>🎤 Voice AI Assistant</h1>
      <button
        onClick={handleVoiceInput}
        disabled={recording}
        style={{
          padding: "10px 20px",
          backgroundColor: recording ? "#ccc" : "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: recording ? "not-allowed" : "pointer",
        }}
      >
        {recording ? "Listening..." : "Start Speaking"}
      </button>

      <div style={{ marginTop: "20px" }}>
        <strong>AI Response:</strong>
        <pre
          style={{
            whiteSpace: "pre-wrap",
            backgroundColor: "#f9f9f9",
            padding: "15px",
            borderRadius: "5px",
            border: "1px solid #ddd",
          }}
        >
          {response}
        </pre>
      </div>
    </div>
  );
};

export default VoiceCall;
