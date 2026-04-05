import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "@/assets/betcollab-logo.svg";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <img src={logo} alt="betCollab" className="h-5" />
        <div className="hidden sm:flex items-center gap-7 text-sm text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors duration-200">Services</a>
          <a href="#proof" className="hover:text-foreground transition-colors duration-200">Results</a>
          <Button
            size="sm"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-full px-5 text-xs font-medium h-8"
          >
            Book a call
          </Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
