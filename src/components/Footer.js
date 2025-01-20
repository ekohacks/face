import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Footer" } }) {
        frontmatter {
          description
          locations {
            name
            detail
          }
          socialLinks {
            name
            url
          }
        }
      }
    }
  `);

  const { description, locations, socialLinks } = data.markdownRemark.frontmatter;

  return (
    <footer className="border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-gray-400">
            <div className="font-mono text-sm mb-2">{description}</div>
          </div>
          {locations.map((location, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4">{location.name}</h4>
              <p className="text-gray-400 text-sm">{location.detail}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-8">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} className="text-gray-400 hover:text-white">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
