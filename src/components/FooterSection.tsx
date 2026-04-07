import { Link } from "react-router-dom";
import logo from "@/assets/betcollab-logo.svg";

const FooterSection = () => {
  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link to="/"><img src={logo} alt="betCollab" className="h-5" /></Link>
          <Link to="/design-system" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            Design System
          </Link>
        </div>
        <p className="text-xs text-muted-foreground font-light">
          © 2026 betCollab. Premium sportsbook design, on demand.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
