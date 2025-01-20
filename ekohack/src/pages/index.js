import React from "react";
import { graphql } from "gatsby";
import ValuesSection from "../components/ValuesSection";
import RegionalImpact from "../components/RegionalImpact";
import FeaturedProjects from "../components/FeaturedProjects";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Approach from "../components/Approach";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home = ({ data }) => {
  const values = data?.values?.frontmatter?.values || [];
  const regions = data?.regions?.frontmatter?.regions || [];
  const projects = data?.projects?.frontmatter?.projects || [];
  const services = data?.services?.frontmatter?.services || [];
  const techStack = data?.techStack?.frontmatter?.technologies || [];
  const approach = data?.approach?.frontmatter?.steps || [];
  const contact = data?.contact?.frontmatter?.contact || {};
  const footer = data?.footer?.frontmatter?.footer || {};
  const header = data?.header?.frontmatter?.header || {};

  return (
    <>
      <Header header={header} />
      <div className="min-h-screen bg-black text-white">
        <div className="container mx-auto px-6 py-32">
          <h1 className="text-6xl font-bold mb-6">EkoHacks</h1>
          <p className="text-6xl font-bold text-green-400 mb-6">Global Tech, Local Impact</p>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Bridging Europe and Africa through innovative tech solutions. Operating in London, Greece, and Nigeria.
          </p>
        </div>
        <ValuesSection values={values} />
        <RegionalImpact regions={regions} />
        <FeaturedProjects projects={projects} />
        <Services services={services} />
        <TechStack techStack={techStack} />
        <Approach steps={approach} />
        <Contact contact={contact} />
        <Footer footer={footer} />
      </div>
    </>
  );
};

export const query = graphql`
  query {
    values: markdownRemark(fileAbsolutePath: { regex: "/values.md/" }) {
      frontmatter {
        values {
          title
          description
          points
        }
      }
    }
    regions: markdownRemark(fileAbsolutePath: { regex: "/regions.md/" }) {
      frontmatter {
        regions {
          name
          description
          features
        }
      }
    }
}
`;

export default Home;
