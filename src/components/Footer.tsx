const Footer = () => {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-semibold text-foreground">
            Pawsapien
          </div>
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
            <a href="#careers" className="hover:text-foreground transition-colors">Careers</a>
            <a href="#privacy" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-foreground transition-colors">Terms of Service</a>
          </nav>
        </div>
        <div className="text-center mt-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Pawsapien. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
