import React, { useState, useEffect } from 'react';
import RegionSelectorGlobe from '../components/ServerBuilder/RegionSelectorGlobe';
import { AnimatePresence, motion } from 'framer-motion';
import Server3DPreview from '../components/ServerBuilder/Server3DPreview';
import { ChevronLeft, ChevronRight, Sparkles, Shield, Zap, Globe, Cpu, Database, Cloud } from 'lucide-react';

const PLATFORMS = [
  { name: 'Linux/Unix', value: 'linux', icon: Cpu, description: 'Ultimate performance & flexibility', color: 'from-blue-500 to-cyan-500' },
  { name: 'Microsoft Windows', value: 'windows', icon: Database, description: 'Enterprise-grade reliability', color: 'from-indigo-500 to-purple-500' },
];

const BLUEPRINTS = [
  { name: 'WordPress', value: 'wordpress', category: 'CMS', icon: '🎨', description: 'Content management system' },
  { name: 'WordPress Multisite', value: 'wordpress-multisite', category: 'CMS', icon: '🏢', description: 'Multi-tenant WordPress' },
  { name: 'LAMP (PHP 8)', value: 'lamp', category: 'Stack', icon: '⚡', description: 'Linux, Apache, MySQL, PHP' },
  { name: 'Node.js', value: 'nodejs', category: 'Runtime', icon: '🟢', description: 'JavaScript runtime environment' },
  { name: 'Joomla', value: 'joomla', category: 'CMS', icon: '🔷', description: 'Flexible content management' },
  { name: 'Magento', value: 'magento', category: 'E-commerce', icon: '🛒', description: 'E-commerce platform' },
  { name: 'MEAN', value: 'mean', category: 'Stack', icon: '📦', description: 'MongoDB, Express, Angular, Node' },
  { name: 'Drupal', value: 'drupal', category: 'CMS', icon: '🌊', description: 'Enterprise content management' },
  { name: 'GitLab CE', value: 'gitlab', category: 'DevOps', icon: '🦊', description: 'Git repository management' },
  { name: 'Redmine', value: 'redmine', category: 'Project', icon: '📋', description: 'Project management tool' },
  { name: 'Nginx', value: 'nginx', category: 'Server', icon: '🚀', description: 'High-performance web server' },
  { name: 'Ghost', value: 'ghost', category: 'Blog', icon: '👻', description: 'Professional publishing platform' },
  { name: 'Django', value: 'django', category: 'Framework', icon: '🐍', description: 'Python web framework' },
  { name: 'PrestaShop', value: 'prestashop', category: 'E-commerce', icon: '🏪', description: 'Open source e-commerce' },
  { name: 'Plesk Hosting Stack', value: 'plesk', category: 'Panel', icon: '🎛️', description: 'Web hosting control panel' },
  { name: 'cPanel & WHM', value: 'cpanel', category: 'Panel', icon: '⚙️', description: 'Web hosting automation' },
];

const SIZES = [
  { price: 10, ram: '512 MB', cpu: 2, ssd: '20 GB', transfer: '1 TB', tier: 'Starter', recommended: false },
  { price: 14, ram: '1 GB', cpu: 2, ssd: '40 GB', transfer: '2 TB', tier: 'Basic', recommended: false },
  { price: 24, ram: '2 GB', cpu: 2, ssd: '60 GB', transfer: '3 TB', tier: 'Standard', recommended: true },
  { price: 48, ram: '4 GB', cpu: 2, ssd: '80 GB', transfer: '4 TB', tier: 'Enhanced', recommended: false },
  { price: 88, ram: '8 GB', cpu: 2, ssd: '160 GB', transfer: '5 TB', tier: 'Professional', recommended: false },
  { price: 168, ram: '16 GB', cpu: 4, ssd: '320 GB', transfer: '6 TB', tier: 'Business', recommended: false },
  { price: 328, ram: '32 GB', cpu: 8, ssd: '640 GB', transfer: '7 TB', tier: 'Enterprise', recommended: false },
  { price: 768, ram: '64 GB', cpu: 16, ssd: '1280 GB', transfer: '8 TB', tier: 'Ultimate', recommended: false },
];

const EXTRAS = [
  { name: 'Automated Backups', value: 'backups', icon: Shield, description: 'Daily encrypted backups with instant recovery', price: 5 },
  { name: 'Performance Monitoring', value: 'monitoring', icon: Zap, description: 'Real-time performance analytics & alerts', price: 8 },
  { name: 'Advanced Security', value: 'security', icon: Globe, description: 'DDoS protection, firewall & malware scanning', price: 12 },
  { name: 'Priority Support', value: 'support', icon: Sparkles, description: '24/7 priority technical support', price: 15 },
];

const steps = ['region', 'platform', 'blueprint', 'size', 'extras', 'summary'];

const ServerBuilder: React.FC = () => {
  const [step, setStep] = useState(0);
  const [region, setRegion] = useState<any>(null);
  const [platform, setPlatform] = useState<string>('');
  const [blueprint, setBlueprint] = useState<string>('');
  const [size, setSize] = useState<any>(null);
  const [extras, setExtras] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Step navigation
  const next = () => setStep(s => Math.min(s + 1, steps.length - 1));
  const prev = () => setStep(s => Math.max(s - 1, 0));

  // Submission handler
  const handleSubmit = async () => {
    setSubmitting(true);
    await fetch('/api/server-builder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ region, platform, blueprint, size, extras }),
    });
    setSubmitting(false);
    setSubmitted(true);
  };

  const totalExtrasPrice = extras.reduce((total, extra) => {
    const extraItem = EXTRAS.find(e => e.value === extra);
    return total + (extraItem?.price || 0);
  }, 0);

  const canProceed = () => {
    switch (step) {
      case 0: return !!region;
      case 1: return !!platform;
      case 2: return !!blueprint;
      case 3: return !!size;
      default: return true;
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black">
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`
          }}
        />
      </div>

      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          animation: 'float 20s ease-in-out infinite'
        }} />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-12 px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
            Nova Server Builder
          </h1>
          <p className="text-xl text-slate-400 font-light">Craft your perfect cloud infrastructure</p>
        </motion.div>

        {/* Main Container */}
        <div className="w-full max-w-6xl">
          {/* Progress Stepper */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-2 bg-black/40 backdrop-blur-xl rounded-2xl p-3 border border-white/10">
              {steps.map((s, i) => (
                <React.Fragment key={s}>
                  <div 
                    className={`
                      relative px-6 py-3 rounded-xl transition-all duration-500 font-mono text-sm font-bold uppercase tracking-wider
                      ${i === step 
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/25 scale-105' 
                        : i < step
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'text-slate-500 bg-slate-800/50'
                      }
                    `}
                  >
                    {s}
                    {i < step && (
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    )}
                  </div>
                  {i < steps.length - 1 && (
                    <div className={`w-8 h-0.5 transition-all duration-500 ${i < step ? 'bg-green-400' : 'bg-slate-700'}`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* Content Area */}
          <div className="bg-black/20 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
            <AnimatePresence mode="wait" initial={false}>
              {step === 0 && (
                <motion.div
                  key="region"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="p-8"
                >
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-white mb-2">Select Your Region</h2>
                    <p className="text-slate-400">Choose the optimal location for your server</p>
                  </div>
                  <RegionSelectorGlobe onSelect={r => { setRegion(r); setTimeout(next, 300); }} />
                </motion.div>
              )}

              {step === 1 && (
                <motion.div
                  key="platform"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="p-8"
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">Choose Your Platform</h2>
                    <p className="text-slate-400">Select the operating system that powers your vision</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {PLATFORMS.map(p => {
                      const IconComponent = p.icon;
                      return (
                        <motion.button
                          key={p.value}
                          whileHover={{ scale: 1.02, y: -5 }}
                          whileTap={{ scale: 0.98 }}
                          className={`
                            group relative p-8 rounded-2xl border-2 transition-all duration-500 overflow-hidden
                            ${platform === p.value 
                              ? 'border-blue-400 bg-blue-500/10 shadow-lg shadow-blue-500/25' 
                              : 'border-white/20 bg-white/5 hover:border-blue-400/50 hover:bg-blue-500/5'
                            }
                          `}
                          onClick={() => { setPlatform(p.value); setTimeout(next, 300); }}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                          <div className="relative z-10 flex flex-col items-center text-center">
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                              <IconComponent className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{p.name}</h3>
                            <p className="text-slate-400 text-sm">{p.description}</p>
                          </div>
                          {platform === p.value && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-4 right-4 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center"
                            >
                              <div className="w-3 h-3 bg-white rounded-full" />
                            </motion.div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.div
                  key="blueprint"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="p-8"
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">Select Your Blueprint</h2>
                    <p className="text-slate-400">Choose the application stack that fits your project</p>
                  </div>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
                    {BLUEPRINTS.map(b => (
                      <motion.button
                        key={b.value}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`
                          group relative p-6 rounded-xl border transition-all duration-300 overflow-hidden
                          ${blueprint === b.value 
                            ? 'border-blue-400 bg-blue-500/20 shadow-lg shadow-blue-500/25' 
                            : 'border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-blue-500/10'
                          }
                        `}
                        onClick={() => { setBlueprint(b.value); setTimeout(next, 200); }}
                      >
                        <div className="flex flex-col items-center text-center">
                          <span className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-300">{b.icon}</span>
                          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">{b.category}</div>
                          <h3 className="text-sm font-bold text-white mb-2">{b.name}</h3>
                          <p className="text-xs text-slate-400 leading-tight">{b.description}</p>
                        </div>
                        {blueprint === b.value && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-2 right-2 w-4 h-4 bg-blue-400 rounded-full flex items-center justify-center"
                          >
                            <div className="w-2 h-2 bg-white rounded-full" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
              {step === 3 && (
                <motion.div
                  key="size"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="p-8"
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">Configure Your Server</h2>
                    <p className="text-slate-400">Select the perfect performance tier for your needs</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {SIZES.map((s, i) => (
                      <motion.button
                        key={i}
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className={`
                          group relative p-6 rounded-2xl border-2 transition-all duration-500 overflow-hidden
                          ${size === s 
                            ? 'border-blue-400 bg-blue-500/20 shadow-lg shadow-blue-500/25' 
                            : 'border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-blue-500/10'
                          }
                          ${s.recommended ? 'ring-2 ring-amber-400/50' : ''}
                        `}
                        onClick={() => { setSize(s); setTimeout(next, 300); }}
                      >
                        {s.recommended && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <div className="bg-gradient-to-r from-amber-400 to-orange-400 text-black text-xs font-bold px-3 py-1 rounded-full">
                              RECOMMENDED
                            </div>
                          </div>
                        )}
                        <div className="text-center">
                          <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-2">{s.tier}</div>
                          <div className="text-3xl font-black text-white mb-4">
                            ${s.price}
                            <span className="text-sm text-slate-400 font-normal">/mo</span>
                          </div>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between text-slate-300">
                              <span>RAM</span>
                              <span className="font-mono text-blue-400">{s.ram}</span>
                            </div>
                            <div className="flex justify-between text-slate-300">
                              <span>CPU</span>
                              <span className="font-mono text-blue-400">{s.cpu} vCPUs</span>
                            </div>
                            <div className="flex justify-between text-slate-300">
                              <span>SSD</span>
                              <span className="font-mono text-blue-400">{s.ssd}</span>
                            </div>
                            <div className="flex justify-between text-slate-300">
                              <span>Transfer</span>
                              <span className="font-mono text-blue-400">{s.transfer}</span>
                            </div>
                          </div>
                        </div>
                        {size === s && (
                          <motion.div 
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute top-4 right-4 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center"
                          >
                            <div className="w-3 h-3 bg-white rounded-full" />
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {/* 3D Server Preview */}
                  {size && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex justify-center"
                    >
                      <Server3DPreview platform={platform} blueprint={blueprint} size={size} />
                    </motion.div>
                  )}
                </motion.div>
              )}
              {step === 4 && (
                <motion.div
                  key="extras"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="p-8"
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">Enhance Your Server</h2>
                    <p className="text-slate-400">Add powerful features to maximize your server's potential</p>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
                    {EXTRAS.map(e => {
                      const IconComponent = e.icon;
                      const isSelected = extras.includes(e.value);
                      return (
                        <motion.button
                          key={e.value}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          className={`
                            group relative p-6 rounded-2xl border-2 transition-all duration-500 text-left overflow-hidden
                            ${isSelected 
                              ? 'border-blue-400 bg-blue-500/20 shadow-lg shadow-blue-500/25' 
                              : 'border-white/10 bg-white/5 hover:border-blue-400/50 hover:bg-blue-500/10'
                            }
                          `}
                          onClick={() => {
                            setExtras(x => x.includes(e.value) ? x.filter(v => v !== e.value) : [...x, e.value]);
                          }}
                        >
                          <div className="flex items-start justify-between mb-4">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                              <IconComponent className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-white">
                                +${e.price}
                                <span className="text-sm text-slate-400 font-normal">/mo</span>
                              </div>
                            </div>
                          </div>
                          <h3 className="text-xl font-bold text-white mb-2">{e.name}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">{e.description}</p>
                          {isSelected && (
                            <motion.div 
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute top-4 right-4 w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center"
                            >
                              <div className="w-3 h-3 bg-white rounded-full" />
                            </motion.div>
                          )}
                        </motion.button>
                      );
                    })}
                  </div>

                  <div className="flex justify-center">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="group relative px-12 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl font-bold text-white text-lg shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-500 overflow-hidden"
                      onClick={next}
                    >
                      <span className="relative z-10">Continue to Review</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.button>
                  </div>
                </motion.div>
              )}
              {step === 5 && (
                <motion.div
                  key="summary"
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  className="p-8"
                >
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-white mb-2">Review & Launch</h2>
                    <p className="text-slate-400">Confirm your configuration and deploy your server</p>
                  </div>

                  <div className="max-w-2xl mx-auto">
                    {/* Configuration Summary */}
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 mb-8">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Region</div>
                            <div className="text-white font-semibold">{region?.name}</div>
                          </div>
                          <div>
                            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Platform</div>
                            <div className="text-white font-semibold">{platform}</div>
                          </div>
                          <div>
                            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Blueprint</div>
                            <div className="text-white font-semibold">{blueprint}</div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <div>
                            <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Server Configuration</div>
                            <div className="text-white font-mono text-sm space-y-1">
                              <div>RAM: {size?.ram}</div>
                              <div>CPU: {size?.cpu} vCPUs</div>
                              <div>SSD: {size?.ssd}</div>
                              <div>Transfer: {size?.transfer}</div>
                            </div>
                          </div>
                          {extras.length > 0 && (
                            <div>
                              <div className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1">Add-ons</div>
                              <div className="text-white text-sm space-y-1">
                                {extras.map(extra => {
                                  const extraItem = EXTRAS.find(e => e.value === extra);
                                  return (
                                    <div key={extra} className="flex justify-between">
                                      <span>{extraItem?.name}</span>
                                      <span className="font-mono">+${extraItem?.price}/mo</span>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Pricing Summary */}
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-400/10 backdrop-blur-xl rounded-2xl border border-blue-400/20 p-8 mb-8">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-white text-lg">Server ({size?.tier})</span>
                        <span className="text-white font-bold text-lg">${size?.price}/mo</span>
                      </div>
                      {totalExtrasPrice > 0 && (
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-white text-lg">Add-ons</span>
                          <span className="text-white font-bold text-lg">+${totalExtrasPrice}/mo</span>
                        </div>
                      )}
                      <div className="border-t border-white/20 pt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-white text-xl font-bold">Total</span>
                          <span className="text-3xl font-black text-white">
                            ${(size?.price || 0) + totalExtrasPrice}
                            <span className="text-lg text-slate-400 font-normal">/mo</span>
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Launch Button */}
                    <div className="text-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative px-16 py-6 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl font-black text-white text-xl shadow-2xl shadow-blue-500/25 hover:shadow-3xl hover:shadow-blue-500/40 transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                        onClick={handleSubmit}
                        disabled={submitting}
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          {submitting ? (
                            <>
                              <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                              Launching Server...
                            </>
                          ) : (
                            <>
                              <Sparkles className="w-6 h-6" />
                              Launch My Server
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </motion.button>
                      
                      {submitted && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-8 p-6 bg-green-500/20 border border-green-400/30 rounded-2xl"
                        >
                          <div className="text-green-400 font-bold text-xl mb-2">🎉 Server Launch Initiated!</div>
                          <div className="text-green-300">Your server will be ready in 2-3 minutes. Check your email for access details.</div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <div>
              {step > 0 && step < steps.length - 1 && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white font-semibold hover:bg-white/20 transition-all duration-300"
                  onClick={prev}
                >
                  <ChevronLeft className="w-4 h-4" />
                  Back
                </motion.button>
              )}
            </div>
            <div>
              {step < steps.length - 2 && canProceed() && (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-xl text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
                  onClick={next}
                >
                  Continue
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerBuilder; 