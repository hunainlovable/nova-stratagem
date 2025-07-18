
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Shield, Heart, Zap, Eye, Users, Globe } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: "EXCELLENCE",
    description: "We maintain the highest standards in every aspect of our work, delivering exceptional results that exceed expectations.",
    clearance: "TOP SECRET",
    clearanceLevel: "TS/SCI",
    type: "safety"
  },
  {
    icon: Heart,
    title: "INTEGRITY",
    description: "Trust is the foundation of our relationships. We operate with complete transparency and ethical practices.",
    clearance: "CLASSIFIED",
    clearanceLevel: "SECRET",
    type: "trust"
  },
  {
    icon: Zap,
    title: "INNOVATION",
    description: "We continuously push the boundaries of technology and methodology to deliver cutting-edge solutions.",
    clearance: "SECRET",
    clearanceLevel: "SECRET",
    type: "security"
  },
  {
    icon: Eye,
    title: "PRECISION",
    description: "Every detail matters. We approach each project with meticulous attention and strategic planning.",
    clearance: "CONFIDENTIAL",
    clearanceLevel: "CONF",
    type: "safety"
  },
  {
    icon: Users,
    title: "COLLABORATION",
    description: "We believe in the power of partnership, working closely with clients to achieve shared success.",
    clearance: "TOP SECRET",
    clearanceLevel: "TS/SCI",
    type: "trust"
  },
  {
    icon: Globe,
    title: "GLOBAL IMPACT",
    description: "Our solutions create positive change across industries and borders, making a difference worldwide.",
    clearance: "CONFIDENTIAL",
    clearanceLevel: "CONF",
    type: "security"
  }
];

const Values: React.FC = () => {
  const getBadgeClass = (type: string) => {
    switch (type) {
      case 'safety': return 'clearance-badge-safety';
      case 'security': return 'clearance-badge-security';
      case 'trust': return 'clearance-badge-trust';
      default: return 'clearance-badge-classified';
    }
  };

  const getGlowClass = (type: string) => {
    switch (type) {
      case 'safety': return 'futuristic-glow-blue';
      case 'security': return 'futuristic-glow-green';
      case 'trust': return 'futuristic-glow-navy';
      default: return 'futuristic-glow';
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case 'safety': return 'text-blue-600';
      case 'security': return 'text-green-600';
      case 'trust': return 'text-navy-600';
      default: return 'text-gray-700';
    }
  };

  const getIconBg = (type: string) => {
    switch (type) {
      case 'safety': return 'bg-blue-600/10 border-blue-600/20';
      case 'security': return 'bg-green-600/10 border-green-600/20';
      case 'trust': return 'bg-navy-600/10 border-navy-600/20';
      default: return 'bg-gray-700/10 border-gray-700/20';
    }
  };

  return (
    <section className="relative py-24 overflow-hidden classified-gradient-bg">
      {/* Classified Background */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Classified Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Classified Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30 mb-6">
            <div className="status-indicator-classified mr-2"></div>
            <span className="text-red-400 text-xs font-mono tracking-wider uppercase">CLASSIFIED FOUNDATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 classified-header">
            OUR CORE VALUES
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed monospace-text font-bold">
            THESE PRINCIPLES GUIDE EVERYTHING WE DO, ENSURING WE DELIVER EXCEPTIONAL VALUE 
            WHILE MAINTAINING THE HIGHEST STANDARDS OF EXCELLENCE AND INTEGRITY.
          </p>
        </div>

        {/* Classified Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card 
                key={value.title}
                className={`classified-card group hover:scale-105 transition-all duration-500 border-0 ${getGlowClass(value.type)}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg ${getIconBg(value.type)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${getGlowClass(value.type)}`}>
                    <IconComponent className={`w-8 h-8 ${getIconColor(value.type)}`} />
                  </div>
                  <div className={`${getBadgeClass(value.type)} mx-auto mb-2`}>
                    {value.clearanceLevel}
                  </div>
                  <CardTitle className="text-lg font-black text-black group-hover:text-gray-700 transition-colors duration-300 classified-text">
                    {value.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-700 leading-relaxed monospace-text text-sm font-semibold">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Classified Mission Statement */}
        <div className="mt-20">
          <div className="classified-panel rounded-lg p-12 text-center futuristic-glow">
            <h3 className="text-3xl md:text-4xl font-black text-black mb-6 classified-header">
              OUR MISSION
            </h3>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed monospace-text font-bold">
              TO EMPOWER ORGANIZATIONS WITH CUTTING-EDGE TECHNOLOGY SOLUTIONS THAT DRIVE INNOVATION, 
              ENHANCE SECURITY, AND CREATE SUSTAINABLE COMPETITIVE ADVANTAGES IN AN EVER-EVOLVING DIGITAL LANDSCAPE.
            </p>
          </div>
        </div>
      </div>

      {/* Classified Connector */}
      <div className="classified-connector absolute bottom-0 left-0 right-0 h-2"></div>
    </section>
  );
};

export default Values;
