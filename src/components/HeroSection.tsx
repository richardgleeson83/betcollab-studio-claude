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
    <section className="relative flex items-center justify-center overflow-hidden">
      {/* Subtle radial glow */}


      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-40 pb-24">
        <motion.div
          className="mb-10"
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-block text-sm text-primary border border-primary/30 bg-primary/10 rounded-full px-4 py-1.5">
            🏆 Senior-level experience for iGaming and Sportsbook Operators
          </span>
        </motion.div>

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
              className={`inline-block mr-[0.3em] ${i >= 3 ? "text-primary" : "text-foreground"}`}
            >
              {word}
            </motion.span>
          ))}
          <motion.span variants={wordChild} className="inline-block">
            🎯
          </motion.span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed" style={{ color: '#c9d1d9' }}
          variants={fadeUp(0.5)}
          initial="hidden"
          animate="visible"
        >
          Senior-quality design on a flexible monthly retainer.
          No hiring. No overhead. Just premium output ⚡
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          variants={fadeUp(0.7)}
          initial="hidden"
          animate="visible"
        >
          <Button
            size="lg"
            className="gap-2"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a call
            <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        <motion.div
          className="mt-24 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm"
          variants={fadeUp(0.9)}
          initial="hidden"
          animate="visible"
        >
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-semibold text-foreground">15 years</span>
            <span className="text-muted-foreground font-light">in sports betting</span>
          </span>
          <span className="hidden sm:inline text-border/50">|</span>
          <span className="flex items-center gap-2">
            <span className="font-semibold text-foreground">30+ years</span>
            <span className="text-muted-foreground font-light">combined design experience</span>
          </span>
          <span className="hidden sm:inline text-border/50">|</span>
          <span className="flex items-center gap-2">
            <span className="font-semibold text-foreground">Trusted</span>
            <span className="text-muted-foreground font-light">by operators worldwide 🌍</span>
          </span>
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
