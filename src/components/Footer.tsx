
import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Phone, MapPin, Clock, Shield, Lock, Eye, Globe, Zap, Users, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-white overflow-hidden classified-gradient-bg">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.03),transparent_50%)]"></div>
      
      {/* Floating Elements with Psychological Colors */}
      <div className="absolute top-10 left-10 w-1 h-1 bg-blue-600 rounded-full opacity-40 classified-float futuristic-glow-blue" style={{animationDelay: '0s'}}></div>
      <div className="absolute top-20 right-20 w-1.5 h-1.5 bg-green-600 rounded-full opacity-30 classified-float futuristic-glow-green" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-10 left-20 w-1 h-1 bg-navy-600 rounded-full opacity-50 classified-float futuristic-glow-navy" style={{animationDelay: '4s'}}></div>
      <div className="absolute bottom-20 right-10 w-1.5 h-1.5 bg-red-500 rounded-full opacity-20 classified-float futuristic-glow-red" style={{animationDelay: '6s'}}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center futuristic-glow-blue">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-black text-black classified-header">NOVA STRATAGEM</h3>
              </div>
              <p className="text-gray-700 leading-relaxed mb-6 monospace-text">
                Empowering organizations with cutting-edge technology solutions that drive innovation, 
                enhance security, and create sustainable competitive advantages.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer futuristic-glow-blue">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer futuristic-glow-green">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer futuristic-glow-navy">
                  <Users className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-black text-black mb-6 classified-header">SERVICES</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/services/novashield" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 monospace-text text-sm">
                    NOVASHIELD™
                  </Link>
                </li>
                <li>
                  <Link to="/services/novapulse" className="text-gray-700 hover:text-green-600 transition-colors duration-300 monospace-text text-sm">
                    NOVAPULSE™
                  </Link>
                </li>
                <li>
                  <Link to="/services/novasphere" className="text-gray-700 hover:text-navy-600 transition-colors duration-300 monospace-text text-sm">
                    NOVASPHERE™
                  </Link>
                </li>
                <li>
                  <Link to="/services/novavault" className="text-gray-700 hover:text-green-600 transition-colors duration-300 monospace-text text-sm">
                    NOVAVAULT™
                  </Link>
                </li>
                <li>
                  <Link to="/services/novavision" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 monospace-text text-sm">
                    NOVAVISION™
                  </Link>
                </li>
                <li>
                  <Link to="/services/novamind" className="text-gray-700 hover:text-green-600 transition-colors duration-300 monospace-text text-sm">
                    NOVAMIND™
                  </Link>
                </li>
                <li>
                  <Link to="/services/novaboost" className="text-gray-700 hover:text-navy-600 transition-colors duration-300 monospace-text text-sm">
                    NOVABOOST™
                  </Link>
                </li>
                <li>
                  <Link to="/services/novaglobal" className="text-gray-700 hover:text-navy-600 transition-colors duration-300 monospace-text text-sm">
                    NOVAGLOBAL™
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-black text-black mb-6 classified-header">COMPANY</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 monospace-text text-sm">
                    ABOUT US
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text-gray-700 hover:text-navy-600 transition-colors duration-300 monospace-text text-sm">
                    OUR TEAM
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className="text-gray-700 hover:text-green-600 transition-colors duration-300 monospace-text text-sm">
                    CAREERS
                  </Link>
                </li>
                <li>
                  <Link to="/insights" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 monospace-text text-sm">
                    INSIGHTS
                  </Link>
                </li>
                <li>
                  <Link to="/case-studies" className="text-gray-700 hover:text-navy-600 transition-colors duration-300 monospace-text text-sm">
                    CASE STUDIES
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors duration-300 monospace-text text-sm">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Newsletter */}
            <div>
              <h4 className="text-lg font-black text-black mb-6 classified-header">STAY CONNECTED</h4>
              <div className="space-y-4 mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center futuristic-glow-blue">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm monospace-text">contact@novastratagem.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-600 to-green-800 flex items-center justify-center futuristic-glow-green">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 text-sm monospace-text">+1 (555) 123-4567</span>
                </div>
              </div>
              
              <div className="space-y-3">
                <h5 className="text-sm font-black text-black monospace-text">NEWSLETTER</h5>
                <p className="text-gray-700 text-sm mb-3 monospace-text">
                  Stay updated with our latest insights and innovations.
                </p>
                <div className="flex space-x-2">
                  <Input 
                    type="email"
                    placeholder="Enter your email"
                    className="classified-card border-black/20 bg-transparent text-black placeholder-gray-500 focus:border-black/40 focus:ring-black/40 text-sm monospace-text"
                  />
                  <Button className="btn-safety px-4 py-2 text-sm font-black">
                    <Mail className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="py-8 border-t-2 border-black/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              <span className="text-blue-600 font-semibold monospace-text text-sm">SAFE & SECURE</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-green-600 font-semibold monospace-text text-sm">ENTERPRISE GRADE</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-navy-600" />
              <span className="text-navy-600 font-semibold monospace-text text-sm">TRUSTED BY 500+</span>
            </div>
            <div className="flex items-center space-x-3">
              <CheckCircle className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600 font-semibold monospace-text text-sm">24/7 SUPPORT</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t-2 border-black/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <span className="text-gray-700 text-sm monospace-text">
                © 2024 NOVA STRATAGEM. ALL RIGHTS RESERVED.
              </span>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-blue-600" />
                <span className="text-gray-700 text-sm monospace-text">ENTERPRISE SECURITY</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="text-gray-700 hover:text-blue-600 transition-colors duration-300 text-sm monospace-text">
                PRIVACY POLICY
              </Link>
              <Link to="/terms" className="text-gray-700 hover:text-navy-600 transition-colors duration-300 text-sm monospace-text">
                TERMS OF SERVICE
              </Link>
              <Link to="/security" className="text-gray-700 hover:text-green-600 transition-colors duration-300 text-sm monospace-text">
                SECURITY
              </Link>
              <div className="flex items-center space-x-2">
                <Lock className="w-4 h-4 text-green-600" />
                <span className="text-gray-700 text-sm monospace-text">SSL SECURED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Connector */}
      <div className="classified-connector absolute top-0 left-0 right-0 h-2"></div>
    </footer>
  );
};

export default Footer;
