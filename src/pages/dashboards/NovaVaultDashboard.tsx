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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 pt-32">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-purple-500/20 rounded-lg">
              <Lock className="w-8 h-8 text-purple-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white font-mono">NOVAVAULT™ DASHBOARD</h1>
              <p className="text-slate-400 font-mono">SECURE DATA MANAGEMENT</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Badge variant="outline" className="border-purple-500 text-purple-400 font-mono">
              VAULT STATUS: SECURE
            </Badge>
            <Badge variant="outline" className="border-green-500 text-green-400 font-mono">
              ENCRYPTION: {metrics.encryptionStrength.toFixed(1)}%
            </Badge>
          </div>
        </div>

        {/* Vault Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">TOTAL RECORDS</p>
                  <p className="text-3xl font-bold text-white">{metrics.totalRecords.toLocaleString()}</p>
                </div>
                <Database className="w-8 h-8 text-white" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">ENCRYPTED</p>
                  <p className="text-3xl font-bold text-green-400">{metrics.encryptedRecords.toLocaleString()}</p>
                </div>
                <Shield className="w-8 h-8 text-green-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">ACTIVE USERS</p>
                  <p className="text-3xl font-bold text-blue-400">{metrics.activeUsers}</p>
                </div>
                <Users className="w-8 h-8 text-blue-400" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-400 text-sm font-mono">BACKUP SIZE</p>
                  <p className="text-3xl font-bold text-purple-400">{metrics.backupSize} TB</p>
                </div>
                <Key className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Data Records */}
          <div className="lg:col-span-2">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  SECURE DATA RECORDS
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dataRecords.map((record) => (
                    <div key={record.id} className="flex items-center justify-between p-4 bg-slate-700/50 rounded-lg border border-slate-600">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${getAccessLevelBgColor(record.accessLevel)}`}>
                          <Lock className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-white font-mono text-sm">{record.name}</p>
                          <p className="text-slate-400 text-xs">{record.type.toUpperCase()} • {record.encryption}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <Badge 
                            variant="outline" 
                            className={`font-mono text-xs ${getAccessLevelColor(record.accessLevel)} border-current`}
                          >
                            {record.accessLevel.toUpperCase()}
                          </Badge>
                          <p className="text-slate-400 text-xs mt-1">{record.size}</p>
                        </div>
                        <div className="text-right">
                          {getStatusIcon(record.status)}
                          <p className="text-slate-400 text-xs mt-1">
                            {new Date(record.lastAccessed).toLocaleTimeString()}
                          </p>
                        </div>
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
                  <Shield className="w-5 h-5" />
                  SECURITY CONTROLS
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">ENCRYPTION STRENGTH</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">MAXIMUM</Badge>
                  </div>
                  <Progress value={metrics.encryptionStrength} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">ACCESS CONTROL</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ACTIVE</Badge>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-slate-400 text-sm font-mono">AUDIT TRAIL</span>
                    <Badge variant="outline" className="border-green-500 text-green-400 text-xs">ENABLED</Badge>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>

                <Button 
                  onClick={startBackup}
                  disabled={isBackingUp}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-mono"
                >
                  {isBackingUp ? 'BACKING UP...' : 'START BACKUP'}
                </Button>
              </CardContent>
            </Card>

            {/* Access Monitoring */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm mt-6">
              <CardHeader>
                <CardTitle className="text-white font-mono flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  ACCESS MONITORING
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-slate-700/50 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-mono">Today's Attempts</span>
                      <span className="text-blue-400 font-mono">{metrics.accessAttempts}</span>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-slate-400 text-sm font-mono">Successful</span>
                      <span className="text-green-400 text-sm font-mono">{Math.floor(metrics.accessAttempts * 0.85)}</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-slate-400 text-sm font-mono">Blocked</span>
                      <span className="text-red-400 text-sm font-mono">{Math.floor(metrics.accessAttempts * 0.15)}</span>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-green-400 text-lg font-bold font-mono">256-bit</p>
                      <p className="text-slate-400 text-xs font-mono">AES ENCRYPTION</p>
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-3">
                      <p className="text-blue-400 text-lg font-bold font-mono">4096-bit</p>
                      <p className="text-slate-400 text-xs font-mono">RSA KEYS</p>
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
            <Lock className="h-4 w-4" />
            <AlertDescription className="text-slate-300 font-mono">
              VAULT STATUS: All data encrypted and secure. {metrics.encryptedRecords} records protected with military-grade encryption.
            </AlertDescription>
          </Alert>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NovaVaultDashboard; 