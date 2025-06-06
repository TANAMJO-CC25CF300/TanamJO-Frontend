import React, { useState, useRef, useEffect } from "react";

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [open]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="relative w-[340px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
          {/* Tombol Close */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 transition-colors p-1.5 rounded-full"
            aria-label="Tutup"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="px-5 pt-5 pb-2">
            <h2 className="text-lg font-bold text-gray-700 flex items-center gap-2">
              Halo Sahabat Tanaman <span role="img" aria-label="seedling">👋</span>
            </h2>
            <p className="text-gray-600 text-sm mt-1">Terima kasih telah mengunjungi Tanaman TanamJo! Ada yang bisa kami bantu?</p>
          </div>

          {/* Status Box */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl mx-4 my-3 p-4 flex flex-col gap-2">
            <div className="font-semibold text-gray-700">Sahabat Tanaman siap mendengar cerita Anda</div>
            <div className="text-gray-500 text-sm">Silakan mulai percakapan untuk berbagi tentang tanaman Anda</div>
            <button
              className="mt-2 text-blue-600 font-medium text-sm flex items-center gap-1 hover:underline focus:outline-none"
              disabled
            >
              Mulai Percakapan
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label="Buka Chat"
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