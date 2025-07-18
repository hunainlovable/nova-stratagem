import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Brain, Zap, Target, Activity, Cpu, CheckCircle, AlertTriangle, Settings, TrendingUp, PieChart, MessageSquare } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

interface AIModel {
  id: string;
  name: string;
  type: 'classification' | 'regression' | 'clustering' | 'nlp';
  accuracy: number;
  status: 'training' | 'active' | 'idle' | 'error';
  lastUpdated: string;
  predictions: number;
}

interface AIMetrics {
  totalModels: number;
  activeModels: number;
  totalPredictions: number;
  accuracy: number;
  processingSpeed: number;
  learningRate: number;
}

const NovaMindDashboard: React.FC = () => {
  const [aiModels, setAiModels] = useState<AIModel[]>([]);
  const [metrics, setMetrics] = useState<AIMetrics>({
    totalModels: 12,
    activeModels: 10,
    totalPredictions: 284700,
    accuracy: 94.8,
    processingSpeed: 1250,
    learningRate: 0.001
  });
  const [isTraining, setIsTraining] = useState(false);

  useEffect(() => {
    // Simulate AI models
    const mockModels: AIModel[] = [
      {
        id: '1',
        name: 'Customer Churn Predictor',
        type: 'classification',
        accuracy: 96.2,
        status: 'active',
        lastUpdated: new Date(Date.now() - 3600000).toISOString(),
        predictions: 45230
      },
      {
        id: '2',
        name: 'Sales Forecasting Model',
        type: 'regression',
        accuracy: 92.8,
        status: 'active',
        lastUpdated: new Date(Date.now() - 7200000).toISOString(),
        predictions: 38450
      },
      {
        id: '3',
        name: 'Customer Segmentation',
        type: 'clustering',
        accuracy: 89.5,
        status: 'training',
        lastUpdated: new Date(Date.now() - 1800000).toISOString(),
        predictions: 15670
      },
      {
        id: '4',
        name: 'Sentiment Analyzer',
        type: 'nlp',
        accuracy: 94.1,
        status: 'active',
        lastUpdated: new Date(Date.now() - 5400000).toISOString(),
        predictions: 67890
      }
    ];
    setAiModels(mockModels);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        totalPredictions: prev.totalPredictions + Math.floor(Math.random() * 100),
        accuracy: Math.max(90, Math.min(98, prev.accuracy + (Math.random() - 0.5) * 0.2)),
        processingSpeed: Math.max(1000, Math.min(1500, prev.processingSpeed + (Math.random() - 0.5) * 50))
      }));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const startTraining = () => {
    setIsTraining(true);
    setTimeout(() => {
      setIsTraining(false);
      setMetrics(prev => ({ ...prev, totalModels: prev.totalModels + 1 }));
    }, 6000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-400';
      case 'training': return 'text-yellow-400';
      case 'idle': return 'text-blue-400';
      case 'error': return 'text-red-400';
      default: return 'text-gray-400';
    }
  };

  const getStatusBgColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500/20';
      case 'training': return 'bg-yellow-500/20';
      case 'idle': return 'bg-blue-500/20';
      case 'error': return 'bg-red-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  const getModelIcon = (type: string) => {
    switch (type) {
      case 'classification': return <Target className="w-4 h-4" />;
      case 'regression': return <TrendingUp className="w-4 h-4" />;
      case 'clustering': return <PieChart className="w-4 h-4" />;
      case 'nlp': return <MessageSquare className="w-4 h-4" />;
      default: return <Brain className="w-4 h-4" />;
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
              <Brain className="w-8 h-8 text-orange-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white font-mono">NOVAMIND™ DASHBOARD</h1>
              <p className="text-slate-400 font-mono">AI DECISION ENGINE</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-orange-500 text-orange-400 font-mono">
              AI STATUS: OPERATIONAL
            </Badge>
            <Badge variant="outline" className="border-green-500 text-green-400 font-mono">
              ACCURACY: {metrics.accuracy.toFixed(1)}%
            </Badge>
          </div>
        </div>

        {/* AI Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">ACTIVE MODELS</p>
                  <p className="text-3xl font-bold text-green-400">{metrics.activeModels}</p>
                </div>
                <Brain className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">TOTAL PREDICTIONS</p>
                  <p className="text-3xl font-bold text-blue-400">{metrics.totalPredictions.toLocaleString()}</p>
                </div>
                <Target className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">PROCESSING SPEED</p>
                  <p className="text-3xl font-bold text-purple-400">{metrics.processingSpeed} req/s</p>
                </div>
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">LEARNING RATE</p>
                  <p className="text-3xl font-bold text-orange-400">{metrics.learningRate}</p>
                </div>
                <Cpu className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* AI Models */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  AI MODELS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {aiModels.map((model) => (
                    <div key={model.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${getStatusBgColor(model.status)}`}>
                          {getModelIcon(model.type)}
                        </div>
                        <div>
                          <p className="text-white font-mono text-sm">{model.name}</p>
                          <p className="text-slate-400 text-xs">{model.type.toUpperCase()} • {model.predictions.toLocaleString()} predictions</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-slate-400 text-xs font-mono">Accuracy</span>
                            <Progress value={model.accuracy} className="w-16 h-1" />
                            <span className="text-slate-400 text-xs font-mono">{model.accuracy}%</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className={`font-mono text-xs ${getStatusColor(model.status)} border-current`}
                          >
                            {model.status.toUpperCase()}
                          </Badge>
                          <p className="text-slate-400 text-xs mt-1">
                            {new Date(model.lastUpdated).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Controls */}
          <div>
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Settings className="w-5 h-5" />
                  AI CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">MODEL TRAINING</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ACTIVE</Badge>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">PREDICTION ENGINE</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ONLINE</Badge>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">AUTO-LEARNING</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ENABLED</Badge>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>

                <Button 
                  onClick={startTraining}
                  disabled={isTraining}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-mono"
                >
                  {isTraining ? 'TRAINING...' : 'TRAIN NEW MODEL'}
                </Button>
              </CardContent>
            </Card>

            {/* AI Insights */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  AI INSIGHTS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-mono">Model Performance</span>
                      <span className="text-green-400 font-mono">Excellent</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-slate-400 text-sm font-mono">Training Time</span>
                      <span className="text-blue-400 text-sm font-mono">2.4 hours</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-slate-400 text-sm font-mono">Data Quality</span>
                      <span className="text-orange-400 text-sm font-mono">High</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-green-400 text-lg font-bold font-mono">12</p>
                      <p className="text-slate-400 text-xs font-mono">MODELS</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-blue-400 text-lg font-bold font-mono">4</p>
                      <p className="text-slate-400 text-xs font-mono">TYPES</p>
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
            <Brain className="h-4 w-4" />
            <AlertDescription className="text-slate-300 font-mono">
              AI STATUS: {metrics.activeModels} models active, {metrics.totalPredictions.toLocaleString()} predictions processed with {metrics.accuracy.toFixed(1)}% accuracy.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NovaMindDashboard; 