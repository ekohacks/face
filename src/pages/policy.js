import React from 'react';
import { graphql } from 'gatsby';
import { Shield, Calendar } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PolicyPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative h-64 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 opacity-10"></div>
          <div className="relative container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl">
              <div className="flex items-center mb-4">
                <Shield className="w-8 h-8 text-green-400 mr-3" />
                <h1 className="text-4xl font-bold">{frontmatter.title}</h1>
              </div>
              <p className="text-xl text-gray-300">{frontmatter.subtitle}</p>
              <div className="flex items-center mt-4 text-gray-400">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm">Last Updated: {frontmatter.lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Policy Content */}
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {frontmatter.sections.map((section, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-2xl font-bold mb-4 text-green-400">
                  {index + 1}. {section.title}
                </h2>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/policy.md/" }) {
      frontmatter {
        title
        subtitle
        lastUpdated
        sections {
          title
          content
        }
      }
    }
  }
`;

export default PolicyPage;
