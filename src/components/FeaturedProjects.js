// import React from "react";
// import { graphql, useStaticQuery, Link } from "gatsby";

// const FeaturedProjects = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       markdownRemark(frontmatter: { title: { eq: "Global Impact" } }) {
//         frontmatter {
//           title
//           projects {
//             category
//             title
//             description
//             slug
//             locations {
//               name
//               color
//             }
//           }
//         }
//       }
//     }
//   `);

//   const { title, projects } = data.markdownRemark.frontmatter;

//   return (
//     <div className="bg-gray-900 py-24">
//       <div className="container mx-auto px-6">
//         <h2 className="text-2xl font-bold mb-12">{title}</h2>
//         <div className="grid md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <Link
//               key={index}
//               to={`/products#${project.slug}`}
//               className="block transition-transform hover:scale-105"
//             >
//               <div className="bg-black bg-opacity-50 p-8 rounded-lg hover:bg-opacity-60 transition-colors">
//                 <span className={`text-${project.locations[0].color}-400 font-mono text-sm`}>
//                   {project.category}
//                 </span>
//                 <h3 className="text-xl font-bold mt-4">{project.title}</h3>
//                 <p className="text-gray-400 mt-2">{project.description}</p>
//                 <div className="mt-4 flex gap-2">
//                   {project.locations.map((location, locIndex) => (
//                     <span
//                       key={locIndex}
//                       className={`text-xs bg-${location.color}-400 bg-opacity-10 text-${location.color}-400 px-2 py-1 rounded`}
//                     >
//                       {location.name}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FeaturedProjects;

import React from "react";
import {
  Pill,
  Cpu,
  Clock,
  Bell,
  Shield,
  Network,
  ShoppingBag,
  JapaneseYen,
  ShoppingBasket,
} from "lucide-react";

const FeaturedProjects = () => {
  const projects = [
    {
      category: "Healthcare Innovation",
      title: "maMEDS",
      description:
        "Revolutionary medication management platform transforming how patients handle their prescriptions. Featuring smart reminders, drug interaction tracking, and real-time healthcare provider connectivity.",
      icon: Pill,
      keyFeatures: [
        { name: "Smart Reminders", icon: Bell },
        { name: "Drug Interactions", icon: Shield },
        { name: "Healthcare Connect", icon: Network },
      ],
      locations: [{ name: "Greece", color: "blue" }],
      link: "/products#mameds",
    },
    {
      category: "E-commerce",
      title: "Japan Nakama",
      description:
        "Discover your Japan. Explore Lifestyle, Food, Anime & More at Japan Nakama",
      icon: ShoppingBasket,
      keyFeatures: [
        { name: "Culture", icon: JapaneseYen },
        { name: "Shopping", icon: ShoppingBag },
      ],
      locations: [
        { name: "Japan", color: "blue" },
        { name: "UK", color: "green" },
      ],
      link: "/products#ecommerce",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-white">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              className="block transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-gray-800 bg-opacity-50 p-8 rounded-lg border border-gray-700 hover:border-blue-400 transition-colors h-full">
                <div className="flex items-center">
                  <project.icon className="w-5 h-5 text-blue-300 mr-3" />
                  <span className="text-blue-300 font-mono text-sm">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mt-4 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mt-2">{project.description}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.keyFeatures.map((feature, featIndex) => (
                    <span
                      key={featIndex}
                      className="flex items-center text-xs bg-blue-400 bg-opacity-10 
                        text-blue-300 px-3 py-1 rounded-full
                        border border-blue-400 border-opacity-20"
                    >
                      <feature.icon className="w-3 h-3 mr-1" />
                      {feature.name}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  {project.locations.map((location, locIndex) => (
                    <span
                      key={locIndex}
                      className={`text-xs bg-${location.color}-400 bg-opacity-10 
                        text-${location.color}-300 px-3 py-1 rounded-full
                        border border-${location.color}-400 border-opacity-20`}
                    >
                      {location.name}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;
