import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Services = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Our Expertise" } }) {
        frontmatter {
          services {
            title
            icon
            description
            features
          }
        }
      }
    }
  `);

  const services = data.markdownRemark.frontmatter.services;

  return (
    <div className="container mx-auto px-6 py-24">
      <h2 className="text-2xl font-bold mb-12">Our Expertise</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-900 p-8 rounded-lg">
            <div className={`w-8 h-8 text-green-400 mb-4`}>{service.icon}</div>
            <h3 className="font-bold mb-4">{service.title}</h3>
            <p className="text-gray-400 mb-4">{service.description}</p>
            <ul className="text-gray-400 space-y-2">
              {service.features.map((feature, i) => (
                <li key={i}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;