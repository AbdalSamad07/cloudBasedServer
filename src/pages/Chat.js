// Chat.js
import React, { useState } from 'react';
import '../chatStyles.css';

const Chat = () => {
    const [message, setMessage] = useState(''); // to hold the typed message
    const [chatHistory, setChatHistory] = useState([]); // to hold an array of messages

    const handleSendMessage = () => {
        if (message.trim()) {
            setChatHistory([...chatHistory, message]);
            setMessage('');
        }
    };

    return (
        <div className="chat-container">
            <div className="chat-header">
                Chatroom Name
            </div>

            <div className="chat-history">
                {chatHistory.map((msg, index) => (
                    <div key={index} className="message">
                        {msg}
                    </div>
                ))}
            </div>

            <div className="chat-input-area">
                <input 
                    type="text" 
                    placeholder="Type a message..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
};

export default Chat;
