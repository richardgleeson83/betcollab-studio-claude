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

const SocialProofSection = () => {
  return (
    <section className="relative py-32 px-6 grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
            Real words,{" "}
            <em className="text-primary">real</em> impact
          </h2>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-4xl md:text-5xl text-primary mb-2">{stat.value}</p>
              <p className="font-body text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-card border border-border rounded-2xl p-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <blockquote className="font-display text-xl md:text-2xl leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div>
                <p className="font-body text-sm font-medium text-foreground">{testimonial.author}</p>
                <p className="font-body text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
