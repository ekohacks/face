import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProductPage = ({ data, location }) => {
  const { products } = data.markdownRemark.frontmatter;
  const [activeTab, setActiveTab] = React.useState('fintech');

  useEffect(() => {
    // Get the hash from the URL (e.g., #fintech or #tourism)
    const hash = location.hash.replace('#', '');
    if (hash && products[hash]) {
      setActiveTab(hash);
    }
  }, [location.hash, products]);

  return (
    <>
    <Header />
    <div className="min-h-screen bg-gray-900 py-12 text-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">Our Products</h1>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-gray-800">
            <TabsTrigger value="fintech" className="data-[state=active]:bg-gray-700">
              FinTech Solutions
            </TabsTrigger>
            <TabsTrigger value="tourism" className="data-[state=active]:bg-gray-700">
              Tourism Tech
            </TabsTrigger>
          </TabsList>

          {Object.entries(products).map(([key, product]) => (
            <TabsContent key={key} value={key}>
              <Card className="mb-8 bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">
                    {product.title}
                  </CardTitle>
                  <div className="text-sm text-gray-400">{product.category}</div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <p className="text-gray-300">{product.description}</p>
                    </div>

                    <div className="flex gap-2">
                      {product.locations.map((location, index) => (
                        <span
                          key={index}
                          className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-${location.color}-900 text-${location.color}-300`}
                        >
                          {location.name}
                        </span>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">Key Features</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.features.map((feature, index) => (
                          <div key={index} className="flex items-center">
                            <div className="h-2 w-2 bg-blue-500 rounded-full mr-2"></div>
                            <span className="text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-3 text-white">Benefits</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {product.benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center">
                            <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                            <span className="text-gray-300">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
    <Footer />
    </>
  );
};

export const query = graphql`
  query ProductPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/products.md/" }) {
      frontmatter {
        products {
          fintech {
            category
            title
            description
            locations {
              name
              color
            }
            features
            benefits
          }
          tourism {
            category
            title
            description
            locations {
              name
              color
            }
            features
            benefits
          }
        }
      }
    }
  }
`;

export default ProductPage;