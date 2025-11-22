import { Calendar, Clock, AlertCircle } from "lucide-react";

const WhyMattersSection = () => {
  const reasons = [
    {
      icon: Calendar,
      title: "More Preventive Visits",
      description: "Automatically recalls patients based on breed, age, and care history.",
    },
    {
      icon: Clock,
      title: "24/7 Appointment Booking",
      description: "Handles scheduling, rescheduling, and cancellations without burdening staff.",
    },
    {
      icon: AlertCircle,
      title: "Emergency Triage",
      description: "Detects urgency and routes cases intelligently.",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-foreground text-center mb-12">
          Why Clinics Use Pawsapien
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-healthcare-blue-light rounded-lg flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyMattersSection;
