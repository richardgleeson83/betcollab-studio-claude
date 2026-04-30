import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const wordReveal = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.04 },
  },
};

const wordChild = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.25, 0.4, 0.25, 1] },
  },
});

const HeroSection = () => {
  const headlineWords = "Design Retainers for iGaming Operators.".split(" ");

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle radial glow */}
      
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center py-32">
        <motion.p
          className="text-sm tracking-[0.2em] uppercase text-muted-foreground mb-10 font-light"
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
        >
          Senior Design Retainer for iGaming and Sportsbook Operators
        </motion.p>

        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] leading-[1.08] tracking-[-0.035em] font-medium mb-8"
          variants={wordReveal}
          initial="hidden"
          animate="visible"
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordChild}
              className={`inline-block mr-[0.3em] ${
                word === "world-class" ? "text-primary" : ""
              }`}
              style={word === "world-class" ? { fontStyle: "italic" } : {}}
            >
              {word}
            </motion.span>
          ))}
          <motion.span variants={wordChild} className="inline-block">
            🎯
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 leading-relaxed font-light"
          variants={fadeUp(0.5)}
          initial="hidden"
          animate="visible"
        >
          Senior-quality product design on a flexible monthly retainer.
          No hiring. No overhead. Just premium output — delivered in days, not months. ⚡
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp(0.7)}
          initial="hidden"
          animate="visible"
        >
          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 text-sm px-7 py-6 rounded-full font-medium tracking-[-0.01em]"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a call
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          className="mt-24 flex items-center justify-center gap-8 text-muted-foreground text-sm font-light"
          variants={fadeUp(0.9)}
          initial="hidden"
          animate="visible"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            15 years in sports betting
          </span>
          <span className="hidden sm:inline text-border/50">|</span>
          <span className="hidden sm:inline">30+ years combined design experience</span>
          <span className="hidden sm:inline text-border/50">|</span>
          <span className="hidden sm:inline">Trusted by operators worldwide 🌍</span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-5 h-8 rounded-full border border-muted-foreground/20 flex items-start justify-center p-1.5">
            <div className="w-0.5 h-1.5 rounded-full bg-muted-foreground/40" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
