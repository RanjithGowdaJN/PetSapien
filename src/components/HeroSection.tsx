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
        <div className="space-y-10 text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-[1.2]">
            Increase your revenue by 20–40% with an AI Veterinary Assistant
          </h1>
          <ul className="space-y-4 text-xl text-foreground">
            <li className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span>recalls patients proactively based on breed & age</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span>books appointments automatically</span>
            </li>
            <li className="flex items-center justify-center gap-3">
              <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span>removes front-desk overload</span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
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
