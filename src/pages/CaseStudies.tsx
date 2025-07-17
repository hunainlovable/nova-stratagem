
import { useState } from 'react';
import { TrendingUp, Users, Zap, Award, ArrowRight, Building2, Smartphone, Leaf } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const caseStudies = [
  {
    id: 1,
    title: 'Fortune 500 Digital Transformation',
    client: 'Global Manufacturing Leader',
    industry: 'Manufacturing',
    service: 'NovaDigital™',
    duration: '18 months',
    impact: {
      revenue: '+$2.3B',
      efficiency: '+45%',
      satisfaction: '+67%'
    },
    challenge: 'A 150-year-old manufacturing giant struggled with legacy systems, disconnected operations, and declining market share against digital-native competitors.',
    solution: 'Comprehensive digital transformation including AI-powered predictive maintenance, cloud migration, and data analytics platform implementation.',
    results: [
      'Implemented AI-driven predictive maintenance reducing downtime by 45%',
      'Migrated 80% of systems to cloud, improving scalability',
      'Created unified data platform enabling real-time decision making',
      'Launched digital customer portal increasing satisfaction by 67%',
      'Generated $2.3B in additional revenue through operational efficiency'
    ],
    icon: Building2,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    title: 'FinTech Scaling Strategy',
    client: 'Series C FinTech Startup',
    industry: 'Financial Services',
    service: 'NovaStrategy™',
    duration: '12 months',
    impact: {
      revenue: '+400%',
      efficiency: '+200%',
      satisfaction: '+80%'
    },
    challenge: 'Rapidly growing FinTech company needed strategic guidance for international expansion and product diversification while maintaining regulatory compliance.',
    solution: 'Multi-phase strategy including market entry analysis, regulatory framework development, and operational scaling blueprint.',
    results: [
      'Successfully launched in 12 new markets across Europe and Asia',
      'Developed compliance framework reducing regulatory risk by 90%',
      'Scaled operations from 50 to 300 employees efficiently',
      'Increased revenue by 400% while maintaining unit economics',
      'Achieved Series D funding of $150M based on strategic roadmap'
    ],
    icon: Smartphone,
    color: 'from-green-500 to-green-600'
  },
  {
    id: 3,
    title: 'Sustainable Energy Transition',
    client: 'Global Energy Corporation',
    industry: 'Energy',
    service: 'NovaESG™',
    duration: '24 months',
    impact: {
      revenue: '+$1.8B',
      efficiency: '+30%',
      satisfaction: '+55%'
    },
    challenge: 'Traditional energy company faced pressure to transition to renewable sources while maintaining profitability and managing stakeholder expectations.',
    solution: 'Comprehensive ESG transformation including renewable energy strategy, carbon neutrality roadmap, and sustainable financing framework.',
    results: [
      'Developed 20-year net-zero carbon strategy with clear milestones',
      'Secured $5B in green financing for renewable projects',
      'Reduced carbon emissions by 40% in first two years',
      'Created new revenue streams worth $1.8B annually',
      'Improved ESG rating from B to AA+ with major rating agencies'
    ],
    icon: Leaf,
    color: 'from-emerald-500 to-emerald-600'
  }
];

const CaseStudies = () => {
  const [selectedCase, setSelectedCase] = useState(caseStudies[0]);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real transformations. Measurable results. Proven methodologies that drive exceptional business outcomes.
            </p>
          </div>

          {/* Case Study Selection */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {caseStudies.map((caseStudy) => (
              <Card 
                key={caseStudy.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedCase.id === caseStudy.id 
                    ? 'ring-2 ring-blue-500 bg-blue-50' 
                    : 'bg-white hover:bg-slate-50'
                }`}
                onClick={() => setSelectedCase(caseStudy)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${caseStudy.color} flex items-center justify-center mb-3`}>
                    <caseStudy.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{caseStudy.title}</CardTitle>
                  <p className="text-slate-600 text-sm">{caseStudy.client}</p>
                  <div className="flex justify-between items-center mt-2">
                    <Badge variant="secondary">{caseStudy.industry}</Badge>
                    <Badge variant="outline">{caseStudy.service}</Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {/* Detailed Case Study */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Impact Metrics */}
            <div className="space-y-6">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-900">
                    <Award className="h-5 w-5 mr-2 text-blue-600" />
                    Impact Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">
                      {selectedCase.impact.revenue}
                    </div>
                    <div className="text-sm text-slate-600">Revenue Impact</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600 mb-1">
                      {selectedCase.impact.efficiency}
                    </div>
                    <div className="text-sm text-slate-600">Efficiency Gain</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600 mb-1">
                      {selectedCase.impact.satisfaction}
                    </div>
                    <div className="text-sm text-slate-600">Satisfaction Increase</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-slate-900">Project Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Industry:</span>
                    <span className="font-semibold text-slate-900">{selectedCase.industry}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Service:</span>
                    <span className="font-semibold text-slate-900">{selectedCase.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Duration:</span>
                    <span className="font-semibold text-slate-900">{selectedCase.duration}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Case Study Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  {selectedCase.title}
                </h2>
                <p className="text-slate-600 text-lg">
                  {selectedCase.client} • {selectedCase.industry}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">The Challenge</h3>
                <p className="text-slate-700 leading-relaxed">
                  {selectedCase.challenge}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Our Solution</h3>
                <p className="text-slate-700 leading-relaxed">
                  {selectedCase.solution}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Results</h3>
                <div className="space-y-3">
                  {selectedCase.results.map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <TrendingUp className="h-3 w-3 text-green-600" />
                      </div>
                      <p className="text-slate-700">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Discuss Your Similar Challenge
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="text-lg opacity-90 mb-6">
                See how Nova Stratagem Group can help you achieve similar breakthrough results.
              </p>
              <Button className="bg-white text-slate-900 hover:bg-slate-100 px-8 py-3">
                Schedule Your Strategic Assessment
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CaseStudies;
