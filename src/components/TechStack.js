import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const TechStack = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Our Tech Stack" } }) {
        frontmatter {
          technologies {
            name
            icon
            description
          }
          approaches {
            title
            features
          }
        }
      }
    }
  `);

  const { technologies, approaches } = data.markdownRemark.frontmatter;

  return (
    <div className="bg-white dark:bg-gray-900 py-24 text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-12 text-gray-900 dark:text-white">Our Tech Stack</h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-gray-100 border border-gray-200 dark:bg-black/50 dark:border-gray-800
                         p-6 rounded-lg text-center transition-all duration-300"
            >
              <div className="text-blue-500 dark:text-blue-400 font-mono text-2xl mb-2">
                {tech.icon}
              </div>
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">{tech.name}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* <div className="mt-16 grid md:grid-cols-3 gap-8">
          {approaches.map((approach, index) => (
            <div key={index} className="border-l-2 border-blue-400 dark:border-blue-400 pl-4">
              <h3 className="font-bold mb-2 text-gray-900 dark:text-white">{approach.title}</h3>
              <ul className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                {approach.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default TechStack;
