import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import SocialProofSection from "@/components/SocialProofSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="proof">
        <SocialProofSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
