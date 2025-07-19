
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Differentiators from '@/components/Differentiators';
import Values from '@/components/Values';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { pageSEO } from '@/lib/seo';

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEOHead 
        seo={pageSEO.home} 
        structuredData={pageSEO.home.structuredData}
      />
      <Navigation />
      <Hero />
      <div id="services">
        <Services />
      </div>
      <div id="differentiators">
        <Differentiators />
      </div>
      <div id="values">
        <Values />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
