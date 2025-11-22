import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import RevenueSection from "@/components/RevenueSection";
import CredibilitySection from "@/components/CredibilitySection";
import WhyMattersSection from "@/components/WhyMattersSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import MidPageCTA from "@/components/MidPageCTA";
import TestimonialSection from "@/components/TestimonialSection";
import BottomCTA from "@/components/BottomCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <RevenueSection />
        <CredibilitySection />
        <WhyMattersSection />
        <HowItWorksSection />
        <FeaturesGrid />
        <MidPageCTA />
        <TestimonialSection />
        <BottomCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
