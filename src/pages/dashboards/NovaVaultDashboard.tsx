import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Progress } from '../../components/ui/progress';
import { Alert, AlertDescription } from '../../components/ui/alert';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { Lock, Shield, Database, Users, Eye, Key, Activity, CheckCircle } from 'lucide-react';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

interface DataRecord {
  id: string;
  name: string;
  type: 'personal' | 'financial' | 'medical' | 'corporate';
  encryption: 'AES-256' | 'RSA-4096' | 'ChaCha20';
  accessLevel: 'public' | 'private' | 'restricted' | 'classified';
  lastAccessed: string;
  size: string;
  status: 'encrypted' | 'backing-up' | 'syncing';
}

interface VaultMetrics {
  totalRecords: number;
  encryptedRecords: number;
  activeUsers: number;
  encryptionStrength: number;
  backupSize: number;
  accessAttempts: number;
}

const NovaVaultDashboard: React.FC = () => {
  const [dataRecords, setDataRecords] = useState<DataRecord[]>([]);
  const [metrics, setMetrics] = useState<VaultMetrics>({
    totalRecords: 15420,
    encryptedRecords: 15420,
    activeUsers: 89,
    encryptionStrength: 99.9,
    backupSize: 2.8,
    accessAttempts: 1247
  });
  const [isBackingUp, setIsBackingUp] = useState(false);

  useEffect(() => {
    // Simulate data records
    const mockRecords: DataRecord[] = [
      {
        id: '1',
        name: 'customer_database_2024',
        type: 'corporate',
        encryption: 'AES-256',
        accessLevel: 'restricted',
        lastAccessed: new Date(Date.now() - 3600000).toISOString(),
        size: '2.4 GB',
        status: 'encrypted'
      },
      {
        id: '2',
        name: 'financial_records_q4',
        type: 'financial',
        encryption: 'RSA-4096',
        accessLevel: 'classified',
        lastAccessed: new Date(Date.now() - 7200000).toISOString(),
        size: '856 MB',
        status: 'backing-up'
      },
      {
        id: '3',
        name: 'user_profiles_v2',
        type: 'personal',
        encryption: 'ChaCha20',
        accessLevel: 'private',
        lastAccessed: new Date(Date.now() - 1800000).toISOString(),
        size: '1.2 GB',
        status: 'encrypted'
      },
      {
        id: '4',
        name: 'medical_records_secure',
        type: 'medical',
        encryption: 'AES-256',
        accessLevel: 'classified',
        lastAccessed: new Date(Date.now() - 5400000).toISOString(),
        size: '3.1 GB',
        status: 'syncing'
      }
    ];
    setDataRecords(mockRecords);

    // Simulate real-time updates
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        accessAttempts: prev.accessAttempts + Math.floor(Math.random() * 10),
        encryptionStrength: Math.max(99.5, prev.encryptionStrength + (Math.random() - 0.5) * 0.2)
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const startBackup = () => {
    setIsBackingUp(true);
    setTimeout(() => {
      setIsBackingUp(false);
      setMetrics(prev => ({ ...prev, backupSize: prev.backupSize + 0.1 }));
    }, 5000);
  };

  const getAccessLevelColor = (level: string) => {
    switch (level) {
      case 'classified': return 'text-red-400';
      case 'restricted': return 'text-orange-400';
      case 'private': return 'text-yellow-400';
      case 'public': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  const getAccessLevelBgColor = (level: string) => {
    switch (level) {
      case 'classified': return 'bg-red-500/20';
      case 'restricted': return 'bg-orange-500/20';
      case 'private': return 'bg-yellow-500/20';
      case 'public': return 'bg-green-500/20';
      default: return 'bg-gray-500/20';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'encrypted': return <CheckCircle className="w-4 h-4 text-green-400" />;
      case 'backing-up': return <Activity className="w-4 h-4 text-blue-400" />;
      case 'syncing': return <Activity className="w-4 h-4 text-yellow-400" />;
      default: return <Lock className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-x-hidden">
      {/* Animated Gradient Glow Behind Dashboard */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[98vw] max-w-7xl h-[70vh] rounded-3xl blur-3xl opacity-40 animate-luxury-glow bg-gradient-to-br from-purple-400 via-blue-400 to-green-400" />
      </div>
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32 relative z-10">
        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-4 bg-gradient-to-br from-purple-400/30 via-blue-400/20 to-green-400/20 rounded-2xl shadow-lg animate-luxury-icon">
              <Lock className="w-10 h-10 text-purple-300" />
            </div>
            <div>
              <h1 className="text-5xl font-extrabold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 bg-clip-text text-transparent drop-shadow-lg tracking-tight luxury-title">NOVAVAULT™ DASHBOARD</h1>
              <p className="text-cyan-100 font-mono text-xl opacity-90">SECURE DATA MANAGEMENT</p>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <Badge variant="outline" className="border-purple-400 text-purple-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">VAULT STATUS: SECURE</Badge>
            <Badge variant="outline" className="border-green-400 text-green-300 font-mono text-lg px-6 py-2 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ENCRYPTION: {metrics.encryptionStrength.toFixed(1)}%</Badge>
          </div>
        </div>

        {/* Vault Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">TOTAL RECORDS</p>
                  <p className="text-4xl font-extrabold text-white drop-shadow-lg">{metrics.totalRecords.toLocaleString()}</p>
                </div>
                <Database className="w-10 h-10 text-white animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">ENCRYPTED</p>
                  <p className="text-4xl font-extrabold text-green-300 drop-shadow-lg">{metrics.encryptedRecords.toLocaleString()}</p>
                </div>
                <Shield className="w-10 h-10 text-green-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">ACTIVE USERS</p>
                  <p className="text-4xl font-extrabold text-blue-300 drop-shadow-lg">{metrics.activeUsers}</p>
                </div>
                <Users className="w-10 h-10 text-blue-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>

          <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 group luxury-cell">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
            <CardContent className="p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-cyan-100 text-lg font-mono">BACKUP SIZE</p>
                  <p className="text-4xl font-extrabold text-purple-300 drop-shadow-lg">{metrics.backupSize} TB</p>
                </div>
                <Key className="w-10 h-10 text-purple-300 animate-luxury-icon" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Data Records */}
          <div className="lg:col-span-2">
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <Database className="w-6 h-6 animate-luxury-icon" />
                  SECURE DATA RECORDS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {dataRecords.map((record) => (
                    <div key={record.id} className="flex items-center justify-between p-6 bg-slate-700/60 rounded-2xl border-2 border-cyan-400/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_32px_0_rgba(34,211,238,0.15)] transition-all duration-300 luxury-cell">
                      <div className="flex items-center gap-6">
                        <div className={`p-4 rounded-xl ${getAccessLevelBgColor(record.accessLevel)} animate-luxury-icon`}><Lock className="w-7 h-7" /></div>
                        <div>
                          <p className="text-white font-mono text-lg font-bold">{record.name}</p>
                          <p className="text-cyan-100 text-base font-mono opacity-90">{record.type.toUpperCase()} • {record.encryption}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className={`font-mono text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm ${
                              record.accessLevel === 'classified' ? 'border-red-400 text-red-300' :
                              record.accessLevel === 'restricted' ? 'border-orange-400 text-orange-300' :
                              record.accessLevel === 'private' ? 'border-yellow-400 text-yellow-300' :
                              'border-green-400 text-green-300'
                            }`}
                          >
                            {record.accessLevel.toUpperCase()}
                          </Badge>
                          <p className="text-cyan-100 text-xs mt-2 font-mono opacity-80">{record.size}</p>
                        </div>
                        <div className="text-right">
                          {getStatusIcon(record.status)}
                          <p className="text-cyan-100 text-xs mt-2 font-mono opacity-80">{new Date(record.lastAccessed).toLocaleTimeString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Vault Controls */}
          <div>
            <Card className="relative rounded-3xl shadow-2xl bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-purple-400/20 hover:border-purple-400/60 transition-all duration-500 group luxury-cell">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-t-3xl" />
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2 text-2xl">
                  <Shield className="w-6 h-6 animate-luxury-icon" />
                  VAULT CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">BACKUP</span>
                    <Badge variant="outline" className="border-green-400 text-green-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">ENABLED</Badge>
                  </div>
                  <Progress value={100} className="h-3 rounded-full bg-green-400/10" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-cyan-100 text-lg font-mono">ENCRYPTION</span>
                    <Badge variant="outline" className="border-blue-400 text-blue-300 text-lg px-4 py-1 rounded-full shadow-md bg-white/10 backdrop-blur-sm">AES-256</Badge>
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

        {/* Backup Button */}
        <div className="flex justify-end mt-10">
          <Button
            className="bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 text-white font-extrabold text-lg px-10 py-4 rounded-2xl shadow-xl hover:scale-105 transition-all duration-300"
            onClick={startBackup}
            disabled={isBackingUp}
          >
            {isBackingUp ? 'BACKING UP...' : 'RUN VAULT BACKUP'}
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

export default NovaVaultDashboard; 