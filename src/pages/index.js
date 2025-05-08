import React from "react";
import { graphql } from "gatsby";
import ValuesSection from "../components/ValuesSection";
import FeaturedProjects from "../components/FeaturedProjects";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Approach from "../components/Approach";
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
      <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
        <section className="container mx-auto px-6 py-32">
          <h1 className="text-6xl font-bold mb-6 text-green-600 dark:text-green-400 transition-colors">
            EkoHacks
          </h1>
          <p className="text-6xl font-bold text-green-500 dark:text-green-300 mb-6 transition-colors">
            Global Tech, Local Impact
          </p>
          <p className="text-xl text-gray-700 dark:text-gray-400 mb-8 max-w-2xl transition-colors">
            Enterprise technology solutions across continents <br />
            Consulting • Development • Integration
          </p>
        </section>

        <ValuesSection values={values} />
        <Approach steps={approach} />
        <Services services={services} />
        <TechStack techStack={techStack} />
        <FeaturedProjects projects={projects} />
        <Footer footer={footer} />
      </main>
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
