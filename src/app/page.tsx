import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import ServicesSection from "@/components/ServicesSection";
import HowItWorks from "@/components/HowItWorks";
import WhySocialSift from "@/components/WhySocialSift";
import CampaignConcepts from "@/components/CampaignConcepts";
import AboutFounder from "@/components/AboutFounder";
import LeadProcess from "@/components/LeadProcess";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import GrowthAuditForm from "@/components/GrowthAuditForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* Subtle noise texture overlay */}
      <div className="noise-overlay" aria-hidden="true" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Trust Strip */}
        <TrustStrip />

        {/* 3. Problem */}
        <ProblemSection />

        {/* 4. Solution */}
        <SolutionSection />

        {/* 5. Services */}
        <ServicesSection />

        {/* 6. How It Works */}
        <HowItWorks />

        {/* 7. Why SocialSift */}
        <WhySocialSift />

        {/* 8. Campaign Concepts */}
        <CampaignConcepts />

        {/* 9. About Founder */}
        <AboutFounder />

        {/* 10. Lead Generation Process */}
        <LeadProcess />

        {/* 11. FAQ */}
        <FAQSection />

        {/* 12. Final CTA */}
        <FinalCTA />

        {/* 13. Growth Audit Form + Contact */}
        <GrowthAuditForm />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />
    </>
  );
}
