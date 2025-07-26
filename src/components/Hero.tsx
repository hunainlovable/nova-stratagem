
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredTile, setHoveredTile] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mouseVelocity, setMouseVelocity] = useState({ x: 0, y: 0 });
  const [lastMousePosition, setLastMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  // Scroll to next section
  const handleExploreClick = () => {
    if (heroRef.current) {
      const nextSection = heroRef.current.nextElementSibling as HTMLElement | null;
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    let animationFrameId: number;
    let lastTime = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const currentTime = performance.now();
        const deltaTime = currentTime - lastTime;
        
        const newPosition = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };

        // Calculate velocity
        const velocity = {
          x: (newPosition.x - lastMousePosition.x) / deltaTime,
          y: (newPosition.y - lastMousePosition.y) / deltaTime,
        };

        setMouseVelocity(velocity);
        setLastMousePosition(newPosition);
        setMousePosition(newPosition);
        lastTime = currentTime;
      }
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [lastMousePosition]);

  const tiles = [
    { id: 1, title: 'NovaShield™', subtitle: 'Advanced Cybersecurity', color: 'from-green-600 to-emerald-600', delay: 0 },
    { id: 2, title: 'NovaPulse™', subtitle: 'Performance Monitoring', color: 'from-blue-600 to-cyan-600', delay: 0.1 },
    { id: 3, title: 'NovaSphere™', subtitle: 'Cloud Infrastructure', color: 'from-purple-600 to-violet-600', delay: 0.2 },
    { id: 4, title: 'NovaVault™', subtitle: 'Secure Data Management', color: 'from-violet-600 to-purple-600', delay: 0.3 },
    { id: 5, title: 'NovaVision™', subtitle: 'Business Intelligence', color: 'from-cyan-600 to-blue-600', delay: 0.4 },
    { id: 6, title: 'NovaMind™', subtitle: 'AI Decision Engine', color: 'from-amber-500 to-orange-500', delay: 0.5 },
    { id: 7, title: 'NovaBoost™', subtitle: 'Performance Optimization', color: 'from-orange-500 to-amber-500', delay: 0.6 },
    { id: 8, title: 'NovaGlobal™', subtitle: 'Worldwide Solutions', color: 'from-emerald-600 to-green-600', delay: 0.7 },
  ];

  // Helper to create service URL slug
  const getServiceSlug = (title: string) =>
    '/services/' + title.toLowerCase().replace(/™/g, '').replace(/\s+/g, '').replace(/[^a-z0-9-]/g, '');

  // Calculate dynamic effects based on mouse velocity
  const mouseSpeed = Math.sqrt(mouseVelocity.x ** 2 + mouseVelocity.y ** 2);
  const intensity = Math.min(mouseSpeed * 30, 0.3); // Reduced intensity for professionalism

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen classified-gradient-bg overflow-hidden pt-32 md:pt-40"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, ${0.05 + intensity * 0.05}) 0%, transparent 50%),
          radial-gradient(circle at ${mousePosition.x + mouseVelocity.x * 5}px ${mousePosition.y + mouseVelocity.y * 5}px, rgba(6, 182, 212, ${0.03 + intensity * 0.05}) 0%, transparent 40%)
        `
      }}
    >
      {/* Professional Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle Circuit Board Patterns */}
        <div className="absolute inset-0 opacity-10">
          {/* Main Circuit Grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            animation: 'electricGrid 30s linear infinite',
            transform: `translateY(${scrollY * 0.2}px)`
          }}></div>
          
          {/* Subtle Circuit Nodes */}
          <div className="absolute inset-0" style={{
            backgroundImage: `
              radial-gradient(circle at 30px 30px, rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 90px 90px, rgba(6, 182, 212, 0.3) 1px, transparent 1px),
              radial-gradient(circle at 150px 150px, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '300px 300px',
            animation: 'electricGrid 25s linear infinite reverse'
          }}></div>
        </div>

        {/* Minimal Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full electric-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 3}s`,
              transform: `translateY(${scrollY * 0.05}px)`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Professional Header Section */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="clearance-badge-classified mr-4 text-xs">ENTERPRISE SOLUTION</span>
            <span className="clearance-badge-safety mr-4 text-xs">HOUSTON BASED</span>
            <span className="clearance-badge-security text-xs">UNITED STATES</span>
          </div>
          
          <motion.h1 
            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-none tracking-tight text-white" 
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
              textShadow: `0 2px 4px rgba(0, 0, 0, 0.3)`
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            NOVA
            <span className="block mt-2" style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 25%, #8b5cf6 50%, #10b981 75%, #f59e0b 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              STRATAGEM
            </span>
          </motion.h1>
          
          <motion.p 
            className="font-playfair text-2xl md:text-3xl lg:text-4xl font-medium mb-8 max-w-4xl mx-auto leading-tight text-white/90" 
            style={{
              transform: `translateY(${scrollY * 0.03}px)`,
              textShadow: `0 1px 3px rgba(0, 0, 0, 0.3)`
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Enterprise Technology Solutions
          </motion.p>
          
          <motion.p 
            className="font-inter text-lg md:text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed" 
            style={{
              transform: `translateY(${scrollY * 0.02}px)`
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Leading provider of advanced enterprise solutions in Houston, Texas. 
            Delivering quantum intelligence, cybersecurity, and digital transformation 
            services for forward-thinking organizations across the United States.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link 
              to="/services" 
              className="btn-tesla-primary text-lg px-10 py-4 futuristic-glow-blue transform hover:scale-105 transition-all duration-300"
              style={{
                boxShadow: `0 0 20px rgba(59, 130, 246, 0.3)`
              }}
            >
              VIEW SOLUTIONS
            </Link>
            <Link 
              to="/contact" 
              className="btn-tesla-secondary text-lg px-10 py-4 transform hover:scale-105 transition-all duration-300"
              style={{
                boxShadow: `0 0 15px rgba(59, 130, 246, 0.2)`
              }}
            >
              CONTACT US
            </Link>
          </div>
        </div>

        {/* Professional Service Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {tiles.map((tile, index) => (
            <Link
              key={tile.id}
              to={getServiceSlug(tile.title)}
              className={`
                classified-card p-6 cursor-pointer transition-all duration-500 electric-tile
                ${hoveredTile === tile.id ? 'scale-105 z-20' : 'scale-100'}
                ${hoveredTile === tile.id ? 'futuristic-glow' : ''}
              `}
              onMouseEnter={() => setHoveredTile(tile.id)}
              onMouseLeave={() => setHoveredTile(null)}
              style={{
                transform: hoveredTile === tile.id 
                  ? `perspective(1000px) rotateX(${(mousePosition.y - 300) * 0.005}deg) rotateY(${(mousePosition.x - 400) * 0.005}deg) scale(1.05)`
                  : 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                animationDelay: `${tile.delay}s`,
                boxShadow: hoveredTile === tile.id 
                  ? '0 15px 30px rgba(0, 0, 0, 0.1), 0 0 20px rgba(59, 130, 246, 0.2)'
                  : '0 8px 16px rgba(0, 0, 0, 0.08)'
              }}
            >
              <div className="text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${tile.color} flex items-center justify-center futuristic-glow transform group-hover:scale-105 transition-transform duration-300`} style={{
                  boxShadow: `0 0 20px ${tile.color.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : 
                    tile.color.includes('green') ? 'rgba(16, 185, 129, 0.3)' :
                    tile.color.includes('purple') ? 'rgba(139, 92, 246, 0.3)' :
                    tile.color.includes('amber') ? 'rgba(245, 158, 11, 0.3)' :
                    tile.color.includes('cyan') ? 'rgba(6, 182, 212, 0.3)' :
                    'rgba(59, 130, 246, 0.3)'}`
                }}>
                  <div className="w-8 h-8 bg-white rounded-lg opacity-90"></div>
                </div>
                
                <h3 className="font-playfair text-lg font-semibold mb-2 text-gray-800">
                  {tile.title}
                </h3>
                
                <p className="font-inter text-xs text-gray-600 mb-4">
                  {tile.subtitle}
                </p>
                
                <div className="flex justify-center space-x-2">
                  <div className="status-indicator-classified"></div>
                  <span className="text-xs text-gray-500 font-inter font-medium">READY</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Professional Bottom Connector */}
        <div className="mt-16">
          <div className="tesla-connector h-1 w-full max-w-4xl mx-auto rounded-full" style={{
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)'
          }}></div>
        </div>
      </div>

      {/* Professional Status Bar */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
        <motion.div 
          className="classified-panel px-8 py-4 flex items-center space-x-8" 
          style={{
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.08), 0 0 20px rgba(59, 130, 246, 0.15)',
            minWidth: 'max-content'
          }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center space-x-3">
            <div className="status-indicator-classified"></div>
            <span className="font-inter text-sm text-gray-700 font-semibold whitespace-nowrap">SYSTEM ACTIVE</span>
          </div>
          <div className="w-px h-6 bg-gray-300 flex-shrink-0"></div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse flex-shrink-0"></div>
            <span className="font-inter text-sm text-gray-700 font-semibold whitespace-nowrap">ALL SYSTEMS NOMINAL</span>
          </div>
          <div className="w-px h-6 bg-gray-300 flex-shrink-0"></div>
          <div className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse flex-shrink-0" style={{ animationDelay: '0.5s' }}></div>
            <span className="font-inter text-sm text-gray-700 font-semibold whitespace-nowrap">ENTERPRISE READY</span>
          </div>
        </motion.div>
      </div>

      {/* Professional Scroll Indicator - moved 50px below status bar */}
      <motion.button
        type="button"
        onClick={handleExploreClick}
        className="absolute left-1/2 transform -translate-x-1/2 z-20 focus:outline-none group"
        style={{ bottom: '50px' }}
        aria-label="Scroll to next section"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="flex flex-col items-center space-y-1">
          <span className="font-inter text-xs text-gray-500 font-medium tracking-wider group-hover:text-blue-600 transition">EXPLORE</span>
          <div className="w-0.5 h-10 bg-gradient-to-b from-blue-600 to-transparent animate-pulse"></div>
        </div>
      </motion.button>
    </div>
  );
};

export default Hero;

