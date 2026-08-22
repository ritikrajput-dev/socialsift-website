"use client";

const footerLinks = {
  Company: [
    { label: "Services", href: "#services" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "About", href: "#about" },
    { label: "FAQ", href: "#faq" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
  ],
};

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#") && !href.includes("privacy") && !href.includes("terms")) {
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    }
  };

  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid rgba(99,102,241,0.08)",
        padding: "64px 0 32px",
      }}
    >
      <div className="container-ss">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "60px",
            marginBottom: "60px",
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontSize: "20px",
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#fff",
                marginBottom: "12px",
              }}
            >
              Social<span style={{ color: "var(--accent-light)" }}>Sift</span>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-muted)",
                marginBottom: "20px",
                lineHeight: 1.65,
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              Digital Growth. Real Results.
            </p>
            <p
              style={{
                fontSize: "13px",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: "320px",
              }}
            >
              SocialSift helps businesses generate qualified leads, acquire
              customers and grow online through performance marketing and
              digital growth systems.
            </p>

            <div style={{ display: "flex", gap: "10px", marginTop: "24px", flexWrap: "wrap" }}>
              <a
                href="mailto:socialsift.agency@gmail.com"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "6px",
                  padding: "7px 12px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--border-hover)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-primary)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                }}
              >
                ✉ socialsift.agency@gmail.com
              </a>
              <a
                href="https://wa.me/919244016653"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                  fontSize: "12px",
                  color: "var(--text-muted)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "6px",
                  padding: "7px 12px",
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(37,211,102,0.4)";
                  (e.currentTarget as HTMLElement).style.color = "#25d366";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.06)";
                  (e.currentTarget as HTMLElement).style.color = "var(--text-muted)";
                }}
              >
                💬 WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation links */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--text-muted)",
                  marginBottom: "20px",
                }}
              >
                {section}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      style={{
                        fontSize: "14px",
                        color: "var(--text-secondary)",
                        textDecoration: "none",
                        transition: "color 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = "var(--text-primary)";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = "var(--text-secondary)";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider" />

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "24px",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "var(--text-muted)" }}>
            © 2026 SocialSift. All rights reserved.
          </p>
          <p style={{ fontSize: "12px", color: "var(--text-muted)", letterSpacing: "0.04em" }}>
            Based in India &nbsp;•&nbsp; Serving Clients Worldwide
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container-ss > div:first-child {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          footer .container-ss > div:last-child > div:first-child {
            max-width: 100% !important;
          }
        }
      `}</style>
    </footer>
  );
}
