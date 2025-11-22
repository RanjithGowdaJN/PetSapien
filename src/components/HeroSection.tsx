import { Button } from "@/components/ui/button";
import { Volume2, PlayCircle } from "lucide-react";
import heroPhone from "@/assets/hero-phone-mockup.png";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Increase your clinic's revenue effortlessly with intelligent AI
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pawsapien brings your patients back at the right time, reduces front-desk overload, 
              and books appointments automatically.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2">
                <Volume2 className="w-5 h-5" />
                Hear a sample call
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <PlayCircle className="w-5 h-5" />
                See how it works
              </Button>
            </div>
          </div>
          <div className="relative">
            <img 
              src={heroPhone} 
              alt="Pawsapien call interface on smartphone"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
