// import React from "react";
// import { graphql, useStaticQuery } from "gatsby";

// const Services = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       markdownRemark(frontmatter: { title: { eq: "Our Expertise" } }) {
//         frontmatter {
//           services {
//             title
//             icon
//             description
//             features
//           }
//         }
//       }
//     }
//   `);

//   const services = data.markdownRemark.frontmatter.services;

//   return (
//     <div className="container mx-auto px-6 py-24">
//       <h2 className="text-2xl font-bold mb-12">Our Expertise</h2>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service, index) => (
//           <div key={index} className="bg-gray-900 p-8 rounded-lg">
//             <div className={`w-8 h-8 text-green-400 mb-4`}>{service.icon}</div>
//             <h3 className="font-bold mb-4">{service.title}</h3>
//             <p className="text-gray-400 mb-4">{service.description}</p>
//             <ul className="text-gray-400 space-y-2">
//               {service.features.map((feature, i) => (
//                 <li key={i}>• {feature}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from "react";
import { Code, Terminal, Workflow } from "lucide-react";

const ExpertiseSection = () => {
  const services = [
    {
      title: "Mobile Development",
      icon: Code,
      description: "Cross-platform excellence with React Native",
      features: [
        "Native iOS and Android apps",
        "Cross-platform solutions",
        "Mobile-first experiences",
      ],
    },
    {
      title: "Web Development",
      icon: Terminal,
      description: "Modern web applications with React & TypeScript",
      features: [
        "Progressive Web Apps",
        "Responsive interfaces",
        "Real-time applications",
      ],
    },
    {
      title: "Backend Systems",
      icon: Workflow,
      description: "Scalable solutions with Node.js, Python & Elixir",
      features: [
        "API development",
        "Database architecture",
        "Cloud infrastructure",
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-white">Our Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 p-6 sm:p-8 rounded-lg border border-gray-700 
                         hover:border-blue-400 transition-all duration-300"
            >
              <div className="flex items-center">
                <service.icon className="w-6 h-6 text-blue-300" />
                <h3 className="text-xl font-bold ml-3 text-white">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-300 mt-4">{service.description}</p>

              <div className="mt-6 space-y-3">
                {service.features.map((feature, featIndex) => (
                  <div
                    key={featIndex}
                    className="flex items-center text-gray-300"
                  >
                    <div className="flex-shrink-0 w-4 h-4 rounded-full bg-blue-400/20 flex items-center justify-center mr-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertiseSection;
