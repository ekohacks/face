import React from "react";

const ValuesSection = ({ values }) => (
  <div className="bg-gradient-to-b from-gray-900 to-black py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl font-bold mb-12">Our Values</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {values.map(({ title, description, points }) => (
          <div
            key={title}
            className="bg-black bg-opacity-50 p-8 rounded-lg border border-gray-800 hover:border-green-400 transition-colors"
          >
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <ul className="space-y-2 text-gray-400">
              {points.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default ValuesSection;