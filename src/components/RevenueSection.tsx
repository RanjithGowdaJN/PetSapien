import { PhoneIncoming, Brain, CalendarClock } from "lucide-react";
import { Card } from "@/components/ui/card";

const RevenueSection = () => {
  return (
    <section id="revenue-section" className="py-16 px-6 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          How Your Clinic Earns More With PawSapien
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Three ways your AI Veterinary Assistant drives revenue from day one
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Block 1 */}
          <Card className="group flex flex-col items-center text-center p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-t-healthcare-blue bg-card/80 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-healthcare-blue/20 to-healthcare-blue/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <PhoneIncoming className="w-8 h-8 text-healthcare-blue" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Stop Losing Revenue
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Capture the $100k You're Losing to Voicemail
            </p>
          </Card>

          {/* Block 2 */}
          <Card className="group flex flex-col items-center text-center p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-t-healthcare-green bg-card/80 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-healthcare-green/20 to-healthcare-green/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <Brain className="w-8 h-8 text-healthcare-green" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Cut Receptionist Training in Half
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Give Every Receptionist a 'Veterinary Brain'
            </p>
          </Card>

          {/* Block 3 */}
          <Card className="group flex flex-col items-center text-center p-8 shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-t-primary bg-card/80 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
              <CalendarClock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">
              Automate Patient Reactivation
            </h3>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Fill Your Schedule with High-Value Procedures
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
