import { motion } from "framer-motion";

const stats = [
  { value: "15+", label: "Years in Sports Betting" },
  { value: "30+", label: "Combined Design Experience" },
  { value: "50+", label: "Sportsbook Features Shipped" },
  { value: "100%", label: "Client Retention Rate" },
];

const testimonials = [
  {
    quote: "betCollab isn't just a design vendor — they're the senior design arm we never had to hire. They shipped our entire live betting redesign in under three weeks. 🔥",
    author: "Head of Product",
    company: "Series B Sportsbook Operator",
  },
  {
    quote: "We went from white-label generic to a UI that operators actually envy. The ROI on their retainer paid for itself in the first month. 💎",
    author: "CTO",
    company: "White-Label Platform",
  },
];

const counterVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.08,
      ease: [0.25, 0.4, 0.25, 1],
    },
  }),
};

const SocialProofSection = () => {
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
            Real words,{" "}
            <span className="text-gradient-subtle">real</span> impact
          </h2>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0 mb-24 border border-border/50 rounded-2xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              variants={counterVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center py-10 px-4 border-r border-b border-border/50 last:border-r-0 md:[&:nth-child(n+3)]:border-b-0 [&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(4)]:border-r-0"
            >
              <p className="text-4xl md:text-5xl font-medium tracking-[-0.03em] text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground font-light">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border/50 rounded-2xl p-10 hover:border-border transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
            >
              <blockquote className="text-lg md:text-xl leading-relaxed mb-8 font-light tracking-[-0.01em]">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="text-sm font-medium text-foreground">{testimonial.author}</p>
                <p className="text-sm text-muted-foreground font-light">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
