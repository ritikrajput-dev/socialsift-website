"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <>
      <a
        href="https://wa.me/919244016653?text=Hi%20SocialSift%2C%20I%27m%20interested%20in%20a%20free%20growth%20audit."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with SocialSift on WhatsApp"
        style={{
          position: "fixed",
          bottom: "28px",
          right: "28px",
          zIndex: 200,
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#25d366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.4)",
          transition: "all 0.3s ease",
          animation: "wa-pulse 2.5s ease-in-out infinite",
          textDecoration: "none",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "scale(1.1)";
          el.style.boxShadow = "0 8px 30px rgba(37,211,102,0.5)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLElement;
          el.style.transform = "scale(1)";
          el.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
        }}
      >
        <MessageCircle size={26} color="#fff" fill="#fff" />
      </a>

      <style>{`
        @keyframes wa-pulse {
          0% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0.3); }
          70% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 14px rgba(37,211,102,0); }
          100% { box-shadow: 0 4px 20px rgba(37,211,102,0.4), 0 0 0 0 rgba(37,211,102,0); }
        }
      `}</style>
    </>
  );
}
