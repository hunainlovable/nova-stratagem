
import { useState } from 'react';
import { ArrowRight, Clock, Users, Target, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { pageSEO } from '@/lib/seo';

const serviceDetails = [
  {
    id: 'nova-strategy',
    title: 'NovaStrategy™',
    subtitle: 'Strategy Consulting',
    description: 'Comprehensive strategic planning and market positioning services',
    duration: '8-16 weeks',
    teamSize: '3-5 consultants',
    startingPrice: '$150,000',
    features: [
      'Market Entry Strategy',
      'Competitive Analysis',
      'Growth Planning',
      'M&A Advisory',
      'Leadership Coaching',
      'Innovation Roadmap'
    ],
    deliverables: [
      'Strategic Roadmap Document',
      'Market Analysis Report',
      'Implementation Timeline',
      'KPI Dashboard',
      'Executive Presentations'
    ]
  },
  {
    id: 'nova-ops',
    title: 'NovaOps™',
    subtitle: 'Operations Consulting',
    description: 'Optimize operations and streamline business processes',
    duration: '6-12 weeks',
    teamSize: '2-4 consultants',
    startingPrice: '$100,000',
    features: [
      'Process Optimization',
      'Supply Chain Analysis',
      'Lean Implementation',
      'Quality Management',
      'Cost Reduction',
      'Performance Metrics'
    ],
    deliverables: [
      'Process Maps',
      'Efficiency Reports',
      'Implementation Plans',
      'Training Materials',
      'Performance Dashboards'
    ]
  },
  {
    id: 'nova-digital',
    title: 'NovaDigital™',
    subtitle: 'Technology & Digital Transformation',
    description: 'AI, cloud, and digital transformation strategies',
    duration: '10-20 weeks',
    teamSize: '4-8 consultants',
    startingPrice: '$200,000',
    features: [
      'AI/ML Strategy',
      'Cloud Migration',
      'Digital Architecture',
      'Cybersecurity Assessment',
      'Data Strategy',
      'Technology Roadmap'
    ],
    deliverables: [
      'Digital Strategy Blueprint',
      'Technology Architecture',
      'Implementation Roadmap',
      'Security Framework',
      'ROI Analysis'
    ]
  }
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(serviceDetails[0]);

  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead seo={pageSEO.services} />
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions designed to transform your business and drive sustainable growth
            </p>
          </div>

          {/* Service Selection */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
            {serviceDetails.map((service) => (
              <Card 
                key={service.id}
                className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                  selectedService.id === service.id 
                    ? 'ring-2 ring-blue-500 bg-blue-50' 
                    : 'bg-white hover:bg-slate-50'
                }`}
                onClick={() => setSelectedService(service)}
              >
                <CardHeader>
                  <CardTitle className="text-xl text-slate-900">{service.title}</CardTitle>
                  <CardDescription>{service.subtitle}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-500">{service.duration}</span>
                    <span className="font-semibold text-slate-900">{service.startingPrice}+</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Service View */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Details */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                {selectedService.title}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Duration: {selectedService.duration}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Team Size: {selectedService.teamSize}</span>
                </div>
                <div className="flex items-center gap-4">
                  <Target className="h-5 w-5 text-blue-600" />
                  <span className="text-slate-700">Starting from: {selectedService.startingPrice}</span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {selectedService.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span className="text-slate-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-4">Deliverables</h3>
                <div className="space-y-2">
                  {selectedService.deliverables.map((deliverable, index) => (
                    <Badge key={index} variant="secondary" className="mr-2 mb-2">
                      {deliverable}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <Card className="bg-white">
              <CardHeader>
                <CardTitle>Schedule a Consultation</CardTitle>
                <CardDescription>
                  Get started with a complimentary strategic assessment
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    className="p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                <input 
                  type="text" 
                  placeholder="Company" 
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                
                <select className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Select Budget Range</option>
                  <option>$50K - $100K</option>
                  <option>$100K - $250K</option>
                  <option>$250K - $500K</option>
                  <option>$500K - $1M</option>
                  <option>$1M+</option>
                </select>
                
                <textarea 
                  placeholder="Describe your strategic challenges and objectives..." 
                  rows={4}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                ></textarea>
                
                <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg">
                  Schedule Strategic Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <p className="text-sm text-slate-500 text-center">
                  Response within 24 hours • Complimentary initial consultation
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Services;
