
import { Eye, Lightbulb, Leaf, Users, Shield, Target, Zap, Award } from 'lucide-react';

const values = [
  {
    icon: Eye,
    title: "Strategic Foresight",
    subtitle: "Anticipating Tomorrow",
    description: "We identify emerging trends and market shifts before they impact your business, enabling proactive strategic positioning."
  },
  {
    icon: Lightbulb,
    title: "Innovation Excellence",
    subtitle: "Breakthrough Solutions",
    description: "Combining analytical rigor with creative problem-solving to deliver transformational business outcomes."
  },
  {
    icon: Leaf,
    title: "Sustainable Impact",
    subtitle: "ESG Integration",
    description: "Environmental, social, and governance considerations are fundamental to every strategic recommendation we make."
  },
  {
    icon: Users,
    title: "Collaborative Partnership",
    subtitle: "Shared Success",
    description: "We work as an extension of your team, fostering knowledge transfer and building internal capabilities."
  }
];

const principles = [
  {
    icon: Shield,
    title: "Unwavering Integrity",
    description: "Absolute confidentiality and ethical standards in every client engagement."
  },
  {
    icon: Target,
    title: "Results-Driven Focus",
    description: "Measurable outcomes and tangible value creation for all stakeholders."
  },
  {
    icon: Zap,
    title: "Agile Excellence",
    description: "Rapid response capabilities with uncompromising quality standards."
  },
  {
    icon: Award,
    title: "Continuous Innovation",
    description: "Constantly evolving our methodologies to stay ahead of industry trends."
  }
];

const Values = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 mb-6">
            <span className="text-sm font-semibold uppercase tracking-wider">Our Foundation</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
            Core Values
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            The fundamental principles that guide every strategic decision, 
            client engagement, and business relationship we build.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-slate-50 to-white border border-slate-200 hover:border-slate-300 p-10 rounded-2xl transition-all duration-300 hover:shadow-xl h-full">
                <div className="flex items-start space-x-6">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {value.title}
                    </h3>
                    <div className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-4">
                      {value.subtitle}
                    </div>
                    <p className="text-slate-700 leading-relaxed text-lg">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Operating Principles */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-light text-slate-900 mb-4">
              Operating Principles
            </h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              The unwavering standards that define how we deliver excellence in every engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="text-center group">
                <div className="bg-slate-50 hover:bg-slate-100 p-8 rounded-2xl transition-all duration-300 hover:shadow-lg">
                  <div className="bg-gradient-to-r from-slate-600 to-slate-700 w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <principle.icon className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-3">
                    {principle.title}
                  </h4>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-12 rounded-3xl max-w-5xl mx-auto shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-light mb-6">Our Mission</h3>
            <p className="text-xl opacity-90 leading-relaxed mb-6">
              To empower visionary leaders with transformational strategies that create sustainable competitive advantage, 
              drive meaningful innovation, and generate lasting value for all stakeholders.
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"></div>
            <p className="text-lg text-slate-300 italic">
              "Excellence is not a destination, but a continuous journey of innovation and impact."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
