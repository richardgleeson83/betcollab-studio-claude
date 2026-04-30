import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const timeline = [
  { day: "DAY 1", label: "Monday — Brief received" },
  { day: "DAY 3", label: "Wednesday — First Figma designs" },
  { day: "DAY 5", label: "Friday — Dev-ready components" },
];

const DeliverySpeedSection = () => {
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
            72-Hour Delivery, Every Time
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.035em] font-medium text-foreground mb-8">
            Get <span className="text-gradient-subtle">production-ready</span> iGaming design in <span className="text-gradient-subtle">days</span>. No onboarding. No ramp-up. No waiting.
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
            We've been designing sportsbook and casino interfaces for 15 years. Add AI-enhanced workflows and you get a design partner that moves faster than any traditional agency or in-house team.
          </p>
          <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
            Brief us on Monday and your first Figma designs land by Wednesday. Production-ready components by Friday. No discovery phases. No "just to confirm" emails. No agency politics. Just a designer who already knows your product and ships accordingly.
          </p>
          <Button
            size="lg"
            className="gap-2"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Start Shipping This Week <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        {/* Right — timeline card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="rounded-2xl border border-border/50 bg-card p-8"
        >
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-6">
            AI-Accelerated Delivery
          </p>
          <div className="space-y-3">
            {timeline.map((t) => (
              <div
                key={t.day}
                className="flex items-center justify-between rounded-xl border border-border/50 bg-background px-5 py-4"
              >
                <span className="text-muted-foreground text-sm font-light">
                  {t.label}
                </span>
                <span className="text-xs font-medium tracking-[0.15em] text-primary bg-primary/[0.08] border border-primary/20 rounded-md px-2.5 py-1">
                  {t.day}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl border border-border/50 bg-background p-5">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-base font-medium tracking-[-0.01em] text-foreground">
                Live Betting Redesign
              </h3>
              <span className="text-xs font-medium tracking-[0.15em] text-primary bg-primary/[0.08] border border-primary/20 rounded-md px-2.5 py-1">
                DONE
              </span>
            </div>
            <div className="space-y-2 mb-3">
              <div className="h-1.5 rounded-full bg-muted/60 w-full" />
              <div className="h-1.5 rounded-full bg-muted/60 w-3/4" />
            </div>
            <p className="text-primary text-sm font-light">
              Delivered in 3 weeks ✓
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverySpeedSection;
