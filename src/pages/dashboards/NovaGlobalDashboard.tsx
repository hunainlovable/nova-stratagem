import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Globe, MapPin, Users, Activity, Settings, CheckCircle, AlertTriangle, Zap } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

interface RegionalData {
  id: string;
  region: string;
  country: string;
  servers: number;
  users: number;
  performance: number;
  status: 'operational' | 'maintenance' | 'degraded' | 'offline';
  lastUpdate: string;
}

interface GlobalMetrics {
  totalRegions: number;
  activeRegions: number;
  totalUsers: number;
  globalUptime: number;
  averageLatency: number;
  dataCenters: number;
}

const NovaGlobalDashboard: React.FC = () => {
  const [regionalData, setRegionalData] = useState<RegionalData[]>([]);
  const [metrics, setMetrics] = useState<GlobalMetrics>({
    totalRegions: 24,
    activeRegions: 23,
    totalUsers: 2847000,
    globalUptime: 99.95,
    averageLatency: 45,
    dataCenters: 156
  });
  const [isDeploying, setIsDeploying] = useState(false);

  useEffect(() => {
    // Simulate regional data
    const mockRegions: RegionalData[] = [
      {
        id: '1',
        region: 'North America',
        country: 'United States',
        servers: 45,
        users: 1250000,
        performance: 98.5,
        status: 'operational',
        lastUpdate: new Date(Date.now() - 300000).toISOString()
      },
      {
        id: '2',
        region: 'Europe',
        country: 'Germany',
        servers: 32,
        users: 850000,
        performance: 97.8,
        status: 'operational',
        lastUpdate: new Date(Date.now() - 600000).toISOString()
      },
      {
        id: '3',
        region: 'Asia Pacific',
        country: 'Singapore',
        servers: 28,
        users: 650000,
        performance: 96.2,
        status: 'maintenance',
        lastUpdate: new Date(Date.now() - 900000).toISOString()
      },
      {
        id: '4',
        region: 'South America',
        country: 'Brazil',
        servers: 18,
        users: 320000,
        performance: 94.8,
        status: 'operational',
        lastUpdate: new Date(Date.now() - 1200000).toISOString()
      }
    ];
    setRegionalData(mockRegions);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 1000),
        globalUptime: Math.max(99.5, Math.min(99.99, prev.globalUptime + (Math.random() - 0.5) * 0.01)),
        averageLatency: Math.max(30, Math.min(60, prev.averageLatency + (Math.random() - 0.5) * 5))
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const startGlobalDeployment = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setMetrics(prev => ({ ...prev, dataCenters: prev.dataCenters + 1 }));
    }, 8000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational': return 'text-green-400';
      case 'maintenance': return 'text-yellow-400';
      case 'degraded': return 'text-orange-400';
      case 'offline': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'operational': return 'bg-green-500/20';
      case 'maintenance': return 'bg-yellow-500/20';
      case 'degraded': return 'bg-orange-500/20';
      case 'offline': return 'bg-red-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-x-hidden">
      {/* Animated Gradient Glow Behind Dashboard */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[98vw] max-w-7xl h-[70vh] rounded-3xl blur-3xl opacity-40 animate-luxury-glow bg-gradient-to-br from-green-400 via-blue-400 to-orange-400" />
      </div>
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-green-400/30 via-blue-400/20 to-orange-400/20 rounded-2xl shadow-lg animate-luxury-icon">
              <Globe className="w-10 h-10 text-green-300" />
            </div>
            <div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight luxury-title">NOVAGLOBAL™ DASHBOARD</h1>
              <p className="text-cyan-100 font-mono text-xl opacity-90">WORLDWIDE SOLUTIONS</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Badge variant="outline" className="border-green-400 text-green-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">GLOBAL STATUS: OPERATIONAL</Badge>
            <Badge variant="outline" className="border-blue-400 text-blue-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">UPTIME: {metrics.globalUptime.toFixed(2)}%</Badge>
          </div>
        </div>

        {/* Global Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-green-400/20 hover:border-green-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">ACTIVE REGIONS</p>
                  <p className="text-4xl font-extrabold text-green-300 drop-shadow-lg">{metrics.activeRegions}</p>
                </div>
                <Globe className="w-10 h-10 text-green-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-green-400/20 hover:border-green-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">TOTAL USERS</p>
                  <p className="text-4xl font-extrabold text-blue-300 drop-shadow-lg">{metrics.totalUsers.toLocaleString()}</p>
                </div>
                <Users className="w-10 h-10 text-blue-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-green-400/20 hover:border-green-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">AVG LATENCY</p>
                  <p className="text-4xl font-extrabold text-purple-300 drop-shadow-lg">{metrics.averageLatency}ms</p>
                </div>
                <Activity className="w-10 h-10 text-purple-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-green-400/20 hover:border-green-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">DATA CENTERS</p>
                  <p className="text-4xl font-extrabold text-orange-300 drop-shadow-lg">{metrics.dataCenters}</p>
                </div>
                <MapPin className="w-10 h-10 text-orange-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Regional Overview */}
          <div className="lg:col-span-2">
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-green-400/20 hover:border-green-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <MapPin className="w-6 h-6 animate-luxury-icon" />
                  REGIONAL PERFORMANCE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {regionalData.map((region) => (
                    <div key={region.id} className="flex items-center justify-between p-6 bg-slate-700/60 rounded-2xl border-2 border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.15)] transition-all duration-300 luxury-cell">
                      <div className="flex items-center gap-6">
                        <div className={`p-4 rounded-xl ${getStatusBgColor(region.status)} animate-luxury-icon`}><MapPin className="w-7 h-7" /></div>
                        <div>
                          <p className="text-white font-mono text-lg font-bold">{region.region}</p>
                          <p className="text-cyan-100 text-base font-mono opacity-90">{region.country} • {region.servers} servers</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-cyan-100 text-base font-mono">Performance</span>
                            <Progress value={region.performance} className="w-16 h-2 rounded-full bg-green-400/10" />
                            <span className="text-cyan-100 text-base font-mono">{region.performance}%</span>
                          </div>
                          <p className="text-cyan-100 text-xs font-mono opacity-80">{region.users.toLocaleString()} users</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className={`font-mono text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm ${
                              region.status === 'operational' ? 'border-green-400 text-green-300' :
                              region.status === 'maintenance' ? 'border-yellow-400 text-yellow-300' :
                              region.status === 'degraded' ? 'border-orange-400 text-orange-300' :
                              'border-red-400 text-red-300'
                            }`}
                          >
                            {region.status.toUpperCase()}
                          </Badge>
                          <p className="text-cyan-100 text-xs mt-2 font-mono opacity-80">{new Date(region.lastUpdate).toLocaleTimeString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Global Controls */}
          <div>
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-green-400/20 hover:border-green-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <Settings className="w-6 h-6 animate-luxury-icon" />
                  GLOBAL CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">UPTIME</span>
                    <Badge variant="outline" className="border-green-400 text-green-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">{metrics.globalUptime.toFixed(2)}%</Badge>
                  </div>
                  <Progress value={metrics.globalUptime} className="h-3 rounded-full bg-green-400/10" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">LATENCY</span>
                    <Badge variant="outline" className="border-blue-400 text-blue-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">{metrics.averageLatency}ms</Badge>
                  </div>
                  <Progress value={100 - metrics.averageLatency / 2} className="h-3 rounded-full bg-blue-400/10" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">DATA CENTERS</span>
                    <Badge variant="outline" className="border-orange-400 text-orange-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">{metrics.dataCenters}</Badge>
                  </div>
                  <Progress value={metrics.dataCenters / 2} className="h-3 rounded-full bg-orange-400/10" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Deploy Button */}
        <div className="flex justify-end mt-10">
          <Button
            className="bg-gradient-to-r from-green-400 via-blue-400 to-orange-400 text-white font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
            onClick={startGlobalDeployment}
            disabled={isDeploying}
          >
            {isDeploying ? 'DEPLOYING...' : 'RUN GLOBAL DEPLOYMENT'}
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

export default NovaGlobalDashboard; 