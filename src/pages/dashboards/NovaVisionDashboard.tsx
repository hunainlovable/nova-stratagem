import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { BarChart3, TrendingUp, PieChart, Activity, Eye, Target, Zap, CheckCircle, Users } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

interface AnalyticsData {
  id: string;
  metric: string;
  value: number;
  change: number;
  trend: 'up' | 'down' | 'stable';
  category: 'revenue' | 'users' | 'performance' | 'engagement';
  period: string;
}

interface BusinessMetrics {
  totalRevenue: number;
  activeUsers: number;
  conversionRate: number;
  customerSatisfaction: number;
  marketShare: number;
  growthRate: number;
}

const NovaVisionDashboard: React.FC = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData[]>([]);
  const [metrics, setMetrics] = useState<BusinessMetrics>({
    totalRevenue: 2847000,
    activeUsers: 156000,
    conversionRate: 3.2,
    customerSatisfaction: 94.5,
    marketShare: 12.8,
    growthRate: 18.4
  });
  const [isGeneratingReport, setIsGeneratingReport] = useState(false);

  useEffect(() => {
    // Simulate analytics data
    const mockAnalytics: AnalyticsData[] = [
      {
        id: '1',
        metric: 'Monthly Revenue',
        value: 2847000,
        change: 12.5,
        trend: 'up',
        category: 'revenue',
        period: 'This Month'
      },
      {
        id: '2',
        metric: 'User Growth',
        value: 156000,
        change: 8.3,
        trend: 'up',
        category: 'users',
        period: 'This Month'
      },
      {
        id: '3',
        metric: 'Conversion Rate',
        value: 3.2,
        change: -0.5,
        trend: 'down',
        category: 'performance',
        period: 'This Month'
      },
      {
        id: '4',
        metric: 'Customer Satisfaction',
        value: 94.5,
        change: 2.1,
        trend: 'up',
        category: 'engagement',
        period: 'This Month'
      }
    ];
    setAnalyticsData(mockAnalytics);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        totalRevenue: prev.totalRevenue + Math.floor(Math.random() * 10000),
        activeUsers: prev.activeUsers + Math.floor(Math.random() * 100),
        conversionRate: Math.max(2.5, Math.min(4.0, prev.conversionRate + (Math.random() - 0.5) * 0.1)),
        customerSatisfaction: Math.max(90, Math.min(98, prev.customerSatisfaction + (Math.random() - 0.5) * 0.5))
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const generateReport = () => {
    setIsGeneratingReport(true);
    setTimeout(() => {
      setIsGeneratingReport(false);
    }, 4000);
  };

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up': return 'text-green-400';
      case 'down': return 'text-red-400';
      case 'stable': return 'text-blue-400';
      default: return 'text-gray-400';
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

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-x-hidden">
      {/* Animated Gradient Glow Behind Dashboard */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[98vw] max-w-7xl h-[70vh] rounded-3xl blur-3xl opacity-40 animate-luxury-glow bg-gradient-to-br from-blue-400 via-purple-400 to-green-400" />
      </div>
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-green-400/20 rounded-2xl shadow-lg animate-luxury-icon">
              <BarChart3 className="w-10 h-10 text-blue-300" />
            </div>
            <div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight luxury-title">NOVAVISION™ DASHBOARD</h1>
              <p className="text-cyan-100 font-mono text-xl opacity-90">BUSINESS INTELLIGENCE ANALYTICS</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Badge variant="outline" className="border-blue-400 text-blue-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ANALYTICS: ACTIVE</Badge>
            <Badge variant="outline" className="border-green-400 text-green-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">GROWTH: +{metrics.growthRate}%</Badge>
          </div>
        </div>

        {/* Business Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-blue-400/20 hover:border-blue-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">TOTAL REVENUE</p>
                  <p className="text-4xl font-extrabold text-green-300 drop-shadow-lg">{formatCurrency(metrics.totalRevenue)}</p>
                </div>
                <BarChart3 className="w-10 h-10 text-green-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-blue-400/20 hover:border-blue-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">ACTIVE USERS</p>
                  <p className="text-4xl font-extrabold text-blue-300 drop-shadow-lg">{metrics.activeUsers.toLocaleString()}</p>
                </div>
                <Users className="w-10 h-10 text-blue-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-blue-400/20 hover:border-blue-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">CONVERSION RATE</p>
                  <p className="text-4xl font-extrabold text-purple-300 drop-shadow-lg">{metrics.conversionRate}%</p>
                </div>
                <Target className="w-10 h-10 text-purple-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-blue-400/20 hover:border-blue-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">SATISFACTION</p>
                  <p className="text-4xl font-extrabold text-orange-300 drop-shadow-lg">{metrics.customerSatisfaction}%</p>
                </div>
                <CheckCircle className="w-10 h-10 text-orange-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Analytics Overview */}
          <div className="lg:col-span-2">
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-blue-400/20 hover:border-blue-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <TrendingUp className="w-6 h-6 animate-luxury-icon" />
                  KEY PERFORMANCE INDICATORS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {analyticsData.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-6 bg-slate-700/60 rounded-2xl border-2 border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.15)] transition-all duration-300 luxury-cell">
                      <div className="flex items-center gap-6">
                        <div className="p-4 rounded-xl bg-blue-500/20 animate-luxury-icon">
                          <BarChart3 className="w-7 h-7 text-blue-300" />
                        </div>
                        <div>
                          <p className="text-white font-mono text-lg font-bold">{item.metric}</p>
                          <p className="text-cyan-100 text-base font-mono opacity-90">{item.category.toUpperCase()} • {item.period}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <p className="text-white font-mono text-lg">
                            {item.category === 'revenue' ? formatCurrency(item.value) : 
                             item.category === 'users' ? item.value.toLocaleString() :
                             item.value + (item.category === 'performance' || item.category === 'engagement' ? '%' : '')}
                          </p>
                          <div className="flex items-center gap-1 mt-2">
                            {getTrendIcon(item.trend)}
                            <span className={`text-lg font-mono ${getTrendColor(item.trend)}`}>{item.change > 0 ? '+' : ''}{item.change}%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Analytics Controls */}
          <div>
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-blue-400/20 hover:border-blue-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <PieChart className="w-6 h-6 animate-luxury-icon" />
                  ANALYTICS CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">REPORTING</span>
                    <Badge variant="outline" className="border-green-400 text-green-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ENABLED</Badge>
                  </div>
                  <Progress value={100} className="h-3 rounded-full bg-green-400/10" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">DATA QUALITY</span>
                    <Badge variant="outline" className="border-blue-400 text-blue-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">HIGH</Badge>
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

            {/* Market Insights */}
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-blue-400/20 hover:border-blue-400/60 transition-all duration-500 group luxury-cell mt-6">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <PieChart className="w-6 h-6 animate-luxury-icon" />
                  MARKET INSIGHTS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-mono">Market Share</span>
                      <span className="text-blue-400 font-mono">{metrics.marketShare}%</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-slate-400 text-sm font-mono">Growth Rate</span>
                      <span className="text-green-400 text-sm font-mono">+{metrics.growthRate}%</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-slate-400 text-sm font-mono">Competition</span>
                      <span className="text-orange-400 text-sm font-mono">High</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-green-400 text-lg font-bold font-mono">24/7</p>
                      <p className="text-slate-400 text-xs font-mono">MONITORING</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-blue-400 text-lg font-bold font-mono">99.9%</p>
                      <p className="text-slate-400 text-xs font-mono">ACCURACY</p>
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
            <BarChart3 className="h-4 w-4" />
            <AlertDescription className="text-slate-300 font-mono">
              ANALYTICS STATUS: Real-time data processing active. {analyticsData.length} KPIs being monitored with {metrics.customerSatisfaction}% accuracy.
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

export default NovaVisionDashboard; 