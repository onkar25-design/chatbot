import React, { useState } from 'react';
import './ChatBot.css';
import companyLogo from './company-logo.png';
import botIcon from './bot-icon.png';  

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I assist you today?', sender: 'bot' },
    { id: 2, text: 'How can your company help me?', sender: 'user' },
    { id: 3, text: "Thank you for considering NxtGen Innovation as a potential partner for your technology needs!", sender: 'bot' },
    { id: 4, text: "Can you tell me more about your services?", sender: 'user' },
    { id: 5, text: "We offer a wide range of services including cloud computing, AI solutions, and IT consulting. Our team is dedicated to providing innovative solutions to meet your business needs.", sender: 'bot' },
    { id: 6, text: "What are your working hours?", sender: 'user' },
    { id: 7, text: "Our office is open from 9 AM to 6 PM, Monday to Friday. However, our support team is available 24/7 to assist you.", sender: 'bot' },
    { id: 10, text: "Thank you for the information.", sender: 'user' },
    { id: 11, text: "You're welcome! Feel free to reach out if you have any more questions.", sender: 'bot' }
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { id: messages.length + 1, text: inputValue, sender: 'user' }]);
      setInputValue(""); 
    }
  };

  return (
    <div className="chatbot">
      <div className="header">
        <img src={companyLogo} alt="Company Logo" className="company-logo" />
      </div>
      <div className="messages">
        {messages.map(message => (
          <div key={message.id} className={`message-container ${message.sender}`}>
            {message.sender === 'bot' && (
              <img src={botIcon} alt="Bot" className="bot-icon" />
            )}
            <div className={`message ${message.sender}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="input-section">
        <input
          type="text"
          className="input-box"
          placeholder="Type your question here..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="send-button" onClick={handleSendMessage}>
          <span className="arrow">➤</span>
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
