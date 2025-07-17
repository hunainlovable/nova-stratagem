
import { ArrowRight, MapPin, Phone, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const offices = [
  { city: "New York", address: "Financial District", status: "Headquarters" },
  { city: "London", address: "Canary Wharf", status: "European Hub" },
  { city: "Dubai", address: "DIFC", status: "MENA Hub" },
  { city: "Singapore", address: "Marina Bay", status: "APAC Hub" }
];

const Contact = () => {
  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Future?
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Connect with our team of elite strategists and begin your journey to next-level performance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Start the Conversation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="bg-slate-700 border-slate-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="bg-slate-700 border-slate-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-slate-700 border-slate-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <input 
                type="text" 
                placeholder="Company" 
                className="w-full bg-slate-700 border-slate-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              
              <select className="w-full bg-slate-700 border-slate-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                <option>Select Service Area</option>
                <option>NovaStrategy™ - Strategy Consulting</option>
                <option>NovaOps™ - Operations Consulting</option>
                <option>NovaDigital™ - Technology & IT</option>
                <option>NovaCapital™ - Financial Advisory</option>
                <option>NovaPeople™ - Human Resources</option>
                <option>NovaSector™ - Industry Expertise</option>
                <option>NovaESG™ - Sustainability</option>
              </select>
              
              <textarea 
                placeholder="Tell us about your strategic challenges..." 
                rows={4}
                className="w-full bg-slate-700 border-slate-600 text-white p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
              
              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 text-lg">
                Schedule Strategic Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info & Offices */}
          <div className="space-y-8">
            <Card className="bg-slate-800 border-slate-700">
              <CardHeader>
                <CardTitle className="text-xl text-white">Global Presence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {offices.map((office, index) => (
                  <div key={index} className="flex items-center space-x-4 p-3 bg-slate-700 rounded-lg">
                    <MapPin className="h-5 w-5 text-blue-400" />
                    <div>
                      <div className="font-semibold text-white">{office.city}</div>
                      <div className="text-sm text-slate-300">{office.address} • {office.status}</div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-slate-800 border-slate-700">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="font-semibold text-white">Direct Line</div>
                    <div className="text-slate-300">+1 (555) NSG-ELITE</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="font-semibold text-white">Strategic Inquiries</div>
                    <div className="text-slate-300">partners@novastratagem.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Calendar className="h-5 w-5 text-blue-400" />
                  <div>
                    <div className="font-semibold text-white">Response Time</div>
                    <div className="text-slate-300">Within 24 hours</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-slate-400 text-lg">
            Join Fortune 1000 leaders who trust Nova Stratagem Group to navigate tomorrow's challenges today.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
