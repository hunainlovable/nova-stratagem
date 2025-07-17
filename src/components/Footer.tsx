
import { Globe, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">Nova Stratagem</h3>
              <div className="text-sm text-slate-400">GROUP</div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              The next evolution in elite consulting. Empowering visionary leaders with future-proof strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Practice Areas</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">NovaStrategy™</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NovaOps™</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NovaDigital™</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NovaCapital™</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NovaPeople™</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NovaSector™</a></li>
              <li><a href="#" className="hover:text-white transition-colors">NovaESG™</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Insights</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Global Offices */}
          <div>
            <h4 className="font-semibold text-white mb-4">Global Offices</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>New York (HQ)</li>
              <li>London</li>
              <li>Dubai</li>
              <li>Singapore</li>
            </ul>
            <div className="mt-4">
              <p className="text-xs text-slate-500">
                partners@novastratagem.com<br />
                +1 (555) NSG-ELITE
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-slate-400 mb-4 md:mb-0">
              © 2024 Nova Stratagem Group. All rights reserved.
            </div>
            <div className="flex space-x-6 text-xs text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-8 pt-8 border-t border-slate-800">
          <p className="text-slate-500 text-sm italic">
            "Strategy for the Brave. Built for Tomorrow's Leaders."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
