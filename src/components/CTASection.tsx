import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const benefits = [
  "No long-term contracts",
  "Dedicated account manager",
  "Launch in under 4 weeks",
  "Full design system included",
];

const CTASection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative px-6 py-24 md:py-32">
      

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-medium tracking-[-0.035em] text-foreground mb-4">
              Ready to elevate your
              <br />
              <span className="text-primary">sportsbook experience?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-md font-light leading-relaxed">
              Get in touch and we'll show you how betCollab can transform your platform.
            </p>
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 text-muted-foreground">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                    <Check className="h-3 w-3 text-primary" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            {submitted ? (
              <div className="rounded-2xl border border-border/50 bg-card p-10 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Thanks, we'll be in touch!
                </h3>
                <p className="text-muted-foreground text-sm">
                  We usually respond within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-border/50 bg-card p-8 space-y-5"
              >
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Name</label>
                  <Input
                    required
                    maxLength={100}
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input
                    required
                    type="email"
                    maxLength={255}
                    placeholder="you@company.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="bg-background border-border"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea
                    required
                    maxLength={1000}
                    placeholder="Tell us about your project…"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-background border-border resize-none"
                  />
                </div>
                <Button type="submit" size="lg" className="w-full gap-2">
                  Get in touch <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
