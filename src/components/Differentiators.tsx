
import { Zap, Globe, Layers, Crown, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const differentiators = [
  {
    icon: Zap,
    title: "AI-Powered Insights",
    description: "Proprietary analytics platforms delivering real-time strategic intelligence and predictive modeling for unprecedented business clarity.",
    metric: "40% faster insights"
  },
  {
    icon: Globe,
    title: "Global Excellence Network",
    description: "Seamless delivery across New York, London, Dubai, and Singapore with localized expertise and global best practices.",
    metric: "24/7 global coverage"
  },
  {
    icon: Layers,
    title: "Modular Engagement Model",
    description: "Flexible consulting frameworks scalable from startup advisory to Fortune 100 transformation programs with precision-matched expertise.",
    metric: "100% customized solutions"
  },
  {
    icon: Crown,
    title: "Executive Advisory Circle",
    description: "Exclusive strategic counsel for C-suite executives, board members, and ultra-high-net-worth clients requiring discretionary excellence.",
    metric: "Top 1% executives served"
  }
];

const Differentiators = () => {
  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-slate-950 to-purple-950/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.1),transparent_50%)]"></div>
      
      <div className="relative container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold uppercase tracking-wider">Competitive Advantage</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            Revolutionary methodologies and breakthrough technologies that redefine 
            the boundaries of strategic consulting excellence.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-20">
          {differentiators.map((item, index) => (
            <div key={index} className="group relative">
              <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800/50 rounded-2xl p-8 hover:bg-slate-900/70 hover:border-slate-700/50 transition-all duration-500 hover:scale-[1.02] h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <item.icon className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                        {item.title}
                      </h3>
                      <div className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full">
                        {item.metric}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                {/* Description */}
                <p className="text-slate-300 leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* NovaToolkit Highlight */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900/80 to-slate-800/80 backdrop-blur-sm border border-slate-700/50 p-12 rounded-3xl max-w-5xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-2xl mr-4">
                <Layers className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-blue-400">NovaToolkit™</h3>
            </div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Our proprietary suite of AI-enhanced frameworks, predictive dashboards, and strategic methodologies—
              refined through decades of Fortune 500 engagements and continuously evolved through machine learning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-blue-400 mb-2">200+</div>
                <div className="text-sm text-slate-400">Strategic Frameworks</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-cyan-400 mb-2">AI-Powered</div>
                <div className="text-sm text-slate-400">Real-time Analytics</div>
              </div>
              <div className="bg-slate-800/50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-purple-400 mb-2">Proven</div>
                <div className="text-sm text-slate-400">Results Guarantee</div>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-medium rounded-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Explore NovaToolkit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiators;
