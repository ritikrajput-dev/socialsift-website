"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const onMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();

      const x =
        ((e.clientX - rect.left) / rect.width - 0.5) * 20;

      const y =
        ((e.clientY - rect.top) / rect.height - 0.5) * 20;

      const img = hero.querySelector(
        ".hero-float-img"
      ) as HTMLElement | null;

      if (img) {
        img.style.transform = `translate(${x * 0.4}px, ${
          y * 0.4
        }px)`;
      }
    };

    hero.addEventListener("mousemove", onMove);

    return () => {
      hero.removeEventListener("mousemove", onMove);
    };
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector("#contact");

    if (el) {
      window.scrollTo({
        top:
          el.getBoundingClientRect().top +
          window.scrollY -
          80,
        behavior: "smooth",
      });
    }
  };

  const scrollToServices = () => {
    const el = document.querySelector("#services");

    if (el) {
      window.scrollTo({
        top:
          el.getBoundingClientRect().top +
          window.scrollY -
          80,
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
        position: "relative",
        overflow: "hidden",
        paddingTop: "72px",
        paddingBottom: "0",
      }}
    >
      {/* Glow */}
      <div
        className="glow-orb animate-pulse-glow"
        style={{
          width: "600px",
          height: "600px",
          background: "rgba(99,102,241,0.15)",
          top: "-180px",
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
          bottom: "50px",
          right: "-80px",
        }}
      />

      <div
        className="container-ss"
        style={{
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          className="hero-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "48px",
            padding: "35px 0 35px",
          }}
        >
          {/* LEFT */}
          <div>
            <div
              className="section-label"
              style={{
                marginBottom: "22px",
                animation:
                  "fadeInUp 0.6s ease forwards",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background:
                    "var(--accent-light)",
                  display: "inline-block",
                  animation:
                    "pulse-glow 2s infinite",
                }}
              />

              Performance Marketing Agency
            </div>

            <h1
              style={{
                fontSize:
                  "clamp(40px, 5.5vw, 72px)",
                fontWeight: 900,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                marginBottom: "20px",
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
                fontSize:
                  "clamp(16px, 1.8vw, 19px)",
                lineHeight: 1.65,
                color:
                  "var(--text-secondary)",
                marginBottom: "30px",
                maxWidth: "480px",
                animation:
                  "fadeInUp 0.7s ease 0.2s both forwards",
                opacity: 0,
              }}
            >
              SocialSift helps businesses generate
              qualified leads, acquire customers,
              and build scalable digital growth
              systems through performance marketing.
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
                marginTop: "22px",
                fontSize: "12px",
                color:
                  "var(--text-muted)",
                letterSpacing: "0.04em",
                animation:
                  "fadeInUp 0.7s ease 0.4s both forwards",
                opacity: 0,
              }}
            >
              Based in India
              &nbsp;•&nbsp;
              Serving Clients Worldwide
            </p>
          </div>

          {/* RIGHT */}
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
                alt="Digital growth analytics dashboard"
                width={580}
                height={400}
                priority
                className="hero-float-img"
                style={{
                  display: "block",
                  width: "100%",
                  maxWidth: "580px",
                  height: "auto",
                  transition:
                    "transform 0.3s ease",
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

            {/* Lead Conversion */}
            <div
              style={{
                position: "absolute",
                top: "-18px",
                left: "-25px",
                background:
                  "rgba(13,13,26,0.92)",
                border:
                  "1px solid rgba(99,102,241,0.2)",
                borderRadius: "12px",
                padding: "11px 15px",
                backdropFilter: "blur(16px)",
                animation:
                  "float 5s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color:
                    "var(--text-muted)",
                  marginBottom: "3px",
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

            {/* ROAS */}
            <div
              style={{
                position: "absolute",
                bottom: "-12px",
                right: "-18px",
                background:
                  "rgba(13,13,26,0.92)",
                border:
                  "1px solid rgba(99,102,241,0.2)",
                borderRadius: "12px",
                padding: "11px 15px",
                backdropFilter: "blur(16px)",
                animation:
                  "float 6s ease-in-out 1s infinite",
              }}
            >
              <div
                style={{
                  fontSize: "11px",
                  color:
                    "var(--text-muted)",
                  marginBottom: "3px",
                  fontWeight: 600,
                }}
              >
                Campaign ROAS
              </div>

              <div
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  color:
                    "var(--accent-light)",
                }}
              >
                4.2x
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 40px 0 35px !important;
          }

          .hero-right-panel {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
