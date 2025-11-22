import { Check } from "lucide-react";

const RevenueSection = () => {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-foreground text-center mb-12">
          How Pawsapien Increases Your Revenue
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Recover revenue you're losing today
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-foreground">no more missed calls</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-foreground">emergency calls routed correctly</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-foreground">full appointment coverage</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-foreground">reduced front-desk overload</span>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Create new predictable revenue
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-foreground">proactive breed- & age-based recalls</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-foreground">AI reasoning persuades owners to return</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-foreground">higher preventive care compliance</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-success rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg text-foreground">more timely checkups & vaccinations</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevenueSection;
