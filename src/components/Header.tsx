import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-semibold text-foreground">
            Pawsapien
          </a>
          <nav className="hidden md:flex items-center gap-6">
            <a href="#use-cases" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Use Cases
            </a>
            <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              How It Works
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <a href="#faq" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </a>
          </nav>
        </div>
        <Button>Book Demo</Button>
      </div>
    </header>
  );
};

export default Header;
