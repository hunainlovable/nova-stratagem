import React, { useState } from 'react';
import RegionSelectorGlobe from '../components/ServerBuilder/RegionSelectorGlobe';
import { AnimatePresence, motion } from 'framer-motion';
import Server3DPreview from '../components/ServerBuilder/Server3DPreview';

const PLATFORMS = [
  { name: 'Linux/Unix', value: 'linux', icon: '💻' },
  { name: 'Microsoft Windows', value: 'windows', icon: '🪟' },
];

const BLUEPRINTS = [
  { name: 'WordPress', value: 'wordpress' },
  { name: 'WordPress Multisite', value: 'wordpress-multisite' },
  { name: 'LAMP (PHP 8)', value: 'lamp' },
  { name: 'Node.js', value: 'nodejs' },
  { name: 'Joomla', value: 'joomla' },
  { name: 'Magento', value: 'magento' },
  { name: 'MEAN', value: 'mean' },
  { name: 'Drupal', value: 'drupal' },
  { name: 'GitLab CE', value: 'gitlab' },
  { name: 'Redmine', value: 'redmine' },
  { name: 'Nginx', value: 'nginx' },
  { name: 'Ghost', value: 'ghost' },
  { name: 'Django', value: 'django' },
  { name: 'PrestaShop', value: 'prestashop' },
  { name: 'Plesk Hosting Stack', value: 'plesk' },
  { name: 'cPanel & WHM', value: 'cpanel' },
];

// Double prices for public
const SIZES = [
  { price: 10, ram: '512 MB', cpu: 2, ssd: '20 GB', transfer: '1 TB' },
  { price: 14, ram: '1 GB', cpu: 2, ssd: '40 GB', transfer: '2 TB' },
  { price: 24, ram: '2 GB', cpu: 2, ssd: '60 GB', transfer: '3 TB' },
  { price: 48, ram: '4 GB', cpu: 2, ssd: '80 GB', transfer: '4 TB' },
  { price: 88, ram: '8 GB', cpu: 2, ssd: '160 GB', transfer: '5 TB' },
  { price: 168, ram: '16 GB', cpu: 4, ssd: '320 GB', transfer: '6 TB' },
  { price: 328, ram: '32 GB', cpu: 8, ssd: '640 GB', transfer: '7 TB' },
  { price: 768, ram: '64 GB', cpu: 16, ssd: '1280 GB', transfer: '8 TB' },
];

const EXTRAS = [
  { name: 'Backups', value: 'backups' },
  { name: 'Monitoring', value: 'monitoring' },
  { name: 'Security', value: 'security' },
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#101624] via-[#181f2e] to-[#101624] flex flex-col items-center justify-center py-12">
      <h1 className="text-4xl font-extrabold text-white mb-8 luxury-title drop-shadow-lg tracking-tight">Nova Server Builder</h1>
      <div className="w-full max-w-4xl bg-white/5 rounded-3xl shadow-2xl p-8 flex flex-col items-center">
        {/* Stepper */}
        <div className="flex gap-4 mb-8">
          {steps.map((s, i) => (
            <div key={s} className={`px-4 py-2 rounded-full font-mono text-lg ${i === step ? 'bg-slate-800 text-white font-bold shadow-lg' : 'bg-slate-900/60 text-slate-400 border border-slate-800'}`}>{s.toUpperCase()}</div>
          ))}
        </div>
        {/* Animated Step Content */}
        <AnimatePresence mode="wait" initial={false}>
          {step === 0 && (
            <motion.div
              key="region"
              initial={{ opacity: 0, x: 80, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.98 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
              className="w-full flex flex-col items-center"
            >
              <RegionSelectorGlobe onSelect={r => { setRegion(r); next(); }} />
            </motion.div>
          )}
          {step === 1 && (
            <motion.div
              key="platform"
              initial={{ opacity: 0, x: 80, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.98 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
              className="w-full flex flex-col items-center"
            >
              <div className="flex flex-wrap gap-8 justify-center">
                {PLATFORMS.map(p => (
                  <button
                    key={p.value}
                    className={`flex flex-col items-center px-8 py-6 rounded-2xl shadow bg-slate-900/80 border-2 ${platform === p.value ? 'border-blue-400' : 'border-slate-800'} hover:border-blue-400 transition-all`}
                    onClick={() => { setPlatform(p.value); next(); }}
                  >
                    <span className="text-3xl mb-2">{p.icon}</span>
                    <span className="text-white text-lg font-semibold">{p.name}</span>
                  </button>
                ))}
              </div>
            </motion.div>
          )}
          {step === 2 && (
            <motion.div
              key="blueprint"
              initial={{ opacity: 0, x: 80, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.98 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
              className="w-full flex flex-col items-center"
            >
              <div className="flex flex-wrap gap-6 justify-center">
                {BLUEPRINTS.map(b => (
                  <button
                    key={b.value}
                    className={`px-8 py-6 rounded-2xl shadow bg-slate-900/80 border-2 ${blueprint === b.value ? 'border-blue-400' : 'border-slate-800'} hover:border-blue-400 transition-all text-white text-base font-mono`}
                    onClick={() => { setBlueprint(b.value); next(); }}
                  >
                    {b.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
          {step === 3 && (
            <motion.div
              key="size"
              initial={{ opacity: 0, x: 80, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.98 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
              className="w-full flex flex-col items-center"
            >
              <div className="flex flex-wrap gap-6 justify-center mb-8">
                {SIZES.map((s, i) => (
                  <button
                    key={i}
                    className={`flex flex-col items-center px-8 py-6 rounded-2xl shadow bg-slate-900/80 border-2 ${size === s ? 'border-blue-400' : 'border-slate-800'} hover:border-blue-400 transition-all`}
                    onClick={() => { setSize(s); next(); }}
                  >
                    <span className="text-2xl font-bold text-blue-200 mb-2">${s.price}</span>
                    <span className="text-white font-mono text-sm">{s.ram} RAM</span>
                    <span className="text-white font-mono text-sm">{s.cpu} vCPUs</span>
                    <span className="text-white font-mono text-sm">{s.ssd} SSD</span>
                    <span className="text-white font-mono text-sm">{s.transfer} Transfer</span>
                  </button>
                ))}
              </div>
              {/* 3D Server Preview */}
              <Server3DPreview platform={platform} blueprint={blueprint} size={size} />
            </motion.div>
          )}
          {step === 4 && (
            <motion.div
              key="extras"
              initial={{ opacity: 0, x: 80, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.98 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
              className="w-full flex flex-col items-center"
            >
              <div className="flex flex-wrap gap-8 justify-center">
                {EXTRAS.map(e => (
                  <button
                    key={e.value}
                    className={`px-8 py-6 rounded-2xl shadow bg-slate-900/80 border-2 ${extras.includes(e.value) ? 'border-blue-400' : 'border-slate-800'} hover:border-blue-400 transition-all text-white text-base font-mono`}
                    onClick={() => {
                      setExtras(x => x.includes(e.value) ? x.filter(v => v !== e.value) : [...x, e.value]);
                    }}
                  >
                    {e.name}
                  </button>
                ))}
                <button className="ml-8 px-8 py-6 rounded-2xl shadow bg-blue-700/80 text-white font-bold text-base" onClick={next}>Continue</button>
              </div>
            </motion.div>
          )}
          {step === 5 && (
            <motion.div
              key="summary"
              initial={{ opacity: 0, x: 80, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -80, scale: 0.98 }}
              transition={{ duration: 0.5, type: 'spring', bounce: 0.2 }}
              className="w-full flex flex-col items-center"
            >
              <div className="w-full max-w-xl bg-slate-900/90 rounded-2xl p-8 shadow-2xl flex flex-col items-center">
                <h2 className="text-2xl font-bold text-white mb-4">Review & Launch</h2>
                <div className="w-full mb-6">
                  <div className="text-white font-mono mb-2">Region: <span className="text-blue-200 font-bold">{region?.name}</span></div>
                  <div className="text-white font-mono mb-2">Platform: <span className="text-blue-200 font-bold">{platform}</span></div>
                  <div className="text-white font-mono mb-2">Blueprint: <span className="text-blue-200 font-bold">{blueprint}</span></div>
                  <div className="text-white font-mono mb-2">Size: <span className="text-blue-200 font-bold">{size?.ram}, {size?.cpu} vCPUs, {size?.ssd} SSD, {size?.transfer} Transfer</span></div>
                  <div className="text-white font-mono mb-2">Extras: <span className="text-blue-200 font-bold">{extras.join(', ') || 'None'}</span></div>
                </div>
                <button
                  className="px-10 py-4 rounded-2xl bg-blue-700/90 text-white font-extrabold text-lg shadow-xl hover:scale-105 transition-all duration-300"
                  onClick={handleSubmit}
                  disabled={submitting}
                >
                  {submitting ? 'Launching...' : 'Launch Server'}
                </button>
                {submitted && <div className="mt-6 text-green-400 font-bold text-lg">Server creation request submitted!</div>}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Navigation */}
        <div className="flex gap-4 mt-8">
          {step > 0 && step < steps.length && (
            <button className="px-6 py-2 rounded-lg bg-slate-800 text-white font-mono" onClick={prev}>Back</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServerBuilder; 