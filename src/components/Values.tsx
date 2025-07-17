
import { Eye, Lightbulb, Leaf, Users } from 'lucide-react';

const values = [
  {
    icon: Eye,
    title: "Foresight > Reaction",
    description: "We anticipate tomorrow's challenges and build strategies that thrive in uncertainty."
  },
  {
    icon: Lightbulb,
    title: "Precision + Creativity",
    description: "Analytical rigor meets innovative thinking to deliver breakthrough solutions."
  },
  {
    icon: Leaf,
    title: "Sustainability as Strategy",
    description: "ESG isn't an add-on—it's integral to every strategic decision we make."
  },
  {
    icon: Users,
    title: "Diversity of Thought = Better Thinking",
    description: "Our global team brings varied perspectives that challenge conventional wisdom."
  }
];

const Values = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Values
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The principles that guide every client engagement and strategic recommendation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="bg-gradient-to-br from-slate-50 to-slate-100 hover:from-blue-50 hover:to-purple-50 p-8 rounded-2xl transition-all duration-300 hover:shadow-xl">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Strategy for the Brave</h3>
            <p className="text-lg opacity-90">
              In a world of rapid change, we partner with leaders who aren't afraid to reimagine their future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
