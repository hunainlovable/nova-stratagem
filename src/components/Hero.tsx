
import { ArrowRight, Play, Shield, Zap, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 via-transparent to-muted/20"></div>
      </div>
      
      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Corporate Header */}
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-muted/50 border border-border mb-8 animate-fade-in animate-delay-100">
              <Award className="h-4 w-4 text-primary mr-2" />
              <span className="text-sm font-medium text-muted-foreground">Elite Consulting Excellence Since 2024</span>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-light mb-6 tracking-tighter animate-slide-up animate-delay-200">
              <span className="font-bold text-primary">
                NOVA STRATAGEM
              </span>
            </h1>
            <div className="text-2xl md:text-3xl text-muted-foreground font-light tracking-[0.4em] mb-4 animate-fade-in animate-delay-300">
              GROUP
            </div>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto animate-scale-in animate-delay-400"></div>
          </div>

          {/* Value Proposition */}
          <div className="text-center mb-20 animate-slide-up animate-delay-300">
            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight text-foreground">
              <span className="block mb-2">Strategic Excellence.</span>
              <span className="block mb-2 text-muted-foreground">Operational Precision.</span>
              <span className="block text-primary">Future-Ready Solutions.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-5xl mx-auto leading-relaxed font-light">
              We deliver transformational consulting services that combine Fortune 100 strategic depth 
              with boutique-level precision and cutting-edge technological innovation.
            </p>
          </div>

          {/* Clean Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 animate-fade-in animate-delay-400">
            <div className="text-center group">
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-light text-primary mb-3">7</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Practice Areas</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-light text-primary mb-3">5</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Global Offices</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-light text-primary mb-3">500+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Enterprise Clients</div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <div className="text-5xl font-light text-primary mb-3">98%</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider font-medium">Client Retention</div>
              </div>
            </div>
          </div>

          {/* Clean CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 animate-slide-up animate-delay-400">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Schedule Strategic Consultation
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-border text-foreground hover:bg-muted px-12 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Play className="mr-3 h-5 w-5" />
              View Case Studies
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-border pt-16 animate-fade-in animate-delay-400">
            <div className="text-center mb-12">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8 font-medium">Trusted by Global Leaders</p>
              <div className="flex flex-wrap justify-center items-center gap-16">
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Shield className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground text-sm font-medium">Fortune 100</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Zap className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground text-sm font-medium">Global Reach</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-pointer">
                  <Target className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                  <span className="text-muted-foreground text-sm font-medium">Proven Results</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground text-lg italic font-light">
                "Where Strategy Meets Innovation. Where Excellence Becomes Standard."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Minimal ambient elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl"></div>
    </section>
  );
};

export default Hero;
