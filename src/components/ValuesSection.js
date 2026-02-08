import React from "react";
import { Sparkles, Rocket, Focus, Zap, Code, Boxes, Heart } from "lucide-react";
// import Approach from "../components/Approach";
// import SimplicitySectionCard from "./ValueCard";

// const ValuesSection = ({ values }) => (
//   <div className="bg-gradient-to-b from-gray-900 to-black py-24">
//     <div className="container mx-auto px-6">
//       <h2 className="text-2xl font-bold mb-12">Our Values</h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {values.map(({ title, description, points }) => (
//           <div
//             key={title}
//             className="bg-black bg-opacity-50 p-8 rounded-lg border border-gray-800 hover:border-green-400 transition-colors"
//           >
//             <h3 className="text-xl font-bold mb-4">{title}</h3>
//             <p className="text-gray-400 mb-4">{description}</p>
//             <ul className="space-y-2 text-gray-400">
//               {points.map((point, idx) => (
//                 <li key={idx}>• {point}</li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   </div>
// );

const ValuesSection = () => {
  const values = [
    {
      title: "Simplicity",
      description: "Complex problems. Elegant solutions.",
      icon: Sparkles,
      points: [
        { text: "Clean, self-documenting code", icon: Code },
        { text: "Start simple, scale smart", icon: Rocket },
        { text: "Continuous refinement", icon: Focus },
        { text: "Crystal-clear communication", icon: Zap },
      ],
    },
    {
      title: "Innovation",
      description: "Push boundaries. Create impact.",
      icon: Boxes,
      points: [
        { text: "Embrace new technologies", icon: Rocket },
        { text: "Challenge conventions", icon: Zap },
        { text: "Data-driven decisions", icon: Focus },
        { text: "Rapid experimentation", icon: Sparkles },
      ],
    },
    {
      title: "Excellence",
      description: "Raise the bar. Exceed expectations.",
      icon: Heart,
      points: [
        { text: "Uncompromising quality", icon: Sparkles },
        { text: "Attention to detail", icon: Focus },
        { text: "Continuous learning", icon: Rocket },
        { text: "Results-driven approach", icon: Zap },
      ],
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-white">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map(({ title, description, icon: IconComponent, points }) => (
            <div
              key={title}
              className="bg-black bg-opacity-50 p-8 rounded-lg border border-gray-800 hover:border-blue-400 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <IconComponent className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-white">{title}</h3>
              </div>
              <p className="text-gray-400 mb-6">{description}</p>
              <ul className="space-y-4">
                {points.map(({ text, icon: PointIcon }, idx) => (
                  <li key={idx} className="flex items-start group">
                    <PointIcon className="w-5 h-5 mt-1 mr-3 text-blue-500 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                    <span className="text-gray-400">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ValuesSection;
