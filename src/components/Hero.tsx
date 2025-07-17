
import { ArrowRight, Globe, Zap, Target, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
      
      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Nova Stratagem
            </h1>
            <div className="text-xl md:text-2xl text-slate-300 font-light tracking-wider">
              GROUP
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-slate-300 mb-6 font-light">
            The Next Evolution in Elite Consulting
          </p>

          {/* Main Headline */}
          <h2 className="text-2xl md:text-4xl font-bold mb-8 leading-tight">
            <span className="text-blue-400">Tier 1-Level Strategy.</span>
            <br />
            <span className="text-purple-400">Tier 4-Level Precision.</span>
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            We combine MBB-caliber strategic thinking with specialized boutique expertise 
            and cutting-edge technological depth to empower visionary leaders.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">7</div>
              <div className="text-sm text-slate-400">Practice Areas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">5</div>
              <div className="text-sm text-slate-400">Global Hubs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">1000+</div>
              <div className="text-sm text-slate-400">Fortune Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-sm text-slate-400">Future-Ready</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-slate-400 text-slate-300 hover:bg-slate-800 px-8 py-4 text-lg"
            >
              Schedule Consultation
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-slate-700">
            <p className="text-sm text-slate-500 mb-4">Trusted by industry leaders worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <Globe className="h-8 w-8" />
              <Zap className="h-8 w-8" />
              <Target className="h-8 w-8" />
              <TrendingUp className="h-8 w-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
    </section>
  );
};

export default Hero;
