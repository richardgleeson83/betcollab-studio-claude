import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import showcaseImage from "@/assets/betcollab-system-2.png";
import FooterSection from "@/components/FooterSection";
import ComponentShowcase from "@/components/ComponentShowcase";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const plans = [
  {
    name: "Lite",
    audience: "Independent Sportsbooks",
    price: "£249",
    features: [
      "Built on shadcn/ui",
      "Tailwind Ready",
      "Core Components",
      "Sportsbook Components",
      "Figma Variables",
      "Future Updates",
    ],
    highlights: [
      "Commercial Use* (Single)",
      "Dark Theme",
      "Homepage Template",
    ],
    previewUrl:
      "https://www.figma.com/design/xLi0FNVybgVpqQ9z3oR37F/betcollab-Lite-Design-System--Demo-?node-id=272-27980&t=lcsJUh5zye7Gj4Gg-1",
    buyUrl: "https://betcollab.gumroad.com/l/betcollab-lite",
  },
  {
    name: "Pro",
    audience: "Sportsbook Operator",
    price: "£899",
    featured: true,
    features: [
      "Built on shadcn/ui",
      "Tailwind Ready",
      "Core Components",
      "Sportsbook Components",
      "Figma Variables",
      "Future Updates",
    ],
    highlights: [
      "Commercial Use* (Multiple)",
      "Dark, Light & Alternate Themes",
      "Full Template Library",
    ],
    previewUrl:
      "https://www.figma.com/design/SU6NOttG4iTdzPWYVXkNDf/betcollab-Pro-Design-System--Demo-?node-id=272-27980&t=lBjx98Ay6Imay9kU-1",
    buyUrl: "https://betcollab.gumroad.com/l/betcollab-pro",
  },
  {
    name: "Bespoke",
    audience: "Fully customised",
    price: "£4,000+",
    features: [
      "Built on shadcn/ui",
      "Tailwind Ready",
      "Core Components",
      "Sportsbook Components",
      "Figma Variables",
      "Future Updates",
    ],
    highlights: [
      "Commercial Use* (Multiple)",
      "Bespoke Themes",
      "Custom Templates",
    ],
    contactUrl: "https://betcollab.com/contact-us/",
  },
];

const capabilities = [
  { emoji: "🎨", title: "Multi-theme support", desc: "Scale across multiple brands and markets while maintaining a cohesive experience." },
  { emoji: "⚙️", title: "Design system", desc: "Built for designers and developers to ship complex sportsbook experiences faster." },
  { emoji: "🧩", title: "Shadcn/ui & Tailwind CSS", desc: "2000+ Components & Variants. Figma Variables and Modes." },
  { emoji: "📐", title: "Figma Variables", desc: "Ready-made patterns for odds and betslips to reduce friction between design and code." },
];

const DesignSystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 text-center">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto"
        >
          <span className="inline-block mb-6 text-sm text-primary border border-primary/20 rounded-full px-4 py-1.5">
            🎉 betCollab V1.0 now available
          </span>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground mb-6">
            The Most Complete Design System for Sportsbooks
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            The professional Figma design system for sportsbook web and mobile apps, built to help teams create consistent, high-quality betting experiences faster.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <a
                href="https://www.figma.com/design/SU6NOttG4iTdzPWYVXkNDf/betcollab-Pro-Design-System--Demo-?node-id=272-27980&t=lBjx98Ay6Imay9kU-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Preview in Figma
              </a>
            </Button>
            <Button asChild size="lg" className="rounded-full">
              <a
                href="https://betcollab.gumroad.com/l/betcollab-pro"
                target="_blank"
                rel="noopener noreferrer"
              >
                Buy Now
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Built for */}
      <section className="px-6 py-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-muted-foreground leading-relaxed">
            betCollab is built for{" "}
            <span className="text-foreground">⚽ independent sportsbooks,</span>{" "}
            <span className="text-foreground">🏢 operators, and 🚀 enterprise platforms,</span>{" "}
            <span className="text-primary">
              enabling faster, more consistent betting UX without repetitive design work.
            </span>
          </h2>
        </motion.div>
      </section>

      {/* Showcase Image */}
      <section className="px-6 py-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <img
            src={showcaseImage}
            alt="betCollab design system themed sportsbook examples showing different partner configurations"
            className="w-full rounded-2xl border border-border/50"
          />
        </motion.div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-primary mb-3 text-center"
          >
            🎨 Multi-theme support
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-center mb-12"
          >
            Unmatched Versatility
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border/50 bg-card p-6"
              >
                <span className="text-2xl mb-3 block">{cap.emoji}</span>
                <h3 className="text-foreground font-medium mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm text-primary mb-3 text-center"
          >
            🤝 Pricing
          </motion.p>
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground text-center mb-3"
          >
            Choose what works for you
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-muted-foreground text-center mb-12"
          >
            We have something for designers, teams and operators
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border bg-card p-8 flex flex-col ${
                  plan.featured
                    ? "border-primary/50 ring-1 ring-primary/20"
                    : "border-border/50"
                }`}
              >
                <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mt-1">{plan.audience}</p>
                <p className="text-4xl font-semibold text-foreground mt-6 mb-6">{plan.price}</p>

                <div className="border-t border-border/50 pt-6 flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                        <Check className="h-3.5 w-3.5 text-muted-foreground/60 shrink-0" />
                        {f}
                      </li>
                    ))}
                    {plan.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-sm text-foreground font-medium">
                        <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex gap-3">
                  {plan.previewUrl && (
                    <Button asChild variant="outline" className="flex-1 rounded-full" size="sm">
                      <a href={plan.previewUrl} target="_blank" rel="noopener noreferrer">
                        Preview
                      </a>
                    </Button>
                  )}
                  {plan.buyUrl && (
                    <Button asChild className="flex-1 rounded-full" size="sm">
                      <a href={plan.buyUrl} target="_blank" rel="noopener noreferrer">
                        Buy Now
                      </a>
                    </Button>
                  )}
                  {plan.contactUrl && (
                    <Button asChild className="flex-1 rounded-full" size="sm">
                      <a href={plan.contactUrl} target="_blank" rel="noopener noreferrer">
                        Get in touch!
                      </a>
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-8 max-w-3xl mx-auto text-center leading-relaxed">
            * Use of betCollab is subject to our licensing terms. Redistribution or resale is not permitted. All plans include a commercial license to use betCollab in live sportsbook products. The Lite plan allows commercial use for a single sportsbook product, while the Pro/Bespoke plan permits use across multiple sportsbook products within the same organisation.
          </p>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground mb-8">Book a call to discuss your project and find the right plan for your sportsbook.</p>
          <Button asChild className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-8">
            <a href="https://betcollab.com/#contact" target="_blank" rel="noopener noreferrer">
              Book a call
            </a>
          </Button>
        </motion.div>
      </section>

      <FooterSection />
    </div>
  );
};

export default DesignSystem;
