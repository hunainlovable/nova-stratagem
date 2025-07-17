
import { Eye, Lightbulb, Leaf, Users, Shield, Target, Zap, Award } from 'lucide-react';

const values = [
  {
    icon: Eye,
    title: "Strategic Foresight",
    subtitle: "Anticipating Tomorrow",
    description: "We identify emerging trends and market shifts before they impact your business, enabling proactive strategic positioning."
  },
  {
    icon: Lightbulb,
    title: "Innovation Excellence",
    subtitle: "Breakthrough Solutions",
    description: "Combining analytical rigor with creative problem-solving to deliver transformational business outcomes."
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    subtitle: "ESG Integration",
    description: "Environmental, social, and governance considerations are fundamental to every strategic recommendation we make."
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    subtitle: "Shared Success",
    description: "We work as an extension of your team, fostering knowledge transfer and building internal capabilities."
  }
];

const principles = [
  {
    icon: Shield,
    title: "Unwavering Integrity",
    description: "Absolute confidentiality and ethical standards in every client engagement."
  },
  {
    icon: Target,
    title: "Results-Driven Focus",
    description: "Measurable outcomes and tangible value creation for all stakeholders."
  },
  {
    icon: Zap,
    title: "Agile Excellence",
    description: "Rapid response capabilities with uncompromising quality standards."
  },
  {
    icon: Award,
    title: "Continuous Innovation",
    description: "Constantly evolving our methodologies to stay ahead of industry trends."
  }
];

const Values = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Clean Section Header */}
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-muted/50 border border-border text-muted-foreground mb-8">
            <span className="text-sm font-semibold uppercase tracking-wider">Our Foundation</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-foreground mb-8 tracking-tighter">
            Core Values
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            The fundamental principles that guide every strategic decision, 
            client engagement, and business relationship we build.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {values.map((value, index) => (
            <div 
              key={index} 
              className="group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-card border border-border p-12 rounded-2xl transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                <div className="flex items-start space-x-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {value.title}
                    </h3>
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                      {value.subtitle}
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operating Principles */}
        <div className="mb-20">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-4xl md:text-5xl font-light text-foreground mb-6">
              Operating Principles
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The unwavering standards that define how we deliver excellence in every engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-card border border-border p-8 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-4">
                    {principle.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center animate-slide-up">
          <div className="bg-card border border-border text-foreground p-16 rounded-3xl max-w-6xl mx-auto shadow-lg">
            <h3 className="text-4xl md:text-5xl font-light mb-8">Our Mission</h3>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              To empower visionary leaders with transformational strategies that create sustainable competitive advantage, 
              drive meaningful innovation, and generate lasting value for all stakeholders.
            </p>
            <div className="w-32 h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8"></div>
            <p className="text-lg text-muted-foreground italic">
              "Excellence is not a destination, but a continuous journey of innovation and impact."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
