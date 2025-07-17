
import { useState } from 'react';
import { Menu, X, ArrowRight, Building2, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Neural Services', href: '/services' },
    { name: 'Quantum Leadership', href: '/team' },
    { name: 'Future Studies', href: '/case-studies' },
    { name: 'AI Insights', href: '/insights' },
    { name: 'Neural Link', href: '#contact' }
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
    <nav className="fixed top-0 w-full glass-morphism backdrop-blur-3xl neon-border z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-24">
          {/* Futuristic Logo */}
          <Link to="/" className="flex items-center space-x-4 group">
            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 holographic-bg rounded-2xl flex items-center justify-center group-hover:pulse-glow transition-all duration-500 group-hover:scale-110">
                <Building2 className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="text-3xl font-black holographic-text tracking-tight">
                  NOVA STRATAGEM
                </div>
                <div className="text-xs text-muted-foreground font-bold tracking-[0.4em]">
                  FUTURE ENTERPRISE GROUP
                </div>
              </div>
            </div>
          </Link>

          {/* Futuristic Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={`px-8 py-4 rounded-xl transition-all duration-300 font-bold text-sm tracking-wider hover:glass-morphism hover:neon-border ${
                    isActive(item.href) 
                      ? 'holographic-text glass-morphism neon-border' 
                      : 'text-muted-foreground hover:text-primary hover:scale-105'
                  }`}
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-8 py-4 rounded-xl transition-all duration-300 font-bold text-sm tracking-wider hover:glass-morphism hover:neon-border ${
                    isActive(item.href) 
                      ? 'holographic-text glass-morphism neon-border' 
                      : 'text-muted-foreground hover:text-primary hover:scale-105'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            
            <div className="ml-12 pl-8 border-l border-primary/30">
              <Button className="holographic-bg text-white px-10 py-4 font-black text-sm tracking-wider rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-1 neon-border">
                NEURAL ACTIVATION
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Futuristic Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-primary p-3 rounded-xl hover:glass-morphism hover:neon-border transition-all duration-300"
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Futuristic Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-8 border-t border-primary/20 glass-morphism">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-muted-foreground hover:text-primary hover:glass-morphism hover:neon-border px-6 py-5 text-left rounded-xl transition-all font-bold tracking-wider"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-6 py-5 rounded-xl transition-all font-bold tracking-wider ${
                      isActive(item.href) 
                        ? 'holographic-text glass-morphism neon-border' 
                        : 'text-muted-foreground hover:text-primary hover:glass-morphism hover:neon-border'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-6 mt-6 border-t border-primary/20">
                <Button className="w-full holographic-bg text-white font-black rounded-xl py-6 tracking-wider neon-border">
                  NEURAL ACTIVATION
                  <ArrowRight className="ml-3 h-5 w-5" />
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
