import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
import SocialProofSection from "@/components/SocialProofSection";
import SportsbookExpertiseSection from "@/components/SportsbookExpertiseSection";
import SkipHiringSection from "@/components/SkipHiringSection";
import DeliverySpeedSection from "@/components/DeliverySpeedSection";
import FooterSection from "@/components/FooterSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <ShowcaseSection />
      <SportsbookExpertiseSection />
      <DeliverySpeedSection />
      <SkipHiringSection />
      <div id="proof">
        <SocialProofSection />
      </div>
      <div id="contact">
        <CTASection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
