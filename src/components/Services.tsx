
import { Brain, Cog, Smartphone, DollarSign, Users, Building, Leaf, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: Brain,
    title: "NovaStrategy™",
    subtitle: "Strategic Consulting",
    description: "Corporate strategy, market entry, competitive positioning, growth initiatives, M&A advisory, and C-suite strategic counsel.",
    features: ["Strategic Planning", "Market Analysis", "Growth Strategy", "M&A Advisory"],
    color: "text-primary"
  },
  {
    icon: Cog,
    title: "NovaOps™",
    subtitle: "Operations Excellence", 
    description: "Supply chain optimization, process reengineering, lean transformation, operational efficiency, and customer experience enhancement.",
    features: ["Process Optimization", "Supply Chain", "Lean Operations", "CX Design"],
    color: "text-primary"
  },
  {
    icon: Smartphone,
    title: "NovaDigital™",
    subtitle: "Digital Transformation",
    description: "AI/ML implementation, cloud migration, cybersecurity strategy, blockchain integration, and comprehensive digital modernization.",
    features: ["AI/ML Strategy", "Cloud Migration", "Cybersecurity", "Digital Innovation"],
    color: "text-primary"
  },
  {
    icon: DollarSign,
    title: "NovaCapital™",
    subtitle: "Financial Advisory",
    description: "M&A transaction support, financial strategy, risk management, capital optimization, valuation services, and compliance advisory.",
    features: ["M&A Support", "Financial Strategy", "Risk Management", "Valuation"],
    color: "text-primary"
  },
  {
    icon: Users,
    title: "NovaPeople™",
    subtitle: "Human Capital",
    description: "Organizational transformation, talent strategy, leadership development, culture change, and executive coaching programs.",
    features: ["Talent Strategy", "Leadership Development", "Culture Change", "Executive Coaching"],
    color: "text-primary"
  },
  {
    icon: Building,
    title: "NovaSector™",
    subtitle: "Industry Expertise",
    description: "Specialized consulting across healthcare, financial services, energy, technology, manufacturing, and government sectors.",
    features: ["Healthcare", "Financial Services", "Energy", "Technology"],
    color: "text-primary"
  },
  {
    icon: Leaf,
    title: "NovaESG™",
    subtitle: "Sustainability & Governance",
    description: "ESG strategy, sustainability transformation, net-zero planning, governance frameworks, and regulatory compliance.",
    features: ["ESG Strategy", "Net-Zero Planning", "Governance", "Compliance"],
    color: "text-primary"
  }
];

const Services = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Clean Section Header */}
        <div className="text-center mb-24 animate-slide-up">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-muted/50 border border-border text-muted-foreground mb-8">
            <span className="text-sm font-semibold uppercase tracking-wider">Our Capabilities</span>
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-foreground mb-8 tracking-tighter">
            Practice Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Comprehensive consulting excellence across seven specialized practice areas, 
            delivering integrated solutions for complex business challenges.
          </p>
        </div>

        {/* Clean Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-24">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-border bg-card overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-muted flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className={`h-8 w-8 ${service.color}`} />
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <CardTitle className="text-2xl font-bold text-foreground mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Clean Call to Action */}
        <div className="text-center animate-slide-up">
          <div className="bg-card border border-border text-foreground p-16 rounded-3xl max-w-6xl mx-auto shadow-lg">
            <h3 className="text-4xl md:text-5xl font-light mb-8">Ready to Transform Your Business?</h3>
            <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
              Our integrated approach combines deep industry expertise with cutting-edge methodologies 
              to deliver measurable results for Fortune 500 companies and emerging leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-border text-foreground hover:bg-muted px-12 py-6 text-lg font-medium rounded-xl transition-all duration-300 hover:-translate-y-1"
              >
                Download Capabilities Deck
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
