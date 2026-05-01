import { motion } from "framer-motion";

const problems = [
  {
    label: "Agencies",
    body: "Agencies don't know the industry. They'll spend your budget on discovery calls and mood boards while your roadmap stalls.",
  },
  {
    label: "Freelancers",
    body: "Freelancers look great on Dribbble. Ask them to design a same-game parlay flow or a responsible gambling journey and see what you get back.",
  },
  {
    label: "Junior designers",
    body: "Junior designers need constant direction. You hired them to save time. Now you're doing their job as well as your own — and nothing ships.",
  },
];

const SoundFamiliarSection = () => {
  return (
    <section className="relative px-6 py-16 md:py-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mb-16"
        >
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-6">
            Sound familiar?
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-[3.25rem] leading-[1.1] tracking-[-0.03em] font-medium">
            You've tried the obvious options.
            <br />
            <span className="text-muted-foreground">None of them worked.</span>
          </h2>
        </motion.div>

        <div className="space-y-px rounded-2xl overflow-hidden border border-border/50">
          {problems.map((p, i) => (
            <motion.div
              key={p.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
              className="group bg-background hover:bg-card transition-colors duration-300 px-8 py-7 flex gap-6 items-start"
            >
              <div className="mt-0.5 w-2 h-2 rounded-full bg-destructive/70 shrink-0 mt-2" />
              <div>
                <p className="text-base font-medium mb-1">{p.label}</p>
                <p className="text-muted-foreground text-sm leading-relaxed font-light">{p.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 px-8 py-8"
        >
          <p className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4">
            Here's what you actually need
          </p>
          <p className="text-foreground text-base leading-relaxed">
            One senior design partner embedded in your workflow. Deep iGaming expertise, Figma-native delivery, AI-accelerated pace — and the flexibility to scale output the moment your roadmap demands it.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SoundFamiliarSection;
