
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
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: Cog,
    title: "NovaOps™",
    subtitle: "Operations Excellence", 
    description: "Supply chain optimization, process reengineering, lean transformation, operational efficiency, and customer experience enhancement.",
    features: ["Process Optimization", "Supply Chain", "Lean Operations", "CX Design"],
    color: "from-purple-600 to-purple-700"
  },
  {
    icon: Smartphone,
    title: "NovaDigital™",
    subtitle: "Digital Transformation",
    description: "AI/ML implementation, cloud migration, cybersecurity strategy, blockchain integration, and comprehensive digital modernization.",
    features: ["AI/ML Strategy", "Cloud Migration", "Cybersecurity", "Digital Innovation"],
    color: "from-cyan-600 to-cyan-700"
  },
  {
    icon: DollarSign,
    title: "NovaCapital™",
    subtitle: "Financial Advisory",
    description: "M&A transaction support, financial strategy, risk management, capital optimization, valuation services, and compliance advisory.",
    features: ["M&A Support", "Financial Strategy", "Risk Management", "Valuation"],
    color: "from-green-600 to-green-700"
  },
  {
    icon: Users,
    title: "NovaPeople™",
    subtitle: "Human Capital",
    description: "Organizational transformation, talent strategy, leadership development, culture change, and executive coaching programs.",
    features: ["Talent Strategy", "Leadership Development", "Culture Change", "Executive Coaching"],
    color: "from-orange-600 to-orange-700"
  },
  {
    icon: Building,
    title: "NovaSector™",
    subtitle: "Industry Expertise",
    description: "Specialized consulting across healthcare, financial services, energy, technology, manufacturing, and government sectors.",
    features: ["Healthcare", "Financial Services", "Energy", "Technology"],
    color: "from-red-600 to-red-700"
  },
  {
    icon: Leaf,
    title: "NovaESG™",
    subtitle: "Sustainability & Governance",
    description: "ESG strategy, sustainability transformation, net-zero planning, governance frameworks, and regulatory compliance.",
    features: ["ESG Strategy", "Net-Zero Planning", "Governance", "Compliance"],
    color: "from-emerald-600 to-emerald-700"
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 mb-6">
            <span className="text-sm font-semibold uppercase tracking-wider">Our Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Practice Areas
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive consulting excellence across seven specialized practice areas, 
            delivering integrated solutions for complex business challenges.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white/80 backdrop-blur-sm overflow-hidden">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <service.icon className="h-7 w-7 text-white" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-slate-600 group-hover:translate-x-1 transition-all duration-300" />
                </div>
                <CardTitle className="text-2xl font-bold text-slate-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-700 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-12 rounded-3xl max-w-5xl mx-auto shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-light mb-6">Ready to Transform Your Business?</h3>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Our integrated approach combines deep industry expertise with cutting-edge methodologies 
              to deliver measurable results for Fortune 500 companies and emerging leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-medium rounded-lg"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-slate-400 text-slate-300 hover:bg-slate-700 px-8 py-4 text-lg font-medium rounded-lg"
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
