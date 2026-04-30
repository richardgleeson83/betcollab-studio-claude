import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const verticals = [
  { title: "Pre-Match", description: "Markets, pricing, bet builder" },
  { title: "In-Play", description: "Live centre, scoreboards" },
  { title: "Mobile", description: "Native iOS, Android UX" },
  { title: "White-Label", description: "Differentiation layer" },
];

const SportsbookExpertiseSection = () => {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-6">
            15 Years in iGaming
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.035em] font-medium text-foreground mb-8">
            Work with designers who have <span className="text-gradient-subtle">lived sportsbook product</span> for 15 years across <span className="text-gradient-subtle">every vertical</span>.
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
            From pre-match markets to in-play betting, from retail terminals to native mobile, from white-label platforms to fully proprietary builds.
          </p>
          <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
            We know every edge case, every player behaviour pattern, and every conversion lever in the sportsbook ecosystem. You'll never need to explain what a cash-out flow is.
          </p>
          <Button
            size="lg"
            className="gap-2"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Talk to a Sportsbook Expert <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        {/* Right — verticals card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl border border-border/50 bg-card p-8"
        >
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-6">
            Sportsbook Verticals
          </p>
          <div className="grid grid-cols-2 gap-3">
            {verticals.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border/50 bg-background p-5"
              >
                <h3 className="text-base font-medium tracking-[-0.01em] mb-1.5">
                  {v.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-primary/30 bg-primary/[0.06] p-5">
            <h3 className="text-base font-medium tracking-[-0.01em] text-primary mb-1.5">
              50+ Features Shipped
            </h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed">
              Across every product type in sports betting
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SportsbookExpertiseSection;
