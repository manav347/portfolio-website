import React from "react";

const Services = () => {
  const services = [
    {
      title: "Web Design",
      description:
        "The most modern and high-quality design at a professional level.",
    },
    {
      title: "Web Development",
      description:
        "High-quality development of sites at the professional level.",
    },
    {
      title: "Mobile Apps",
      description:
        "Professional development of applications for iOS and Android.",
    },
    {
      title: "Photography",
      description:
        "I make high-quality photos of any category at a professional level.",
    },
  ];

  return (
    <section className="services-section">
      {services.map((service, index) => (
        <div className="service-card" key={index}>
          <h4>{service.title}</h4>
          <p>{service.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Services;
