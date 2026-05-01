import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/betcollab-logo.svg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = () => setMobileOpen(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" onClick={() => { closeMobile(); window.scrollTo(0, 0); }}>
          <img src={logo} alt="betCollab" className="h-5" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden sm:flex items-center gap-7 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors duration-200" onClick={() => window.scrollTo(0, 0)}>Home</Link>
          <Link to="/design-system" className="hover:text-foreground transition-colors duration-200" onClick={() => window.scrollTo(0, 0)}>Design System</Link>
          <Button asChild size="sm">
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex items-center justify-center w-11 h-11 text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] }}
            className="sm:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="px-6 py-4 flex flex-col">
              <Link
                to="/"
                className="flex items-center py-4 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 border-b border-border/50"
                onClick={() => { closeMobile(); window.scrollTo(0, 0); }}
              >
                Home
              </Link>
              <Link
                to="/design-system"
                className="flex items-center py-4 text-base font-medium text-foreground hover:text-primary transition-colors duration-200 border-b border-border/50"
                onClick={() => { closeMobile(); window.scrollTo(0, 0); }}
              >
                Design System
              </Link>
              <div className="pt-4 pb-2">
                <Button asChild size="default" className="w-full" onClick={closeMobile}>
                  <a href="#contact" onClick={closeMobile}>Get in touch</a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
