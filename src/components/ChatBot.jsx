import React, { useState, useRef, useEffect } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Halo! Ada yang bisa saya bantu?" }
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="w-96 bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 ease-in-out">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-500 to-green-600 px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
              <h2 className="text-white font-semibold text-lg">ChatBot</h2>
            </div>
            <button 
              onClick={() => setOpen(false)}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto bg-gray-50 p-4 space-y-4">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div 
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    msg.from === "user" 
                      ? "bg-green-500 text-white rounded-br-none" 
                      : "bg-white text-gray-800 rounded-bl-none shadow-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input Form */}
          <form onSubmit={handleSend} className="border-t border-gray-200 bg-white p-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Ketik pesan..."
                className="flex-1 px-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors duration-200"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-green-500 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default ChatBot; 