
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
    <section className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      
      <div className="relative container mx-auto px-6">
        {/* Clean Section Header */}
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-card border border-border text-primary mb-8">
            <Sparkles className="h-4 w-4 mr-2" />
            <span className="text-sm font-semibold uppercase tracking-wider">Competitive Advantage</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-light mb-8 tracking-tighter text-foreground">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Revolutionary methodologies and breakthrough technologies that redefine 
            the boundaries of strategic consulting excellence.
          </p>
        </div>

        {/* Clean Differentiators Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto mb-24">
          {differentiators.map((item, index) => (
            <div 
              key={index} 
              className="group relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-border rounded-2xl p-10 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 h-full">
                {/* Header */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                        {item.title}
                      </h3>
                      <div className="text-sm font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full">
                        {item.metric}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* NovaToolkit Highlight */}
        <div className="text-center animate-slide-up">
          <div className="bg-card border border-border p-16 rounded-3xl max-w-6xl mx-auto shadow-lg">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-primary/10 p-5 rounded-2xl mr-4">
                <Layers className="h-10 w-10 text-primary" />
              </div>
              <h3 className="text-4xl md:text-5xl font-bold text-primary">NovaToolkit™</h3>
            </div>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
              Our proprietary suite of AI-enhanced frameworks, predictive dashboards, and strategic methodologies—
              refined through decades of Fortune 500 engagements and continuously evolved through machine learning.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-muted/50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-3">200+</div>
                <div className="text-sm text-muted-foreground">Strategic Frameworks</div>
              </div>
              <div className="bg-muted/50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-3">AI-Powered</div>
                <div className="text-sm text-muted-foreground">Real-time Analytics</div>
              </div>
              <div className="bg-muted/50 p-6 rounded-xl">
                <div className="text-3xl font-bold text-primary mb-3">Proven</div>
                <div className="text-sm text-muted-foreground">Results Guarantee</div>
              </div>
            </div>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
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
