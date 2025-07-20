import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Zap, Gauge, Database, Activity, Settings, CheckCircle, AlertTriangle, Rocket } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

interface OptimizationMetric {
  id: string;
  name: string;
  current: number;
  target: number;
  unit: string;
  status: 'optimal' | 'good' | 'needs-improvement' | 'critical';
  improvement: number;
}

interface BoostMetrics {
  pageLoadSpeed: number;
  cacheHitRate: number;
  compressionRatio: number;
  cdnPerformance: number;
  databaseQueries: number;
  optimizationScore: number;
}

const NovaBoostDashboard: React.FC = () => {
  const [optimizationMetrics, setOptimizationMetrics] = useState<OptimizationMetric[]>([]);
  const [metrics, setMetrics] = useState<BoostMetrics>({
    pageLoadSpeed: 0.8,
    cacheHitRate: 94.2,
    compressionRatio: 78.5,
    cdnPerformance: 99.1,
    databaseQueries: 1250,
    optimizationScore: 92.8
  });
  const [isOptimizing, setIsOptimizing] = useState(false);

  useEffect(() => {
    // Simulate optimization metrics
    const mockMetrics: OptimizationMetric[] = [
      {
        id: '1',
        name: 'Page Load Time',
        current: 0.8,
        target: 1.0,
        unit: 's',
        status: 'optimal',
        improvement: 20
      },
      {
        id: '2',
        name: 'Cache Hit Rate',
        current: 94.2,
        target: 95.0,
        unit: '%',
        status: 'good',
        improvement: 0.8
      },
      {
        id: '3',
        name: 'Image Compression',
        current: 78.5,
        target: 80.0,
        unit: '%',
        status: 'needs-improvement',
        improvement: 1.5
      },
      {
        id: '4',
        name: 'Database Response',
        current: 45,
        target: 50,
        unit: 'ms',
        status: 'optimal',
        improvement: 10
      }
    ];
    setOptimizationMetrics(mockMetrics);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        pageLoadSpeed: Math.max(0.5, Math.min(1.2, prev.pageLoadSpeed + (Math.random() - 0.5) * 0.1)),
        cacheHitRate: Math.max(90, Math.min(98, prev.cacheHitRate + (Math.random() - 0.5) * 0.5)),
        compressionRatio: Math.max(75, Math.min(85, prev.compressionRatio + (Math.random() - 0.5) * 0.3)),
        optimizationScore: Math.max(88, Math.min(96, prev.optimizationScore + (Math.random() - 0.5) * 0.2))
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const startOptimization = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      setMetrics(prev => ({ ...prev, optimizationScore: Math.min(96, prev.optimizationScore + 2) }));
    }, 5000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'text-green-400';
      case 'good': return 'text-blue-400';
      case 'needs-improvement': return 'text-yellow-400';
      case 'critical': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'optimal': return 'bg-green-500/20';
      case 'good': return 'bg-blue-500/20';
      case 'needs-improvement': return 'bg-yellow-500/20';
      case 'critical': return 'bg-red-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-x-hidden">
      {/* Animated Gradient Glow Behind Dashboard */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[98vw] max-w-7xl h-[70vh] rounded-3xl blur-3xl opacity-40 animate-luxury-glow bg-gradient-to-br from-orange-400 via-purple-400 to-green-400" />
      </div>
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-orange-400/30 via-purple-400/20 to-green-400/20 rounded-2xl shadow-lg animate-luxury-icon">
              <Zap className="w-10 h-10 text-orange-300" />
            </div>
            <div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight luxury-title">NOVABOOST™ DASHBOARD</h1>
              <p className="text-cyan-100 font-mono text-xl opacity-90">PERFORMANCE OPTIMIZATION</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Badge variant="outline" className="border-orange-400 text-orange-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">OPTIMIZATION: ACTIVE</Badge>
            <Badge variant="outline" className="border-green-400 text-green-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">SCORE: {metrics.optimizationScore.toFixed(1)}%</Badge>
          </div>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-orange-400/20 hover:border-orange-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">PAGE LOAD SPEED</p>
                  <p className="text-4xl font-extrabold text-green-300 drop-shadow-lg">{metrics.pageLoadSpeed.toFixed(1)}s</p>
                </div>
                <Rocket className="w-10 h-10 text-green-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-orange-400/20 hover:border-orange-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">CACHE HIT RATE</p>
                  <p className="text-4xl font-extrabold text-blue-300 drop-shadow-lg">{metrics.cacheHitRate.toFixed(1)}%</p>
                </div>
                <Database className="w-10 h-10 text-blue-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-orange-400/20 hover:border-orange-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">COMPRESSION RATIO</p>
                  <p className="text-4xl font-extrabold text-purple-300 drop-shadow-lg">{metrics.compressionRatio.toFixed(1)}%</p>
                </div>
                <Gauge className="w-10 h-10 text-purple-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-orange-400/20 hover:border-orange-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">CDN PERFORMANCE</p>
                  <p className="text-4xl font-extrabold text-orange-300 drop-shadow-lg">{metrics.cdnPerformance.toFixed(1)}%</p>
                </div>
                <Zap className="w-10 h-10 text-orange-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Optimization Metrics */}
          <div className="lg:col-span-2">
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-orange-400/20 hover:border-orange-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <Gauge className="w-6 h-6 animate-luxury-icon" />
                  PERFORMANCE METRICS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {optimizationMetrics.map((metric) => (
                    <div key={metric.id} className="flex items-center justify-between p-6 bg-slate-700/60 rounded-2xl border-2 border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.15)] transition-all duration-300 luxury-cell">
                      <div className="flex items-center gap-6">
                        <div className={`p-4 rounded-xl ${getStatusBgColor(metric.status)} animate-luxury-icon`}><Gauge className="w-7 h-7" /></div>
                        <div>
                          <p className="text-white font-mono text-lg font-bold">{metric.name}</p>
                          <p className="text-cyan-100 text-base font-mono opacity-90">Target: {metric.target}{metric.unit}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-white font-mono text-lg">{metric.current}{metric.unit}</p>
                          <div className="flex items-center gap-1 mt-2">
                            <span className={`text-lg font-mono ${getStatusColor(metric.status)}`}>{metric.improvement > 0 ? '+' : ''}{metric.improvement}% improvement</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className={`font-mono text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm ${
                              metric.status === 'optimal' ? 'border-green-400 text-green-300' :
                              metric.status === 'good' ? 'border-blue-400 text-blue-300' :
                              metric.status === 'needs-improvement' ? 'border-yellow-400 text-yellow-300' :
                              'border-red-400 text-red-300'
                            }`}
                          >
                            {metric.status.toUpperCase()}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Optimization Controls */}
          <div>
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-orange-400/20 hover:border-orange-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <Settings className="w-6 h-6 animate-luxury-icon" />
                  OPTIMIZATION CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">CACHING</span>
                    <Badge variant="outline" className="border-green-400 text-green-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ENABLED</Badge>
                  </div>
                  <Progress value={100} className="h-3 rounded-full bg-green-400/10" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">COMPRESSION</span>
                    <Badge variant="outline" className="border-blue-400 text-blue-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ACTIVE</Badge>
                  </div>
                  <Progress value={100} className="h-3 rounded-full bg-blue-400/10" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">MONITORING</span>
                    <Badge variant="outline" className="border-purple-400 text-purple-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ON</Badge>
                  </div>
                  <Progress value={100} className="h-3 rounded-full bg-purple-400/10" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Optimize Button */}
        <div className="flex justify-end mt-10">
          <Button
            className="bg-gradient-to-r from-orange-400 via-purple-400 to-green-400 text-white font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
            onClick={startOptimization}
            disabled={isOptimizing}
          >
            {isOptimizing ? 'OPTIMIZING...' : 'RUN OPTIMIZATION'}
          </Button>
        </div>
      </div>
      <Footer />
      {/* Custom Animations & Luxury Styles */}
      <style>{`
        @keyframes luxury-glow {
          0%, 100% { filter: blur(60px) brightness(1.1); opacity: 0.4; }
          50% { filter: blur(80px) brightness(1.3); opacity: 0.7; }
        }
        .animate-luxury-glow {
          animation: luxury-glow 8s ease-in-out infinite;
        }
        .luxury-title {
          font-family: 'Inter', 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
          letter-spacing: 0.01em;
        }
        .luxury-cell {
          box-shadow: 0 2px 24px 0 rgba(34,211,238,0.08), 0 1.5px 8px 0 rgba(59,130,246,0.08);
        }
        .animate-luxury-icon {
          animation: luxury-icon-pulse 2.5s cubic-bezier(0.4,0,0.6,1) infinite;
        }
        @keyframes luxury-icon-pulse {
          0%, 100% { filter: drop-shadow(0 0 0px #0ea5e9); }
          50% { filter: drop-shadow(0 0 12px #0ea5e9cc); }
        }
      `}</style>
    </div>
  );
};

export default NovaBoostDashboard; 