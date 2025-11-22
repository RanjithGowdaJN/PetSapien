import { ArrowRight } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Identify who needs to return next",
      description: "AI Veterinary Assistant analyzes breed, age, care history, and schedules to determine optimal visit timing.",
    },
    {
      number: "02",
      title: "Communicate with reasoning and clarity",
      description: "Reaches out with personalized messages explaining why the visit matters now.",
    },
    {
      number: "03",
      title: "Book + log the outcome",
      description: "Confirms appointments automatically and updates your practice management system.",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 px-6 bg-muted">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-foreground text-center mb-16">
          How Pawsapien Fits Into Your Clinic
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card border border-border rounded-lg p-8">
                <div className="text-5xl font-bold text-healthcare-blue-light mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <ArrowRight className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-muted-foreground w-8 h-8" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
