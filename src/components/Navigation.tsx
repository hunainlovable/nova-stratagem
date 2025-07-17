
import { useState } from 'react';
import { Menu, X, ArrowRight, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'Leadership', href: '/team' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '#contact' }
  ];

  const isActive = (href: string) => {
    if (href.startsWith('#')) {
      return false;
    }
    return location.pathname === href;
  };

  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      if (location.pathname !== '/') {
        window.location.href = '/' + href;
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-xl border-b border-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Clean Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Building2 className="h-7 w-7 text-primary-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground tracking-tight">
                  Nova Stratagem
                </div>
                <div className="text-xs text-muted-foreground font-medium tracking-[0.3em]">
                  GROUP
                </div>
              </div>
            </div>
          </Link>

          {/* Clean Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-6 py-3 rounded-lg transition-all duration-200 font-medium hover:bg-muted ${
                    isActive(item.href) ? 'text-primary bg-muted' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-6 py-3 rounded-lg transition-all duration-200 font-medium hover:bg-muted ${
                    isActive(item.href) 
                      ? 'text-primary bg-muted' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            
            <div className="ml-8 pl-8 border-l border-border">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Clean Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-border">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-muted-foreground hover:text-foreground hover:bg-muted px-4 py-4 text-left rounded-lg transition-all font-medium"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-4 rounded-lg transition-all font-medium ${
                      isActive(item.href) 
                        ? 'text-primary bg-muted' 
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4 mt-4 border-t border-border">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-lg py-4">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
