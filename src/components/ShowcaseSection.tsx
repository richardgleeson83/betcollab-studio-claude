import { motion } from "framer-motion";
import showcaseImage from "@/assets/betcollab-system.jpg";

const ShowcaseSection = () => {
  return (
    <section className="relative px-6 pb-8 pt-16">
      {/* Subtle top glow matching Linear's style */}
      

      <motion.div
        className="relative max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9, ease: [0.25, 0.4, 0.25, 1] }}
      >
        <div className="rounded-2xl border border-border/50 overflow-hidden bg-card shadow-2xl shadow-black/40">
          <img
            src={showcaseImage}
            alt="betCollab sportsbook design system"
            className="w-full h-auto block rounded-3xl"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default ShowcaseSection;
