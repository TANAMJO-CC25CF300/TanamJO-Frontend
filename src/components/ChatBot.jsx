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
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 1000 }}>
      {open ? (
        <div style={{ width: 320, background: "#fff", borderRadius: 12, boxShadow: "0 2px 12px rgba(0,0,0,0.15)", overflow: "hidden" }}>
          <div style={{ background: "#4caf50", color: "#fff", padding: 12, fontWeight: "bold", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            ChatBot
            <button onClick={() => setOpen(false)} style={{ background: "none", border: "none", color: "#fff", fontSize: 18, cursor: "pointer" }}>&times;</button>
          </div>
          <div style={{ height: 260, overflowY: "auto", padding: 12, background: "#f9f9f9" }}>
            {messages.map((msg, idx) => (
              <div key={idx} style={{ display: "flex", justifyContent: msg.from === "user" ? "flex-end" : "flex-start", marginBottom: 8 }}>
                <div style={{
                  background: msg.from === "user" ? "#e0f7fa" : "#e8f5e9",
                  color: "#333",
                  padding: "8px 14px",
                  borderRadius: 16,
                  maxWidth: 200,
                  fontSize: 15
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <form onSubmit={handleSend} style={{ display: "flex", borderTop: "1px solid #eee", background: "#fff" }}>
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ketik pesan..."
              style={{ flex: 1, border: "none", padding: 12, fontSize: 15, outline: "none" }}
            />
            <button type="submit" style={{ background: "#4caf50", color: "#fff", border: "none", padding: "0 18px", fontSize: 15, cursor: "pointer" }}>Kirim</button>
          </form>
        </div>
      ) : (
        <button onClick={() => setOpen(true)} style={{ background: "#4caf50", color: "#fff", border: "none", borderRadius: "50%", width: 56, height: 56, fontSize: 28, boxShadow: "0 2px 8px rgba(0,0,0,0.18)", cursor: "pointer" }}>
          💬
        </button>
      )}
    </div>
  );
};

export default ChatBot; 