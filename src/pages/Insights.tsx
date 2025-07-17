
import { useState } from 'react';
import { Calendar, Clock, User, ArrowRight, TrendingUp, Brain, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const insights = [
  {
    id: 1,
    title: 'The Future of AI in Strategic Consulting: Beyond Automation',
    excerpt: 'How artificial intelligence is reshaping the consulting landscape and what it means for strategic decision-making in 2024 and beyond.',
    author: 'Dr. Sarah Chen',
    date: '2024-01-15',
    readTime: '8 min read',
    category: 'AI & Technology',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600',
    featured: true
  },
  {
    id: 2,
    title: 'ESG Integration: From Compliance to Competitive Advantage',
    excerpt: 'A comprehensive guide to transforming ESG initiatives from regulatory requirements into drivers of sustainable growth and innovation.',
    author: 'Dr. Amelia Thompson',
    date: '2024-01-10',
    readTime: '12 min read',
    category: 'Sustainability',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600',
    featured: true
  },
  {
    id: 3,
    title: 'Digital-First Operations: Lessons from Global Leaders',
    excerpt: 'Case studies and frameworks from Fortune 500 companies that successfully transitioned to digital-first operational models.',
    author: 'Marcus Rodriguez',
    date: '2024-01-05',
    readTime: '15 min read',
    category: 'Digital Transformation',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600',
    featured: false
  },
  {
    id: 4,
    title: 'The New Workforce: Leading Through Hybrid Transformation',
    excerpt: 'Strategic approaches to managing distributed teams, maintaining culture, and optimizing productivity in the hybrid work era.',
    author: 'Dr. Priya Patel',
    date: '2023-12-28',
    readTime: '10 min read',
    category: 'Human Capital',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600',
    featured: false
  },
  {
    id: 5,
    title: 'M&A in Uncertain Times: Risk, Opportunity, and Strategic Timing',
    excerpt: 'Navigate market volatility with proven frameworks for identifying, evaluating, and executing strategic acquisitions.',
    author: 'Robert Kim',
    date: '2023-12-20',
    readTime: '14 min read',
    category: 'M&A Strategy',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600',
    featured: false
  },
  {
    id: 6,
    title: 'Supply Chain Resilience: Building Anti-Fragile Operations',
    excerpt: 'Beyond risk management: creating supply chains that thrive under pressure and uncertainty through strategic design.',
    author: 'James Nakamura',
    date: '2023-12-15',
    readTime: '11 min read',
    category: 'Operations',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600',
    featured: false
  }
];

const categories = ['All', 'AI & Technology', 'Sustainability', 'Digital Transformation', 'Human Capital', 'M&A Strategy', 'Operations'];

const Insights = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredInsights = selectedCategory === 'All' 
    ? insights 
    : insights.filter(insight => insight.category === selectedCategory);

  const featuredInsights = insights.filter(insight => insight.featured);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navigation />
      
      <div className="pt-20 pb-16">
        <div className="container mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
              Strategic Insights
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Expert perspectives on the trends, challenges, and opportunities shaping the future of business strategy
            </p>
          </div>

          {/* Featured Articles */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Featured Insights</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredInsights.map((insight) => (
                <Card key={insight.id} className="bg-white hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={insight.image} 
                      alt={insight.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{insight.category}</Badge>
                      <div className="flex items-center text-slate-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        {insight.readTime}
                      </div>
                    </div>
                    <CardTitle className="text-xl text-slate-900 hover:text-blue-600 transition-colors cursor-pointer">
                      {insight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {insight.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-slate-500 text-sm">
                        <User className="h-4 w-4 mr-2" />
                        <span>{insight.author}</span>
                        <Calendar className="h-4 w-4 ml-4 mr-1" />
                        <span>{new Date(insight.date).toLocaleDateString()}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                        Read More <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* All Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight) => (
              <Card key={insight.id} className="bg-white hover:shadow-lg transition-shadow duration-300 overflow-hidden">
                <div className="h-40 overflow-hidden">
                  <img 
                    src={insight.image} 
                    alt={insight.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">{insight.category}</Badge>
                    <div className="flex items-center text-slate-500 text-xs">
                      <Clock className="h-3 w-3 mr-1" />
                      {insight.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-lg text-slate-900 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                    {insight.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-3">
                    {insight.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center text-slate-500">
                      <User className="h-3 w-3 mr-1" />
                      <span>{insight.author}</span>
                    </div>
                    <span className="text-slate-500">{new Date(insight.date).toLocaleDateString()}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16">
            <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <CardContent className="text-center p-12">
                <Brain className="h-12 w-12 mx-auto mb-4 opacity-90" />
                <h3 className="text-2xl font-bold mb-4">Stay Ahead of the Curve</h3>
                <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                  Get exclusive insights, strategic frameworks, and industry analysis delivered to your inbox weekly.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="Enter your email address" 
                    className="flex-1 p-3 rounded-lg text-slate-900 focus:ring-2 focus:ring-white focus:outline-none"
                  />
                  <Button className="bg-white text-blue-600 hover:bg-slate-100 px-6">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm opacity-75 mt-4">
                  Join 10,000+ executives and strategy leaders. Unsubscribe anytime.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Insights;
