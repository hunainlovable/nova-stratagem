
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, MapPin, Clock, Send, Shield, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="relative py-24 overflow-hidden classified-gradient-bg">
      {/* Professional Background */}
      <div className="absolute inset-0 bg-white"></div>
      
      {/* Professional Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.01) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Professional Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-sm bg-red-500/10 border border-red-500/30 mb-6">
            <div className="status-indicator-classified mr-2"></div>
            <span className="text-red-400 text-xs font-sans tracking-wider uppercase">SECURE COMMUNICATIONS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-serif text-gray-800">
            GET IN TOUCH
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-sans">
            READY TO TRANSFORM YOUR OPERATIONS? LET'S DISCUSS HOW OUR SOLUTIONS CAN DRIVE YOUR SUCCESS.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Professional Contact Form */}
          <Card className="classified-card border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-black font-serif">
                SEND US A MESSAGE
              </CardTitle>
              <CardDescription className="text-gray-600 font-sans">
                FILL OUT THE FORM BELOW AND WE'LL GET BACK TO YOU WITHIN 24 HOURS.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block monospace-text">FIRST NAME</label>
                  <Input 
                    className="classified-card border-black/20 bg-transparent text-black placeholder-gray-500 focus:border-black/40 focus:ring-black/40 monospace-text"
                    placeholder="ENTER YOUR FIRST NAME"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block monospace-text">LAST NAME</label>
                  <Input 
                    className="classified-card border-black/20 bg-transparent text-black placeholder-gray-500 focus:border-black/40 focus:ring-black/40 monospace-text"
                    placeholder="ENTER YOUR LAST NAME"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block monospace-text">EMAIL</label>
                <Input 
                  type="email"
                  className="classified-card border-black/20 bg-transparent text-black placeholder-gray-500 focus:border-black/40 focus:ring-black/40 monospace-text"
                  placeholder="ENTER YOUR EMAIL ADDRESS"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block monospace-text">COMPANY</label>
                <Input 
                  className="classified-card border-black/20 bg-transparent text-black placeholder-gray-500 focus:border-black/40 focus:ring-black/40 monospace-text"
                  placeholder="ENTER YOUR COMPANY NAME"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block monospace-text">MESSAGE</label>
                <Textarea 
                  className="classified-card border-black/20 bg-transparent text-black placeholder-gray-500 focus:border-black/40 focus:ring-black/40 min-h-[120px] monospace-text"
                  placeholder="TELL US ABOUT YOUR PROJECT OR REQUIREMENTS..."
                />
              </div>
              <Button className="btn-safety w-full py-3 text-lg font-black">
                <Send className="w-5 h-5 mr-2" />
                SEND MESSAGE
              </Button>
            </CardContent>
          </Card>

          {/* Professional Contact Information */}
          <div className="space-y-8">
            {/* Professional Contact Details */}
            <Card className="classified-card border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-black classified-header">
                  CONTACT INFORMATION
                </CardTitle>
                <CardDescription className="text-gray-600 monospace-text">
                  REACH OUT TO US THROUGH ANY OF THESE CHANNELS.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-md bg-blue-600/10 flex items-center justify-center border border-blue-600/20 futuristic-glow-blue">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-black font-semibold monospace-text">EMAIL</h4>
                    <p className="text-gray-600 monospace-text">contact@novastratagem.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-md bg-green-600/10 flex items-center justify-center border border-green-600/20 futuristic-glow-green">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h4 className="text-black font-semibold monospace-text">PHONE</h4>
                    <p className="text-gray-600 monospace-text">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-md bg-navy-600/10 flex items-center justify-center border border-navy-600/20 futuristic-glow-navy">
                    <MapPin className="w-5 h-5 text-navy-600" />
                  </div>
                  <div>
                    <h4 className="text-black font-semibold monospace-text">ADDRESS</h4>
                    <p className="text-gray-600 monospace-text">123 BUSINESS DISTRICT<br />NEW YORK, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-md bg-gray-700/10 flex items-center justify-center border border-gray-700/20 futuristic-glow">
                    <Clock className="w-5 h-5 text-gray-700" />
                  </div>
                  <div>
                    <h4 className="text-black font-semibold monospace-text">BUSINESS HOURS</h4>
                    <p className="text-gray-600 monospace-text">MON-FRI: 9:00 AM - 6:00 PM<br />SAT-SUN: BY APPOINTMENT</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Security Notice */}
            <Card className="classified-card border-0">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-md bg-green-500/20 flex items-center justify-center border border-green-500/30 futuristic-glow-green">
                    <Shield className="w-4 h-4 text-green-600" />
                  </div>
                  <CardTitle className="text-lg font-bold text-black classified-header">
                    SECURITY & PRIVACY
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed monospace-text">
                  ALL COMMUNICATIONS ARE ENCRYPTED AND PROTECTED BY ENTERPRISE-GRADE SECURITY PROTOCOLS. 
                  YOUR INFORMATION IS HANDLED WITH THE UTMOST CONFIDENTIALITY AND CARE.
                </p>
              </CardContent>
            </Card>

            {/* Trust Indicators */}
            <Card className="classified-card border-0">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-black classified-header">
                  WHY CHOOSE US
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600 font-semibold monospace-text text-sm">SAFE & SECURE COMMUNICATIONS</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-green-600 font-semibold monospace-text text-sm">ENTERPRISE-GRADE PROTECTION</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-navy-600" />
                  <span className="text-navy-600 font-semibold monospace-text text-sm">TRUSTED BY FORTUNE 500</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gray-600" />
                  <span className="text-gray-600 font-semibold monospace-text text-sm">24/7 SUPPORT AVAILABLE</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Professional Connector */}
      <div className="classified-connector absolute bottom-0 left-0 right-0 h-1"></div>
    </section>
  );
};

export default Contact;
