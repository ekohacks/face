import React from "react";
import { graphql, useStaticQuery } from "gatsby";

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Contact Us" } }) {
        frontmatter {
          header
          subheader
          emailPlaceholder
          messagePlaceholder
          buttonText
        }
      }
    }
  `);

  const { header, subheader, emailPlaceholder, messagePlaceholder, buttonText } =
    data.markdownRemark.frontmatter;

  return (
    <div className="container mx-auto px-6 py-24">
      <div className="max-w-md">
        <h2 className="text-2xl font-bold mb-4">{header}</h2>
        <p className="text-gray-400 mb-8">{subheader}</p>
        <form className="space-y-4">
          <input
            type="email"
            placeholder={emailPlaceholder}
            className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-400"
          />
          <textarea
            placeholder={messagePlaceholder}
            className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg h-32 focus:outline-none focus:border-green-400"
          ></textarea>
          <button className="w-full bg-green-400 text-black py-3 rounded-lg font-bold hover:bg-green-300 transition-colors">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
