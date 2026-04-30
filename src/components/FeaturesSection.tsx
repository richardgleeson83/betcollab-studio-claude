import { motion } from "framer-motion";
import { Zap, Users, Palette, Clock, Shield, Layers } from "lucide-react";

const features = [
  {
    icon: Palette,
    title: "Design Retainer",
    description: "Ongoing monthly UI updates, feature design, prototyping, and design reviews — acting as an embedded member of your product team. 🎨",
  },
  {
    icon: Zap,
    title: "Senior-Quality Speed",
    description: "Complex sportsbook interfaces delivered in days, not months. No ramp-up time, no learning curve — just immediate impact. ⚡",
  },
  {
    icon: Users,
    title: "No Headcount Overhead",
    description: "Skip the hiring process, internal politics, and downtime. Pure design output delivered as an integrated partner. 🤝",
  },
  {
    icon: Clock,
    title: "15 Years Deep",
    description: "Domain expertise that spans the entire sports betting ecosystem — from pre-match to live, from retail to mobile. 🏆",
  },
  {
    icon: Shield,
    title: "White-Label Ready",
    description: "UI/UX as your market differentiator. We craft the interface that makes your platform stand apart from every other operator. 🛡️",
  },
  {
    icon: Layers,
    title: "Team Multiplier",
    description: "Senior-level oversight and standard-setting that unlocks your junior designers' velocity and elevates your entire team. 🚀",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl leading-[1.08] tracking-[-0.035em] font-medium mb-6">
            Amplified with{" "}
            <span className="text-gradient-subtle">modern</span> capabilities
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Most operators are stuck with slow agencies, freelancers who've never seen a bet slip, or junior designers they have to babysit. betCollab is the only senior iGaming design partner with 15 years of industry expertise, Figma mastery, and AI-accelerated workflows that delivers production-ready interfaces in days — not months.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/50 rounded-2xl overflow-hidden border border-border/50">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: i * 0.06,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="group relative bg-background p-8 hover:bg-card transition-colors duration-300"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center mb-5">
                  <feature.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="text-base font-medium tracking-[-0.01em] mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
