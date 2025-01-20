import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const OurApproach = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Our Approach" } }) {
        frontmatter {
          steps {
            number
            title
            description
            borderColor
          }
        }
      }
    }
  `);

  const steps = data.markdownRemark.frontmatter.steps;

  return (
    <div className="container mx-auto px-6 py-24">
      <h2 className="text-2xl font-bold mb-12">Our Approach</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`p-6 border-l border-${step.borderColor}-400`}
          >
            <span className={`text-${step.borderColor}-400 font-mono`}>{step.number}</span>
            <h3 className="text-xl font-bold mt-4">{step.title}</h3>
            <p className="text-gray-400 mt-2">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurApproach;