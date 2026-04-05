const FooterSection = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg">
          bet<span className="text-primary">Collab</span>
        </span>
        <p className="font-body text-sm text-muted-foreground">
          © 2026 betCollab. Premium sportsbook design, on demand.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
