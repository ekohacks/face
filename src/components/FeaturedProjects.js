import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

const FeaturedProjects = () => {
  const data = useStaticQuery(graphql`
    query {
      markdownRemark(frontmatter: { title: { eq: "Global Impact" } }) {
        frontmatter {
          title
          projects {
            category
            title
            description
            slug
            locations {
              name
              color
            }
          }
        }
      }
    }
  `);

  const { title, projects } = data.markdownRemark.frontmatter;

  return (
    <div className="bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl font-bold mb-12">{title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              to={`/products#${project.slug}`}
              className="block transition-transform hover:scale-105"
            >
              <div className="bg-black bg-opacity-50 p-8 rounded-lg hover:bg-opacity-60 transition-colors">
                <span className={`text-${project.locations[0].color}-400 font-mono text-sm`}>
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mt-4">{project.title}</h3>
                <p className="text-gray-400 mt-2">{project.description}</p>
                <div className="mt-4 flex gap-2">
                  {project.locations.map((location, locIndex) => (
                    <span
                      key={locIndex}
                      className={`text-xs bg-${location.color}-400 bg-opacity-10 text-${location.color}-400 px-2 py-1 rounded`}
                    >
                      {location.name}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;