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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">OPERATIONAL SERVICES</p>
                  <p className="text-3xl font-bold text-green-400">{metrics.operationalServices}/{metrics.totalServices}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
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
                  <p className="text-slate-400 text-sm font-mono">AVG PERFORMANCE</p>
                  <p className="text-3xl font-bold text-purple-400">{metrics.averagePerformance.toFixed(1)}%</p>
                </div>
                <TrendingUp className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">ACTIVE ALERTS</p>
                  <p className="text-3xl font-bold text-orange-400">{metrics.activeAlerts}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className={`classified-card p-6 cursor-pointer transition-all duration-500 group hover:scale-105 futuristic-glow`}
              onMouseEnter={() => setSelectedService(service.id)}
              onMouseLeave={() => setSelectedService(null)}
            >
              {/* Service Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getColorClasses(service.color)} flex items-center justify-center`}>
                  {service.icon}
                </div>
                <Badge 
                  variant="outline" 
                  className={`font-mono text-xs ${getStatusColor(service.status)} border-current`}
                >
                  {service.status.toUpperCase()}
                </Badge>
              </div>

              {/* Service Info */}
              <div className="mb-4">
                <h3 className="classified-text text-lg font-bold mb-2 text-gray-800">
                  {service.name}
                </h3>
                <p className="monospace-text text-sm text-gray-600 mb-3">
                  {service.description}
                </p>
              </div>

              {/* Performance Metrics */}
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-slate-400 text-xs font-mono">Performance</span>
                    <span className="text-white text-xs font-mono">{service.performance.toFixed(1)}%</span>
                  </div>
                  <Progress value={service.performance} className="h-1" />
                </div>

                <div className="grid grid-cols-2 gap-2 text-center">
                  <div className="bg-slate-700/30 rounded p-2">
                    <p className="text-blue-400 text-sm font-bold font-mono">{service.users.toLocaleString()}</p>
                    <p className="text-slate-400 text-xs font-mono">USERS</p>
                  </div>
                  <div className="bg-slate-700/30 rounded p-2">
                    <p className="text-green-400 text-sm font-bold font-mono">{service.uptime.toFixed(2)}%</p>
                    <p className="text-slate-400 text-xs font-mono">UPTIME</p>
                  </div>
                </div>
              </div>

              {/* Last Update */}
              <div className="mt-4 pt-3 border-t border-slate-600">
                <p className="text-slate-400 text-xs font-mono">
                  Last Update: {new Date(service.lastUpdate).toLocaleTimeString()}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white font-mono flex items-center gap-2">
                <Settings className="w-5 h-5" />
                QUICK ACTIONS
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono">
                SYSTEM HEALTH CHECK
              </Button>
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-mono">
                PERFORMANCE OPTIMIZATION
              </Button>
              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-mono">
                SECURITY AUDIT
              </Button>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-mono">
                GENERATE REPORT
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white font-mono flex items-center gap-2">
                <Monitor className="w-5 h-5" />
                SYSTEM MONITORING
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-mono text-sm">Network Load</span>
                  <span className="text-blue-400 font-mono text-sm">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-mono text-sm">Database Performance</span>
                  <span className="text-green-400 font-mono text-sm">94%</span>
                </div>
                <Progress value={94} className="h-2" />
              </div>
              
              <div className="bg-slate-700/50 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-mono text-sm">Storage Usage</span>
                  <span className="text-orange-400 font-mono text-sm">67%</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white font-mono flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                ACTIVE ALERTS
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-3">
                  <p className="text-red-400 font-mono text-sm">NovaMind™ - Model Training Required</p>
                  <p className="text-slate-400 text-xs mt-1">Performance degraded, retraining recommended</p>
                </div>
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-3">
                  <p className="text-yellow-400 font-mono text-sm">NovaSphere™ - High CPU Usage</p>
                  <p className="text-slate-400 text-xs mt-1">Server load above normal threshold</p>
                </div>
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