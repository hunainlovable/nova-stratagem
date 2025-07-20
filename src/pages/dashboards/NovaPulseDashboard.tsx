import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Activity, Cpu, HardDrive, Wifi, Zap, TrendingUp, AlertTriangle, CheckCircle, Settings } from 'lucide-react';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-x-hidden">
      {/* Animated Gradient Glow Behind Dashboard */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[98vw] max-w-7xl h-[70vh] rounded-3xl blur-3xl opacity-40 animate-luxury-glow bg-gradient-to-br from-blue-400 via-cyan-400 to-purple-600" />
      </div>
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-blue-400/30 via-cyan-400/20 to-purple-400/20 rounded-2xl shadow-lg animate-luxury-icon">
              <Activity className="w-10 h-10 text-blue-300" />
            </div>
            <div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight luxury-title">NOVAPULSE™ DASHBOARD</h1>
              <p className="text-cyan-100 font-mono text-xl opacity-90">REAL-TIME PERFORMANCE MONITORING</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Badge variant="outline" className="border-blue-400 text-blue-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">MONITORING: ACTIVE</Badge>
            <Badge variant="outline" className="border-green-400 text-green-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">SYSTEM: HEALTHY</Badge>
          </div>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {Object.entries(systemHealth).map(([key, metric]) => (
            <Card key={key} className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-blue-400/20 hover:border-blue-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className={`p-4 rounded-xl ${getStatusBgColor(metric.status)} animate-luxury-icon`}>
                      {key === 'cpu' && <Cpu className="w-7 h-7" />}
                      {key === 'memory' && <HardDrive className="w-7 h-7" />}
                      {key === 'disk' && <HardDrive className="w-7 h-7" />}
                      {key === 'network' && <Wifi className="w-7 h-7" />}
                      {key === 'responseTime' && <Activity className="w-7 h-7" />}
                      {key === 'throughput' && <Zap className="w-7 h-7" />}
                    </div>
                    <div>
                      <p className="text-cyan-100 text-lg font-mono">{metric.name}</p>
                      <p className={`text-3xl font-extrabold ${getStatusColor(metric.status)} drop-shadow-lg`}>{metric.value}{metric.unit}</p>
                    </div>
                  </div>
                  <div className="ml-2">{getTrendIcon(metric.trend)}</div>
                </div>
                <Progress 
                  value={(metric.value / metric.max) * 100} 
                  className="h-3 rounded-full bg-blue-400/10"
                />
                <div className="flex items-center justify-between mt-2">
                  <span className="text-cyan-100 text-xs font-mono">0{metric.unit}</span>
                  <span className="text-cyan-100 text-xs font-mono">{metric.max}{metric.unit}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Real-time Performance Chart */}
          <div className="lg:col-span-2">
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-blue-400/20 hover:border-blue-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <TrendingUp className="w-6 h-6 animate-luxury-icon" />
                  PERFORMANCE ANALYTICS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {/* CPU Performance */}
                  <div className="bg-slate-700/60 rounded-2xl p-6 border-2 border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.15)] transition-all duration-300 luxury-cell">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan-100 text-lg font-mono">CPU PERFORMANCE</span>
                      <Badge 
                        variant="outline" 
                        className={`text-lg font-mono px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm ${
                          systemHealth.cpu.status === 'critical' ? 'border-red-400 text-red-300' :
                          systemHealth.cpu.status === 'warning' ? 'border-yellow-400 text-yellow-300' :
                          'border-green-400 text-green-300'
                        }`}
                      >
                        {systemHealth.cpu.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-mono text-lg">Current Load</span>
                      <span className="text-blue-300 font-mono text-lg">{systemHealth.cpu.value}%</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-cyan-100 text-sm font-mono">Cores Active</span>
                      <span className="text-cyan-100 text-sm font-mono">8/16</span>
                    </div>
                  </div>

                  {/* Memory Performance */}
                  <div className="bg-slate-700/60 rounded-2xl p-6 border-2 border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.15)] transition-all duration-300 luxury-cell">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan-100 text-lg font-mono">MEMORY UTILIZATION</span>
                      <Badge 
                        variant="outline" 
                        className={`text-lg font-mono px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm ${
                          systemHealth.memory.status === 'critical' ? 'border-red-400 text-red-300' :
                          systemHealth.memory.status === 'warning' ? 'border-yellow-400 text-yellow-300' :
                          'border-green-400 text-green-300'
                        }`}
                      >
                        {systemHealth.memory.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-mono text-lg">RAM Usage</span>
                      <span className="text-blue-300 font-mono text-lg">{systemHealth.memory.value}%</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-cyan-100 text-sm font-mono">Available</span>
                      <span className="text-cyan-100 text-sm font-mono">4.2 GB / 16 GB</span>
                    </div>
                  </div>

                  {/* Network Performance */}
                  <div className="bg-slate-700/60 rounded-2xl p-6 border-2 border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.15)] transition-all duration-300 luxury-cell">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-cyan-100 text-lg font-mono">NETWORK PERFORMANCE</span>
                      <Badge 
                        variant="outline" 
                        className={`text-lg font-mono px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm ${
                          systemHealth.network.status === 'critical' ? 'border-red-400 text-red-300' :
                          systemHealth.network.status === 'warning' ? 'border-yellow-400 text-yellow-300' :
                          'border-green-400 text-green-300'
                        }`}
                      >
                        {systemHealth.network.status.toUpperCase()}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-mono text-lg">Current Load</span>
                      <span className="text-blue-300 font-mono text-lg">{systemHealth.network.value}%</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-cyan-100 text-sm font-mono">Bandwidth</span>
                      <span className="text-cyan-100 text-sm font-mono">1.2 Gbps</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Controls */}
          <div>
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-blue-400/20 hover:border-blue-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <Settings className="w-6 h-6 animate-luxury-icon" />
                  SYSTEM CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">OPTIMIZATION</span>
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
                    <span className="text-cyan-100 text-lg font-mono">ALERTING</span>
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
            className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 text-white font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
            onClick={startOptimization}
            disabled={isOptimizing}
          >
            {isOptimizing ? 'OPTIMIZING...' : 'RUN SYSTEM OPTIMIZATION'}
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

export default NovaPulseDashboard; 