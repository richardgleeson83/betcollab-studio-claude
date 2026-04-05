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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const FeaturesSection = () => {
  return (
    <section className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
            Amplified with{" "}
            <em className="text-primary">modern</em> capabilities
          </h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything a scaling sportsbook needs from a design partner —
            domain expertise, speed, and zero overhead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display text-xl mb-3">{feature.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
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
