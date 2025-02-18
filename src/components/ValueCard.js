import React from "react";
import { Sparkles, Rocket, Focus, Zap } from "lucide-react";

const SimplicitySectionCard = () => {
  const content = {
    title: "Simplicity",
    description: "Complex problems. Elegant solutions.",
    points: [
      { text: "Clean, self-documenting code", icon: Sparkles },
      { text: "Start simple, scale smart", icon: Rocket },
      { text: "Continuous refinement", icon: Focus },
      { text: "Crystal-clear communication", icon: Zap },
    ],
  };

  return (
    <div className="max-w-md p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="space-y-4">
        <div className="pb-4 border-b border-gray-200">
          <h3 className="text-2xl font-bold text-gray-800">{content.title}</h3>
          <p className="mt-2 text-gray-600">{content.description}</p>
        </div>

        <ul className="space-y-3">
          {content.points.map((point, index) => {
            const IconComponent = point.icon;
            return (
              <li key={index} className="flex items-start group">
                <IconComponent className="w-5 h-5 mt-1 mr-3 text-blue-500 flex-shrink-0 transition-transform duration-300 group-hover:rotate-12" />
                <span className="text-gray-700">{point.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default SimplicitySectionCard;
