
import { Brain, Cog, Smartphone, DollarSign, Users, Building, Leaf } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: Brain,
    title: "NovaStrategy™",
    subtitle: "Strategy Consulting",
    description: "Market Entry, Competitive Positioning, Growth & M&A, Disruption Defense & Innovation Planning, C-Suite Leadership Advisory",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Cog,
    title: "NovaOps™",
    subtitle: "Operations Consulting", 
    description: "Supply Chain Reengineering, Lean Transformation & Process Optimization, Customer Experience (CX) Design",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Smartphone,
    title: "NovaDigital™",
    subtitle: "Technology & IT Consulting",
    description: "AI/ML Strategy & Implementation, Cybersecurity & Cloud Migration, Blockchain for Enterprise & Data Intelligence",
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: DollarSign,
    title: "NovaCapital™",
    subtitle: "Financial Advisory",
    description: "M&A Deal Structuring & Valuation, Financial Risk & Liquidity Strategy, Tax Strategy & Compliance Optimization",
    color: "from-green-500 to-green-600"
  },
  {
    icon: Users,
    title: "NovaPeople™",
    subtitle: "Human Resources Consulting",
    description: "Organizational Redesign & Agile Culture, Compensation, DEI, and Talent Optimization, Leadership Coaching & Executive Search",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Building,
    title: "NovaSector™",
    subtitle: "Industry-Specific Expertise",
    description: "Healthcare, Energy, Fintech, Government, Logistics, and GreenTech. Staffed by PhDs, former execs, and policy advisors",
    color: "from-red-500 to-red-600"
  },
  {
    icon: Leaf,
    title: "NovaESG™",
    subtitle: "Sustainability & Governance",
    description: "Net Zero Strategy, ESG Reporting, Circular Economy, Social Impact Planning & Green Innovation",
    color: "from-emerald-500 to-emerald-600"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Practice Areas
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Seven specialized divisions delivering comprehensive solutions across all aspects of modern business transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-slate-900 mb-2">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-sm font-semibold text-slate-600 uppercase tracking-wider">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-700 leading-relaxed text-center">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Full-Spectrum Elite Consulting</h3>
            <p className="text-lg opacity-90">
              The only firm that seamlessly integrates corporate strategy, digital transformation, 
              sustainability, operations, human capital, financial advisory, and specialized sector expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
