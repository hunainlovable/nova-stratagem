
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
    <nav className="fixed top-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50 z-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Corporate Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                <Building2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-bold text-white tracking-tight">
                  Nova Stratagem
                </div>
                <div className="text-xs text-slate-400 font-medium tracking-[0.2em]">
                  GROUP
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              item.href.startsWith('#') ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="px-4 py-2 text-slate-300 hover:text-white hover:bg-slate-800/50 rounded-lg transition-all duration-200 font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
                    isActive(item.href) 
                      ? 'text-blue-400 bg-blue-500/10' 
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </Link>
              )
            ))}
            
            <div className="ml-6 pl-6 border-l border-slate-700">
              <Button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-2 font-medium rounded-lg shadow-lg hover:shadow-xl transition-all">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-300 hover:text-white p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 border-t border-slate-800">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                item.href.startsWith('#') ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href)}
                    className="text-slate-300 hover:text-white hover:bg-slate-800/50 px-4 py-3 text-left rounded-lg transition-all font-medium"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`px-4 py-3 rounded-lg transition-all font-medium ${
                      isActive(item.href) 
                        ? 'text-blue-400 bg-blue-500/10' 
                        : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              <div className="pt-4 mt-4 border-t border-slate-800">
                <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium rounded-lg">
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
