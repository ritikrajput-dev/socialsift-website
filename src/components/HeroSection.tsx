"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;

      const img = hero.querySelector(".hero-float-img") as HTMLElement;

      if (img) {
        img.style.transform = `translate(${x * 0.4}px, ${
          y * 0.4
        }px) translateY(0px)`;
      }
    };

    hero.addEventListener("mousemove", onMove);

    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");

    if (el) {
      const top =
        el.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  const scrollToServices = () => {
    const el = document.querySelector("#services");

    if (el) {
      const top =
        el.getBoundingClientRect().top + window.scrollY - 80;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="hero-bg grid-pattern"
      style={{
        minHeight: "auto",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: "72px",
        paddingBottom: "20px",
      }}
    >
      {/* Glow orbs */}
      <div
        className="glow-orb animate-pulse-glow"
        style={{
          width: "600px",
          height: "600px",
          background: "rgba(99,102,241,0.15)",
          top: "-150px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <div
        className="glow-orb"
        style={{
          width: "300px",
          height: "300px",
          background: "rgba(129,140,248,0.08)",
          bottom: "100px",
          right: "-50px",
        }}
      />

      <div
        className="container-ss"
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "60px",
            padding: "45px 0 35px",
          }}
        >
          {/* Left: text */}
          <div>
            <div
              className="section-label"
              style={{
                marginBottom: "28px",
                animation:
                  "fadeInUp 0.6s ease forwards",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "var(--accent-light)",
                  display: "inline-block",
                  animation: "pulse-glow 2s infinite",
                }}
              />

              Performance Marketing Agency
            </div>

            <h1
              style={{
                fontSize: "clamp(40px, 5.5vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "24px",
                animation:
                  "fadeInUp 0.7s ease 0.1s both forwards",
                opacity: 0,
              }}
            >
              Turn Attention
              <br />
              <span className="headline-gradient">
                Into Growth.
              </span>
            </h1>

            <p
              style={{
                fontSize: "clamp(16px, 1.8vw, 19px)",
                lineHeight: 1.7,
                color: "var(--text-secondary)",
                marginBottom: "40px",
                maxWidth: "480px",
                animation:
                  "fadeInUp 0.7s ease 0.2s both forwards",
                opacity: 0,
              }}
            >
              SocialSift helps businesses generate qualified
              leads, acquire customers, and build scalable
              digital growth systems through performance
              marketing.
            </p>

            <div
              style={{
                display: "flex",
                gap: "12px",
                flexWrap: "wrap",
                animation:
                  "fadeInUp 0.7s ease 0.3s both forwards",
                opacity: 0,
              }}
            >
              <button
                className="btn-primary"
                onClick={scrollToContact}
              >
                Get a Free Growth Audit
                <ArrowRight size={16} />
              </button>

              <button
                className="btn-secondary"
                onClick={scrollToServices}
              >
                Explore Our Services
              </button>
            </div>

            <p
              style={{
                marginTop: "28px",
                fontSize: "12px",
                color: "var(--text-muted)",
                letterSpacing: "0.04em",
                animation:
                  "fadeInUp 0.7s ease 0.4s both forwards",
                opacity: 0,
              }}
            >
              Based in India &nbsp;•&nbsp; Serving Clients Worldwide
            </p>
          </div>

          {/* Right: visual */}
          <div
            className="hero-right-panel"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              animation:
                "fadeIn 1s ease 0.4s both forwards",
              opacity: 0,
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "20px",
                overflow: "hidden",
                border:
                  "1px solid rgba(99,102,241,0.2)",
                boxShadow:
                  "0 0 80px rgba(99,102,241,0.15), 0 40px 80px rgba(0,0,0,0.4)",
              }}
            >
              <Image
                src="/images/hero-visual.png"
                alt="Digital growth analytics dashboard — performance marketing visualization"
                width={580}
                height={400}
                priority
                className="hero-float-img"
                style={{
                  display: "block",
                  transition: "transform 0.3s ease",
                  objectFit: "cover",
                }}
              />

              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, transparent 60%)",
                  pointerEvents: "none",
                }}
              />
            </div>

            {/* Floating metric card */}
            <div
              style={{
                position: "absolute",
                top: "-20px",
                left: "-30px",
                background: "rgba(13,13,26,0.92)",
                border:
                  "1px solid rgba(99,102,241,0.2)",
                borderRadius: "12px",
                padding: "12px 16px",
                backdropFilter: "blur(16px)",
                animation: "float 5s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  marginBottom: "4px",
                  fontWeight: 600,
                }}
              >
                Lead Conversion
              </div>

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "#4ade80",
                }}
              >
                +38.4%
              </div>
            </div>

            {/* Floating metric card */}
            <div
              style={{
                position: "absolute",
                bottom: "-15px",
                right: "-20px",
                background: "rgba(13,13,26,0.92)",
                border:
                  "1px solid rgba(99,102,241,0.2)",
                borderRadius: "12px",
                padding: "12px 16px",
                backdropFilter: "blur(16px)",
                animation:
                  "float 6s ease-in-out 1s infinite",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color: "var(--text-muted)",
                  marginBottom: "4px",
                  fontWeight: 600,
                }}
              >
                Campaign ROAS
              </div>

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color: "var(--accent-light)",
                }}
              >
                4.2x
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingBottom: "15px",
            animation:
              "fadeIn 1s ease 1s both forwards",
            opacity: 0,
          }}
        >
          <button
            onClick={() => {
              const el =
                document.querySelector("#trust-strip");

              if (el) {
                window.scrollTo({
                  top:
                    el.getBoundingClientRect().top +
                    window.scrollY -
                    80,
                  behavior: "smooth",
                });
              }
            }}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              color: "var(--text-muted)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "4px",
              animation:
                "float 2.5s ease-in-out infinite",
            }}
            aria-label="Scroll down"
          >
            <ChevronDown size={22} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 60px 0 40px !important;
          }

          .hero-right-panel {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
