"use client";

import { useState, useEffect, useRef } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What does SocialSift do?",
    a: "SocialSift is a digital growth and performance marketing agency focused on lead generation, customer acquisition, conversion optimization and marketing systems. We help businesses build scalable digital acquisition processes that turn online attention into real customers.",
  },
  {
    q: "Which businesses do you work with?",
    a: "We work with businesses across different industries that want to generate more qualified leads or customers through digital marketing — including real estate, e-commerce, SaaS, professional services, local businesses, coaches, healthcare, education, hospitality and other lead-driven businesses.",
  },
  {
    q: "Do you only run Facebook and Instagram ads?",
    a: "No. Meta Ads are one of our core acquisition channels, but SocialSift also works across Google Ads, YouTube Ads, lead generation, landing pages, CRM, automation and conversion optimization. We build complete growth systems, not isolated ad campaigns.",
  },
  {
    q: "Do you guarantee leads or sales?",
    a: "No. Marketing performance depends on factors such as the offer, market, audience, budget, competition and sales process. We focus on building, testing and optimizing campaigns based on measurable data — and we're transparent about what's working and what needs to improve.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. SocialSift is based in India and is designed to work with businesses worldwide. Geography doesn't limit the scope of what we can build for your business.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing depends on the business, scope and campaign requirements. We don't publish fixed pricing because every engagement is tailored to what the business actually needs. Contact us for a free growth audit and we'll recommend an appropriate approach.",
  },
  {
    q: "Do I need to book a call?",
    a: "No. You can start by submitting the growth audit form below. We'll review your information and contact you with the next steps. A call can happen later if it makes sense — there's no requirement to jump on one immediately.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section-pad"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container-ss">
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div className="section-label reveal">FAQ</div>
          <h2
            className="reveal reveal-delay-1"
            style={{ fontSize: "clamp(28px, 4vw, 48px)", marginBottom: "20px" }}
          >
            Common{" "}
            <span className="headline-gradient">Questions.</span>
          </h2>
          <p
            className="reveal reveal-delay-2"
            style={{ maxWidth: "480px", margin: "0 auto", fontSize: "16px" }}
          >
            Answers to questions business owners typically ask before
            working with SocialSift.
          </p>
        </div>

        <div
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`faq-item reveal reveal-delay-${(i % 4) + 1} ${openIndex === i ? "open" : ""}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
                style={{ width: "100%", textAlign: "left" }}
              >
                <span>{faq.q}</span>
                <Plus className="faq-icon" size={20} />
              </button>
              <div className={`faq-answer ${openIndex === i ? "open" : ""}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal" style={{ textAlign: "center", marginTop: "52px" }}>
          <p style={{ fontSize: "15px", marginBottom: "24px" }}>
            Have a question not covered here? Just reach out.
          </p>
          <a
            href="mailto:socialsift.agency@gmail.com"
            className="btn-secondary"
            style={{ display: "inline-flex" }}
          >
            Email Us Directly
          </a>
        </div>
      </div>
    </section>
  );
}
