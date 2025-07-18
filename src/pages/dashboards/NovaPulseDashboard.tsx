import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Activity, Cpu, HardDrive, Wifi, Zap, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

interface PerformanceMetric {
  name: string;
  value: number;
  max: number;
  unit: string;
  status: 'normal' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
}

interface SystemHealth {
  cpu: PerformanceMetric;
  memory: PerformanceMetric;
  disk: PerformanceMetric;
  network: PerformanceMetric;
  responseTime: PerformanceMetric;
  throughput: PerformanceMetric;
}

const NovaPulseDashboard: React.FC = () => {
  const [systemHealth, setSystemHealth] = useState<SystemHealth>({
    cpu: { name: 'CPU Usage', value: 45, max: 100, unit: '%', status: 'normal', trend: 'stable' },
    memory: { name: 'Memory Usage', value: 78, max: 100, unit: '%', status: 'warning', trend: 'up' },
    disk: { name: 'Disk Usage', value: 62, max: 100, unit: '%', status: 'normal', trend: 'stable' },
    network: { name: 'Network Load', value: 34, max: 100, unit: '%', status: 'normal', trend: 'down' },
    responseTime: { name: 'Response Time', value: 120, max: 500, unit: 'ms', status: 'normal', trend: 'stable' },
    throughput: { name: 'Throughput', value: 850, max: 1000, unit: 'req/s', status: 'normal', trend: 'up' }
  });

  const [isOptimizing, setIsOptimizing] = useState(false);
  const [alerts, setAlerts] = useState<string[]>([]);

  useEffect(() => {
    // Simulate real-time performance updates
    const interval = setInterval(() => {
      setSystemHealth(prev => ({
        cpu: {
          ...prev.cpu,
          value: Math.max(10, Math.min(95, prev.cpu.value + (Math.random() - 0.5) * 10)),
          status: prev.cpu.value > 80 ? 'warning' : prev.cpu.value > 90 ? 'critical' : 'normal'
        },
        memory: {
          ...prev.memory,
          value: Math.max(20, Math.min(95, prev.memory.value + (Math.random() - 0.5) * 5)),
          status: prev.memory.value > 85 ? 'warning' : prev.memory.value > 95 ? 'critical' : 'normal'
        },
        disk: {
          ...prev.disk,
          value: Math.max(30, Math.min(90, prev.disk.value + (Math.random() - 0.5) * 3)),
          status: prev.disk.value > 80 ? 'warning' : prev.disk.value > 90 ? 'critical' : 'normal'
        },
        network: {
          ...prev.network,
          value: Math.max(5, Math.min(80, prev.network.value + (Math.random() - 0.5) * 15)),
          status: prev.network.value > 70 ? 'warning' : prev.network.value > 85 ? 'critical' : 'normal'
        },
        responseTime: {
          ...prev.responseTime,
          value: Math.max(50, Math.min(300, prev.responseTime.value + (Math.random() - 0.5) * 50)),
          status: prev.responseTime.value > 200 ? 'warning' : prev.responseTime.value > 300 ? 'critical' : 'normal'
        },
        throughput: {
          ...prev.throughput,
          value: Math.max(100, Math.min(950, prev.throughput.value + (Math.random() - 0.5) * 100)),
          status: prev.throughput.value < 200 ? 'warning' : prev.throughput.value < 100 ? 'critical' : 'normal'
        }
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const startOptimization = () => {
    setIsOptimizing(true);
    setTimeout(() => {
      setIsOptimizing(false);
      setAlerts(prev => [...prev, 'System optimization completed successfully']);
    }, 5000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'critical': return 'text-red-400';
      case 'warning': return 'text-yellow-400';
      case 'normal': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'critical': return 'bg-red-500/20';
      case 'warning': return 'bg-yellow-500/20';
      case 'normal': return 'bg-green-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up': return <TrendingUp className="w-4 h-4 text-green-400" />;
      case 'down': return <TrendingUp className="w-4 h-4 text-red-400 rotate-180" />;
      case 'stable': return <Activity className="w-4 h-4 text-blue-400" />;
      default: return <Activity className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <Activity className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white font-mono">NOVAPULSE™ DASHBOARD</h1>
              <p className="text-slate-400 font-mono">REAL-TIME PERFORMANCE MONITORING</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-blue-500 text-blue-400 font-mono">
              MONITORING: ACTIVE
            </Badge>
            <Badge variant="outline" className="border-green-500 text-green-400 font-mono">
              SYSTEM: HEALTHY
            </Badge>
          </div>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {Object.entries(systemHealth).map(([key, metric]) => (
            <Card key={key} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${getStatusBgColor(metric.status)}`}>
                      {key === 'cpu' && <Cpu className="w-5 h-5" />}
                      {key === 'memory' && <HardDrive className="w-5 h-5" />}
                      {key === 'disk' && <HardDrive className="w-5 h-5" />}
                      {key === 'network' && <Wifi className="w-5 h-5" />}
                      {key === 'responseTime' && <Activity className="w-5 h-5" />}
                      {key === 'throughput' && <Zap className="w-5 h-5" />}
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm font-mono">{metric.name}</p>
                      <p className={`text-2xl font-bold ${getStatusColor(metric.status)}`}>
                        {metric.value}{metric.unit}
                      </p>
                    </div>
                  </div>
                  {getTrendIcon(metric.trend)}
                </div>
                <Progress 
                  value={(metric.value / metric.max) * 100} 
                  className="h-2"
                />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-slate-400 text-xs font-mono">0{metric.unit}</span>
                  <span className="text-slate-400 text-xs font-mono">{metric.max}{metric.unit}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Real-time Performance Chart */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  PERFORMANCE ANALYTICS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* CPU Performance */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm font-mono">CPU PERFORMANCE</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs font-mono ${
                          systemHealth.cpu.status === 'critical' ? 'border-red-500 text-red-400' :
                          systemHealth.cpu.status === 'warning' ? 'border-yellow-500 text-yellow-400' :
                          'border-green-500 text-green-400'
                        }`}
                      >
                        {systemHealth.cpu.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-mono">Current Load</span>
                        <span className="text-blue-400 font-mono">{systemHealth.cpu.value}%</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-slate-400 text-sm font-mono">Cores Active</span>
                        <span className="text-slate-400 text-sm font-mono">8/16</span>
                      </div>
                    </div>
                  </div>

                  {/* Memory Performance */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm font-mono">MEMORY UTILIZATION</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs font-mono ${
                          systemHealth.memory.status === 'critical' ? 'border-red-500 text-red-400' :
                          systemHealth.memory.status === 'warning' ? 'border-yellow-500 text-yellow-400' :
                          'border-green-500 text-green-400'
                        }`}
                      >
                        {systemHealth.memory.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-mono">RAM Usage</span>
                        <span className="text-blue-400 font-mono">{systemHealth.memory.value}%</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-slate-400 text-sm font-mono">Available</span>
                        <span className="text-slate-400 text-sm font-mono">4.2 GB / 16 GB</span>
                      </div>
                    </div>
                  </div>

                  {/* Network Performance */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-slate-400 text-sm font-mono">NETWORK PERFORMANCE</span>
                      <Badge 
                        variant="outline" 
                        className={`text-xs font-mono ${
                          systemHealth.network.status === 'critical' ? 'border-red-500 text-red-400' :
                          systemHealth.network.status === 'warning' ? 'border-yellow-500 text-yellow-400' :
                          'border-green-500 text-green-400'
                        }`}
                      >
                        {systemHealth.network.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-mono">Bandwidth</span>
                        <span className="text-blue-400 font-mono">{systemHealth.network.value}%</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <span className="text-slate-400 text-sm font-mono">Response Time</span>
                        <span className="text-slate-400 text-sm font-mono">{systemHealth.responseTime.value}ms</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Controls */}
          <div>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  SYSTEM CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">AUTO-OPTIMIZATION</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ENABLED</Badge>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">LOAD BALANCING</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ACTIVE</Badge>
                  </div>
                  <Progress value={90} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">CACHE EFFICIENCY</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">OPTIMAL</Badge>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>

                <Button 
                  onClick={startOptimization}
                  disabled={isOptimizing}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono"
                >
                  {isOptimizing ? 'OPTIMIZING...' : 'RUN OPTIMIZATION'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Alerts */}
        <div className="mt-8">
          <Alert className="bg-slate-800/50 border-slate-700">
            <Activity className="h-4 w-4" />
            <AlertDescription className="text-slate-300 font-mono">
              SYSTEM STATUS: Performance monitoring active. All systems operating within normal parameters.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NovaPulseDashboard; 