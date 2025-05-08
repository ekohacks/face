import React from "react";
import { Sparkles, Rocket, Focus, Zap, Code, Boxes, Heart } from "lucide-react";

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
    <section className="py-24 bg-gray-100 text-gray-900 dark:bg-gradient-to-b dark:from-gray-900 dark:to-black dark:text-white transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white transition-colors">
          Our Values
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map(({ title, description, icon: IconComponent, points }) => (
            <div
              key={title}
              className="bg-white dark:bg-black bg-opacity-90 dark:bg-opacity-50 p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-400 transition-all duration-300 hover:scale-105 shadow-sm dark:shadow-md"
            >
              <div className="flex items-center mb-6">
                <IconComponent className="w-6 h-6 text-blue-500 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-800 dark:text-white transition-colors">
                  {title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 transition-colors">
                {description}
              </p>
              <ul className="space-y-4">
                {points.map(({ text, icon: PointIcon }, idx) => (
                  <li key={idx} className="flex items-start group">
                    <PointIcon className="w-5 h-5 mt-1 mr-3 text-blue-500 dark:text-blue-400 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                    <span className="text-gray-700 dark:text-gray-300 transition-colors">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
