import { Button } from "@/components/ui/button";
import { Volume2, PlayCircle, PhoneIncoming, Brain, CalendarClock } from "lucide-react";

const HeroSection = () => {
  const valueProps = [
    {
      icon: PhoneIncoming,
      title: "Stop Losing Revenue",
      subtitle: "Capture $100k from voicemail",
      color: "text-healthcare-blue",
      bgColor: "bg-healthcare-blue/10",
    },
    {
      icon: Brain,
      title: "50% Reduction in Training",
      subtitle: "AI-powered receptionist support",
      color: "text-healthcare-blue",
      bgColor: "bg-healthcare-blue/10",
    },
    {
      icon: CalendarClock,
      title: "Automate Reactivation",
      subtitle: "Bring back patients on time",
      color: "text-healthcare-blue",
      bgColor: "bg-healthcare-blue/10",
    },
  ];

  return (
    <section className="pt-32 pb-32 px-6 bg-gradient-to-b from-muted/40 to-background min-h-[calc(100vh-80px)]">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-10 text-center">
          {/* Headline */}
          <h1 className="text-4xl lg:text-5xl font-bold text-foreground leading-[1.2]">
            Your veterinary clinic could earn{" "}
            <span className="bg-healthcare-blue/15 px-2 py-1 rounded">$50,000+</span>{" "}
            more this year
          </h1>
          
          {/* Connector text */}
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-[1.6]">
            Most clinics miss calls and follow-ups. Your AI Veterinary Assistant handles both.
          </p>

          {/* Value Props - 3 inline cards */}
          <div className="flex flex-col md:flex-row justify-center gap-4 pt-6 max-w-4xl mx-auto">
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-6 py-4 bg-card border border-border/50 rounded-xl flex-1"
              >
                <div className={`w-12 h-12 ${prop.bgColor} rounded-xl flex items-center justify-center shrink-0`}>
                  <prop.icon className={`w-6 h-6 ${prop.color}`} />
                </div>
                <div className="text-left">
                  <h3 className="font-bold text-foreground text-sm">{prop.title}</h3>
                  <p className="text-muted-foreground text-sm">{prop.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-10 justify-center">
            <Button size="lg" variant="cta" className="gap-2 px-8">
              <Volume2 className="w-5 h-5" />
              Hear a sample call
            </Button>
            <Button size="lg" variant="outline" className="gap-2 px-8">
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
