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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-x-hidden">
      {/* Animated Gradient Glow Behind Dashboard */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[98vw] max-w-7xl h-[70vh] rounded-3xl blur-3xl opacity-40 animate-luxury-glow bg-gradient-to-br from-orange-400 via-blue-400 to-green-400" />
      </div>
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-orange-400/30 via-blue-400/20 to-green-400/20 rounded-2xl shadow-lg animate-luxury-icon">
              <Brain className="w-10 h-10 text-orange-300" />
            </div>
            <div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight luxury-title">NOVAMIND™ DASHBOARD</h1>
              <p className="text-cyan-100 font-mono text-xl opacity-90">AI DECISION ENGINE</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Badge variant="outline" className="border-orange-400 text-orange-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">AI STATUS: OPERATIONAL</Badge>
            <Badge variant="outline" className="border-green-400 text-green-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ACCURACY: {metrics.accuracy.toFixed(1)}%</Badge>
          </div>
        </div>

        {/* AI Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-orange-400/20 hover:border-orange-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">ACTIVE MODELS</p>
                  <p className="text-4xl font-extrabold text-green-300 drop-shadow-lg">{metrics.activeModels}</p>
                </div>
                <Brain className="w-10 h-10 text-green-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-orange-400/20 hover:border-orange-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">TOTAL PREDICTIONS</p>
                  <p className="text-4xl font-extrabold text-blue-300 drop-shadow-lg">{metrics.totalPredictions.toLocaleString()}</p>
                </div>
                <Target className="w-10 h-10 text-blue-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-orange-400/20 hover:border-orange-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">PROCESSING SPEED</p>
                  <p className="text-4xl font-extrabold text-purple-300 drop-shadow-lg">{metrics.processingSpeed} req/s</p>
                </div>
                <Zap className="w-10 h-10 text-purple-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-orange-400/20 hover:border-orange-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">LEARNING RATE</p>
                  <p className="text-4xl font-extrabold text-orange-300 drop-shadow-lg">{metrics.learningRate}</p>
                </div>
                <Cpu className="w-10 h-10 text-orange-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* AI Models */}
          <div className="lg:col-span-2">
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-orange-400/20 hover:border-orange-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <Brain className="w-6 h-6 animate-luxury-icon" />
                  AI MODELS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {aiModels.map((model) => (
                    <div key={model.id} className="flex items-center justify-between p-6 bg-slate-700/60 rounded-2xl border-2 border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.15)] transition-all duration-300 luxury-cell">
                      <div className="flex items-center gap-6">
                        <div className={`p-4 rounded-xl ${getStatusBgColor(model.status)} animate-luxury-icon`}>{getModelIcon(model.type)}</div>
                        <div>
                          <p className="text-white font-mono text-lg font-bold">{model.name}</p>
                          <p className="text-cyan-100 text-base font-mono opacity-90">{model.type.toUpperCase()} • {model.predictions.toLocaleString()} predictions</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-cyan-100 text-xs font-mono">Accuracy</span>
                            <Progress value={model.accuracy} className="w-16 h-2 rounded-full bg-green-400/10" />
                            <span className="text-cyan-100 text-xs font-mono">{model.accuracy}%</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className={`font-mono text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm ${
                              model.status === 'active' ? 'border-green-400 text-green-300' :
                              model.status === 'training' ? 'border-yellow-400 text-yellow-300' :
                              model.status === 'idle' ? 'border-blue-400 text-blue-300' :
                              'border-red-400 text-red-300'
                            }`}
                          >
                            {model.status.toUpperCase()}
                          </Badge>
                          <p className="text-cyan-100 text-xs mt-2 font-mono opacity-80">{new Date(model.lastUpdated).toLocaleTimeString()}</p>
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
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-orange-400/20 hover:border-orange-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <Settings className="w-6 h-6 animate-luxury-icon" />
                  AI CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">TRAINING</span>
                    <Badge variant="outline" className="border-green-400 text-green-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ENABLED</Badge>
                  </div>
                  <Progress value={100} className="h-3 rounded-full bg-green-400/10" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">INFERENCE</span>
                    <Badge variant="outline" className="border-blue-400 text-blue-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ACTIVE</Badge>
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
          </div>
        </div>

        {/* Train Button */}
        <div className="flex justify-end mt-10">
          <Button
            className="bg-gradient-to-r from-orange-400 via-blue-400 to-green-400 text-white font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
            onClick={startTraining}
            disabled={isTraining}
          >
            {isTraining ? 'TRAINING...' : 'RUN MODEL TRAINING'}
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

export default NovaMindDashboard; 