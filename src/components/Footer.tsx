const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border/20">
      <div className="container mx-auto text-center">
        <div className="glass-card rounded-2xl p-6 max-w-md mx-auto">
          <p className="text-muted-foreground">
            Site criado por{" "}
            <span className="hero-text font-semibold">Rhaony Ferraz</span> ®
          </p>
          <div className="mt-4 text-xs text-muted-foreground/60">
            © {new Date().getFullYear()} Todos os direitos reservados
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;