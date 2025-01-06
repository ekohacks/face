import React from 'react';
import { Code, Terminal, Workflow, Zap, Sparkles, Users, Shield, Globe, Building2 } from 'lucide-react';

const Website = () => {
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Hero */}
            <div className="container mx-auto px-6 py-32">
                <h1 className="text-6xl font-bold mb-6">EkoHacks</h1>
                <p className="text-6xl font-bold text-green-400 mb-6">Global Tech, Local Impact</p>
                <p className="text-xl text-gray-400 mb-8 max-w-2xl">
                    Bridging Europe and Africa through innovative tech solutions. Operating in London, Greece, and Nigeria.
                </p>
                <div className="flex gap-6 mb-8">
                    <div className="flex items-center gap-2 text-gray-400">
                        <Building2 className="w-4 h-4" />
                        <span>London</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                        <Building2 className="w-4 h-4" />
                        <span>Greece</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                        <Building2 className="w-4 h-4" />
                        <span>Lagos</span>
                    </div>
                </div>
                <div className="font-mono text-sm text-gray-500">
                    $ npm install @ekohacks/global-excellence
                </div>
            </div>

            {/* Values Section */}
            <div className="bg-gradient-to-b from-gray-900 to-black py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-12">Our Values</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-gray-800 hover:border-green-400 transition-colors">
                            <Sparkles className="w-8 h-8 text-green-400 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Simplicity</h3>
                            <p className="text-gray-400 mb-4">"We solve complex problems with elegant solutions"</p>
                            <ul className="space-y-2 text-gray-400">
                                <li>• Writing clean, readable code that others can easily understand</li>
                                <li>• Starting with the simplest solution that could work</li>
                                <li>• Continuously refactoring to reduce complexity</li>
                                <li>• Clear communication in all our interactions</li>
                            </ul>
                        </div>
                        <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-gray-800 hover:border-blue-400 transition-colors">
                            <Users className="w-8 h-8 text-blue-400 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Unity</h3>
                            <p className="text-gray-400 mb-4">"We own our code and success together"</p>
                            <ul className="space-y-2 text-gray-400">
                                <li>• No single person owns a piece of code - we all do</li>
                                <li>• Supporting each other's learning and growth</li>
                                <li>• Sharing both successes and challenges openly</li>
                                <li>• Working together to solve problems</li>
                            </ul>
                        </div>
                        <div className="bg-black bg-opacity-50 p-8 rounded-lg border border-gray-800 hover:border-purple-400 transition-colors">
                            <Shield className="w-8 h-8 text-purple-400 mb-4" />
                            <h3 className="text-xl font-bold mb-4">Courage</h3>
                            <p className="text-gray-400 mb-4">"We embrace change and face challenges directly"</p>
                            <ul className="space-y-2 text-gray-400">
                                <li>• Speaking up when we see something that could be better</li>
                                <li>• Being honest about our mistakes and learning from them</li>
                                <li>• Taking on technical challenges confidently</li>
                                <li>• Giving and receiving direct feedback</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Regional Impact */}
            <div className="container mx-auto px-6 py-24">
                <h2 className="text-2xl font-bold mb-12">Global Presence, Local Excellence</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="bg-gray-900 p-8 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">London Hub</h3>
                        <p className="text-gray-400 mb-4">European fintech innovation and enterprise solutions</p>
                        <ul className="space-y-2 text-gray-400">
                            <li>• Financial services integration</li>
                            <li>• Enterprise software development</li>
                            <li>• UK/EU market expertise</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Greece Center</h3>
                        <p className="text-gray-400 mb-4">Mediterranean tech innovation and EU expansion</p>
                        <ul className="space-y-2 text-gray-400">
                            <li>• European market solutions</li>
                            <li>• Tourism tech expertise</li>
                            <li>• Mediterranean business focus</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Lagos Office</h3>
                        <p className="text-gray-400 mb-4">African market solutions and fintech innovation</p>
                        <ul className="space-y-2 text-gray-400">
                            <li>• Local payment integrations</li>
                            <li>• African market expertise</li>
                            <li>• Digital transformation</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Featured Projects */}
            <div className="bg-gray-900 py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-12">Global Impact</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                            <span className="text-green-400 font-mono text-sm">Cross-Border FinTech</span>
                            <h3 className="text-xl font-bold mt-4">Global Payment Platform</h3>
                            <p className="text-gray-400 mt-2">Connecting European and African payment systems</p>
                            <div className="mt-4 flex gap-2">
                                <span className="text-xs bg-green-400 bg-opacity-10 text-green-400 px-2 py-1 rounded">UK</span>
                                <span className="text-xs bg-blue-400 bg-opacity-10 text-blue-400 px-2 py-1 rounded">Nigeria</span>
                            </div>
                        </div>
                        <div className="bg-black bg-opacity-50 p-8 rounded-lg">
                            <span className="text-blue-400 font-mono text-sm">Tourism Tech</span>
                            <h3 className="text-xl font-bold mt-4">Mediterranean Connect</h3>
                            <p className="text-gray-400 mt-2">Digital platform for Mediterranean tourism businesses</p>
                            <div className="mt-4 flex gap-2">
                                <span className="text-xs bg-purple-400 bg-opacity-10 text-purple-400 px-2 py-1 rounded">Greece</span>
                                <span className="text-xs bg-green-400 bg-opacity-10 text-green-400 px-2 py-1 rounded">EU</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Services */}
            <div className="container mx-auto px-6 py-24">
                <h2 className="text-2xl font-bold mb-12">Our Expertise</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-gray-900 p-8 rounded-lg">
                        <Code className="w-8 h-8 text-green-400 mb-4" />
                        <h3 className="font-bold mb-4">Mobile Development</h3>
                        <p className="text-gray-400 mb-4">Cross-platform excellence with React Native</p>
                        <ul className="text-gray-400 space-y-2">
                            <li>• Native iOS and Android apps</li>
                            <li>• Cross-platform solutions</li>
                            <li>• Mobile-first experiences</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-lg">
                        <Terminal className="w-8 h-8 text-blue-400 mb-4" />
                        <h3 className="font-bold mb-4">Web Development</h3>
                        <p className="text-gray-400 mb-4">Modern web applications with React & TypeScript</p>
                        <ul className="text-gray-400 space-y-2">
                            <li>• Progressive Web Apps</li>
                            <li>• Responsive interfaces</li>
                            <li>• Real-time applications</li>
                        </ul>
                    </div>
                    <div className="bg-gray-900 p-8 rounded-lg">
                        <Workflow className="w-8 h-8 text-purple-400 mb-4" />
                        <h3 className="font-bold mb-4">Backend Systems</h3>
                        <p className="text-gray-400 mb-4">Scalable solutions with Node.js & Python</p>
                        <ul className="text-gray-400 space-y-2">
                            <li>• API development</li>
                            <li>• Database architecture</li>
                            <li>• Cloud infrastructure</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-gray-900 py-24">
                <div className="container mx-auto px-6">
                    <h2 className="text-2xl font-bold mb-12">Our Tech Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
                            <div className="text-green-400 font-mono text-2xl mb-2">⚛️</div>
                            <h3 className="font-bold mb-2">React & React Native</h3>
                            <p className="text-gray-400 text-sm">Web & Mobile Apps</p>
                        </div>
                        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
                            <div className="text-blue-400 font-mono text-2xl mb-2">TS</div>
                            <h3 className="font-bold mb-2">TypeScript</h3>
                            <p className="text-gray-400 text-sm">Type-Safe Development</p>
                        </div>
                        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
                            <div className="text-yellow-400 font-mono text-2xl mb-2">🔷</div>
                            <h3 className="font-bold mb-2">Python</h3>
                            <p className="text-gray-400 text-sm">Backend & Data Processing</p>
                        </div>
                        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
                            <div className="text-purple-400 font-mono text-2xl mb-2">▲</div>
                            <h3 className="font-bold mb-2">Node.js</h3>
                            <p className="text-gray-400 text-sm">Server-Side JavaScript</p>
                        </div>
                        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
                            <div className="text-teal-400 font-mono text-2xl mb-2">🌊</div>
                            <h3 className="font-bold mb-2">Tailwind CSS</h3>
                            <p className="text-gray-400 text-sm">Utility-First Styling</p>
                        </div>
                    </div>

                    {/* Development Approach */}
                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        <div className="border-l-2 border-green-400 pl-4">
                            <h3 className="font-bold mb-2">Frontend Excellence</h3>
                            <ul className="text-gray-400 space-y-2 text-sm">
                                <li>• Component-based architecture</li>
                                <li>• State management expertise</li>
                                <li>• Performance optimization</li>
                                <li>• Responsive design principles</li>
                            </ul>
                        </div>
                        <div className="border-l-2 border-blue-400 pl-4">
                            <h3 className="font-bold mb-2">UI/UX Design</h3>
                            <ul className="text-gray-400 space-y-2 text-sm">
                                <li>• Tailwind-powered UI components</li>
                                <li>• Responsive design systems</li>
                                <li>• Custom design frameworks</li>
                                <li>• Accessible UI patterns</li>
                            </ul>
                        </div>
                        <div className="border-l-2 border-purple-400 pl-4">
                            <h3 className="font-bold mb-2">Development Process</h3>
                            <ul className="text-gray-400 space-y-2 text-sm">
                                <li>• Agile methodology</li>
                                <li>• CI/CD pipelines</li>
                                <li>• Code quality standards</li>
                                <li>• Regular security audits</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Approach */}
            <div className="container mx-auto px-6 py-24">
                <h2 className="text-2xl font-bold mb-12">Our Approach</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 border-l border-green-400">
                        <span className="text-green-400 font-mono">01</span>
                        <h3 className="text-xl font-bold mt-4">Discover</h3>
                        <p className="text-gray-400 mt-2">We start with understanding your needs deeply, using our value of simplicity to cut through complexity.</p>
                    </div>
                    <div className="p-6 border-l border-blue-400">
                        <span className="text-blue-400 font-mono">02</span>
                        <h3 className="text-xl font-bold mt-4">Build</h3>
                        <p className="text-gray-400 mt-2">United teams work collaboratively to create solutions that exceed expectations.</p>
                    </div>
                    <div className="p-6 border-l border-purple-400">
                        <span className="text-purple-400 font-mono">03</span>
                        <h3 className="text-xl font-bold mt-4">Scale</h3>
                        <p className="text-gray-400 mt-2">We courageously tackle challenges to help your solution grow and evolve.</p>
                    </div>
                </div>
            </div>

            {/* Contact */}
            <div className="container mx-auto px-6 py-24">
                <div className="max-w-md">
                    <h2 className="text-2xl font-bold mb-4">Start Your Global Journey</h2>
                    <p className="text-gray-400 mb-8">Ready to build solutions that transcend borders? Let's create something extraordinary together.</p>
                    <form className="space-y-4">
                        <input
                            type="email"
                            placeholder="your@email.com"
                            className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-green-400"
                        />
                        <textarea
                            placeholder="Tell us about your project"
                            className="w-full p-3 bg-gray-900 border border-gray-800 rounded-lg h-32 focus:outline-none focus:border-green-400"
                        ></textarea>
                        <button className="w-full bg-green-400 text-black py-3 rounded-lg font-bold hover:bg-green-300 transition-colors">
                            Connect Globally
                        </button>
                    </form>
                </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-gray-800">
                <div className="container mx-auto px-6 py-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-gray-400">
                            <div className="font-mono text-sm mb-2">EkoHacks Global</div>
                            <div className="text-sm">Connecting continents through technology</div>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">London</h4>
                            <p className="text-gray-400 text-sm">United Kingdom</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Greece</h4>
                            <p className="text-gray-400 text-sm">Mediterranean Hub</p>
                        </div>
                        <div>
                            <h4 className="font-bold mb-4">Lagos</h4>
                            <p className="text-gray-400 text-sm">Nigeria</p>
                        </div>
                    </div>
                    <div className="flex justify-end mt-8">
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white">GitHub</a>
                            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
                            <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Website;
