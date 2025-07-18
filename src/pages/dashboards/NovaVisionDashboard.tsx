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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-blue-500/20 rounded-lg">
              <BarChart3 className="w-8 h-8 text-blue-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white font-mono">NOVAVISION™ DASHBOARD</h1>
              <p className="text-slate-400 font-mono">BUSINESS INTELLIGENCE ANALYTICS</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-blue-500 text-blue-400 font-mono">
              ANALYTICS: ACTIVE
            </Badge>
            <Badge variant="outline" className="border-green-500 text-green-400 font-mono">
              GROWTH: +{metrics.growthRate}%
            </Badge>
          </div>
        </div>

        {/* Business Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">TOTAL REVENUE</p>
                  <p className="text-3xl font-bold text-green-400">{formatCurrency(metrics.totalRevenue)}</p>
                </div>
                <BarChart3 className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">ACTIVE USERS</p>
                  <p className="text-3xl font-bold text-blue-400">{metrics.activeUsers.toLocaleString()}</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">CONVERSION RATE</p>
                  <p className="text-3xl font-bold text-purple-400">{metrics.conversionRate}%</p>
                </div>
                <Target className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">SATISFACTION</p>
                  <p className="text-3xl font-bold text-orange-400">{metrics.customerSatisfaction}%</p>
                </div>
                <CheckCircle className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Analytics Overview */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  KEY PERFORMANCE INDICATORS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {analyticsData.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                      <div className="flex items-center gap-4">
                        <div className="p-2 rounded-lg bg-blue-500/20">
                          <BarChart3 className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <p className="text-white font-mono text-sm">{item.metric}</p>
                          <p className="text-slate-400 text-xs">{item.category.toUpperCase()} • {item.period}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <p className="text-white font-mono text-lg">
                            {item.category === 'revenue' ? formatCurrency(item.value) : 
                             item.category === 'users' ? item.value.toLocaleString() :
                             item.value + (item.category === 'performance' || item.category === 'engagement' ? '%' : '')}
                          </p>
                          <div className="flex items-center gap-1 mt-1">
                            {getTrendIcon(item.trend)}
                            <span className={`text-xs font-mono ${getTrendColor(item.trend)}`}>
                              {item.change > 0 ? '+' : ''}{item.change}%
                            </span>
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
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  ANALYTICS CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">DATA PROCESSING</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ACTIVE</Badge>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">REAL-TIME UPDATES</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ENABLED</Badge>
                  </div>
                  <Progress value={88} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">PREDICTIVE MODELS</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ONLINE</Badge>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>

                <Button 
                  onClick={generateReport}
                  disabled={isGeneratingReport}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-mono"
                >
                  {isGeneratingReport ? 'GENERATING...' : 'GENERATE REPORT'}
                </Button>
              </CardContent>
            </Card>

            {/* Market Insights */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <PieChart className="w-5 h-5" />
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
    </div>
  );
};

export default NovaVisionDashboard; 