import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen grid-bg flex items-center justify-center overflow-hidden">
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-8">
            Exclusive B2B Design Partner for Sportsbooks
          </p>
        </motion.div>

        <motion.h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
        >
          Your sportsbook deserves{" "}
          <em className="text-primary">world-class</em>{" "}
          design. 🎯
        </motion.h1>

        <motion.p
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          Senior-quality product design on a flexible monthly retainer.
          No hiring. No overhead. Just premium output — delivered in days, not months. ⚡
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-8 py-6 rounded-full font-body font-medium">
            Book a call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" size="lg" className="border-border text-foreground hover:bg-secondary text-base px-8 py-6 rounded-full font-body font-medium">
            See our work
          </Button>
        </motion.div>

        <motion.div
          className="mt-20 flex items-center justify-center gap-8 text-muted-foreground font-body text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            15 years in sports betting
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="hidden sm:inline">30+ years combined experience</span>
          <span className="hidden sm:inline text-border">|</span>
          <span className="hidden sm:inline">Trusted by operators worldwide 🌍</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
          <div className="w-1 h-2 rounded-full bg-muted-foreground/50" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
