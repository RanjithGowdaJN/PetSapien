import { Button } from "@/components/ui/button";

const MidPageCTA = () => {
  return (
    <section className="py-16 px-6 bg-healthcare-blue-light">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-3">
          Ready to see Pawsapien for your clinic?
        </h2>
        <p className="text-lg text-muted-foreground mb-6">
          Turn passive patient data into reliable revenue.
        </p>
        <Button size="lg">Book Demo</Button>
      </div>
    </section>
  );
};

export default MidPageCTA;
