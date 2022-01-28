import React from "react";

function Chatbot({ onClose }) {
  return (
    <div className="chatbot-body">
      <div className="chatbot-header">
        <div className="chatbot-header-left">
          <div className="chatbot-header-logo"></div>
          <div>
            <div className="chatbot-heading">Chatbot-Elearning</div>
            <div className="chatbot-subheading">AI Chatbot</div>
          </div>
        </div>
        <div className="minimize" onClick={onClose}></div>
      </div>
    </div>
  );
}

export default Chatbot;
