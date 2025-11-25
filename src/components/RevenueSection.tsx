import { PhoneOff, Calendar, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const RevenueSection = () => {
  return (
    <section id="revenue-section" className="py-12 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">
          How Your Clinic Earns More With PawSapien
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Block 1 */}
          <Card className="flex flex-col items-center text-center p-8 shadow-sm">
            <div className="w-12 h-12 bg-healthcare-blue/10 rounded-full flex items-center justify-center mb-4">
              <PhoneOff className="w-6 h-6 text-healthcare-blue" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Stop losing revenue
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Your AI Veterinary Assistant eliminates missed calls and routes emergencies instantly.
            </p>
          </Card>

          {/* Block 2 */}
          <Card className="flex flex-col items-center text-center p-8 shadow-sm">
            <div className="w-12 h-12 bg-healthcare-blue/10 rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-healthcare-blue" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Fill your schedule automatically
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Bookings, reschedules, cancellations and follow-ups are handled for you.
            </p>
          </Card>

          {/* Block 3 */}
          <Card className="flex flex-col items-center text-center p-8 shadow-sm">
            <div className="w-12 h-12 bg-healthcare-blue/10 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-healthcare-blue" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-3">
              Increase preventive visits
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Breed- & age-timed recalls bring the right patients back, automatically.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
