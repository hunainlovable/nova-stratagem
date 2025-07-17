
import { Globe, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border text-foreground py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Nova Stratagem</h3>
              <div className="text-sm text-muted-foreground font-medium tracking-[0.3em]">GROUP</div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              The next evolution in elite consulting. Empowering visionary leaders with future-proof strategies.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-muted rounded-lg">
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Practice Areas</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/services" className="hover:text-primary transition-colors">NovaStrategy™</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">NovaOps™</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">NovaDigital™</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">NovaCapital™</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">NovaPeople™</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">NovaSector™</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">NovaESG™</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Company</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link to="/team" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/team" className="hover:text-primary transition-colors">Leadership</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><Link to="/case-studies" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link to="/insights" className="hover:text-primary transition-colors">Insights</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
            </ul>
          </div>

          {/* Global Offices */}
          <div>
            <h4 className="font-semibold text-foreground mb-6 text-lg">Global Offices</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>New York (HQ)</li>
              <li>London</li>
              <li>Dubai</li>
              <li>Singapore</li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-muted-foreground">
                partners@novastratagem.com<br />
                +1 (555) NSG-ELITE
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2024 Nova Stratagem Group. All rights reserved.
            </div>
            <div className="flex space-x-8 text-xs text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-muted-foreground text-sm italic">
            "Strategy for the Brave. Built for Tomorrow's Leaders."
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
