const CredibilitySection = () => {
  const metrics = [
    { value: "42%", label: "Increase in preventive visits" },
    { value: "24/7", label: "Appointment availability" },
    { value: "85%", label: "Front desk time saved" },
    { value: "3.2x", label: "Return visit rate improvement" },
  ];

  return (
    <section className="py-20 px-6 bg-secondary">
      <div className="container mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Turn missed opportunities into predictable revenue
          </h2>
          <p className="text-lg text-muted-foreground">
            Clinics see significant increases in preventive visits, refill adherence, 
            and client retention with AI-driven workflows.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div 
              key={index} 
              className="bg-metric-bg border border-border rounded-lg p-6 text-center"
            >
              <div className="text-4xl font-bold text-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;
