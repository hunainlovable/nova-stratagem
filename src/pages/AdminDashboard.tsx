import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Progress } from '../components/ui/progress';
import { Alert, AlertDescription } from '../components/ui/alert';
import { 
  Shield, Activity, Cloud, Lock, BarChart3, Brain, Zap, Globe, 
  Settings, Users, Database, Cpu, TrendingUp, CheckCircle, AlertTriangle,
  Command, Monitor, Server, Key, Target, Rocket, Network
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

interface ServiceStatus {
  id: string;
  name: string;
  status: 'operational' | 'maintenance' | 'degraded' | 'offline';
  performance: number;
  users: number;
  uptime: number;
  lastUpdate: string;
  color: string;
  icon: React.ReactNode;
  description: string;
  path: string;
}

interface SystemMetrics {
  totalServices: number;
  operationalServices: number;
  totalUsers: number;
  systemUptime: number;
  averagePerformance: number;
  activeAlerts: number;
}

const AdminDashboard: React.FC = () => {
  const [services, setServices] = useState<ServiceStatus[]>([]);
  const [metrics, setMetrics] = useState<SystemMetrics>({
    totalServices: 8,
    operationalServices: 7,
    totalUsers: 2847000,
    systemUptime: 99.95,
    averagePerformance: 96.8,
    activeAlerts: 2
  });
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    // Initialize services with mock data
    const mockServices: ServiceStatus[] = [
      {
        id: 'novashield',
        name: 'NovaShield™',
        status: 'operational',
        performance: 98.5,
        users: 1250000,
        uptime: 99.99,
        lastUpdate: new Date(Date.now() - 300000).toISOString(),
        color: 'green',
        icon: <Shield className="w-6 h-6" />,
        description: 'Advanced Cybersecurity Platform',
        path: '/dashboard/novashield'
      },
      {
        id: 'novapulse',
        name: 'NovaPulse™',
        status: 'operational',
        performance: 97.2,
        users: 850000,
        uptime: 99.95,
        lastUpdate: new Date(Date.now() - 600000).toISOString(),
        color: 'blue',
        icon: <Activity className="w-6 h-6" />,
        description: 'Real-Time Performance Monitoring',
        path: '/dashboard/novapulse'
      },
      {
        id: 'novasphere',
        name: 'NovaSphere™',
        status: 'operational',
        performance: 96.8,
        users: 650000,
        uptime: 99.92,
        lastUpdate: new Date(Date.now() - 900000).toISOString(),
        color: 'purple',
        icon: <Cloud className="w-6 h-6" />,
        description: 'Cloud Infrastructure Platform',
        path: '/dashboard/novasphere'
      },
      {
        id: 'novavault',
        name: 'NovaVault™',
        status: 'operational',
        performance: 99.1,
        users: 320000,
        uptime: 99.98,
        lastUpdate: new Date(Date.now() - 1200000).toISOString(),
        color: 'violet',
        icon: <Lock className="w-6 h-6" />,
        description: 'Secure Data Management',
        path: '/dashboard/novavault'
      },
      {
        id: 'novavision',
        name: 'NovaVision™',
        status: 'operational',
        performance: 95.4,
        users: 450000,
        uptime: 99.89,
        lastUpdate: new Date(Date.now() - 1500000).toISOString(),
        color: 'cyan',
        icon: <BarChart3 className="w-6 h-6" />,
        description: 'Business Intelligence Platform',
        path: '/dashboard/novavision'
      },
      {
        id: 'novamind',
        name: 'NovaMind™',
        status: 'maintenance',
        performance: 92.1,
        users: 280000,
        uptime: 99.75,
        lastUpdate: new Date(Date.now() - 1800000).toISOString(),
        color: 'amber',
        icon: <Brain className="w-6 h-6" />,
        description: 'AI-Powered Decision Engine',
        path: '/dashboard/novamind'
      },
      {
        id: 'novaboost',
        name: 'NovaBoost™',
        status: 'operational',
        performance: 94.7,
        users: 380000,
        uptime: 99.91,
        lastUpdate: new Date(Date.now() - 2100000).toISOString(),
        color: 'orange',
        icon: <Zap className="w-6 h-6" />,
        description: 'Performance Optimization Suite',
        path: '/dashboard/novaboost'
      },
      {
        id: 'novaglobal',
        name: 'NovaGlobal™',
        status: 'operational',
        performance: 97.8,
        users: 2847000,
        uptime: 99.95,
        lastUpdate: new Date(Date.now() - 2400000).toISOString(),
        color: 'emerald',
        icon: <Globe className="w-6 h-6" />,
        description: 'Worldwide Solutions Platform',
        path: '/dashboard/novaglobal'
      }
    ];
    setServices(mockServices);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setServices(prev => prev.map(service => ({
        ...service,
        performance: Math.max(90, Math.min(100, service.performance + (Math.random() - 0.5) * 2)),
        users: service.users + Math.floor(Math.random() * 100),
        uptime: Math.max(99.5, Math.min(99.99, service.uptime + (Math.random() - 0.5) * 0.01))
      })));

      setMetrics(prev => ({
        ...prev,
        totalUsers: prev.totalUsers + Math.floor(Math.random() * 1000),
        averagePerformance: Math.max(94, Math.min(98, prev.averagePerformance + (Math.random() - 0.5) * 0.5))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue': return 'from-blue-600 to-cyan-600 border-blue-600/20 text-blue-600';
      case 'green': return 'from-green-600 to-emerald-600 border-green-600/20 text-green-600';
      case 'purple': return 'from-purple-600 to-violet-600 border-purple-600/20 text-purple-600';
      case 'amber': return 'from-amber-500 to-orange-500 border-amber-500/20 text-amber-500';
      case 'cyan': return 'from-cyan-600 to-blue-600 border-cyan-600/20 text-cyan-600';
      case 'emerald': return 'from-emerald-600 to-green-600 border-emerald-600/20 text-emerald-600';
      case 'violet': return 'from-violet-600 to-purple-600 border-violet-600/20 text-violet-600';
      case 'orange': return 'from-orange-500 to-amber-500 border-orange-500/20 text-orange-500';
      default: return 'from-gray-600 to-gray-700 border-gray-600/20 text-gray-600';
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
              <Command className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white font-mono">NOVA COMMAND CENTER</h1>
              <p className="text-slate-400 font-mono">ADMINISTRATIVE DASHBOARD</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-blue-500 text-blue-400 font-mono">
              SYSTEM STATUS: OPERATIONAL
            </Badge>
            <Badge variant="outline" className="border-green-500 text-green-400 font-mono">
              UPTIME: {metrics.systemUptime.toFixed(2)}%
            </Badge>
            <Badge variant="outline" className="border-orange-500 text-orange-400 font-mono">
              ALERTS: {metrics.activeAlerts}
            </Badge>
          </div>
        </div>

        {/* System Overview Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/90 border-2 border-slate-700/60 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(14,165,233,0.25)] group">
            {/* Luxury Accent Bar */}
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-all duration-300" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm font-mono" title="Number of services currently operational">OPERATIONAL SERVICES</p>
                  <p className="text-3xl font-extrabold text-green-300 drop-shadow-lg">{metrics.operationalServices}/{metrics.totalServices}</p>
                </div>
                <CheckCircle className="w-10 h-10 text-green-300 animate-pulse group-hover:scale-110 transition-transform duration-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/90 border-2 border-slate-700/60 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(14,165,233,0.25)] group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-all duration-300" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm font-mono" title="Total number of users across all services">TOTAL USERS</p>
                  <p className="text-3xl font-extrabold text-blue-300 drop-shadow-lg">{metrics.totalUsers.toLocaleString()}</p>
                </div>
                <Users className="w-10 h-10 text-blue-300 animate-pulse group-hover:scale-110 transition-transform duration-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/90 border-2 border-slate-700/60 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(14,165,233,0.25)] group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-all duration-300" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm font-mono" title="Average performance across all services">AVG PERFORMANCE</p>
                  <p className="text-3xl font-extrabold text-purple-300 drop-shadow-lg">{metrics.averagePerformance.toFixed(1)}%</p>
                </div>
                <TrendingUp className="w-10 h-10 text-purple-300 animate-pulse group-hover:scale-110 transition-transform duration-300" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/90 border-2 border-slate-700/60 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(14,165,233,0.25)] group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-all duration-300" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-300 text-sm font-mono" title="Number of active system alerts">ACTIVE ALERTS</p>
                  <p className="text-3xl font-extrabold text-orange-300 drop-shadow-lg">{metrics.activeAlerts}</p>
                </div>
                <AlertTriangle className="w-10 h-10 text-orange-300 animate-pulse group-hover:scale-110 transition-transform duration-300" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className={`group relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/90 border-2 border-slate-700/60 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(14,165,233,0.25)]`}
              style={{backdropFilter: 'blur(18px)'}}
              onMouseEnter={() => setSelectedService(service.id)}
              onMouseLeave={() => setSelectedService(null)}
            >
              {/* Luxury Accent Bar */}
              <div className={`absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-all duration-300`} />

              {/* Service Header */}
              <div className="flex items-center justify-between mb-6 mt-6 px-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${getColorClasses(service.color)} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <Badge 
                  variant="outline" 
                  className={`font-mono text-xs ${getStatusColor(service.status)} border-current bg-white/10 backdrop-blur-sm px-4 py-1 rounded-full shadow-md`}
                >
                  {service.status.toUpperCase()}
                </Badge>
              </div>

              {/* Service Info */}
              <div className="mb-6 px-6">
                <h3 className="text-2xl font-extrabold text-white mb-1 tracking-tight drop-shadow-lg">
                  {service.name}
                </h3>
                <p className="text-cyan-200 text-base font-mono mb-2 opacity-90">
                  {service.description}
                </p>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-4 px-6">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-300 text-xs font-mono">Performance</span>
                    <span className="text-cyan-300 text-xs font-mono font-bold">{service.performance.toFixed(1)}%</span>
                  </div>
                  <Progress value={service.performance} className="h-2 bg-slate-700/60 rounded-full" />
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-gradient-to-br from-blue-700/40 to-cyan-700/30 rounded-xl p-3 shadow-inner">
                    <p className="text-blue-200 text-lg font-extrabold font-mono tracking-wide">{service.users.toLocaleString()}</p>
                    <p className="text-slate-300 text-xs font-mono">USERS</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-700/40 to-emerald-700/30 rounded-xl p-3 shadow-inner">
                    <p className="text-green-200 text-lg font-extrabold font-mono tracking-wide">{service.uptime.toFixed(2)}%</p>
                    <p className="text-slate-300 text-xs font-mono">UPTIME</p>
                  </div>
                </div>
              </div>

              {/* Last Update */}
              <div className="mt-6 pt-4 border-t border-slate-700/60 px-6 pb-6">
                <p className="text-slate-400 text-xs font-mono">
                  Last Update: {new Date(service.lastUpdate).toLocaleTimeString()}
                </p>
              </div>

              {/* Luxury Glow Effect */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-cyan-400/10 group-hover:ring-4 group-hover:ring-cyan-400/30 transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/90 border-2 border-slate-700/60 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(14,165,233,0.25)] group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-all duration-300" />
            <CardHeader>
              <CardTitle className="text-white font-mono flex items-center gap-2">
                <Settings className="w-6 h-6 animate-pulse group-hover:scale-110 transition-transform duration-300" />
                QUICK ACTIONS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono rounded-xl py-4 text-lg shadow-lg transition-all duration-300">
                SYSTEM HEALTH CHECK
              </Button>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-mono rounded-xl py-4 text-lg shadow-lg transition-all duration-300">
                PERFORMANCE OPTIMIZATION
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-mono rounded-xl py-4 text-lg shadow-lg transition-all duration-300">
                SECURITY AUDIT
              </Button>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-mono rounded-xl py-4 text-lg shadow-lg transition-all duration-300">
                GENERATE REPORT
              </Button>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/90 border-2 border-slate-700/60 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(14,165,233,0.25)] group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-all duration-300" />
            <CardHeader>
              <CardTitle className="text-white font-mono flex items-center gap-2">
                <Monitor className="w-6 h-6 animate-pulse group-hover:scale-110 transition-transform duration-300" />
                SYSTEM MONITORING
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-700/50 rounded-xl p-6 shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-mono text-sm">Network Load</span>
                  <span className="text-blue-300 font-mono text-sm">78%</span>
                </div>
                <Progress value={78} className="h-2 bg-blue-600/30 rounded-full animate-pulse" />
              </div>
              <div className="bg-slate-700/50 rounded-xl p-6 shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-mono text-sm">CPU Usage</span>
                  <span className="text-purple-300 font-mono text-sm">62%</span>
                </div>
                <Progress value={62} className="h-2 bg-purple-600/30 rounded-full animate-pulse" />
              </div>
              <div className="bg-slate-700/50 rounded-xl p-6 shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-mono text-sm">Memory Usage</span>
                  <span className="text-green-300 font-mono text-sm">54%</span>
                </div>
                <Progress value={54} className="h-2 bg-green-600/30 rounded-full animate-pulse" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/80 via-slate-900/80 to-slate-800/90 border-2 border-slate-700/60 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-[0_8px_40px_0_rgba(14,165,233,0.25)] group">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 opacity-80 group-hover:opacity-100 transition-all duration-300" />
            <CardHeader>
              <CardTitle className="text-white font-mono flex items-center gap-2">
                <Server className="w-6 h-6 animate-pulse group-hover:scale-110 transition-transform duration-300" />
                INFRASTRUCTURE
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-700/50 rounded-xl p-6 shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-mono text-sm">Server Health</span>
                  <span className="text-cyan-300 font-mono text-sm">99.9%</span>
                </div>
                <Progress value={99.9} className="h-2 bg-cyan-600/30 rounded-full animate-pulse" />
              </div>
              <div className="bg-slate-700/50 rounded-xl p-6 shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-mono text-sm">Disk Usage</span>
                  <span className="text-orange-300 font-mono text-sm">41%</span>
                </div>
                <Progress value={41} className="h-2 bg-orange-600/30 rounded-full animate-pulse" />
              </div>
              <div className="bg-slate-700/50 rounded-xl p-6 shadow-inner">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-mono text-sm">Backup Status</span>
                  <span className="text-green-300 font-mono text-sm">OK</span>
                </div>
                <Progress value={100} className="h-2 bg-green-600/30 rounded-full animate-pulse" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* System Status */}
        <div className="mt-8">
          <Alert className="bg-slate-800/50 border-slate-700">
            <Command className="h-4 w-4" />
            <AlertDescription className="text-slate-300 font-mono">
              COMMAND CENTER STATUS: All systems operational. {metrics.operationalServices} of {metrics.totalServices} services running at {metrics.averagePerformance.toFixed(1)}% average performance.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AdminDashboard; 