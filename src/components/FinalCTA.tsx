"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) =>
              el.classList.add("revealed")
            );
          }
        });
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section-pad"
      style={{
        background: "var(--bg-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background */}
      <div
        className="glow-orb animate-pulse-glow"
        style={{
          width: "700px",
          height: "400px",
          background: "rgba(99,102,241,0.1)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
        }}
      />

      <div
        className="container-ss"
        style={{ position: "relative", zIndex: 1, textAlign: "center" }}
      >
        <div
          className="reveal"
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            padding: "80px 40px",
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(13,13,26,0.6) 100%)",
            border: "1px solid rgba(99,102,241,0.2)",
            borderRadius: "28px",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="section-label" style={{ margin: "0 auto 24px" }}>
            Ready to Grow?
          </div>

          <h2
            className="reveal reveal-delay-1"
            style={{
              fontSize: "clamp(28px, 4.5vw, 52px)",
              marginBottom: "24px",
              lineHeight: 1.1,
            }}
          >
            Your Next Growth Opportunity{" "}
            <span className="headline-gradient">
              Could Be Closer Than You Think.
            </span>
          </h2>

          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: "17px",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto 40px",
            }}
          >
            Tell us what you&apos;re trying to achieve. We&apos;ll identify where your
            digital growth can improve — at no cost.
          </p>

          <div
            className="reveal reveal-delay-3"
            style={{
              display: "flex",
              gap: "12px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <button className="btn-primary" onClick={scrollToContact} style={{ fontSize: "15px", padding: "14px 28px" }}>
              Get a Free Growth Audit
              <ArrowRight size={16} />
            </button>
            <a
              href="https://wa.me/919244016653?text=Hi%20SocialSift%2C%20I%20want%20to%20learn%20more%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
              style={{ fontSize: "15px", padding: "13px 28px" }}
            >
              <MessageCircle size={16} />
              Let&apos;s Talk
            </a>
          </div>

          <p
            className="reveal reveal-delay-4"
            style={{
              marginTop: "32px",
              fontSize: "12px",
              color: "var(--text-muted)",
            }}
          >
            Free. No obligation. No pressure.
          </p>
        </div>
      </div>
    </section>
  );
}
