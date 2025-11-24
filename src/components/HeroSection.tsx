import { Button } from "@/components/ui/button";
import { Volume2, PlayCircle, Check } from "lucide-react";
import heroBackground from "@/assets/hero-background-texture.jpg";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-24 px-6 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="container mx-auto max-w-[780px] relative z-10">
        <div className="space-y-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-[1.3]">
            Your veterinary clinic could earn $50,000+ more this year
          </h1>
          <p className="text-xl text-muted-foreground max-w-[680px] mx-auto leading-relaxed">
            Most clinics miss calls and follow-ups. Your AI Veterinary Assistant handles both.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center">
            <Button size="lg" variant="cta" className="gap-2">
              <Volume2 className="w-5 h-5" />
              Hear a sample call
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <PlayCircle className="w-5 h-5" />
              See how it works
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
