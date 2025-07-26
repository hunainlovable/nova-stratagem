import React from 'react';
import { Shield, Activity, Cloud, Lock, BarChart3, Brain, Zap, Globe } from 'lucide-react';

const services = [
  {
    name: 'NovaShield™',
    icon: <Shield className="w-5 h-5" />,
    type: 'Partial (summary)',
    color: 'from-green-400 to-blue-500',
    description: 'Security status, alerts, but not direct control',
  },
  {
    name: 'NovaPulse™',
    icon: <Activity className="w-5 h-5" />,
    type: 'Client-Facing',
    color: 'from-blue-400 to-cyan-500',
    description: 'Real-time metrics, dashboards',
  },
  {
    name: 'NovaSphere™',
    icon: <Cloud className="w-5 h-5" />,
    type: 'Partial (summary)',
    color: 'from-purple-400 to-blue-500',
    description: 'Usage/status, not direct infra control',
  },
  {
    name: 'NovaVault™',
    icon: <Lock className="w-5 h-5" />,
    type: 'Partial (summary)',
    color: 'from-violet-400 to-purple-500',
    description: 'Data reports, not direct data management',
  },
  {
    name: 'NovaVision™',
    icon: <BarChart3 className="w-5 h-5" />,
    type: 'Client-Facing',
    color: 'from-cyan-400 to-blue-400',
    description: 'Analytics, dashboards, visualizations',
  },
  {
    name: 'NovaMind™',
    icon: <Brain className="w-5 h-5" />,
    type: 'Partial (results)',
    color: 'from-amber-400 to-orange-500',
    description: 'AI insights, not direct model control',
  },
  {
    name: 'NovaBoost™',
    icon: <Zap className="w-5 h-5" />,
    type: 'Client-Facing',
    color: 'from-orange-400 to-amber-500',
    description: 'Optimization tools/reports',
  },
  {
    name: 'NovaGlobal™',
    icon: <Globe className="w-5 h-5" />,
    type: 'Client-Facing',
    color: 'from-emerald-400 to-green-500',
    description: 'Global deployment/support dashboards',
  },
];

const typeColors: Record<string, string> = {
  'Client-Facing': 'bg-green-500/90 text-white',
  'Partial (summary)': 'bg-blue-500/90 text-white',
  'Partial (results)': 'bg-amber-500/90 text-white',
  'Company-Managed': 'bg-gray-500/90 text-white',
};

const typeLabels = [
  { label: 'Client-Facing', color: 'bg-green-500/90', desc: 'Direct access' },
  { label: 'Partial (summary)', color: 'bg-blue-500/90', desc: 'Status/reports only' },
  { label: 'Partial (results)', color: 'bg-amber-500/90', desc: 'Results only' },
];

const ServiceTransparencyChart: React.FC = () => {
  return (
    <section className="relative py-16 px-4 bg-gray-50">
      <div className="relative max-w-4xl mx-auto rounded-2xl bg-white backdrop-blur-xl shadow-lg border border-gray-200/50 p-8 z-10">
        {/* Floating Legend/Key */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {typeLabels.map((t) => (
            <div key={t.label} className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-200">
              <span className={`w-3 h-3 rounded-full inline-block ${t.color}`} />
              <span className="text-gray-700 font-inter text-sm font-medium">{t.label}</span>
              <span className="text-gray-500 font-inter text-xs">({t.desc})</span>
            </div>
          ))}
        </div>
        
        <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4 text-center text-gray-900 tracking-tight">
          Service Transparency
        </h2>
        
        <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto text-base font-inter leading-relaxed">
          Clear visibility into which services you can access directly and which are managed by our expert team.
        </p>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left text-gray-800 text-lg font-playfair font-semibold py-3 px-4">Service</th>
                <th className="text-left text-gray-800 text-lg font-playfair font-semibold py-3 px-4">Access Type</th>
                <th className="text-left text-gray-800 text-lg font-playfair font-semibold py-3 px-4">Description</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service, index) => (
                <tr key={service.name} className="group hover:bg-gray-50 transition-colors duration-200 border-b border-gray-100 last:border-b-0">
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-sm transition-transform duration-200 group-hover:scale-105`}
                      >
                        <div className="w-5 h-5 text-white">
                          {service.icon}
                        </div>
                      </div>
                      <span className="text-gray-900 text-base font-playfair font-medium">{service.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full font-inter text-sm font-medium ${typeColors[service.type]}`}
                    >
                      {service.type}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-gray-600 font-inter text-sm">
                      {service.description}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ServiceTransparencyChart;