import { Button } from "@/components/ui/button";
import { Volume2, PlayCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-8">
          <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Increase your clinic revenue by 20–40% using an AI Veterinary Assistant
          </h1>
          <ul className="space-y-3 text-xl text-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>recalls patients proactively based on breed & age</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>books appointments automatically</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary mt-1">•</span>
              <span>removes front-desk overload</span>
            </li>
          </ul>
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
      </div>
    </section>
  );
};

export default HeroSection;
