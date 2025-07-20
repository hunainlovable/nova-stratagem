import React, { useState } from 'react';
import { Shield, Activity, Cloud, Lock, BarChart3, Brain, Zap, Globe } from 'lucide-react';

const services = [
  {
    name: 'NovaShield™',
    icon: <Shield className="w-7 h-7" />,
    type: 'Partial (summary)',
    color: 'from-green-400 to-blue-500',
    description: 'Security status, alerts, but not direct control',
    tooltip: 'Managed security, client sees status only.'
  },
  {
    name: 'NovaPulse™',
    icon: <Activity className="w-7 h-7" />,
    type: 'Client-Facing',
    color: 'from-blue-400 to-cyan-500',
    description: 'Real-time metrics, dashboards',
    tooltip: 'Clients access live performance dashboards.'
  },
  {
    name: 'NovaSphere™',
    icon: <Cloud className="w-7 h-7" />,
    type: 'Partial (summary)',
    color: 'from-purple-400 to-blue-500',
    description: 'Usage/status, not direct infra control',
    tooltip: 'Clients see usage, infra managed by us.'
  },
  {
    name: 'NovaVault™',
    icon: <Lock className="w-7 h-7" />,
    type: 'Partial (summary)',
    color: 'from-violet-400 to-purple-500',
    description: 'Data reports, not direct data management',
    tooltip: 'Clients see reports, data managed by us.'
  },
  {
    name: 'NovaVision™',
    icon: <BarChart3 className="w-7 h-7" />,
    type: 'Client-Facing',
    color: 'from-cyan-400 to-blue-400',
    description: 'Analytics, dashboards, visualizations',
    tooltip: 'Clients access analytics and BI tools.'
  },
  {
    name: 'NovaMind™',
    icon: <Brain className="w-7 h-7" />,
    type: 'Partial (results)',
    color: 'from-amber-400 to-orange-500',
    description: 'AI insights, not direct model control',
    tooltip: 'Clients see AI results, not engine.'
  },
  {
    name: 'NovaBoost™',
    icon: <Zap className="w-7 h-7" />,
    type: 'Client-Facing',
    color: 'from-orange-400 to-amber-500',
    description: 'Optimization tools/reports',
    tooltip: 'Clients use optimization tools directly.'
  },
  {
    name: 'NovaGlobal™',
    icon: <Globe className="w-7 h-7" />,
    type: 'Client-Facing',
    color: 'from-emerald-400 to-green-500',
    description: 'Global deployment/support dashboards',
    tooltip: 'Clients access global dashboards.'
  },
];

const typeColors: Record<string, string> = {
  'Client-Facing': 'bg-green-500/90 text-white',
  'Partial (summary)': 'bg-blue-500/90 text-white',
  'Partial (results)': 'bg-amber-500/90 text-white',
  'Company-Managed': 'bg-gray-500/90 text-white',
};

const typeLabels = [
  { label: 'Client-Facing', color: 'bg-green-500/90', desc: 'Clients access directly' },
  { label: 'Partial (summary)', color: 'bg-blue-500/90', desc: 'Clients see status/reports' },
  { label: 'Partial (results)', color: 'bg-amber-500/90', desc: 'Clients see results only' },
];

const ServiceTransparencyChart: React.FC = () => {
  const [iconTooltip, setIconTooltip] = useState<string | null>(null);
  const [badgeTooltip, setBadgeTooltip] = useState<string | null>(null);
  const [descTooltip, setDescTooltip] = useState<string | null>(null);

  return (
    <section className="relative py-32 px-2 md:px-8">
      {/* Futuristic Background Particles */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-30 animate-float"
            style={{
              width: `${10 + Math.random() * 24}px`,
              height: `${10 + Math.random() * 24}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `linear-gradient(135deg, #0ea5e9 0%, #a78bfa 100%)`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
              filter: 'blur(1.5px)'
            }}
          />
        ))}
      </div>
      {/* Animated Gradient Glow Behind Chart */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[98vw] max-w-7xl h-[70vh] rounded-3xl blur-3xl opacity-40 animate-luxury-glow bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-600" />
      </div>
      <div className="relative max-w-7xl mx-auto rounded-3xl bg-gradient-to-br from-slate-900/95 via-slate-800/95 to-slate-900/95 backdrop-blur-2xl shadow-2xl border border-cyan-400/30 p-8 md:p-16 z-10 luxury-glass">
        {/* Animated Glowing Border */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl border-4 border-cyan-400/20 animate-luxury-border z-20" />
        {/* Floating Legend/Key */}
        <div className="absolute -top-16 right-8 flex gap-4 bg-slate-900/80 border border-cyan-400/30 rounded-2xl px-6 py-3 shadow-xl backdrop-blur-xl z-30 luxury-legend">
          {typeLabels.map((t) => (
            <div key={t.label} className="flex items-center gap-2">
              <span className={`w-4 h-4 rounded-full inline-block ${t.color} border-2 border-white/30 shadow-md`} />
              <span className="text-cyan-100 font-mono text-base font-bold">{t.label}</span>
              <span className="text-slate-400 font-mono text-xs ml-1">{t.desc}</span>
            </div>
          ))}
        </div>
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 text-center bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight luxury-title">
          Service Transparency
        </h2>
        {/* Luxury Accent Bar with Shimmer */}
        <div className="mx-auto mb-12 w-64 h-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 relative overflow-hidden">
          <div className="absolute inset-0 w-full h-full animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-60" />
        </div>
        <p className="text-cyan-100 text-center mb-12 max-w-3xl mx-auto text-2xl font-mono opacity-90">
          We believe in full transparency. Here’s which Nova Stratagem services you can access directly in your dashboard, and which are managed by our team for your security and success.
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-y-8 border-spacing-x-4 luxury-table">
            <thead>
              <tr>
                <th className="text-left text-cyan-200 text-2xl font-extrabold pb-4 border-b-2 border-cyan-400/40 luxury-th">Service</th>
                <th className="text-left text-cyan-200 text-2xl font-extrabold pb-4 border-b-2 border-cyan-400/40 luxury-th">Type</th>
                <th className="text-left text-cyan-200 text-2xl font-extrabold pb-4 border-b-2 border-cyan-400/40 luxury-th">Description</th>
              </tr>
            </thead>
            <tbody>
              {services.map((service) => (
                <tr key={service.name} className="group transition-all duration-300 hover:scale-[1.025]">
                  <td className="py-6 pr-8 bg-slate-800/90 border-2 border-cyan-400/30 rounded-2xl shadow-xl transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.25)] relative luxury-cell">
                    <div className={`flex items-center gap-6`}>
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:ring-2 group-hover:ring-cyan-400/40 transition-transform duration-300 animate-luxury-icon`}
                        tabIndex={0}
                        onMouseEnter={() => setIconTooltip(service.tooltip)}
                        onMouseLeave={() => setIconTooltip(null)}
                        onFocus={() => setIconTooltip(service.tooltip)}
                        onBlur={() => setIconTooltip(null)}
                        aria-label={service.tooltip}
                      >
                        {service.icon}
                        {/* Icon Tooltip */}
                        {iconTooltip === service.tooltip && (
                          <span className="absolute left-20 top-1/2 -translate-y-1/2 bg-slate-900/90 border border-cyan-400/40 text-cyan-100 text-xs font-mono rounded-lg px-4 py-2 shadow-lg z-40 whitespace-nowrap animate-fade-in">
                            {service.tooltip}
                          </span>
                        )}
                      </div>
                      <span className="text-white text-2xl font-extrabold drop-shadow-lg luxury-font">{service.name}</span>
                    </div>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.15)] transition-all duration-300" />
                  </td>
                  <td className="py-6 pr-8 bg-slate-800/90 border-2 border-cyan-400/30 rounded-2xl shadow-xl relative luxury-cell">
                    <span
                      className={`px-6 py-2 rounded-full font-mono text-lg font-bold shadow-md ${typeColors[service.type]} luxury-font cursor-pointer`}
                      tabIndex={0}
                      onMouseEnter={() => setBadgeTooltip(service.type)}
                      onMouseLeave={() => setBadgeTooltip(null)}
                      onFocus={() => setBadgeTooltip(service.type)}
                      onBlur={() => setBadgeTooltip(null)}
                      aria-label={service.type}
                    >
                      {service.type}
                      {/* Badge Tooltip */}
                      {badgeTooltip === service.type && (
                        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full bg-slate-900/90 border border-cyan-400/40 text-cyan-100 text-xs font-mono rounded-lg px-4 py-2 shadow-lg z-40 whitespace-nowrap animate-fade-in">
                          {typeLabels.find(t => t.label === service.type)?.desc}
                        </span>
                      )}
                    </span>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.15)] transition-all duration-300" />
                  </td>
                  <td className="py-6 bg-slate-800/90 border-2 border-cyan-400/30 rounded-2xl shadow-xl relative luxury-cell">
                    <span
                      className="text-cyan-100 font-mono text-xl opacity-90 luxury-font cursor-pointer"
                      tabIndex={0}
                      onMouseEnter={() => setDescTooltip(service.description)}
                      onMouseLeave={() => setDescTooltip(null)}
                      onFocus={() => setDescTooltip(service.description)}
                      onBlur={() => setDescTooltip(null)}
                      aria-label={service.description}
                    >
                      {service.description}
                      {/* Description Tooltip */}
                      {descTooltip === service.description && (
                        <span className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-full bg-slate-900/90 border border-cyan-400/40 text-cyan-100 text-xs font-mono rounded-lg px-4 py-2 shadow-lg z-40 whitespace-nowrap animate-fade-in">
                          {service.description}
                        </span>
                      )}
                    </span>
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border-2 border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.15)] transition-all duration-300" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Custom Animations & Luxury Styles */}
      <style>{`
        @keyframes luxury-glow {
          0%, 100% { filter: blur(60px) brightness(1.1); opacity: 0.4; }
          50% { filter: blur(80px) brightness(1.3); opacity: 0.7; }
        }
        .animate-luxury-glow {
          animation: luxury-glow 8s ease-in-out infinite;
        }
        @keyframes luxury-border {
          0%, 100% { box-shadow: 0 0 40px 10px #22d3ee33, 0 0 0 0 #0ea5e9; }
          50% { box-shadow: 0 0 80px 20px #0ea5e9cc, 0 0 0 8px #22d3ee44; }
        }
        .animate-luxury-border {
          animation: luxury-border 4s ease-in-out infinite;
        }
        @keyframes shimmer {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        .animate-shimmer {
          position: absolute;
          left: -100%;
          width: 200%;
          animation: shimmer 2.5s linear infinite;
        }
        .luxury-title, .luxury-font {
          font-family: 'Inter', 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
          letter-spacing: 0.01em;
        }
        .luxury-th {
          font-family: 'Inter', 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
          letter-spacing: 0.02em;
          font-weight: 800;
        }
        .luxury-table td, .luxury-table th {
          transition: background 0.3s, box-shadow 0.3s, color 0.3s, border 0.3s;
        }
        .luxury-cell {
          box-shadow: 0 2px 24px 0 rgba(34,211,238,0.08), 0 1.5px 8px 0 rgba(59,130,246,0.08);
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-18px) scale(1.08); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-luxury-icon {
          animation: luxury-icon-pulse 2.5s cubic-bezier(0.4,0,0.6,1) infinite;
        }
        @keyframes luxury-icon-pulse {
          0%, 100% { filter: drop-shadow(0 0 0px #0ea5e9); }
          50% { filter: drop-shadow(0 0 12px #0ea5e9cc); }
        }
        .animate-fade-in {
          animation: fade-in 0.2s ease-in;
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default ServiceTransparencyChart; 