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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-orange-500/20 rounded-lg">
              <Zap className="w-8 h-8 text-orange-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white font-mono">NOVABOOST™ DASHBOARD</h1>
              <p className="text-slate-400 font-mono">PERFORMANCE OPTIMIZATION</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-orange-500 text-orange-400 font-mono">
              OPTIMIZATION: ACTIVE
            </Badge>
            <Badge variant="outline" className="border-green-500 text-green-400 font-mono">
              SCORE: {metrics.optimizationScore.toFixed(1)}%
            </Badge>
          </div>
        </div>

        {/* Performance Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">PAGE LOAD SPEED</p>
                  <p className="text-3xl font-bold text-green-400">{metrics.pageLoadSpeed.toFixed(1)}s</p>
                </div>
                <Rocket className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">CACHE HIT RATE</p>
                  <p className="text-3xl font-bold text-blue-400">{metrics.cacheHitRate.toFixed(1)}%</p>
                </div>
                <Database className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">COMPRESSION RATIO</p>
                  <p className="text-3xl font-bold text-purple-400">{metrics.compressionRatio.toFixed(1)}%</p>
                </div>
                <Gauge className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">CDN PERFORMANCE</p>
                  <p className="text-3xl font-bold text-orange-400">{metrics.cdnPerformance.toFixed(1)}%</p>
                </div>
                <Zap className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Optimization Metrics */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Gauge className="w-5 h-5" />
                  PERFORMANCE METRICS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {optimizationMetrics.map((metric) => (
                    <div key={metric.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${getStatusBgColor(metric.status)}`}>
                          <Gauge className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-white font-mono text-sm">{metric.name}</p>
                          <p className="text-slate-400 text-xs">Target: {metric.target}{metric.unit}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-white font-mono text-lg">{metric.current}{metric.unit}</p>
                          <div className="flex items-center gap-1 mt-1">
                            <span className={`text-xs font-mono ${getStatusColor(metric.status)}`}>
                              {metric.improvement > 0 ? '+' : ''}{metric.improvement}% improvement
                            </span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className={`font-mono text-xs ${getStatusColor(metric.status)} border-current`}
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
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  OPTIMIZATION CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">AUTO-OPTIMIZATION</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ENABLED</Badge>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">CACHE MANAGEMENT</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ACTIVE</Badge>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">CDN OPTIMIZATION</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ONLINE</Badge>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>

                <Button 
                  onClick={startOptimization}
                  disabled={isOptimizing}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-mono"
                >
                  {isOptimizing ? 'OPTIMIZING...' : 'RUN OPTIMIZATION'}
                </Button>
              </CardContent>
            </Card>

            {/* Performance Insights */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  PERFORMANCE INSIGHTS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-mono">Overall Score</span>
                      <span className="text-green-400 font-mono">{metrics.optimizationScore.toFixed(1)}%</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-slate-400 text-sm font-mono">Database Queries</span>
                      <span className="text-blue-400 text-sm font-mono">{metrics.databaseQueries}/min</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-slate-400 text-sm font-mono">Response Time</span>
                      <span className="text-orange-400 text-sm font-mono">45ms avg</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-green-400 text-lg font-bold font-mono">99.9%</p>
                      <p className="text-slate-400 text-xs font-mono">UPTIME</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-blue-400 text-lg font-bold font-mono">24/7</p>
                      <p className="text-slate-400 text-xs font-mono">MONITORING</p>
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
            <Zap className="h-4 w-4" />
            <AlertDescription className="text-slate-300 font-mono">
              OPTIMIZATION STATUS: Performance optimization active. {optimizationMetrics.length} metrics monitored with {metrics.optimizationScore.toFixed(1)}% overall score.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NovaBoostDashboard; 