import { Button } from "@/components/ui/button";
import { Volume2 } from "lucide-react";

const BottomCTA = () => {
  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-8">
          See how much your clinic could gain with PawSapien.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg">Book Demo</Button>
          <Button size="lg" variant="outline" className="gap-2">
            <Volume2 className="w-5 h-5" />
            Hear a Sample Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;
