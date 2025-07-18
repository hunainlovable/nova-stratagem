
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Shield, Zap, Eye, Lock, Users, Globe } from 'lucide-react';

const differentiators = [
  {
    icon: Shield,
    title: "ELITE SECURITY PROTOCOLS",
    description: "Military-grade encryption and zero-trust architecture ensuring your data remains impenetrable.",
    clearance: "TOP SECRET",
    clearanceLevel: "TS/SCI",
    type: "safety"
  },
  {
    icon: Zap,
    title: "LIGHTNING PERFORMANCE",
    description: "Optimized algorithms and infrastructure delivering sub-millisecond response times.",
    clearance: "CLASSIFIED",
    clearanceLevel: "SECRET",
    type: "security"
  },
  {
    icon: Eye,
    title: "ADVANCED ANALYTICS",
    description: "AI-powered insights and predictive modeling for strategic decision-making.",
    clearance: "SECRET",
    clearanceLevel: "SECRET",
    type: "safety"
  },
  {
    icon: Lock,
    title: "COMPLIANCE EXCELLENCE",
    description: "Full regulatory compliance with SOC 2, ISO 27001, and industry-specific standards.",
    clearance: "CONFIDENTIAL",
    clearanceLevel: "CONF",
    type: "security"
  },
  {
    icon: Users,
    title: "EXPERT TEAM",
    description: "World-class professionals with decades of combined experience in enterprise solutions.",
    clearance: "TOP SECRET",
    clearanceLevel: "TS/SCI",
    type: "trust"
  },
  {
    icon: Globe,
    title: "GLOBAL REACH",
    description: "24/7 support and infrastructure spanning multiple continents and time zones.",
    clearance: "CONFIDENTIAL",
    clearanceLevel: "CONF",
    type: "trust"
  }
];

const Differentiators: React.FC = () => {
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
            <span className="text-red-400 text-xs font-mono tracking-wider uppercase">CLASSIFIED CAPABILITIES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 classified-header">
            WHY CHOOSE NOVA STRATAGEM?
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed monospace-text font-bold">
            WE COMBINE CUTTING-EDGE TECHNOLOGY WITH PROVEN METHODOLOGIES TO DELIVER 
            EXCEPTIONAL RESULTS THAT SET US APART FROM THE COMPETITION.
          </p>
        </div>

        {/* Classified Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={item.title}
                className={`classified-card group hover:scale-105 transition-all duration-500 border-0 ${getGlowClass(item.type)}`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <CardHeader className="text-center pb-4">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-lg ${getIconBg(item.type)} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${getGlowClass(item.type)}`}>
                    <IconComponent className={`w-8 h-8 ${getIconColor(item.type)}`} />
                  </div>
                  <div className={`${getBadgeClass(item.type)} mx-auto mb-2`}>
                    {item.clearanceLevel}
                  </div>
                  <CardTitle className="text-lg font-black text-black group-hover:text-gray-700 transition-colors duration-300 classified-text">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-gray-700 leading-relaxed monospace-text text-sm font-semibold">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Classified Stats Section */}
        <div className="mt-20">
          <div className="classified-panel rounded-lg p-8 futuristic-glow">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="group">
                <div className="text-3xl md:text-4xl font-black text-blue-600 mb-2 classified-text-blue">
                  99.9%
                </div>
                <div className="text-gray-700 text-sm monospace-text font-bold">UPTIME GUARANTEE</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-black text-green-600 mb-2 classified-text-green">
                  24/7
                </div>
                <div className="text-gray-700 text-sm monospace-text font-bold">GLOBAL SUPPORT</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-black text-navy-600 mb-2 classified-text-navy">
                  500+
                </div>
                <div className="text-gray-700 text-sm monospace-text font-bold">ENTERPRISE CLIENTS</div>
              </div>
              <div className="group">
                <div className="text-3xl md:text-4xl font-black text-gray-700 mb-2 classified-text">
                  50+
                </div>
                <div className="text-gray-700 text-sm monospace-text font-bold">COUNTRIES SERVED</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Classified Connector */}
      <div className="classified-connector absolute bottom-0 left-0 right-0 h-2"></div>
    </section>
  );
};

export default Differentiators;
