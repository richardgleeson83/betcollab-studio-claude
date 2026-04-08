import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "@/assets/betcollab-logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBookCall = () => {
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

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
          <Link to="/design-system" className="hover:text-foreground transition-colors duration-200">Design System</Link>
          <Button
            size="sm"
            onClick={handleBookCall}
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
