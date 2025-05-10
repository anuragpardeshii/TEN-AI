import React from "react";
import { useNavigate } from "react-router-dom";
import VoiceCall from "./VoiceCall";

const VoiceCallWrapper = () => {
  const navigate = useNavigate();

  return (
    <VoiceCall
      useCase="travel"
      onEndCall={() => navigate("/agent-card")}

    />
  );
};

export default VoiceCallWrapper;
