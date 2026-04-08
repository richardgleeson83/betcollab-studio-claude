import { motion } from "framer-motion";
import showcaseHome from "@/assets/showcase-home.png";
import showcaseSidebar from "@/assets/showcase-sidebar.png";
import showcaseAcca from "@/assets/showcase-acca.png";
import showcaseBetBoost from "@/assets/showcase-bet-boost.png";
import showcaseBetBuilder from "@/assets/showcase-bet-builder.png";
import showcaseEventGrid from "@/assets/showcase-event-grid.png";
import showcaseNextRace from "@/assets/showcase-next-race.png";

const floatingCards = [
  {
    src: showcaseHome,
    alt: "Sportsbook homepage with featured matches and navigation",
    className: "w-[520px] z-20",
    style: { top: "5%", left: "50%", transform: "translateX(-50%)" },
    delay: 0.1,
  },
  {
    src: showcaseSidebar,
    alt: "Sports navigation sidebar",
    className: "w-[180px] z-30",
    style: { top: "8%", left: "3%" },
    delay: 0.2,
  },
  {
    src: showcaseAcca,
    alt: "Accumulator bet card",
    className: "w-[240px] z-30",
    style: { bottom: "8%", left: "5%" },
    delay: 0.3,
  },
  {
    src: showcaseBetBoost,
    alt: "Bet boost promotion card",
    className: "w-[240px] z-30",
    style: { top: "5%", right: "3%" },
    delay: 0.25,
  },
  {
    src: showcaseBetBuilder,
    alt: "Bet builder selection card",
    className: "w-[240px] z-30",
    style: { bottom: "10%", right: "3%" },
    delay: 0.35,
  },
  {
    src: showcaseEventGrid,
    alt: "Premier League event grid with odds",
    className: "w-[480px] z-10",
    style: { bottom: "0%", left: "50%", transform: "translateX(-50%)" },
    delay: 0.15,
  },
  {
    src: showcaseNextRace,
    alt: "Horse racing next race carousel",
    className: "w-[380px] z-10",
    style: { top: "55%", right: "8%", transform: "translateY(-50%)" },
    delay: 0.4,
  },
];

const ComponentShowcase = () => {
  return (
    <section className="px-6 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm text-primary mb-3 text-center"
        >
          🧩 Component Library
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-center mb-4"
        >
          Everything you need, ready to ship
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto"
        >
          From sidebars and event grids to bet builders and accumulators — every component your sportsbook needs.
        </motion.p>

        {/* Floating cards composition */}
        <div className="relative w-full aspect-[16/10] max-w-5xl mx-auto">
          {/* Subtle radial glow behind the composition */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.06)_0%,transparent_70%)]" />

          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              className={`absolute ${card.className}`}
              style={card.style}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.7,
                delay: card.delay,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <img
                src={card.src}
                alt={card.alt}
                className="w-full rounded-xl shadow-2xl shadow-black/40 border border-border/30"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;
