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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <Globe className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white font-mono">NOVAGLOBAL™ DASHBOARD</h1>
              <p className="text-slate-400 font-mono">WORLDWIDE SOLUTIONS</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-green-500 text-green-400 font-mono">
              GLOBAL STATUS: OPERATIONAL
            </Badge>
            <Badge variant="outline" className="border-blue-500 text-blue-400 font-mono">
              UPTIME: {metrics.globalUptime.toFixed(2)}%
            </Badge>
          </div>
        </div>

        {/* Global Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">ACTIVE REGIONS</p>
                  <p className="text-3xl font-bold text-green-400">{metrics.activeRegions}</p>
                </div>
                <Globe className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">TOTAL USERS</p>
                  <p className="text-3xl font-bold text-blue-400">{metrics.totalUsers.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">AVG LATENCY</p>
                  <p className="text-3xl font-bold text-purple-400">{metrics.averageLatency}ms</p>
                </div>
                <Activity className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">DATA CENTERS</p>
                  <p className="text-3xl font-bold text-orange-400">{metrics.dataCenters}</p>
                </div>
                <MapPin className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Regional Overview */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  REGIONAL PERFORMANCE
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regionalData.map((region) => (
                    <div key={region.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${getStatusBgColor(region.status)}`}>
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-white font-mono text-sm">{region.region}</p>
                          <p className="text-slate-400 text-xs">{region.country} • {region.servers} servers</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-slate-400 text-xs font-mono">Performance</span>
                            <Progress value={region.performance} className="w-16 h-1" />
                            <span className="text-slate-400 text-xs font-mono">{region.performance}%</span>
                          </div>
                          <p className="text-slate-400 text-xs">{region.users.toLocaleString()} users</p>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className={`font-mono text-xs ${getStatusColor(region.status)} border-current`}
                          >
                            {region.status.toUpperCase()}
                          </Badge>
                          <p className="text-slate-400 text-xs mt-1">
                            {new Date(region.lastUpdate).toLocaleTimeString()}
                          </p>
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
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  GLOBAL CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">GLOBAL LOAD BALANCING</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ACTIVE</Badge>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">CDN NETWORK</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ONLINE</Badge>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">GEO-ROUTING</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ENABLED</Badge>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>

                <Button 
                  onClick={startGlobalDeployment}
                  disabled={isDeploying}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-mono"
                >
                  {isDeploying ? 'DEPLOYING...' : 'GLOBAL DEPLOYMENT'}
                </Button>
              </CardContent>
            </Card>

            {/* Global Insights */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  GLOBAL INSIGHTS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-mono">Global Coverage</span>
                      <span className="text-green-400 font-mono">6 Continents</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-slate-400 text-sm font-mono">Peak Traffic</span>
                      <span className="text-blue-400 text-sm font-mono">2.8M users</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-slate-400 text-sm font-mono">Response Time</span>
                      <span className="text-orange-400 text-sm font-mono">{metrics.averageLatency}ms avg</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-green-400 text-lg font-bold font-mono">24</p>
                      <p className="text-slate-400 text-xs font-mono">REGIONS</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-blue-400 text-lg font-bold font-mono">156</p>
                      <p className="text-slate-400 text-xs font-mono">DATA CENTERS</p>
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
            <Globe className="h-4 w-4" />
            <AlertDescription className="text-slate-300 font-mono">
              GLOBAL STATUS: {metrics.activeRegions} regions operational, {metrics.totalUsers.toLocaleString()} users served worldwide with {metrics.globalUptime.toFixed(2)}% uptime.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NovaGlobalDashboard; 