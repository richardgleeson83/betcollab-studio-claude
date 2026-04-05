import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="font-display text-xl tracking-tight">
          bet<span className="text-primary">Collab</span>
        </span>
        <div className="hidden sm:flex items-center gap-8 font-body text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Services</a>
          <a href="#proof" className="hover:text-foreground transition-colors">Results</a>
          <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-5 font-body text-sm">
            Book a call
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
