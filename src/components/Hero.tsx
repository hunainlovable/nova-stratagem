
import { ArrowRight, Play, Shield, Zap, Target, Award, Sparkles, Cpu, Globe, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Futuristic Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--primary))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary))_1px,transparent_1px)] bg-[size:80px_80px] opacity-10 animate-pulse"></div>
        
        {/* Holographic Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-3xl float animate-delay-100"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-l from-accent/20 to-primary/20 rounded-full blur-3xl float animate-delay-300"></div>
        
        {/* Particle Effects */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animation: `float 4s ease-in-out infinite ${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-7xl mx-auto">
          {/* Futuristic Header Badge */}
          <div className="text-center mb-16 slide-up-fade">
            <div className="inline-flex items-center px-8 py-4 rounded-full glass-morphism neon-border mb-8 scale-fade animate-delay-100">
              <Sparkles className="h-5 w-5 text-primary mr-3 pulse-glow" />
              <span className="text-sm font-semibold holographic-text">Next-Generation Consulting Excellence</span>
            </div>
            
            <h1 className="text-8xl md:text-[12rem] font-black mb-8 tracking-tighter slide-up-fade animate-delay-200">
              <span className="holographic-text block mb-4">
                NOVA
              </span>
              <span className="text-foreground/90 block">
                STRATAGEM
              </span>
            </h1>
            <div className="text-3xl md:text-4xl text-muted-foreground font-light tracking-[0.6em] mb-6 scale-fade animate-delay-300">
              FUTURE ENTERPRISE GROUP
            </div>
            <div className="w-40 h-1 gradient-shift mx-auto rounded-full scale-fade animate-delay-400"></div>
          </div>

          {/* Futuristic Value Proposition */}
          <div className="text-center mb-24 slide-up-fade animate-delay-300">
            <h2 className="text-5xl md:text-7xl font-light mb-12 leading-tight">
              <span className="block mb-4 text-foreground">Beyond Strategy.</span>
              <span className="block mb-4 holographic-text">Beyond Innovation.</span>
              <span className="block text-primary font-semibold">Beyond Tomorrow.</span>
            </h2>
            
            <p className="text-2xl md:text-3xl text-muted-foreground mb-16 max-w-6xl mx-auto leading-relaxed font-light">
              We architect the future of enterprise through quantum-leap strategic frameworks, 
              AI-powered operational excellence, and breakthrough technological integration.
            </p>
          </div>

          {/* Futuristic Metrics Dashboard */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 scale-fade animate-delay-400">
            {[
              { icon: Cpu, value: '12+', label: 'AI-POWERED SOLUTIONS' },
              { icon: Globe, value: '8', label: 'QUANTUM OFFICES' },
              { icon: Users, value: '1000+', label: 'FUTURE ENTERPRISES' },
              { icon: Target, value: '99.7%', label: 'PRECISION RATE' }
            ].map((metric, index) => (
              <div key={index} className="text-center group scale-fade" style={{ animationDelay: `${0.5 + index * 0.1}s` }}>
                <div className="glass-morphism neon-border rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 pulse-glow">
                  <metric.icon className="h-8 w-8 text-primary mx-auto mb-4 float" />
                  <div className="text-6xl font-black holographic-text mb-3">{metric.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Futuristic CTAs */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center mb-24 slide-up-fade animate-delay-500">
            <Button 
              size="lg" 
              className="holographic-bg text-white px-16 py-8 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 neon-border"
            >
              ACTIVATE FUTURE STRATEGY
              <ArrowRight className="ml-4 h-6 w-6" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="glass-morphism neon-border text-foreground hover:bg-primary/10 px-16 py-8 text-xl font-bold rounded-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <Play className="mr-4 h-6 w-6" />
              NEURAL CASE STUDIES
            </Button>
          </div>

          {/* Futuristic Trust Indicators */}
          <div className="border-t border-primary/20 pt-20 scale-fade animate-delay-600">
            <div className="text-center mb-16">
              <p className="text-sm text-muted-foreground uppercase tracking-[0.3em] mb-12 font-bold">TRUSTED BY TOMORROW'S LEADERS</p>
              <div className="flex flex-wrap justify-center items-center gap-20">
                {[
                  { icon: Shield, label: 'QUANTUM SECURITY' },
                  { icon: Zap, label: 'NEURAL PROCESSING' },
                  { icon: Target, label: 'PRECISION OUTCOMES' },
                  { icon: Award, label: 'FUTURE CERTIFIED' }
                ].map((item, index) => (
                  <div key={index} className="flex flex-col items-center space-y-4 group cursor-pointer scale-fade" style={{ animationDelay: `${0.7 + index * 0.1}s` }}>
                    <div className="p-4 rounded-full glass-morphism neon-border group-hover:pulse-glow transition-all duration-300">
                      <item.icon className="h-10 w-10 text-primary group-hover:scale-110 transition-transform float" />
                    </div>
                    <span className="text-muted-foreground text-sm font-bold tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground text-2xl italic font-light holographic-text">
                "Where Tomorrow's Strategy Meets Today's Innovation"
              </p>
              <p className="text-sm text-muted-foreground mt-4 font-semibold tracking-wider">
                - HUNAIN QURESHI, FOUNDER & VISIONARY ARCHITECT
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
