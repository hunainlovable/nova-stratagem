
import { ArrowRight, Globe, Zap, Target, TrendingUp, Building2, Users2, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Sophisticated Background Grid */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-purple-900/10"></div>
      </div>
      
      <div className="relative container mx-auto px-6 pt-24 pb-16">
        {/* Corporate Header */}
        <div className="max-w-6xl mx-auto">
          {/* Company Identity */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 mb-8">
              <Award className="h-4 w-4 text-blue-400 mr-2" />
              <span className="text-sm font-medium text-slate-300">Elite Consulting Excellence Since 2024</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-extralight mb-4 tracking-tight">
              <span className="font-bold bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                NOVA STRATAGEM
              </span>
            </h1>
            <div className="text-xl md:text-2xl text-slate-400 font-light tracking-[0.3em] mb-2">
              GROUP
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto"></div>
          </div>

          {/* Value Proposition */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
              <span className="text-blue-300">Strategic Excellence.</span>
              <br />
              <span className="text-cyan-300">Operational Precision.</span>
              <br />
              <span className="text-slate-300">Future-Ready Solutions.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-slate-400 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              We deliver transformational consulting services that combine Fortune 100 strategic depth 
              with boutique-level precision and cutting-edge technological innovation.
            </p>
          </div>

          {/* Enterprise Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2">7</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Practice Areas</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-4xl font-bold text-cyan-400 mb-2">5</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Global Offices</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-4xl font-bold text-purple-400 mb-2">500+</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Enterprise Clients</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/50 transition-all duration-300">
                <div className="text-4xl font-bold text-green-400 mb-2">98%</div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">Client Retention</div>
              </div>
            </div>
          </div>

          {/* Corporate CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-10 py-4 text-lg font-medium rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              Schedule Strategic Consultation
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:border-slate-500 px-10 py-4 text-lg font-medium rounded-lg backdrop-blur-sm"
            >
              View Case Studies
            </Button>
          </div>

          {/* Trust & Credentials */}
          <div className="border-t border-slate-800 pt-12">
            <div className="text-center mb-8">
              <p className="text-sm text-slate-500 uppercase tracking-wider mb-6">Trusted by Global Leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
                <div className="flex items-center space-x-3">
                  <Building2 className="h-8 w-8 text-blue-400" />
                  <span className="text-slate-400 text-sm font-medium">Fortune 100</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="h-8 w-8 text-cyan-400" />
                  <span className="text-slate-400 text-sm font-medium">Global Reach</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users2 className="h-8 w-8 text-purple-400" />
                  <span className="text-slate-400 text-sm font-medium">Expert Teams</span>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-8 w-8 text-green-400" />
                  <span className="text-slate-400 text-sm font-medium">Proven Results</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-slate-500 text-sm italic">
                "Where Strategy Meets Innovation. Where Excellence Becomes Standard."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-cyan-500/5 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
