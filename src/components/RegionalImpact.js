import React from "react";
import PropTypes from 'prop-types';

const RegionalImpact = ({ regions }) => (
  <div className="bg-gradient-to-b from-gray-900 to-black py-24">
    <div className="container mx-auto px-6">
      <h2 className="text-2xl font-bold mb-12">Global Presence, Local Excellence</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {regions.map(({ name, description, features }) => (
          <div
            key={name}
            className="bg-black bg-opacity-50 p-8 rounded-lg border border-gray-800 hover:border-green-400 transition-colors"
          >
            <h3 className="text-xl font-bold mb-4">{name}</h3>
            <p className="text-gray-400 mb-4">{description}</p>
            <ul className="space-y-2 text-gray-400">
              {features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </div>
);
RegionalImpact.propTypes = {
  regions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default RegionalImpact;
