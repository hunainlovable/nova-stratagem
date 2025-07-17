
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Calendar, 
  Users, 
  MessageSquare, 
  TrendingUp, 
  Clock,
  Download,
  Video,
  CheckCircle
} from 'lucide-react';

const ClientPortal = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const projectData = {
    name: 'Digital Transformation Initiative',
    progress: 65,
    status: 'On Track',
    nextMilestone: 'Phase 2 Implementation',
    dueDate: '2024-03-15'
  };

  const recentActivities = [
    { type: 'document', message: 'Strategy Framework Document updated', time: '2 hours ago' },
    { type: 'meeting', message: 'Stakeholder review meeting scheduled', time: '1 day ago' },
    { type: 'milestone', message: 'Phase 1 Discovery completed', time: '3 days ago' },
    { type: 'message', message: 'New message from consulting team', time: '5 days ago' }
  ];

  const deliverables = [
    { name: 'Market Analysis Report', status: 'completed', dueDate: '2024-01-15' },
    { name: 'Competitive Landscape Study', status: 'completed', dueDate: '2024-01-20' },
    { name: 'Digital Strategy Framework', status: 'in-progress', dueDate: '2024-02-10' },
    { name: 'Implementation Roadmap', status: 'pending', dueDate: '2024-02-25' },
    { name: 'Change Management Plan', status: 'pending', dueDate: '2024-03-05' }
  ];

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Client Portal</h1>
          <p className="text-slate-600">Track your project progress, access deliverables, and collaborate with your consulting team</p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 mb-8 bg-white p-1 rounded-lg border">
          {[
            { id: 'dashboard', label: 'Dashboard', icon: TrendingUp },
            { id: 'deliverables', label: 'Deliverables', icon: FileText },
            { id: 'meetings', label: 'Meetings', icon: Calendar },
            { id: 'messages', label: 'Messages', icon: MessageSquare }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors ${
                activeTab === tab.id 
                  ? 'bg-blue-100 text-blue-700' 
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <tab.icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Overview */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-slate-900">{projectData.name}</h3>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {projectData.status}
                      </Badge>
                    </div>
                    
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm text-slate-600">Overall Progress</span>
                        <span className="text-sm font-semibold text-slate-900">{projectData.progress}%</span>
                      </div>
                      <Progress value={projectData.progress} className="h-2" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-slate-600">Next Milestone</p>
                        <p className="font-semibold text-slate-900">{projectData.nextMilestone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-slate-600">Due Date</p>
                        <p className="font-semibold text-slate-900">{projectData.dueDate}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Metrics */}
              <Card>
                <CardHeader>
                  <CardTitle>Key Metrics & KPIs</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">23%</div>
                      <div className="text-sm text-slate-600">Efficiency Gain</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-green-600">$2.1M</div>
                      <div className="text-sm text-slate-600">Cost Savings</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-lg">
                      <div className="text-2xl font-bold text-purple-600">87%</div>
                      <div className="text-sm text-slate-600">Team Satisfaction</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">15</div>
                      <div className="text-sm text-slate-600">Weeks Remaining</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activities */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activities</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          activity.type === 'document' ? 'bg-blue-100' :
                          activity.type === 'meeting' ? 'bg-green-100' :
                          activity.type === 'milestone' ? 'bg-purple-100' :
                          'bg-orange-100'
                        }`}>
                          {activity.type === 'document' && <FileText className="h-4 w-4 text-blue-600" />}
                          {activity.type === 'meeting' && <Calendar className="h-4 w-4 text-green-600" />}
                          {activity.type === 'milestone' && <CheckCircle className="h-4 w-4 text-purple-600" />}
                          {activity.type === 'message' && <MessageSquare className="h-4 w-4 text-orange-600" />}
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-900">{activity.message}</p>
                          <p className="text-xs text-slate-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Deliverables Tab */}
        {activeTab === 'deliverables' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Project Deliverables</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {deliverables.map((deliverable, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          deliverable.status === 'completed' ? 'bg-green-100' :
                          deliverable.status === 'in-progress' ? 'bg-blue-100' :
                          'bg-slate-100'
                        }`}>
                          {deliverable.status === 'completed' && <CheckCircle className="h-5 w-5 text-green-600" />}
                          {deliverable.status === 'in-progress' && <Clock className="h-5 w-5 text-blue-600" />}
                          {deliverable.status === 'pending' && <FileText className="h-5 w-5 text-slate-400" />}
                        </div>
                        <div>
                          <h3 className="font-semibold text-slate-900">{deliverable.name}</h3>
                          <p className="text-sm text-slate-600">Due: {deliverable.dueDate}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={
                          deliverable.status === 'completed' ? 'default' :
                          deliverable.status === 'in-progress' ? 'secondary' :
                          'outline'
                        }>
                          {deliverable.status === 'completed' ? 'Completed' :
                           deliverable.status === 'in-progress' ? 'In Progress' :
                           'Pending'}
                        </Badge>
                        {deliverable.status === 'completed' && (
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Meetings Tab */}
        {activeTab === 'meetings' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Upcoming Meetings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <Video className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Weekly Strategy Review</h3>
                        <p className="text-sm text-slate-600">Tomorrow, 2:00 PM - 3:00 PM</p>
                      </div>
                    </div>
                    <Button size="sm">Join Meeting</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Users className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">Stakeholder Presentation</h3>
                        <p className="text-sm text-slate-600">Friday, 10:00 AM - 11:30 AM</p>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">View Details</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Messages Tab */}
        {activeTab === 'messages' && (
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Team Communications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-900">Dr. Sarah Chen</h3>
                      <span className="text-sm text-slate-500">2 hours ago</span>
                    </div>
                    <p className="text-slate-700">
                      Great progress on the digital strategy framework. I've reviewed the latest draft and have a few suggestions for the implementation timeline. Let's discuss in tomorrow's meeting.
                    </p>
                  </div>
                  
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-slate-900">Marcus Rodriguez</h3>
                      <span className="text-sm text-slate-500">1 day ago</span>
                    </div>
                    <p className="text-slate-700">
                      The technology assessment is complete. We've identified several opportunities for optimization that could deliver significant cost savings. Report attached.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientPortal;
