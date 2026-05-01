import { motion } from "framer-motion";
import showcaseHome from "@/assets/showcase-home.png";
import showcaseSidebar from "@/assets/showcase-sidebar.png";
import showcaseAcca from "@/assets/showcase-acca.png";
import showcaseBetBoost from "@/assets/showcase-bet-boost.png";
import showcaseBetBuilder from "@/assets/showcase-bet-builder.png";
import showcaseEventGrid from "@/assets/showcase-event-grid.png";
import showcaseNextRace from "@/assets/showcase-next-race.png";

const sideCards = [
  { src: showcaseAcca, alt: "Accumulator bet card", delay: 0.15 },
  { src: showcaseNextRace, alt: "Horse racing next race carousel", delay: 0.25 },
];

const rightCards = [
  { src: showcaseBetBoost, alt: "Bet boost promotion card", delay: 0.2 },
  { src: showcaseBetBuilder, alt: "Bet builder selection card", delay: 0.3 },
];

const CardItem = ({ src, alt, delay }: { src: string; alt: string; delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, delay, ease: [0.25, 0.4, 0.25, 1] }}
  >
    <img
      src={src}
      alt={alt}
      className="w-full rounded-xl border border-border/30 shadow-lg shadow-black/30"
      loading="lazy"
    />
  </motion.div>
);

const ComponentShowcase = ({ hideHeader = false }: { hideHeader?: boolean }) => {
  return (
    <section className="px-6 pt-8 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {!hideHeader && <>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-6 text-center"
          >
            🧩 Component Library
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-medium tracking-[-0.035em] text-foreground text-center mb-4"
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
        </>}

        {/* Three-column grid: left stack | center hero | right stack */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr] gap-5 items-center max-w-5xl mx-auto">
          {/* Left column */}
          <div className="hidden lg:flex flex-col gap-5">
            {sideCards.map((card) => (
              <CardItem key={card.alt} {...card} />
            ))}
          </div>

          {/* Center — hero screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="relative"
          >
            <div className="absolute -inset-8 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.08)_0%,transparent_70%)] pointer-events-none" />
            <img
              src={showcaseHome}
              alt="Sportsbook homepage with featured matches and navigation"
              className="relative w-full rounded-2xl border border-border/40 shadow-2xl shadow-black/50"
              loading="lazy"
            />
          </motion.div>

          {/* Right column */}
          <div className="hidden lg:flex flex-col gap-5">
            {rightCards.map((card) => (
              <CardItem key={card.alt} {...card} />
            ))}
          </div>

          {/* Mobile: show all cards in a 2-col grid */}
          <div className="lg:hidden grid grid-cols-2 gap-4 mt-4">
            {[...sideCards, ...rightCards].map((card) => (
              <CardItem key={card.alt} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComponentShowcase;
