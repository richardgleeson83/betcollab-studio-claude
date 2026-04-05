const FooterSection = () => {
  return (
    <footer className="border-t border-border/40 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-[15px] font-medium tracking-[-0.02em]">
          bet<span className="text-primary">Collab</span>
        </span>
        <p className="text-xs text-muted-foreground font-light">
          © 2026 betCollab. Premium sportsbook design, on demand.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
