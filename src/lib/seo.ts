// SEO Optimization utilities for Nova Stratagem
// Focused on Houston and United States markets

export interface SEOData {
  title: string;
  description: string;
  keywords: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  canonicalUrl?: string;
  structuredData?: object;
}

export const defaultSEO: SEOData = {
  title: 'Nova Stratagem | Enterprise Solutions | Houston, Texas',
  description: 'Leading enterprise technology solutions provider in Houston, Texas. Quantum intelligence, cybersecurity, and digital transformation services for businesses across the United States.',
  keywords: [
    'enterprise solutions',
    'Houston technology',
    'Texas business',
    'quantum intelligence',
    'cybersecurity',
    'digital transformation',
    'enterprise software',
    'business technology',
    'Houston IT services',
    'United States technology'
  ],
  ogType: 'website',
  twitterCard: 'summary_large_image',
  canonicalUrl: 'https://novastratagem.com'
};

export const pageSEO: Record<string, SEOData> = {
  home: {
    title: 'Nova Stratagem | Leading Enterprise Technology Solutions | Houston, Texas',
    description: 'Transform your business with Nova Stratagem, Houston\'s premier enterprise technology solutions provider. Quantum intelligence, cybersecurity, and digital transformation services for enterprises across the United States.',
    keywords: [
      'enterprise technology solutions',
      'Houston technology company',
      'Texas business consulting',
      'quantum intelligence platform',
      'enterprise cybersecurity',
      'digital transformation Houston',
      'business technology solutions',
      'Houston IT consulting',
      'enterprise software Houston',
      'technology consulting Texas',
      'AI solutions Houston',
      'cloud infrastructure Texas'
    ],
    canonicalUrl: 'https://novastratagem.com',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Nova Stratagem",
      "url": "https://novastratagem.com",
      "logo": "https://novastratagem.com/logo.png",
      "description": "Leading enterprise technology solutions provider in Houston, Texas",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Houston",
        "addressRegion": "TX",
        "addressCountry": "US"
      },
      "foundedDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Hunain Qureshi"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "areaServed": "US",
        "availableLanguage": "English"
      }
    }
  },
  services: {
    title: 'Enterprise Consulting Services | Strategy, Operations & Technology | Nova Stratagem',
    description: 'Comprehensive enterprise consulting services in Houston. Strategy consulting, operations optimization, and technology transformation. Expert consultants from top-tier firms serving businesses across Texas and the United States.',
    keywords: [
      'enterprise consulting Houston',
      'strategy consulting Texas',
      'operations consulting',
      'technology consulting Houston',
      'business transformation',
      'management consulting',
      'Houston business consulting',
      'enterprise strategy',
      'digital transformation consulting',
      'operational excellence',
      'business optimization',
      'consulting services Texas'
    ],
    canonicalUrl: 'https://novastratagem.com/services'
  },
  team: {
    title: 'Leadership Team | World-Class Experts | Nova Stratagem Houston',
    description: 'Meet Nova Stratagem\'s world-class leadership team. Experts from McKinsey, Google, Goldman Sachs, and leading academic institutions. Founded by Hunain Qureshi, delivering exceptional consulting services in Houston and across the United States.',
    keywords: [
      'Nova Stratagem team',
      'Hunain Qureshi founder',
      'Houston consulting experts',
      'enterprise consulting leadership',
      'strategy consulting team',
      'technology consulting experts',
      'management consulting Houston',
      'business consulting team',
      'expert consultants Texas',
      'consulting firm leadership',
      'enterprise advisory team',
      'business transformation experts'
    ],
    canonicalUrl: 'https://novastratagem.com/team',
    structuredData: {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Nova Stratagem",
      "foundedDate": "2024",
      "founder": {
        "@type": "Person",
        "name": "Hunain Qureshi",
        "jobTitle": "Founder & CEO"
      },
      "employee": [
        {
          "@type": "Person",
          "name": "Hunain Qureshi",
          "jobTitle": "Founder & CEO"
        },
        {
          "@type": "Person", 
          "name": "Dr. Sarah Chen",
          "jobTitle": "Managing Director & CEO"
        }
      ]
    }
  },
  contact: {
    title: 'Contact Nova Stratagem | Houston Enterprise Technology Solutions',
    description: 'Get in touch with Nova Stratagem for enterprise technology consulting. Based in Houston, Texas, serving businesses across the United States. Schedule your consultation today.',
    keywords: [
      'contact Nova Stratagem',
      'Houston technology consulting',
      'enterprise consulting contact',
      'business consulting Houston',
      'technology solutions contact',
      'consulting services inquiry',
      'Houston business consulting',
      'enterprise solutions contact',
      'technology transformation contact',
      'consulting firm Houston',
      'business advisory contact',
      'strategic consulting contact'
    ],
    canonicalUrl: 'https://novastratagem.com/contact'
  },
  insights: {
    title: 'Business Insights & Thought Leadership | Nova Stratagem Houston',
    description: 'Discover cutting-edge business insights and thought leadership from Nova Stratagem\'s experts. Latest trends in enterprise technology, strategy, and digital transformation from Houston\'s leading consulting firm.',
    keywords: [
      'business insights Houston',
      'enterprise technology trends',
      'consulting thought leadership',
      'business strategy insights',
      'digital transformation trends',
      'technology consulting insights',
      'enterprise consulting blog',
      'business innovation Houston',
      'strategic insights Texas',
      'consulting expertise',
      'business transformation insights',
      'technology leadership'
    ],
    canonicalUrl: 'https://novastratagem.com/insights'
  },
  caseStudies: {
    title: 'Case Studies | Success Stories | Nova Stratagem Houston Consulting',
    description: 'Explore Nova Stratagem\'s success stories and case studies. Real results from enterprise technology transformations, strategy implementations, and operational improvements for Houston and Texas businesses.',
    keywords: [
      'consulting case studies',
      'enterprise transformation results',
      'Houston business success stories',
      'technology consulting results',
      'strategy consulting outcomes',
      'business transformation case studies',
      'consulting success stories',
      'enterprise solutions results',
      'digital transformation case studies',
      'operational improvement results',
      'consulting ROI examples',
      'business consulting outcomes'
    ],
    canonicalUrl: 'https://novastratagem.com/case-studies'
  }
};

export const serviceSEO: Record<string, SEOData> = {
  novacore: {
    title: 'NovaCore™ Quantum Intelligence Platform | Houston AI Solutions | Nova Stratagem',
    description: 'Transform your business with NovaCore™, the revolutionary quantum intelligence platform. Advanced AI-powered decision-making for Houston enterprises. Unprecedented accuracy and speed.',
    keywords: [
      'quantum intelligence',
      'AI platform',
      'Houston AI solutions',
      'machine learning',
      'predictive analytics',
      'enterprise AI',
      'quantum computing',
      'decision making',
      'artificial intelligence',
      'business intelligence',
      'Texas AI',
      'United States AI'
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "NovaCore™ Quantum Intelligence Platform",
      "description": "Revolutionary AI-powered decision-making system that harnesses quantum computing principles for unprecedented accuracy and speed.",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web-based",
      "offers": {
        "@type": "Offer",
        "price": "Contact for pricing",
        "priceCurrency": "USD"
      },
      "provider": {
        "@type": "Organization",
        "name": "Nova Stratagem",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Houston",
          "addressRegion": "TX",
          "addressCountry": "US"
        }
      }
    }
  },
  novashield: {
    title: 'NovaShield™ Advanced Cybersecurity | Houston Security Solutions | Nova Stratagem',
    description: 'Protect your enterprise with NovaShield™, the advanced cybersecurity suite. Military-grade protection for Houston businesses. Zero-day threat detection and automated response.',
    keywords: [
      'cybersecurity',
      'Houston security',
      'threat detection',
      'data protection',
      'network security',
      'enterprise security',
      'zero-day protection',
      'cyber defense',
      'security solutions',
      'threat intelligence',
      'Texas cybersecurity',
      'United States security'
    ],
    structuredData: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "NovaShield™ Advanced Security Suite",
      "description": "Next-generation cybersecurity platform that creates an impenetrable digital fortress around your enterprise infrastructure.",
      "applicationCategory": "SecurityApplication",
      "operatingSystem": "Cross-platform",
      "offers": {
        "@type": "Offer",
        "price": "Contact for pricing",
        "priceCurrency": "USD"
      }
    }
  },
  novasync: {
    title: 'NovaSync™ Integration Platform | Houston System Integration | Nova Stratagem',
    description: 'Connect your systems with NovaSync™, the seamless integration hub. Universal connectivity for Houston businesses. Real-time synchronization and workflow automation.',
    keywords: [
      'system integration',
      'Houston integration',
      'API management',
      'data synchronization',
      'workflow automation',
      'enterprise integration',
      'real-time sync',
      'data connectivity',
      'system connectivity',
      'business integration',
      'Texas integration',
      'United States integration'
    ]
  },
  novaflow: {
    title: 'NovaFlow™ Process Optimization | Houston Workflow Automation | Nova Stratagem',
    description: 'Optimize your processes with NovaFlow™, the intelligent workflow automation engine. Streamline operations for Houston businesses. Eliminate bottlenecks and maximize efficiency.',
    keywords: [
      'process optimization',
      'Houston automation',
      'workflow automation',
      'business process',
      'RPA',
      'process mining',
      'efficiency improvement',
      'automation engine',
      'business optimization',
      'workflow management',
      'Texas automation',
      'United States automation'
    ]
  },
  novavision: {
    title: 'NovaVision™ Predictive Analytics | Houston Business Intelligence | Nova Stratagem',
    description: 'Transform data into insights with NovaVision™, the predictive analytics platform. Business intelligence for Houston enterprises. Advanced data visualization and predictive modeling.',
    keywords: [
      'predictive analytics',
      'Houston business intelligence',
      'data visualization',
      'predictive modeling',
      'business analytics',
      'data insights',
      'trend analysis',
      'business intelligence',
      'data analytics',
      'strategic insights',
      'Texas analytics',
      'United States analytics'
    ]
  },
  novaconnect: {
    title: 'NovaConnect™ Global Network | Houston Network Infrastructure | Nova Stratagem',
    description: 'Connect globally with NovaConnect™, the worldwide network infrastructure. Global connectivity for Houston businesses. High-performance CDN and load balancing solutions.',
    keywords: [
      'global network',
      'Houston connectivity',
      'CDN',
      'load balancing',
      'network infrastructure',
      'global operations',
      'edge computing',
      'network optimization',
      'worldwide connectivity',
      'enterprise networking',
      'Texas networking',
      'United States networking'
    ]
  },
  novasecure: {
    title: 'NovaSecure™ Enterprise Security | Houston Security Framework | Nova Stratagem',
    description: 'Secure your enterprise with NovaSecure™, the comprehensive protection suite. Military-grade security for Houston businesses. Identity management and compliance tools.',
    keywords: [
      'enterprise security',
      'Houston security',
      'identity management',
      'access control',
      'data encryption',
      'compliance',
      'zero trust',
      'enterprise protection',
      'security framework',
      'data privacy',
      'Texas security',
      'United States security'
    ]
  },
  novaglobal: {
    title: 'NovaGlobal™ Worldwide Solutions | Houston Global Services | Nova Stratagem',
    description: 'Go global with NovaGlobal™, the worldwide solutions platform. End-to-end services for Houston businesses expanding globally. Multi-region support and localization.',
    keywords: [
      'global solutions',
      'Houston global services',
      'worldwide operations',
      'multi-region support',
      'localization',
      'global deployment',
      'international expansion',
      'global operations',
      'worldwide services',
      'enterprise global',
      'Texas global',
      'United States global'
    ]
  }
};

export const generateStructuredData = (type: string, data: any) => {
  const baseStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Nova Stratagem",
    "url": "https://novastratagem.com",
    "logo": "https://novastratagem.com/logo.png",
    "description": "Leading enterprise technology solutions provider in Houston, Texas",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Houston",
      "addressRegion": "TX",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://linkedin.com/company/novastratagem",
      "https://twitter.com/novastratagem"
    ]
  };

  switch (type) {
    case 'organization':
      return baseStructuredData;
    case 'service':
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": data.name,
        "description": data.description,
        "provider": baseStructuredData,
        "areaServed": {
          "@type": "Country",
          "name": "United States"
        },
        "serviceType": data.serviceType
      };
    default:
      return baseStructuredData;
  }
};

export const generateMetaTags = (seoData: SEOData) => {
  const tags = [
    { name: 'description', content: seoData.description },
    { name: 'keywords', content: seoData.keywords.join(', ') },
    { property: 'og:title', content: seoData.ogTitle || seoData.title },
    { property: 'og:description', content: seoData.ogDescription || seoData.description },
    { property: 'og:type', content: seoData.ogType || 'website' },
    { property: 'og:image', content: seoData.ogImage || 'https://novastratagem.com/og-image.jpg' },
    { name: 'twitter:card', content: seoData.twitterCard || 'summary_large_image' },
    { name: 'twitter:title', content: seoData.twitterTitle || seoData.title },
    { name: 'twitter:description', content: seoData.twitterDescription || seoData.description },
    { rel: 'canonical', href: seoData.canonicalUrl || 'https://novastratagem.com' }
  ];

  return tags;
};

export const generateLocalBusinessStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Nova Stratagem",
  "description": "Enterprise technology solutions provider in Houston, Texas",
  "url": "https://novastratagem.com",
  "telephone": "+1-713-XXX-XXXX",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123 Business District",
    "addressLocality": "Houston",
    "addressRegion": "TX",
    "postalCode": "77001",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 29.7604,
    "longitude": -95.3698
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": [
      "Monday",
      "Tuesday", 
      "Wednesday",
      "Thursday",
      "Friday"
    ],
    "opens": "09:00",
    "closes": "18:00"
  },
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Enterprise Solutions",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "NovaCore™ Quantum Intelligence Platform"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "NovaShield™ Advanced Security Suite"
        }
      }
    ]
  }
});

export const generateBreadcrumbStructuredData = (breadcrumbs: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((crumb, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": crumb.name,
    "item": crumb.url
  }))
});

export const generateFAQStructuredData = (faqs: Array<{question: string, answer: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
}); 