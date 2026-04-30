import { motion } from "framer-motion";
import { ArrowRight, X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const skip = [
  "4-month hiring process",
  "Salary + benefits + equity",
  "Onboarding & ramp-up time",
  "Management overhead",
];

const get = [
  "Senior-level output from day one",
  "Flexible monthly retainer",
  "Cancel or scale anytime",
];

const SkipHiringSection = () => {
  return (
    <section className="relative px-6 py-24 md:py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left — comparison card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="rounded-2xl border border-border/50 bg-card p-8 md:p-10"
        >
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-5">
            What you skip
          </p>
          <ul className="space-y-3.5 mb-10">
            {skip.map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-destructive/10">
                  <X className="h-3 w-3 text-destructive" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-5">
            What you get
          </p>
          <ul className="space-y-3.5">
            {get.map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted-foreground">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-3 w-3 text-primary" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right — copy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-6">
            No headcount. No overhead.
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.035em] font-medium text-foreground mb-8">
            Skip the <span className="text-gradient-subtle">hiring process</span> and get senior design output without the <span className="text-gradient-subtle">permanent headcount</span>.
          </h2>
          <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
            No job ads. No interviews. No salary negotiations. No sick days or holiday cover to manage. No performance reviews.
          </p>
          <p className="text-muted-foreground text-lg font-light leading-relaxed mb-10">
            Just a dedicated senior designer embedded in your product team, working to your roadmap, scaling up or down as you need.
          </p>
          <Button
            size="lg"
            className="gap-2"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get Senior Design Today <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SkipHiringSection;
