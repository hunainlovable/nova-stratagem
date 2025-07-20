import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Shield, AlertTriangle, CheckCircle, Eye, Lock, Activity, Zap, Users } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

interface ThreatData {
  id: string;
  type: 'malware' | 'ddos' | 'phishing' | 'intrusion';
  severity: 'low' | 'medium' | 'high' | 'critical';
  source: string;
  timestamp: string;
  status: 'active' | 'blocked' | 'investigating';
}

interface SecurityMetrics {
  totalThreats: number;
  blockedThreats: number;
  activeThreats: number;
  securityScore: number;
  uptime: number;
  lastScan: string;
}

const NovaShieldDashboard: React.FC = () => {
  const [threats, setThreats] = useState<ThreatData[]>([]);
  const [metrics, setMetrics] = useState<SecurityMetrics>({
    totalThreats: 1247,
    blockedThreats: 1240,
    activeThreats: 7,
    securityScore: 98.5,
    uptime: 99.99,
    lastScan: new Date().toISOString()
  });
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    // Simulate real-time threat data
    const mockThreats: ThreatData[] = [
      {
        id: '1',
        type: 'malware',
        severity: 'high',
        source: '192.168.1.100',
        timestamp: new Date(Date.now() - 300000).toISOString(),
        status: 'blocked'
      },
      {
        id: '2',
        type: 'ddos',
        severity: 'medium',
        source: '203.0.113.45',
        timestamp: new Date(Date.now() - 600000).toISOString(),
        status: 'active'
      },
      {
        id: '3',
        type: 'phishing',
        severity: 'low',
        source: 'phishing@malicious.com',
        timestamp: new Date(Date.now() - 900000).toISOString(),
        status: 'blocked'
      }
    ];
    setThreats(mockThreats);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        securityScore: Math.max(95, prev.securityScore + (Math.random() - 0.5) * 2)
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const startScan = () => {
    setIsScanning(true);
    setTimeout(() => setIsScanning(false), 3000);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'bg-red-500';
      case 'high': return 'bg-orange-500';
      case 'medium': return 'bg-yellow-500';
      case 'low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  const getThreatIcon = (type: string) => {
    switch (type) {
      case 'malware': return <Zap className="w-4 h-4" />;
      case 'ddos': return <Activity className="w-4 h-4" />;
      case 'phishing': return <Users className="w-4 h-4" />;
      case 'intrusion': return <Eye className="w-4 h-4" />;
      default: return <AlertTriangle className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-x-hidden">
      {/* Animated Gradient Glow Behind Dashboard */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[98vw] max-w-7xl h-[70vh] rounded-3xl blur-3xl opacity-40 animate-luxury-glow bg-gradient-to-br from-green-400 via-blue-600 to-purple-600" />
      </div>
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-green-400/30 via-blue-400/20 to-purple-400/20 rounded-2xl shadow-lg animate-luxury-icon">
              <Shield className="w-10 h-10 text-green-300" />
            </div>
            <div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight luxury-title">NOVASHIELD™ DASHBOARD</h1>
              <p className="text-cyan-100 font-mono text-xl opacity-90">ADVANCED CYBERSECURITY MONITORING</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Badge variant="outline" className="border-green-400 text-green-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">SECURITY STATUS: ACTIVE</Badge>
            <Badge variant="outline" className="border-blue-400 text-blue-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">UPTIME: {metrics.uptime}%</Badge>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-green-400/20 hover:border-green-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">TOTAL THREATS</p>
                  <p className="text-4xl font-extrabold text-white drop-shadow-lg">{metrics.totalThreats}</p>
                </div>
                <AlertTriangle className="w-10 h-10 text-orange-400 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-green-400/20 hover:border-green-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">BLOCKED</p>
                  <p className="text-4xl font-extrabold text-green-300 drop-shadow-lg">{metrics.blockedThreats}</p>
                </div>
                <CheckCircle className="w-10 h-10 text-green-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-green-400/20 hover:border-green-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">ACTIVE THREATS</p>
                  <p className="text-4xl font-extrabold text-red-400 drop-shadow-lg">{metrics.activeThreats}</p>
                </div>
                <AlertTriangle className="w-10 h-10 text-red-400 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-green-400/20 hover:border-green-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">SECURITY SCORE</p>
                  <p className="text-4xl font-extrabold text-blue-300 drop-shadow-lg">{metrics.securityScore.toFixed(1)}%</p>
                </div>
                <Shield className="w-10 h-10 text-blue-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Threat Monitor */}
          <div className="lg:col-span-2">
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-green-400/20 hover:border-green-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <Activity className="w-6 h-6 animate-luxury-icon" />
                  REAL-TIME THREAT MONITOR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {threats.map((threat) => (
                    <div key={threat.id} className="flex items-center justify-between p-6 bg-slate-700/60 rounded-2xl border-2 border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.15)] transition-all duration-300 luxury-cell">
                      <div className="flex items-center gap-6">
                        <div className={`p-4 rounded-xl ${getSeverityColor(threat.severity)} animate-luxury-icon`}>{getThreatIcon(threat.type)}</div>
                        <div>
                          <p className="text-white font-mono text-lg font-bold">{threat.type.toUpperCase()}</p>
                          <p className="text-cyan-100 text-base font-mono opacity-90">{threat.source}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant="outline" 
                          className={`font-mono text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm ${
                            threat.status === 'blocked' ? 'border-green-400 text-green-300' :
                            threat.status === 'active' ? 'border-red-400 text-red-300' :
                            'border-yellow-400 text-yellow-300'
                          }`}
                        >
                          {threat.status.toUpperCase()}
                        </Badge>
                        <p className="text-cyan-100 text-xs mt-2 font-mono opacity-80">
                          {new Date(threat.timestamp).toLocaleTimeString()}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Security Controls */}
          <div>
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-green-400/20 hover:border-green-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <Lock className="w-6 h-6 animate-luxury-icon" />
                  SECURITY CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">FIREWALL</span>
                    <Badge variant="outline" className="border-green-400 text-green-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ACTIVE</Badge>
                  </div>
                  <Progress value={100} className="h-3 rounded-full bg-green-400/10" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">INTRUSION DETECTION</span>
                    <Badge variant="outline" className="border-blue-400 text-blue-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ENABLED</Badge>
                  </div>
                  <Progress value={100} className="h-3 rounded-full bg-blue-400/10" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">ENCRYPTION</span>
                    <Badge variant="outline" className="border-purple-400 text-purple-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">AES-256</Badge>
                  </div>
                  <Progress value={100} className="h-3 rounded-full bg-purple-400/10" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Scan Button */}
        <div className="flex justify-end mt-10">
          <Button
            className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 text-white font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
            onClick={startScan}
            disabled={isScanning}
          >
            {isScanning ? 'SCANNING...' : 'RUN SECURITY SCAN'}
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

export default NovaShieldDashboard; 