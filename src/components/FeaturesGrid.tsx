import { Check } from "lucide-react";

const FeaturesGrid = () => {
  const features = [
    "Automatic recalls based on breed + age",
    "24/7 appointment booking",
    "No more missed calls",
    "Emergency routing",
    "Refill + reminder workflows",
    "Insurance clarity support",
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-foreground text-center mb-12">
          Everything Your Front Desk Wishes They Had
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex items-start gap-3 bg-card border border-border rounded-lg p-6"
            >
              <div className="w-6 h-6 bg-success text-white rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;
