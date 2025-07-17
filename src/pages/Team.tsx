
import { Linkedin, Mail, Award, GraduationCap, Crown, Zap, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const teamMembers = [
  {
    name: 'Hunain Qureshi',
    role: 'Founder & Visionary Architect',
    division: 'Leadership',
    bio: 'Visionary entrepreneur and strategic architect who founded Nova Stratagem Group to revolutionize enterprise consulting through cutting-edge technology and innovative methodologies.',
    expertise: ['Strategic Vision', 'Enterprise Architecture', 'Innovation Leadership', 'Future Technologies'],
    education: 'MBA Strategic Management • BS Computer Science',
    previousRoles: ['Tech Entrepreneur', 'Strategic Consultant', 'Innovation Director'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
    isFounder: true
  },
  {
    name: 'Dr. Sarah Chen',
    role: 'Managing Director & CEO',
    division: 'Executive Leadership',
    bio: 'Former McKinsey & Company Principal with 15+ years in strategy consulting. PhD in Economics from Stanford.',
    expertise: ['Corporate Strategy', 'Digital Transformation', 'M&A'],
    education: 'PhD Economics, Stanford • MBA, Wharton',
    previousRoles: ['McKinsey & Company - Principal', 'Bain Capital - VP Strategy'],
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=400'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Partner, NovaDigital™',
    division: 'Quantum Technology',
    bio: 'Ex-Google Director of AI Strategy, led digital transformations for Fortune 100 companies.',
    expertise: ['AI/ML Strategy', 'Quantum Computing', 'Neural Networks'],
    education: 'MS Computer Science, MIT • BS Engineering, Caltech',
    previousRoles: ['Google - Director AI Strategy', 'Microsoft - Principal PM'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400'
  },
  {
    name: 'Dr. Amelia Thompson',
    role: 'Partner, NovaESG™',
    division: 'Future Sustainability',
    bio: 'Leading sustainability expert, former UN advisor on climate finance and ESG frameworks.',
    expertise: ['ESG Strategy', 'Climate Tech', 'Regulatory Compliance'],
    education: 'PhD Environmental Economics, Oxford • JD Environmental Law, Harvard',
    previousRoles: ['UN Climate Finance - Senior Advisor', 'EY - ESG Partner'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400'
  },
  {
    name: 'James Nakamura',
    role: 'Partner, NovaOps™',
    division: 'Neural Operations',
    bio: 'Former Toyota VP of Global Operations, expert in lean manufacturing and AI-powered supply chains.',
    expertise: ['Lean Operations', 'AI Supply Chain', 'Quantum Logistics'],
    education: 'MBA Operations, Kellogg • BS Industrial Engineering, UC Berkeley',
    previousRoles: ['Toyota - VP Global Operations', 'Amazon - Director Supply Chain'],
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400'
  },
  {
    name: 'Dr. Priya Patel',
    role: 'Partner, NovaPeople™',
    division: 'Human Augmentation',
    bio: 'Organizational psychologist and former CHRO, specializes in AI-human collaboration and future workforce.',
    expertise: ['Leadership Development', 'Human-AI Interface', 'Future Workforce'],
    education: 'PhD Organizational Psychology, Stanford • MBA HR, Kellogg',
    previousRoles: ['Salesforce - Chief People Officer', 'Deloitte - HR Transformation Lead'],
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400'
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          {/* Futuristic Header */}
          <div className="text-center mb-20 slide-up-fade">
            <div className="inline-flex items-center px-8 py-4 rounded-full glass-morphism neon-border mb-8">
              <Brain className="h-5 w-5 text-primary mr-3 pulse-glow" />
              <span className="text-sm font-bold holographic-text tracking-wider">NEURAL LEADERSHIP MATRIX</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black holographic-text mb-8 tracking-tighter">
              QUANTUM LEADERSHIP
            </h1>
            <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Visionary architects from quantum enterprises, neural networks, and tomorrow's institutions
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => (
              <Card key={index} className={`bg-card/50 glass-morphism hover:neon-border transition-all duration-500 hover:-translate-y-3 scale-fade ${member.isFounder ? 'neon-border pulse-glow' : ''}`} style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="text-center pb-4">
                  {member.isFounder && (
                    <div className="flex justify-center mb-4">
                      <div className="inline-flex items-center px-4 py-2 rounded-full holographic-bg">
                        <Crown className="h-4 w-4 text-white mr-2" />
                        <span className="text-white text-xs font-bold tracking-wider">FOUNDER</span>
                      </div>
                    </div>
                  )}
                  <div className="w-36 h-36 mx-auto mb-6 rounded-full overflow-hidden neon-border">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-2xl font-black text-foreground mb-2">{member.name}</CardTitle>
                  <p className={`font-bold text-lg mb-3 ${member.isFounder ? 'holographic-text' : 'text-primary'}`}>{member.role}</p>
                  <Badge variant="secondary" className={`w-fit mx-auto font-bold tracking-wider ${member.isFounder ? 'holographic-bg text-white' : ''}`}>
                    {member.division}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div>
                    <h4 className="font-bold text-foreground mb-3 flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-primary" />
                      Neural Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, i) => (
                        <Badge key={i} variant="outline" className="text-xs font-semibold">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-3 flex items-center">
                      <GraduationCap className="h-4 w-4 mr-2 text-primary" />
                      Quantum Education
                    </h4>
                    <p className="text-muted-foreground text-xs">{member.education}</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-foreground mb-3">Previous Neural Roles</h4>
                    <div className="space-y-1">
                      {member.previousRoles.map((role, i) => (
                        <p key={i} className="text-muted-foreground text-xs">{role}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center space-x-6 pt-6 border-t border-primary/20">
                    <button className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                      <Linkedin className="h-6 w-6" />
                    </button>
                    <button className="text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110">
                      <Mail className="h-6 w-6" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Futuristic Call to Action */}
          <div className="mt-20 text-center scale-fade animate-delay-600">
            <div className="glass-morphism neon-border p-12 rounded-3xl max-w-5xl mx-auto">
              <h3 className="text-4xl font-black holographic-text mb-6">JOIN THE NEURAL COLLECTIVE</h3>
              <p className="text-xl text-muted-foreground mb-8">
                We're assembling the most brilliant minds to architect tomorrow's enterprise solutions.
              </p>
              <div className="space-x-6">
                <button className="holographic-bg text-white px-10 py-4 rounded-xl font-bold hover:scale-105 transition-all duration-300 neon-border">
                  QUANTUM POSITIONS
                </button>
                <button className="glass-morphism neon-border text-foreground px-10 py-4 rounded-xl font-bold hover:text-primary transition-all duration-300">
                  NEURAL PARTNERSHIP
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
