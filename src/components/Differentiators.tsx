
import { Zap, Globe, Layers, Crown } from 'lucide-react';

const differentiators = [
  {
    icon: Zap,
    title: "AI-Native Consulting",
    description: "Real-time insight generation using proprietary AI tools and predictive analytics for unprecedented strategic clarity."
  },
  {
    icon: Globe,
    title: "Hybrid Client Engagements",
    description: "Flexible delivery—on-site, virtual, or mixed—with global reach across New York, London, Dubai, and Singapore."
  },
  {
    icon: Layers,
    title: "Modular Services",
    description: "Custom-built consulting modules for startups, mid-size firms, and Fortune 100s. Scale our expertise to your needs."
  },
  {
    icon: Crown,
    title: "Private Client Group",
    description: "White-glove services for ultra-high-net-worth individuals, family offices, and visionary founders."
  }
];

const Differentiators = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Revolutionary approaches that redefine what elite consulting can achieve in the modern era
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {differentiators.map((item, index) => (
            <div key={index} className="group">
              <div className="bg-slate-800 hover:bg-slate-700 p-8 rounded-2xl transition-all duration-300 hover:scale-105 border border-slate-700 hover:border-slate-600">
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800 to-slate-700 p-8 rounded-2xl border border-slate-600 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">NovaToolkit™</h3>
            <p className="text-lg text-slate-300">
              Our proprietary suite of frameworks, dashboards, and strategic canvases—
              built from decades of elite consulting experience and enhanced with cutting-edge AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
