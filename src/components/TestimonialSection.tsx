import testimonialHeadshot from "@/assets/testimonial-headshot.jpg";

const TestimonialSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <img 
            src={testimonialHeadshot} 
            alt="Dr. Sarah Mitchell"
            className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-primary/10"
          />
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
      </div>
    </section>
  );
};

export default TestimonialSection;
