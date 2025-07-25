
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      title: 'NovaShield™',
      subtitle: 'Advanced Cybersecurity Platform',
      description: 'Next-generation cybersecurity platform that creates an impenetrable digital fortress around your enterprise infrastructure.',
      icon: '🛡️',
      color: 'green',
      features: ['Zero-Day Protection', 'Behavioral Analysis', 'Threat Intelligence', 'Incident Response'],
      path: '/services/novashield'
    },
    {
      id: 2,
      title: 'NovaPulse™',
      subtitle: 'Real-Time Performance Monitoring',
      description: 'Advanced real-time monitoring and performance optimization platform that keeps your systems running at peak efficiency.',
      icon: '⚡',
      color: 'blue',
      features: ['Real-Time Monitoring', 'Performance Analytics', 'Predictive Maintenance', 'Automated Optimization'],
      path: '/services/novapulse'
    },
    {
      id: 3,
      title: 'NovaSphere™',
      subtitle: 'Cloud Infrastructure Platform',
      description: 'Comprehensive cloud infrastructure platform that provides scalable, secure, and high-performance cloud solutions for enterprise applications.',
      icon: '🌐',
      color: 'purple',
      features: ['Scalable Infrastructure', 'Multi-Cloud Support', 'Security & Compliance', 'High Performance'],
      path: '/services/novasphere'
    },
    {
      id: 4,
      title: 'NovaVault™',
      subtitle: 'Secure Data Management',
      description: 'Enterprise-grade data management and storage platform that ensures the highest levels of security, compliance, and data integrity.',
      icon: '🔒',
      color: 'violet',
      features: ['Secure Storage', 'Data Encryption', 'Compliance Management', 'Backup & Recovery'],
      path: '/services/novavault'
    },
    {
      id: 5,
      title: 'NovaVision™',
      subtitle: 'Business Intelligence Platform',
      description: 'Advanced business intelligence and analytics platform that transforms data into actionable insights for strategic decision-making.',
      icon: '🔮',
      color: 'cyan',
      features: ['Data Analytics', 'Predictive Modeling', 'Visualization Tools', 'Real-Time Insights'],
      path: '/services/novavision'
    },
    {
      id: 6,
      title: 'NovaMind™',
      subtitle: 'AI-Powered Decision Engine',
      description: 'Revolutionary AI-powered decision-making system that leverages machine learning and cognitive computing for unprecedented accuracy.',
      icon: '🧠',
      color: 'amber',
      features: ['Machine Learning', 'Cognitive Computing', 'Natural Language Processing', 'Predictive Analytics'],
      path: '/services/novamind'
    },
    {
      id: 7,
      title: 'NovaBoost™',
      subtitle: 'Performance Optimization Suite',
      description: 'Comprehensive performance optimization platform that accelerates applications, systems, and business processes for maximum efficiency.',
      icon: '🚀',
      color: 'orange',
      features: ['Performance Analysis', 'Automated Optimization', 'Speed Enhancement', 'Efficiency Monitoring'],
      path: '/services/novaboost'
    },
    {
      id: 8,
      title: 'NovaGlobal™',
      subtitle: 'Worldwide Solutions Platform',
      description: 'Complete enterprise solution that provides end-to-end services for organizations operating on a global scale.',
      icon: '🌍',
      color: 'emerald',
      features: ['Global Deployment', 'Multi-Region Support', 'Localization', '24/7 Support'],
      path: '/services/novaglobal'
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'from-blue-600 to-cyan-600 border-blue-600/20 text-blue-600';
      case 'green': return 'from-green-600 to-emerald-600 border-green-600/20 text-green-600';
      case 'purple': return 'from-purple-600 to-violet-600 border-purple-600/20 text-purple-600';
      case 'amber': return 'from-amber-500 to-orange-500 border-amber-500/20 text-amber-500';
      case 'cyan': return 'from-cyan-600 to-blue-600 border-cyan-600/20 text-cyan-600';
      case 'emerald': return 'from-emerald-600 to-green-600 border-emerald-600/20 text-emerald-600';
      case 'violet': return 'from-violet-600 to-purple-600 border-violet-600/20 text-violet-600';
      case 'orange': return 'from-orange-500 to-amber-500 border-orange-500/20 text-orange-500';
      default: return 'from-gray-600 to-gray-700 border-gray-600/20 text-gray-600';
    }
  };

  const getGlowClass = (color: string) => {
    switch (color) {
      case 'blue': return 'futuristic-glow-blue';
      case 'green': return 'futuristic-glow-green';
      case 'purple': return 'futuristic-glow-purple';
      case 'amber': return 'futuristic-glow-amber';
      case 'cyan': return 'futuristic-glow-cyan';
      case 'emerald': return 'futuristic-glow-green';
      case 'violet': return 'futuristic-glow-purple';
      case 'orange': return 'futuristic-glow-orange';
      default: return 'futuristic-glow';
    }
  };

  const getBadgeClass = (color: string) => {
    switch (color) {
      case 'blue': return 'clearance-badge-safety';
      case 'green': return 'clearance-badge-security';
      case 'purple': return 'clearance-badge-trust';
      case 'amber': return 'clearance-badge-classified';
      case 'cyan': return 'clearance-badge-safety';
      case 'emerald': return 'clearance-badge-security';
      case 'violet': return 'clearance-badge-trust';
      case 'orange': return 'clearance-badge-classified';
      default: return 'clearance-badge-classified';
    }
  };

  return (
    <section className="py-20 classified-gradient-bg relative overflow-hidden">
      {/* Luminous Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-80 h-80 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-bl from-green-400/10 to-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-gradient-to-tr from-purple-400/10 to-violet-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-10 right-1/4 w-56 h-56 bg-gradient-to-tl from-amber-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="clearance-badge-classified mr-3">ENTERPRISE SOLUTIONS</span>
            <span className="clearance-badge-safety mr-3">QUANTUM READY</span>
            <span className="clearance-badge-security">GLOBAL SCALE</span>
          </div>
          
          <h2 className="font-serif text-5xl md:text-6xl font-black mb-6 text-white">
            NOVA SERVICES
          </h2>
          
          <p className="font-serif text-xl md:text-2xl font-bold mb-8 max-w-4xl mx-auto text-white">
            Revolutionary Solutions That Illuminate Your Path to Success
          </p>
          
          <p className="font-sans text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Harness the power of cutting-edge technology with our comprehensive suite of enterprise solutions. 
            Each service is designed to nurture growth, foster innovation, and create lasting value.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className={`classified-card p-6 cursor-pointer transition-all duration-500 group ${
                hoveredService === service.id ? 'scale-105' : 'scale-100'
              } ${getGlowClass(service.color)}`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Service Icon */}
              <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${getColorClasses(service.color)} flex items-center justify-center text-2xl futuristic-glow`}>
                {service.icon}
              </div>

              {/* Service Content */}
              <div className="text-center">
                <div className="mb-4">
                  <span className={`${getBadgeClass(service.color)} mb-3 inline-block`}>
                    {service.color.toUpperCase()}
                  </span>
                  <h3 className="font-serif text-xl font-bold mb-2 text-gray-800">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-gray-600 mb-4">
                    {service.subtitle}
                  </p>
                </div>

                <p className="text-sm text-gray-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="status-indicator-classified"></div>
                      <span className="monospace-text text-xs text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center justify-center space-x-2 group-hover:space-x-3 transition-all duration-300">
                  <span className="classified-text text-sm font-bold text-gray-700 group-hover:text-blue-600 transition-colors">
                    EXPLORE
                  </span>
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                </div>
              </div>

              {/* Hover Effects */}
              {hoveredService === service.id && (
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full electric-spark"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-cyan-400 rounded-full electric-spark" style={{ animationDelay: '0.2s' }}></div>
                  <div className="absolute top-1/2 left-2 w-1 h-1 bg-green-400 rounded-full electric-spark" style={{ animationDelay: '0.4s' }}></div>
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Bottom Connector */}
        <div className="mt-16">
          <div className="tesla-connector h-1 w-full max-w-4xl mx-auto rounded-full"></div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-blue-50 border border-blue-200">
              <div className="status-indicator-classified"></div>
              <span className="classified-text text-sm text-gray-700">QUANTUM SECURE</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-50 border border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="classified-text text-sm text-gray-700">GLOBAL REACH</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-purple-50 border border-purple-200">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              <span className="classified-text text-sm text-gray-700">24/7 SUPPORT</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-cyan-50 border border-cyan-200">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <span className="classified-text text-sm text-gray-700">ENTERPRISE READY</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
