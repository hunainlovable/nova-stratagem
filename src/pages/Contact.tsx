import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Building2, Globe, Shield, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contact@novastratagem.com',
      description: 'Primary contact for all inquiries'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (713) 555-0123',
      description: 'Available 24/7 for urgent matters'
    },
    {
      icon: MapPin,
      title: 'Houston Office',
      value: '1200 Main Street, Suite 200',
      description: 'Houston, TX 77002'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      value: 'Monday - Friday',
      description: '8:00 AM - 6:00 PM CST'
    }
  ];

  const services = [
    'NovaShield™ - Cybersecurity',
    'NovaPulse™ - Performance Monitoring',
    'NovaSphere™ - Cloud Infrastructure',
    'NovaVault™ - Data Management',
    'NovaVision™ - AI Solutions',
    'NovaMind™ - Strategy Consulting',
    'NovaBoost™ - Digital Transformation',
    'NovaGlobal™ - International Expansion'
  ];

  const budgetRanges = [
    '$50K - $100K',
    '$100K - $250K',
    '$250K - $500K',
    '$500K - $1M',
    '$1M - $5M',
    '$5M+'
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss how Nova Stratagem can drive your success with our world-class consulting solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="space-y-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="flex items-center text-slate-900">
                    <Send className="h-5 w-5 mr-2 text-blue-600" />
                    Get Started Today
                  </CardTitle>
                  <p className="text-slate-600">
                    Schedule a complimentary strategic consultation with our experts
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Service Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select a service</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map((range, index) => (
                            <option key={index} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Describe your strategic challenges, objectives, and how we can help..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg font-semibold"
                    >
                      Schedule Consultation
                    </Button>

                    <p className="text-sm text-slate-500 text-center">
                      Response within 24 hours • Complimentary initial consultation • No obligation
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">{info.title}</h3>
                      <p className="text-slate-700 font-medium">{info.value}</p>
                      <p className="text-slate-500 text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Why Choose Us */}
              <Card className="bg-gradient-to-br from-slate-900 to-slate-800 text-white">
                <CardHeader>
                  <CardTitle className="text-white">Why Choose Nova Stratagem?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-blue-400" />
                    <span className="text-sm">TOP SECRET Security Clearance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-400" />
                    <span className="text-sm">World-Class Expert Team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building2 className="h-5 w-5 text-blue-400" />
                    <span className="text-sm">Fortune 500 Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-5 w-5 text-blue-400" />
                    <span className="text-sm">Global Reach & Local Expertise</span>
                  </div>
                </CardContent>
              </Card>

              {/* Response Time */}
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-slate-900">Response Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Initial Response:</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">Within 24 hours</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Consultation Booking:</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">Within 48 hours</Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-slate-600">Proposal Delivery:</span>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-800">Within 1 week</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Additional CTA Section */}
          <div className="mt-20 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-12 rounded-2xl max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join leading Houston enterprises that trust Nova Stratagem to drive their strategic success and digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 text-lg font-semibold">
                  Schedule a Call
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg font-semibold">
                  Download Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact; 