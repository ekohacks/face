import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { 
  Users, 
  Sparkles, 
  ArrowRight,
  Building2,
  Target,
  Zap
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AboutPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const [activeTab, setActiveTab] = useState('vision');
  
  return (
    <>
      <Header />
      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <div className="relative h-96 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-10">
            <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] mix-blend-overlay opacity-20"></div>
          </div>
          <div className="relative container mx-auto px-6 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold mb-6">{frontmatter.title}</h1>
              <p className="text-xl text-gray-300">{frontmatter.subtitle}</p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Tabs */}
        <div className="bg-gray-900">
          <div className="container mx-auto px-6 py-16">
            <div className="flex space-x-8 mb-8">
              <button
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === 'vision' 
                    ? 'border-green-400 text-green-400' 
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('vision')}
              >
                Our Vision
              </button>
              <button
                className={`pb-2 border-b-2 transition-colors ${
                  activeTab === 'mission' 
                    ? 'border-green-400 text-green-400' 
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab('mission')}
              >
                Our Mission
              </button>
            </div>
            
            <div className="bg-black bg-opacity-50 p-8 rounded-lg">
              {activeTab === 'vision' ? (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">{frontmatter.vision.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{frontmatter.vision.description}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold">{frontmatter.mission.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{frontmatter.mission.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-800 transform -translate-x-1/2"></div>
            <div className="space-y-24">
              {frontmatter.milestones.map((milestone, index) => (
                <div key={milestone.year} className={`relative flex ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center`}>
                  <div className="flex-1 md:w-1/2 p-6">
                    <div className={`${
                      index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                    }`}>
                      <span className="text-green-400 font-mono text-sm">{milestone.year}</span>
                      <h3 className="text-xl font-bold mt-2">{milestone.title}</h3>
                      <p className="text-gray-400 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-green-400 rounded-full transform -translate-x-1/2"></div>
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* Global Presence*/}
        <div className="bg-gray-900 py-24">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-16">Global Presence</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {frontmatter.globalPresence.map((location, index) => (
                <div key={location.location} className="group relative overflow-hidden rounded-lg">
                  <div className="absolute inset-0 bg-[url('/api/placeholder/600/400')] bg-cover bg-center"></div>
                  <div className="absolute inset-0 bg-black opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative p-8">
                    <Building2 className={`w-8 h-8 text-${location.icon}-400 mb-4`} />
                    <h3 className="text-xl font-bold mb-2">{location.location}</h3>
                    <p className="text-gray-300 mb-4">{location.role}</p>
                    <div className="transform translate-y-8 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all">
                      <p className="text-gray-400 text-sm">{location.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Values */}
        <div className="container mx-auto px-6 py-24">
          <h2 className="text-3xl font-bold mb-16">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frontmatter.values.map((value, index) => (
              <div key={value.title} className="group">
                <div className="bg-gray-900 p-8 rounded-lg transform group-hover:-translate-y-2 transition-transform">
                  <div className="text-green-400 mb-4">
                    {value.icon === 'Sparkles' && <Sparkles className="w-6 h-6" />}
                    {value.icon === 'Users' && <Users className="w-6 h-6" />}
                    {value.icon === 'Target' && <Target className="w-6 h-6" />}
                    {value.icon === 'Zap' && <Zap className="w-6 h-6" />}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-green-400 to-blue-500">
          <div className="container mx-auto px-6 py-16">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-black mb-4">{frontmatter.cta.title}</h2>
                <p className="text-gray-800">{frontmatter.cta.subtitle}</p>
              </div>
              <button className="mt-6 md:mt-0 bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-900 transition-colors flex items-center">
                {frontmatter.cta.buttonText}
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export const query = graphql`
  query {
    markdownRemark(fileAbsolutePath: { regex: "/about.md/" }) {
      frontmatter {
        title
        subtitle
        vision {
          title
          description
        }
        mission {
          title
          description
        }
        milestones {
          year
          title
          description
        }
        globalPresence {
          location
          role
          description
          icon
        }
        values {
          icon
          title
          description
        }
        cta {
          title
          subtitle
          buttonText
        }
      }
    }
  }
`;

export default AboutPage;