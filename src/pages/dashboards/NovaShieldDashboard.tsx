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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-green-500/20 rounded-lg">
              <Shield className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white font-mono">NOVASHIELD™ DASHBOARD</h1>
              <p className="text-slate-400 font-mono">ADVANCED CYBERSECURITY MONITORING</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-green-500 text-green-400 font-mono">
              SECURITY STATUS: ACTIVE
            </Badge>
            <Badge variant="outline" className="border-blue-500 text-blue-400 font-mono">
              UPTIME: {metrics.uptime}%
            </Badge>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">TOTAL THREATS</p>
                  <p className="text-3xl font-bold text-white">{metrics.totalThreats}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-orange-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">BLOCKED</p>
                  <p className="text-3xl font-bold text-green-400">{metrics.blockedThreats}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">ACTIVE THREATS</p>
                  <p className="text-3xl font-bold text-red-400">{metrics.activeThreats}</p>
                </div>
                <AlertTriangle className="w-8 h-8 text-red-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">SECURITY SCORE</p>
                  <p className="text-3xl font-bold text-blue-400">{metrics.securityScore.toFixed(1)}%</p>
                </div>
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Threat Monitor */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  REAL-TIME THREAT MONITOR
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {threats.map((threat) => (
                    <div key={threat.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${getSeverityColor(threat.severity)}`}>
                          {getThreatIcon(threat.type)}
                        </div>
                        <div>
                          <p className="text-white font-mono text-sm">{threat.type.toUpperCase()}</p>
                          <p className="text-slate-400 text-xs">{threat.source}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant="outline" 
                          className={`font-mono text-xs ${
                            threat.status === 'blocked' ? 'border-green-500 text-green-400' :
                            threat.status === 'active' ? 'border-red-500 text-red-400' :
                            'border-yellow-500 text-yellow-400'
                          }`}
                        >
                          {threat.status.toUpperCase()}
                        </Badge>
                        <p className="text-slate-400 text-xs mt-1">
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
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Lock className="w-5 h-5" />
                  SECURITY CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">FIREWALL</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ACTIVE</Badge>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">ANTIVIRUS</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ACTIVE</Badge>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">INTRUSION DETECTION</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ACTIVE</Badge>
                  </div>
                  <Progress value={98} className="h-2" />
                </div>

                <Button 
                  onClick={startScan}
                  disabled={isScanning}
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-mono"
                >
                  {isScanning ? 'SCANNING...' : 'START FULL SCAN'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Alerts */}
        <div className="mt-8">
          <Alert className="bg-slate-800/50 border-slate-700">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription className="text-slate-300 font-mono">
              SYSTEM STATUS: All security protocols active. {metrics.activeThreats} threats under investigation.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NovaShieldDashboard; 