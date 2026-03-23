import React from 'react';

const WhatsAppWidget = () => {
  return (
    <a
      href="https://wa.me/910000000000" // Placeholder, user to change
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-2xl transition-all duration-300 flex items-center justify-center hover:animate-none"
      aria-label="Chat on WhatsApp"
      style={{ animation: 'bounce 2s infinite' }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-8 h-8"
      >
        <path d="M11.99 2C6.47 2 2 6.48 2 12c0 1.76.46 3.42 1.25 4.88L2 22l5.25-1.19C8.67 21.57 10.29 22 11.99 22c5.52 0 10-4.48 10-10S17.51 2 11.99 2zm5.74 14.28c-.24.68-1.39 1.3-1.93 1.37-.46.06-1.05.11-3.32-.83-2.73-1.13-4.52-3.9-4.66-4.08-.14-.19-1.12-1.48-1.12-2.83 0-1.34.7-2.02.94-2.28.23-.25.51-.31.68-.31.17 0 .34 0 .49.01.16.01.37-.06.58.44.22.52.66 1.62.72 1.74.06.12.09.26.01.42-.08.15-.12.25-.23.37-.12.12-.25.27-.35.37-.11.11-.23.23-.1.45.13.23.59 1.01 1.27 1.62.88.8 1.63 1.04 1.86 1.15.23.11.37.09.51-.08.14-.17.61-.7.77-.94.16-.25.32-.21.53-.13.21.08 1.35.64 1.58.75.23.11.38.17.44.27.06.1.06.56-.18 1.24z" />
      </svg>
    </a>
  );
};

export default WhatsAppWidget;
