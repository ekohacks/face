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

  const { description, locations, socialLinks } =
    data.markdownRemark.frontmatter;

  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-black text-gray-900 dark:text-gray-100">
      <div className="container mx-auto px-6 py-12">
        <div className="text-blue-500 dark:text-green-400">
          <div className="font-mono text-lg mb-6">{description}</div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {locations.map((location, index) => (
            <div key={index}>
              <h4 className="font-bold mb-4 text-gray-900 dark:text-white">
                {location.name}
              </h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {location.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Uncomment if you're using social links */}
        {/* <div className="flex justify-end mt-8">
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
