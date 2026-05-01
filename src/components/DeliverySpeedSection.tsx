import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    step: "STEP 1",
    title: "Book a Discovery Call",
    description:
      "We understand your platform, your roadmap, and your most pressing design challenges.",
  },
  {
    step: "STEP 2",
    title: "Ship Features, Every Week",
    description:
      "Production-ready Figma designs delivered to your roadmap. Your priorities, your pace. Senior iGaming quality, AI-accelerated delivery.",
  },
];

const DeliverySpeedSection = () => {
  return (
    <section className="relative px-6 py-16 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left — copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-6">
            AI-Accelerated Delivery
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl leading-[1.05] tracking-[-0.035em] font-medium text-foreground mb-8">
            Get production-ready iGaming design in days. No onboarding. No ramp-up. No waiting.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            We've been designing sportsbook and casino interfaces for 15 years. Add AI-enhanced workflows and you get a design partner that moves faster than any traditional agency or in-house team.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Just a team who know your product and ships accordingly.
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
          <div className="space-y-3">
            {steps.map((s) => (
              <div
                key={s.step}
                className="rounded-xl border border-border/50 bg-background p-5"
              >
                <h3 className="text-base font-medium tracking-[-0.01em] text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="text-muted-foreground text-sm font-light leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverySpeedSection;
