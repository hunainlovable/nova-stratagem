
import { Linkedin, Mail, Award, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { pageSEO } from '@/lib/seo';

const teamMembers = [
  {
    name: 'Hunain Qureshi',
    role: 'Founder & CEO',
    division: 'Leadership',
    bio: 'Visionary founder and architect of Nova Stratagem. Expert in high-security operations, covert strategy, and advanced digital transformation. Recognized for pioneering ultra-secure, hyper-reality consulting experiences.',
    expertise: ['Covert Strategy', 'High-Security Ops', 'Digital Transformation', 'Futuristic Consulting'],
    education: 'MSc Computer Science, Imperial College London • BSc Information Security, UCL',
    previousRoles: ['Nova Stratagem - Founder', 'Global Security Advisor'],
    image: '/hunain.jpg'
  },
  {
    name: 'Brad Meyer',
    role: 'Onboarding Specialist',
    division: 'Client Success',
    bio: 'Expert in client onboarding and success management, ensuring seamless integration of Nova Stratagem solutions. Specializes in creating personalized onboarding experiences that maximize client value and satisfaction.',
    expertise: ['Client Onboarding', 'Success Management', 'Process Optimization', 'Training & Development'],
    education: 'BS Business Administration, University of Texas • Certified Customer Success Manager',
    previousRoles: ['Salesforce - Senior Customer Success Manager', 'HubSpot - Onboarding Specialist'],
    image: '/brad.jpg'
  },
  {
    name: 'Alex Barretto',
    role: 'Head of Technology Development',
    division: 'Technology',
    bio: 'Leading technology strategist and development expert, driving innovation across Nova Stratagem\'s enterprise solutions. Specializes in cutting-edge technology architecture and scalable development methodologies.',
    expertise: ['Technology Strategy', 'Software Architecture', 'Development Leadership', 'Innovation Management'],
    education: 'MS Computer Science, Stanford University • BS Engineering, MIT',
    previousRoles: ['Google - Senior Software Engineer', 'Microsoft - Technical Lead'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
  },
  {
    name: 'Sameed',
    role: 'Developer',
    division: 'Technology',
    bio: 'Skilled full-stack developer with expertise in modern web technologies and enterprise application development. Contributes to Nova Stratagem\'s cutting-edge platform development and client solution implementation.',
    expertise: ['Full-Stack Development', 'Web Technologies', 'Enterprise Applications', 'System Integration'],
    education: 'BS Computer Science, University of Houston • Full-Stack Development Certification',
    previousRoles: ['Tech Startup - Senior Developer', 'Freelance Developer'],
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400'
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <SEOHead 
        seo={pageSEO.team} 
        structuredData={pageSEO.team.structuredData}
      />
      <Navigation />
      
      <div className="pt-32 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Our Leadership Team
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              World-class experts from top-tier consulting firms, Fortune 500 companies, and leading academic institutions
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl text-slate-900">{member.name}</CardTitle>
                  <p className="text-blue-600 font-semibold">{member.role}</p>
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {member.division}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <Award className="h-4 w-4 mr-2 text-blue-600" />
                      Expertise
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {member.expertise.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2 flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2 text-blue-600" />
                      Education
                    </h4>
                    <p className="text-slate-600 text-xs">{member.education}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Previous Roles</h4>
                    <div className="space-y-1">
                      {member.previousRoles.map((role, i) => (
                        <p key={i} className="text-slate-600 text-xs">{role}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-4 pt-4 border-t">
                    <button className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </button>
                    <button className="text-slate-400 hover:text-blue-600 transition-colors">
                      <Mail className="h-5 w-5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-2xl max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Join Our Network of Excellence</h3>
              <p className="text-lg opacity-90 mb-6">
                We're always looking for exceptional talent to join our growing team of world-class consultants.
              </p>
              <div className="space-x-4">
                <button className="bg-white text-slate-900 px-6 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors">
                  View Open Positions
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-colors">
                  Partner With Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Team;
