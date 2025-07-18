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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-500/20 rounded-lg">
              <Cloud className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white font-mono">NOVASPHERE™ DASHBOARD</h1>
              <p className="text-slate-400 font-mono">CLOUD INFRASTRUCTURE MANAGEMENT</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-purple-500 text-purple-400 font-mono">
              CLOUD STATUS: OPERATIONAL
            </Badge>
            <Badge variant="outline" className="border-green-500 text-green-400 font-mono">
              SERVERS: {metrics.activeServers}/{metrics.totalServers} ACTIVE
            </Badge>
          </div>
        </div>

        {/* Cloud Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">ACTIVE SERVERS</p>
                  <p className="text-3xl font-bold text-green-400">{metrics.activeServers}</p>
                </div>
                <Server className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">STORAGE USED</p>
                  <p className="text-3xl font-bold text-blue-400">{Math.round((metrics.usedStorage / metrics.totalStorage) * 100)}%</p>
                </div>
                <Database className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">NETWORK TRAFFIC</p>
                  <p className="text-3xl font-bold text-purple-400">{metrics.networkTraffic} GB/s</p>
                </div>
                <Globe className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">DEPLOYMENTS</p>
                  <p className="text-3xl font-bold text-orange-400">{metrics.deployments}</p>
                </div>
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Server Instances */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  SERVER INSTANCES
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {servers.map((server) => (
                    <div key={server.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${getStatusBgColor(server.status)}`}>
                          <Server className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-white font-mono text-sm">{server.name}</p>
                          <p className="text-slate-400 text-xs">{server.region} • {server.type}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-slate-400 text-xs font-mono">CPU</span>
                            <Progress value={server.cpu} className="w-16 h-1" />
                            <span className="text-slate-400 text-xs font-mono">{server.cpu}%</span>
                          </div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-slate-400 text-xs font-mono">RAM</span>
                            <Progress value={server.memory} className="w-16 h-1" />
                            <span className="text-slate-400 text-xs font-mono">{server.memory}%</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className={`font-mono text-xs ${getStatusColor(server.status)} border-current`}
                          >
                            {server.status.toUpperCase()}
                          </Badge>
                          <p className="text-slate-400 text-xs mt-1">{server.uptime}</p>
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
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  CLOUD CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">AUTO-SCALING</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ENABLED</Badge>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">LOAD BALANCER</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ACTIVE</Badge>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">BACKUP SYSTEM</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ONLINE</Badge>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>

                <Button 
                  onClick={startDeployment}
                  disabled={isDeploying}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-mono"
                >
                  {isDeploying ? 'DEPLOYING...' : 'NEW DEPLOYMENT'}
                </Button>
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
    </div>
  );
};

export default NovaSphereDashboard; 