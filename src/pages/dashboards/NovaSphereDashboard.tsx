import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Cloud, Server, Database, Globe, Zap, Settings, Activity, CheckCircle } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

interface ServerInstance {
  id: string;
  name: string;
  region: string;
  status: 'running' | 'stopped' | 'starting' | 'stopping';
  type: string;
  cpu: number;
  memory: number;
  storage: number;
  uptime: string;
}

interface CloudMetrics {
  totalServers: number;
  activeServers: number;
  totalStorage: number;
  usedStorage: number;
  networkTraffic: number;
  deployments: number;
}

const NovaSphereDashboard: React.FC = () => {
  const [servers, setServers] = useState<ServerInstance[]>([]);
  const [metrics, setMetrics] = useState<CloudMetrics>({
    totalServers: 24,
    activeServers: 22,
    totalStorage: 5000,
    usedStorage: 3200,
    networkTraffic: 850,
    deployments: 156
  });
  const [isDeploying, setIsDeploying] = useState(false);

  useEffect(() => {
    // Simulate server instances
    const mockServers: ServerInstance[] = [
      {
        id: '1',
        name: 'web-server-01',
        region: 'us-east-1',
        status: 'running',
        type: 't3.large',
        cpu: 65,
        memory: 78,
        storage: 45,
        uptime: '15d 8h 32m'
      },
      {
        id: '2',
        name: 'db-server-01',
        region: 'us-west-2',
        status: 'running',
        type: 'r5.xlarge',
        cpu: 45,
        memory: 82,
        storage: 78,
        uptime: '23d 12h 15m'
      },
      {
        id: '3',
        name: 'app-server-02',
        region: 'eu-west-1',
        status: 'starting',
        type: 't3.medium',
        cpu: 0,
        memory: 0,
        storage: 12,
        uptime: '0d 0h 5m'
      },
      {
        id: '4',
        name: 'cache-server-01',
        region: 'us-east-1',
        status: 'running',
        type: 't3.small',
        cpu: 25,
        memory: 45,
        storage: 8,
        uptime: '8d 4h 22m'
      }
    ];
    setServers(mockServers);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        networkTraffic: Math.max(100, Math.min(1200, prev.networkTraffic + (Math.random() - 0.5) * 100)),
        usedStorage: Math.max(3000, Math.min(4800, prev.usedStorage + (Math.random() - 0.5) * 50))
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const startDeployment = () => {
    setIsDeploying(true);
    setTimeout(() => {
      setIsDeploying(false);
      setMetrics(prev => ({ ...prev, deployments: prev.deployments + 1 }));
    }, 4000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'running': return 'text-green-400';
      case 'starting': return 'text-yellow-400';
      case 'stopping': return 'text-orange-400';
      case 'stopped': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'running': return 'bg-green-500/20';
      case 'starting': return 'bg-yellow-500/20';
      case 'stopping': return 'bg-orange-500/20';
      case 'stopped': return 'bg-red-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-x-hidden">
      {/* Animated Gradient Glow Behind Dashboard */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[98vw] max-w-7xl h-[70vh] rounded-3xl blur-3xl opacity-40 animate-luxury-glow bg-gradient-to-br from-purple-400 via-blue-400 to-green-400" />
      </div>
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-purple-400/30 via-blue-400/20 to-green-400/20 rounded-2xl shadow-lg animate-luxury-icon">
              <Cloud className="w-10 h-10 text-purple-300" />
            </div>
            <div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight luxury-title">NOVASPHERE™ DASHBOARD</h1>
              <p className="text-cyan-100 font-mono text-xl opacity-90">CLOUD INFRASTRUCTURE MANAGEMENT</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Badge variant="outline" className="border-purple-400 text-purple-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">CLOUD STATUS: OPERATIONAL</Badge>
            <Badge variant="outline" className="border-green-400 text-green-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">SERVERS: {metrics.activeServers}/{metrics.totalServers} ACTIVE</Badge>
          </div>
        </div>

        {/* Cloud Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">ACTIVE SERVERS</p>
                  <p className="text-4xl font-extrabold text-green-300 drop-shadow-lg">{metrics.activeServers}</p>
                </div>
                <Server className="w-10 h-10 text-green-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">STORAGE USED</p>
                  <p className="text-4xl font-extrabold text-blue-300 drop-shadow-lg">{Math.round((metrics.usedStorage / metrics.totalStorage) * 100)}%</p>
                </div>
                <Database className="w-10 h-10 text-blue-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">NETWORK TRAFFIC</p>
                  <p className="text-4xl font-extrabold text-purple-300 drop-shadow-lg">{metrics.networkTraffic} GB/s</p>
                </div>
                <Globe className="w-10 h-10 text-purple-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">DEPLOYMENTS</p>
                  <p className="text-4xl font-extrabold text-orange-300 drop-shadow-lg">{metrics.deployments}</p>
                </div>
                <Zap className="w-10 h-10 text-orange-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Server Instances */}
          <div className="lg:col-span-2">
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <Server className="w-6 h-6 animate-luxury-icon" />
                  SERVER INSTANCES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {servers.map((server) => (
                    <div key={server.id} className="flex items-center justify-between p-6 bg-slate-700/60 rounded-2xl border-2 border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.15)] transition-all duration-300 luxury-cell">
                      <div className="flex items-center gap-6">
                        <div className={`p-4 rounded-xl ${getStatusBgColor(server.status)} animate-luxury-icon`}><Server className="w-7 h-7" /></div>
                        <div>
                          <p className="text-white font-mono text-lg font-bold">{server.name}</p>
                          <p className="text-cyan-100 text-base font-mono opacity-90">{server.region} • {server.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-cyan-100 text-xs font-mono">CPU</span>
                            <Progress value={server.cpu} className="w-16 h-2 rounded-full bg-green-400/10" />
                            <span className="text-cyan-100 text-xs font-mono">{server.cpu}%</span>
                          </div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-cyan-100 text-xs font-mono">RAM</span>
                            <Progress value={server.memory} className="w-16 h-2 rounded-full bg-blue-400/10" />
                            <span className="text-cyan-100 text-xs font-mono">{server.memory}%</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className={`font-mono text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm ${
                              server.status === 'running' ? 'border-green-400 text-green-300' :
                              server.status === 'starting' ? 'border-yellow-400 text-yellow-300' :
                              server.status === 'stopping' ? 'border-orange-400 text-orange-300' :
                              'border-red-400 text-red-300'
                            }`}
                          >
                            {server.status.toUpperCase()}
                          </Badge>
                          <p className="text-cyan-100 text-xs mt-2 font-mono opacity-80">{server.uptime}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Cloud Controls */}
          <div>
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <Settings className="w-6 h-6 animate-luxury-icon" />
                  CLOUD CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">DEPLOYMENT</span>
                    <Badge variant="outline" className="border-green-400 text-green-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ENABLED</Badge>
                  </div>
                  <Progress value={100} className="h-3 rounded-full bg-green-400/10" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">MONITORING</span>
                    <Badge variant="outline" className="border-blue-400 text-blue-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ACTIVE</Badge>
                  </div>
                  <Progress value={100} className="h-3 rounded-full bg-blue-400/10" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">SECURITY</span>
                    <Badge variant="outline" className="border-purple-400 text-purple-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ENABLED</Badge>
                  </div>
                  <Progress value={100} className="h-3 rounded-full bg-purple-400/10" />
                </div>
              </CardContent>
            </Card>

            {/* Storage Overview */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  STORAGE OVERVIEW
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm font-mono">USED STORAGE</span>
                      <span className="text-white text-sm font-mono">{metrics.usedStorage} GB</span>
                    </div>
                    <Progress value={(metrics.usedStorage / metrics.totalStorage) * 100} className="h-2" />
                    <p className="text-slate-400 text-xs mt-1 font-mono">Total: {metrics.totalStorage} GB</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-green-400 text-lg font-bold font-mono">156</p>
                      <p className="text-slate-400 text-xs font-mono">DATABASES</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-blue-400 text-lg font-bold font-mono">2.4TB</p>
                      <p className="text-slate-400 text-xs font-mono">BACKUP SIZE</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Alerts */}
        <div className="mt-8">
          <Alert className="bg-slate-800/50 border-slate-700">
            <Cloud className="h-4 w-4" />
            <AlertDescription className="text-slate-300 font-mono">
              CLOUD STATUS: All regions operational. {metrics.activeServers} servers running, {metrics.totalServers - metrics.activeServers} in maintenance.
            </AlertDescription>
          </Alert>
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

export default NovaSphereDashboard; 