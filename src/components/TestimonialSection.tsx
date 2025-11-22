const TestimonialSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <blockquote className="text-2xl text-foreground italic mb-6">
            "Pawsapien has transformed how we manage patient recalls. Our preventive care visits 
            are up significantly, and our front desk team can focus on in-clinic patients instead 
            of phone tag."
          </blockquote>
          <div className="text-muted-foreground">
            <div className="font-semibold text-foreground">Dr. Sarah Mitchell</div>
            <div>Medical Director, Riverside Veterinary Clinic</div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-12 mt-12 flex-wrap opacity-60">
          <div className="text-xl font-semibold text-muted-foreground">Clinic Logo 1</div>
          <div className="text-xl font-semibold text-muted-foreground">Clinic Logo 2</div>
          <div className="text-xl font-semibold text-muted-foreground">Clinic Logo 3</div>
          <div className="text-xl font-semibold text-muted-foreground">Clinic Logo 4</div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
