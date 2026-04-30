import { motion } from "framer-motion";
import logo from "@/assets/betcollab-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-xl"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/"><img src={logo} alt="betCollab" className="h-5" /></Link>
        <div className="hidden sm:flex items-center gap-7 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-foreground transition-colors duration-200">Home</Link>
          <Link to="/design-system" className="hover:text-foreground transition-colors duration-200">Design System</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
