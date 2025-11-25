import { PhoneOff, Calendar, TrendingUp } from "lucide-react";

const RevenueSection = () => {
  return (
    <section id="revenue-section" className="py-12 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-foreground text-center mb-10">
          How Your Clinic Earns More With PawSapien
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Block 1 */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-healthcare-blue/10 rounded-full flex items-center justify-center">
              <PhoneOff className="w-6 h-6 text-healthcare-blue" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Stop losing revenue
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Your AI Veterinary Assistant eliminates missed calls and routes emergencies instantly.
            </p>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-healthcare-blue/10 rounded-full flex items-center justify-center">
              <Calendar className="w-6 h-6 text-healthcare-blue" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Fill your schedule automatically
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Bookings, reschedules, cancellations and follow-ups are handled for you.
            </p>
          </div>

          {/* Block 3 */}
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="w-12 h-12 bg-healthcare-blue/10 rounded-full flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-healthcare-blue" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Increase preventive visits
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Breed- & age-timed recalls bring patients back at the right moment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
