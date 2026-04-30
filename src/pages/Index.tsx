import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ComponentShowcase from "@/components/ComponentShowcase";
import SoundFamiliarSection from "@/components/SoundFamiliarSection";
import FeaturesSection from "@/components/FeaturesSection";
import ShowcaseSection from "@/components/ShowcaseSection";
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
      <ComponentShowcase hideHeader />
      <SoundFamiliarSection />
      <SportsbookExpertiseSection />
      <ShowcaseSection />
      <DeliverySpeedSection />
      <SkipHiringSection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="contact">
        <CTASection />
      </div>
      <FooterSection />
    </div>
  );
};

export default Index;
