import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, TrendingUp, Shield, Zap, Globe, Users, Clock, Target, Building2, Award, BarChart3 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { serviceSEO } from '@/lib/seo';

interface ServiceData {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  color: string;
  colorClass: string;
  badgeClass: string;
  glowClass: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: string[];
  useCases: string[];
  technologies: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  content: {
    overview: string;
    howItWorks: string;
    features: { title: string; description: string }[];
    benefits: { title: string; description: string }[];
    industries: string[];
    caseStudies: { title: string; description: string }[];
  };
}

const servicesData: Record<string, ServiceData> = {
  novashield: {
    id: 'novashield',
    title: 'NovaShield™',
    subtitle: 'Advanced Cybersecurity Platform',
    icon: '🛡️',
    color: 'green',
    colorClass: 'from-green-600 to-emerald-600',
    badgeClass: 'clearance-badge-security',
    glowClass: 'futuristic-glow-green',
    description: 'Next-generation cybersecurity platform that creates an impenetrable digital fortress around your enterprise infrastructure.',
    longDescription: 'NovaShield™ provides comprehensive cybersecurity protection through advanced threat detection, behavioral analysis, and automated response systems. Our platform safeguards your digital assets with military-grade security protocols, ensuring your enterprise remains protected against evolving cyber threats.',
    features: ['Zero-Day Protection', 'Behavioral Analysis', 'Threat Intelligence', 'Incident Response'],
    benefits: ['99.99% Threat Detection', 'Real-time Protection', 'Automated Response', 'Compliance Ready'],
    useCases: ['Data Protection', 'Network Security', 'Application Security', 'Compliance Management'],
    technologies: ['AI Threat Detection', 'Behavioral Analytics', 'Machine Learning', 'Blockchain Security'],
    seoTitle: 'NovaShield™ Advanced Cybersecurity | Houston Security Solutions | Nova Stratagem',
    seoDescription: 'Protect your enterprise with NovaShield™, the advanced cybersecurity platform. Military-grade protection for Houston businesses. Zero-day threat detection and automated response.',
    seoKeywords: ['cybersecurity', 'Houston security', 'threat detection', 'data protection', 'network security', 'enterprise security', 'zero-day protection', 'cyber defense', 'security solutions', 'threat intelligence'],
    content: {
      overview: 'NovaShield™ represents the next generation of cybersecurity protection, designed specifically for Houston enterprises and organizations across the United States. Our advanced security platform creates an impenetrable digital fortress around your critical infrastructure, protecting against both known and emerging cyber threats. With military-grade security protocols and AI-powered threat detection, NovaShield™ ensures your digital assets remain secure in an increasingly hostile cyber landscape.',
      howItWorks: 'NovaShield™ operates through a multi-layered security architecture that combines artificial intelligence, machine learning, and behavioral analytics to detect and neutralize threats before they can compromise your systems. The platform continuously monitors network traffic, user behavior, and system activities, identifying anomalies and potential threats in real-time. When threats are detected, our automated response system immediately takes action to contain and eliminate the risk, while providing detailed analytics and reporting for security teams.',
      features: [
        {
          title: 'Zero-Day Threat Protection',
          description: 'Advanced AI algorithms that detect and neutralize previously unknown threats by analyzing behavioral patterns and system anomalies, providing protection against zero-day attacks.'
        },
        {
          title: 'Behavioral Analysis Engine',
          description: 'Sophisticated behavioral analytics that monitor user and system behavior patterns, identifying potential security threats through anomaly detection and predictive modeling.'
        },
        {
          title: 'Global Threat Intelligence',
          description: 'Real-time threat intelligence feeds from global security networks, ensuring your organization is protected against the latest cyber threats and attack vectors.'
        },
        {
          title: 'Automated Incident Response',
          description: 'Intelligent incident response system that automatically contains and neutralizes threats, minimizing damage and reducing response times from hours to seconds.'
        }
      ],
      benefits: [
        {
          title: 'Comprehensive Threat Detection',
          description: 'Achieve 99.99% threat detection rates through advanced AI algorithms and behavioral analytics that identify both known and unknown security threats.'
        },
        {
          title: 'Real-time Protection',
          description: 'Continuous monitoring and protection that operates 24/7, ensuring your systems remain secure against evolving cyber threats at all times.'
        },
        {
          title: 'Automated Security Response',
          description: 'Reduce incident response times from hours to seconds with automated threat containment and neutralization capabilities.'
        },
        {
          title: 'Regulatory Compliance',
          description: 'Built-in compliance frameworks for HIPAA, SOX, PCI-DSS, and other regulatory requirements, ensuring your security measures meet industry standards.'
        }
      ],
      industries: ['Healthcare', 'Financial Services', 'Government', 'Education', 'Manufacturing', 'Retail', 'Technology', 'Energy'],
      caseStudies: [
        {
          title: 'Houston Medical Center',
          description: 'Protected patient data with NovaShield™, achieving 100% HIPAA compliance and preventing 156 attempted cyber attacks in the first year.'
        },
        {
          title: 'Texas Banking Consortium',
          description: 'Deployed advanced security suite across 12 branches, reducing security incidents by 89% and achieving PCI-DSS compliance within 30 days.'
        }
      ]
    }
  },
  novapulse: {
    id: 'novapulse',
    title: 'NovaPulse™',
    subtitle: 'Real-Time Performance Monitoring',
    icon: '⚡',
    color: 'blue',
    colorClass: 'from-blue-600 to-cyan-600',
    badgeClass: 'clearance-badge-safety',
    glowClass: 'futuristic-glow-blue',
    description: 'Advanced real-time monitoring and performance optimization platform that keeps your systems running at peak efficiency.',
    longDescription: 'NovaPulse™ delivers comprehensive real-time monitoring and performance optimization for enterprise systems. Our platform provides instant visibility into system health, performance metrics, and operational efficiency, enabling proactive optimization and preventing costly downtime.',
    features: ['Real-Time Monitoring', 'Performance Analytics', 'Predictive Maintenance', 'Automated Optimization'],
    benefits: ['99.9% Uptime', 'Proactive Issue Detection', 'Performance Optimization', 'Cost Reduction'],
    useCases: ['System Monitoring', 'Performance Optimization', 'Predictive Maintenance', 'Capacity Planning'],
    technologies: ['Real-Time Analytics', 'Machine Learning', 'Predictive Modeling', 'Automation Engine'],
    seoTitle: 'NovaPulse™ Performance Monitoring | Houston System Monitoring | Nova Stratagem',
    seoDescription: 'Monitor and optimize performance with NovaPulse™, the real-time performance monitoring platform. Proactive system optimization for Houston businesses.',
    seoKeywords: ['performance monitoring', 'Houston monitoring', 'real-time analytics', 'system optimization', 'predictive maintenance', 'uptime monitoring', 'performance analytics', 'system health', 'automated optimization', 'capacity planning'],
    content: {
      overview: 'NovaPulse™ is our advanced real-time performance monitoring platform designed to keep Houston businesses and organizations across the United States operating at peak efficiency. By providing instant visibility into system health, performance metrics, and operational efficiency, NovaPulse™ enables proactive optimization and prevents costly downtime through intelligent monitoring and automated response systems.',
      howItWorks: 'NovaPulse™ operates through a sophisticated monitoring architecture that continuously tracks system performance, resource utilization, and operational metrics in real-time. Our AI-powered analytics engine processes vast amounts of data to identify performance bottlenecks, predict potential issues, and automatically implement optimization strategies. The platform provides comprehensive dashboards and alerts that enable IT teams to maintain optimal system performance and prevent disruptions.',
      features: [
        {
          title: 'Real-Time System Monitoring',
          description: 'Continuous monitoring of all system components, applications, and infrastructure with millisecond-level precision and instant alerting capabilities.'
        },
        {
          title: 'Advanced Performance Analytics',
          description: 'Deep performance analytics that identify bottlenecks, optimize resource allocation, and provide actionable insights for system improvement.'
        },
        {
          title: 'Predictive Maintenance',
          description: 'AI-powered predictive maintenance that identifies potential issues before they cause downtime, enabling proactive system optimization.'
        },
        {
          title: 'Automated Optimization',
          description: 'Intelligent automation that continuously optimizes performance without manual intervention, ensuring maximum efficiency at all times.'
        }
      ],
      benefits: [
        {
          title: 'Maximum System Uptime',
          description: 'Achieve 99.9% uptime through proactive monitoring and automated optimization that prevents system failures and performance degradation.'
        },
        {
          title: 'Proactive Issue Detection',
          description: 'Identify and resolve performance issues before they impact users, reducing downtime and maintaining optimal system performance.'
        },
        {
          title: 'Continuous Optimization',
          description: 'Automatically optimize system performance and resource allocation to ensure maximum efficiency and cost-effectiveness.'
        },
        {
          title: 'Reduced Operational Costs',
          description: 'Lower operational costs through improved efficiency, reduced resource consumption, and optimized system utilization.'
        }
      ],
      industries: ['Technology', 'Manufacturing', 'Healthcare', 'Financial Services', 'Retail', 'Energy', 'Transportation', 'Telecommunications'],
      caseStudies: [
        {
          title: 'Houston Data Center',
          description: 'Implemented NovaPulse™ monitoring, achieving 99.99% uptime and reducing operational costs by 35% through automated optimization.'
        },
        {
          title: 'Texas Manufacturing Plant',
          description: 'Deployed performance monitoring across production systems, reducing downtime by 78% and increasing productivity by 42%.'
        }
      ]
    }
  },
  novasphere: {
    id: 'novasphere',
    title: 'NovaSphere™',
    subtitle: 'Cloud Infrastructure Platform',
    icon: '🌐',
    color: 'purple',
    colorClass: 'from-purple-600 to-violet-600',
    badgeClass: 'clearance-badge-trust',
    glowClass: 'futuristic-glow-purple',
    description: 'Comprehensive cloud infrastructure platform that provides scalable, secure, and high-performance cloud solutions for enterprise applications.',
    longDescription: 'NovaSphere™ delivers enterprise-grade cloud infrastructure that enables organizations to build, deploy, and scale applications with unprecedented efficiency. Our platform provides secure, reliable, and high-performance cloud services that support the most demanding enterprise workloads.',
    features: ['Scalable Infrastructure', 'Multi-Cloud Support', 'Security & Compliance', 'High Performance'],
    benefits: ['Global Scalability', 'Cost Optimization', 'Security First', 'Performance Excellence'],
    useCases: ['Application Hosting', 'Data Storage', 'Development Platforms', 'Enterprise Migration'],
    technologies: ['Container Orchestration', 'Microservices', 'Serverless Computing', 'Edge Computing'],
    seoTitle: 'NovaSphere™ Cloud Infrastructure | Houston Cloud Solutions | Nova Stratagem',
    seoDescription: 'Scale your infrastructure with NovaSphere™, the comprehensive cloud platform. Enterprise cloud solutions for Houston businesses. Scalable, secure, and high-performance.',
    seoKeywords: ['cloud infrastructure', 'Houston cloud', 'scalable infrastructure', 'multi-cloud', 'cloud security', 'enterprise cloud', 'cloud migration', 'container orchestration', 'serverless computing', 'edge computing'],
    content: {
      overview: 'NovaSphere™ is our comprehensive cloud infrastructure platform designed to provide Houston businesses and organizations across the United States with scalable, secure, and high-performance cloud solutions. Whether you\'re building new applications, migrating existing systems, or scaling your infrastructure, NovaSphere™ provides the enterprise-grade cloud services needed to support your most demanding workloads.',
      howItWorks: 'NovaSphere™ operates through a distributed cloud infrastructure that spans multiple regions and availability zones, ensuring high availability and disaster recovery. Our platform provides container orchestration, microservices support, serverless computing capabilities, and edge computing solutions. The infrastructure automatically scales based on demand, optimizes costs, and maintains security compliance across all environments.',
      features: [
        {
          title: 'Scalable Infrastructure',
          description: 'Automatically scaling infrastructure that grows with your business needs, providing unlimited capacity for applications and workloads.'
        },
        {
          title: 'Multi-Cloud Support',
          description: 'Seamless integration across multiple cloud providers, ensuring optimal performance, cost efficiency, and vendor flexibility.'
        },
        {
          title: 'Enterprise Security',
          description: 'Built-in security features including encryption, identity management, and compliance frameworks for enterprise-grade protection.'
        },
        {
          title: 'High Performance',
          description: 'Optimized infrastructure designed for maximum performance, low latency, and high availability across global regions.'
        }
      ],
      benefits: [
        {
          title: 'Unlimited Scalability',
          description: 'Scale your infrastructure instantly to meet growing demands without performance degradation or service interruptions.'
        },
        {
          title: 'Cost Optimization',
          description: 'Intelligent resource management and pricing optimization that reduces cloud costs while maintaining performance.'
        },
        {
          title: 'Enhanced Security',
          description: 'Comprehensive security measures that protect your data and applications with enterprise-grade security protocols.'
        },
        {
          title: 'Global Performance',
          description: 'Distributed infrastructure that delivers consistent, high-performance experiences to users worldwide.'
        }
      ],
      industries: ['Technology', 'E-commerce', 'Media & Entertainment', 'Healthcare', 'Financial Services', 'Education', 'Government', 'Startups'],
      caseStudies: [
        {
          title: 'Houston Tech Startup',
          description: 'Scaled from 100 to 10M users with NovaSphere™, achieving 99.99% uptime and reducing infrastructure costs by 40%.'
        },
        {
          title: 'Texas E-commerce Platform',
          description: 'Migrated to cloud infrastructure, improving page load times by 60% and handling 5x traffic during peak seasons.'
        }
      ]
    }
  },
  novavault: {
    id: 'novavault',
    title: 'NovaVault™',
    subtitle: 'Enterprise Data Management',
    icon: '🗄️',
    color: 'cyan',
    colorClass: 'from-cyan-600 to-blue-600',
    badgeClass: 'clearance-badge-trust',
    glowClass: 'futuristic-glow-cyan',
    description: 'Secure, scalable data management platform that transforms how enterprises store, process, and analyze their critical information.',
    longDescription: 'NovaVault™ provides enterprise-grade data management solutions that enable organizations to securely store, process, and analyze vast amounts of data. Our platform combines advanced security, intelligent automation, and powerful analytics to unlock the full potential of your data assets.',
    features: ['Secure Storage', 'Data Analytics', 'Automated Backup', 'Compliance Ready'],
    benefits: ['Data Security', 'Insight Generation', 'Operational Efficiency', 'Regulatory Compliance'],
    useCases: ['Data Warehousing', 'Business Intelligence', 'Compliance Management', 'Data Migration'],
    technologies: ['Big Data Analytics', 'Machine Learning', 'Blockchain Storage', 'AI Processing'],
    seoTitle: 'NovaVault™ Data Management | Houston Data Solutions | Nova Stratagem',
    seoDescription: 'Manage your data with NovaVault™, the enterprise data management platform. Secure data solutions for Houston businesses. Advanced analytics and compliance.',
    seoKeywords: ['data management', 'Houston data', 'enterprise data', 'data analytics', 'data security', 'business intelligence', 'data warehousing', 'compliance management', 'big data', 'data migration'],
    content: {
      overview: 'NovaVault™ is our enterprise-grade data management platform designed to help Houston businesses and organizations across the United States securely store, process, and analyze their critical data assets. With advanced security protocols, intelligent automation, and powerful analytics capabilities, NovaVault™ transforms how enterprises manage and leverage their data for strategic advantage.',
      howItWorks: 'NovaVault™ operates through a sophisticated data management architecture that combines secure storage, intelligent processing, and advanced analytics. The platform automatically organizes, encrypts, and optimizes data storage while providing powerful tools for data analysis, reporting, and business intelligence. Advanced AI algorithms process data in real-time, providing actionable insights and automated compliance management.',
      features: [
        {
          title: 'Secure Data Storage',
          description: 'Military-grade encryption and security protocols that protect your data with multiple layers of security and access controls.'
        },
        {
          title: 'Advanced Analytics',
          description: 'Powerful analytics engine that processes data in real-time, providing actionable insights and predictive modeling capabilities.'
        },
        {
          title: 'Automated Backup',
          description: 'Intelligent backup and recovery systems that ensure data protection and business continuity with zero data loss.'
        },
        {
          title: 'Compliance Management',
          description: 'Built-in compliance frameworks for GDPR, HIPAA, SOX, and other regulatory requirements with automated audit trails.'
        }
      ],
      benefits: [
        {
          title: 'Enhanced Data Security',
          description: 'Protect your critical data with enterprise-grade security measures and encryption protocols that meet industry standards.'
        },
        {
          title: 'Actionable Insights',
          description: 'Transform raw data into actionable business intelligence that drives strategic decision-making and operational improvements.'
        },
        {
          title: 'Operational Efficiency',
          description: 'Streamline data operations with automated processes that reduce manual effort and improve data quality.'
        },
        {
          title: 'Regulatory Compliance',
          description: 'Ensure compliance with industry regulations through automated compliance monitoring and reporting capabilities.'
        }
      ],
      industries: ['Healthcare', 'Financial Services', 'Retail', 'Manufacturing', 'Technology', 'Government', 'Education', 'Energy'],
      caseStudies: [
        {
          title: 'Houston Healthcare Network',
          description: 'Managed 50TB of patient data with NovaVault™, achieving 100% HIPAA compliance and improving data access by 300%.'
        },
        {
          title: 'Texas Financial Institution',
          description: 'Processed 1M+ transactions daily with NovaVault™, reducing data processing time by 75% and improving accuracy by 99.9%.'
        }
      ]
    }
  },
  novavision: {
    id: 'novavision',
    title: 'NovaVision™',
    subtitle: 'AI-Powered Analytics Platform',
    icon: '🔮',
    color: 'purple',
    colorClass: 'from-purple-600 to-pink-600',
    badgeClass: 'clearance-badge-safety',
    glowClass: 'futuristic-glow-purple',
    description: 'Advanced AI and machine learning platform that provides predictive analytics and intelligent insights for strategic decision-making.',
    longDescription: 'NovaVision™ leverages cutting-edge artificial intelligence and machine learning technologies to provide predictive analytics and intelligent insights. Our platform transforms complex data into actionable intelligence, enabling organizations to make informed strategic decisions and predict future trends.',
    features: ['Predictive Analytics', 'Machine Learning', 'Data Visualization', 'Intelligent Insights'],
    benefits: ['Predictive Capabilities', 'Strategic Insights', 'Automated Analysis', 'Competitive Advantage'],
    useCases: ['Market Analysis', 'Risk Assessment', 'Customer Insights', 'Operational Optimization'],
    technologies: ['Deep Learning', 'Neural Networks', 'Predictive Modeling', 'Natural Language Processing'],
    seoTitle: 'NovaVision™ AI Analytics | Houston AI Solutions | Nova Stratagem',
    seoDescription: 'Unlock insights with NovaVision™, the AI-powered analytics platform. Predictive analytics for Houston businesses. Machine learning and intelligent insights.',
    seoKeywords: ['AI analytics', 'Houston AI', 'predictive analytics', 'machine learning', 'data visualization', 'business intelligence', 'predictive modeling', 'artificial intelligence', 'data insights', 'strategic analytics'],
    content: {
      overview: 'NovaVision™ is our advanced AI-powered analytics platform designed to help Houston businesses and organizations across the United States unlock the full potential of their data through predictive analytics and intelligent insights. By combining cutting-edge machine learning algorithms with powerful visualization tools, NovaVision™ transforms complex data into actionable intelligence that drives strategic decision-making.',
      howItWorks: 'NovaVision™ operates through a sophisticated AI architecture that processes vast amounts of data using advanced machine learning algorithms and neural networks. The platform continuously learns from data patterns, identifies trends, and generates predictive models that provide insights into future outcomes. Real-time data processing and visualization tools enable users to explore data interactively and discover hidden patterns.',
      features: [
        {
          title: 'Predictive Analytics',
          description: 'Advanced algorithms that analyze historical data to predict future trends, behaviors, and outcomes with high accuracy.'
        },
        {
          title: 'Machine Learning Engine',
          description: 'Sophisticated ML models that continuously learn and improve, providing increasingly accurate predictions and insights.'
        },
        {
          title: 'Interactive Visualization',
          description: 'Powerful data visualization tools that transform complex data into intuitive charts, graphs, and interactive dashboards.'
        },
        {
          title: 'Intelligent Insights',
          description: 'AI-generated insights that automatically identify patterns, anomalies, and opportunities in your data.'
        }
      ],
      benefits: [
        {
          title: 'Predictive Capabilities',
          description: 'Anticipate future trends and outcomes with high accuracy, enabling proactive decision-making and strategic planning.'
        },
        {
          title: 'Strategic Insights',
          description: 'Transform raw data into actionable intelligence that drives strategic decisions and competitive advantage.'
        },
        {
          title: 'Automated Analysis',
          description: 'Reduce manual analysis effort with automated data processing and intelligent insight generation.'
        },
        {
          title: 'Competitive Advantage',
          description: 'Gain competitive edge through advanced analytics capabilities that provide deeper market understanding.'
        }
      ],
      industries: ['Technology', 'Financial Services', 'Healthcare', 'Retail', 'Manufacturing', 'Marketing', 'Research', 'Consulting'],
      caseStudies: [
        {
          title: 'Houston Investment Firm',
          description: 'Implemented NovaVision™ analytics, improving investment returns by 25% and reducing risk assessment time by 80%.'
        },
        {
          title: 'Texas Retail Chain',
          description: 'Used predictive analytics to optimize inventory, reducing stockouts by 60% and increasing sales by 18%.'
        }
      ]
    }
  },
  novamind: {
    id: 'novamind',
    title: 'NovaMind™',
    subtitle: 'Strategic Consulting Platform',
    icon: '🧠',
    color: 'blue',
    colorClass: 'from-blue-600 to-indigo-600',
    badgeClass: 'clearance-badge-trust',
    glowClass: 'futuristic-glow-blue',
    description: 'Comprehensive strategic consulting platform that provides expert guidance and frameworks for business transformation and growth.',
    longDescription: 'NovaMind™ delivers strategic consulting services that help organizations navigate complex business challenges and achieve sustainable growth. Our platform combines expert insights, proven methodologies, and data-driven approaches to develop comprehensive strategic solutions.',
    features: ['Strategic Planning', 'Market Analysis', 'Growth Strategy', 'Transformation Roadmap'],
    benefits: ['Strategic Clarity', 'Market Advantage', 'Sustainable Growth', 'Operational Excellence'],
    useCases: ['Business Strategy', 'Market Entry', 'Digital Transformation', 'Organizational Change'],
    technologies: ['Strategic Frameworks', 'Market Intelligence', 'Business Modeling', 'Change Management'],
    seoTitle: 'NovaMind™ Strategic Consulting | Houston Strategy Consulting | Nova Stratagem',
    seoDescription: 'Transform your strategy with NovaMind™, the strategic consulting platform. Business strategy for Houston companies. Expert guidance and growth planning.',
    seoKeywords: ['strategic consulting', 'Houston consulting', 'business strategy', 'market analysis', 'growth strategy', 'digital transformation', 'organizational change', 'business planning', 'market entry', 'strategic planning'],
    content: {
      overview: 'NovaMind™ is our comprehensive strategic consulting platform designed to help Houston businesses and organizations across the United States develop and execute winning strategies for growth and transformation. By combining expert insights, proven methodologies, and data-driven approaches, NovaMind™ provides the strategic guidance needed to navigate complex business challenges and achieve sustainable success.',
      howItWorks: 'NovaMind™ operates through a structured consulting methodology that begins with comprehensive analysis of your business environment, competitive landscape, and internal capabilities. Our expert consultants work closely with your team to develop customized strategic frameworks, growth roadmaps, and implementation plans. The platform provides ongoing support and monitoring to ensure successful strategy execution and continuous improvement.',
      features: [
        {
          title: 'Strategic Planning',
          description: 'Comprehensive strategic planning that aligns business objectives with market opportunities and organizational capabilities.'
        },
        {
          title: 'Market Intelligence',
          description: 'Deep market analysis and competitive intelligence that provides insights into opportunities and threats.'
        },
        {
          title: 'Growth Strategy',
          description: 'Data-driven growth strategies that identify new markets, products, and business models for sustainable expansion.'
        },
        {
          title: 'Transformation Roadmap',
          description: 'Detailed transformation roadmaps that guide organizational change and digital transformation initiatives.'
        }
      ],
      benefits: [
        {
          title: 'Strategic Clarity',
          description: 'Develop clear, actionable strategies that align with your business objectives and market opportunities.'
        },
        {
          title: 'Market Advantage',
          description: 'Gain competitive advantage through strategic positioning and market intelligence insights.'
        },
        {
          title: 'Sustainable Growth',
          description: 'Achieve sustainable growth through well-planned strategies and execution excellence.'
        },
        {
          title: 'Operational Excellence',
          description: 'Improve operational efficiency and effectiveness through strategic optimization and process improvement.'
        }
      ],
      industries: ['Technology', 'Healthcare', 'Financial Services', 'Manufacturing', 'Retail', 'Energy', 'Professional Services', 'Startups'],
      caseStudies: [
        {
          title: 'Houston Tech Company',
          description: 'Developed growth strategy with NovaMind™, expanding to 15 new markets and increasing revenue by 300% in 2 years.'
        },
        {
          title: 'Texas Healthcare Provider',
          description: 'Executed digital transformation strategy, improving patient outcomes by 40% and reducing operational costs by 25%.'
        }
      ]
    }
  },
  novaboost: {
    id: 'novaboost',
    title: 'NovaBoost™',
    subtitle: 'Digital Transformation Engine',
    icon: '🚀',
    color: 'orange',
    colorClass: 'from-orange-600 to-red-600',
    badgeClass: 'clearance-badge-safety',
    glowClass: 'futuristic-glow-orange',
    description: 'Comprehensive digital transformation platform that accelerates business modernization and technology adoption.',
    longDescription: 'NovaBoost™ provides end-to-end digital transformation solutions that help organizations modernize their operations, adopt new technologies, and achieve digital excellence. Our platform combines strategic planning, technology implementation, and change management to ensure successful transformation outcomes.',
    features: ['Technology Modernization', 'Process Optimization', 'Change Management', 'Digital Adoption'],
    benefits: ['Operational Efficiency', 'Technology Leadership', 'Employee Engagement', 'Customer Experience'],
    useCases: ['Legacy Modernization', 'Process Automation', 'Digital Workplace', 'Customer Experience'],
    technologies: ['Cloud Migration', 'Automation Tools', 'Digital Platforms', 'Integration Services'],
    seoTitle: 'NovaBoost™ Digital Transformation | Houston Digital Solutions | Nova Stratagem',
    seoDescription: 'Accelerate transformation with NovaBoost™, the digital transformation engine. Modernization for Houston businesses. Technology adoption and process optimization.',
    seoKeywords: ['digital transformation', 'Houston digital', 'technology modernization', 'process optimization', 'change management', 'digital adoption', 'legacy modernization', 'automation', 'digital workplace', 'customer experience'],
    content: {
      overview: 'NovaBoost™ is our comprehensive digital transformation platform designed to help Houston businesses and organizations across the United States accelerate their digital modernization journey. By combining strategic planning, technology implementation, and change management, NovaBoost™ ensures successful transformation outcomes that drive operational efficiency and competitive advantage.',
      howItWorks: 'NovaBoost™ operates through a structured transformation methodology that begins with comprehensive assessment of current state, identification of transformation opportunities, and development of a detailed roadmap. Our expert team works closely with your organization to implement new technologies, optimize processes, and manage change effectively. The platform provides ongoing support and monitoring to ensure successful transformation outcomes.',
      features: [
        {
          title: 'Technology Modernization',
          description: 'Comprehensive technology assessment and modernization that replaces legacy systems with modern, scalable solutions.'
        },
        {
          title: 'Process Optimization',
          description: 'End-to-end process analysis and optimization that improves efficiency and reduces operational costs.'
        },
        {
          title: 'Change Management',
          description: 'Structured change management programs that ensure successful adoption of new technologies and processes.'
        },
        {
          title: 'Digital Adoption',
          description: 'Comprehensive digital adoption strategies that maximize the value of technology investments.'
        }
      ],
      benefits: [
        {
          title: 'Operational Efficiency',
          description: 'Improve operational efficiency through process optimization and technology modernization.'
        },
        {
          title: 'Technology Leadership',
          description: 'Establish technology leadership position through strategic digital transformation initiatives.'
        },
        {
          title: 'Employee Engagement',
          description: 'Enhance employee engagement and productivity through digital workplace solutions.'
        },
        {
          title: 'Customer Experience',
          description: 'Improve customer experience through digital channels and automated processes.'
        }
      ],
      industries: ['Manufacturing', 'Healthcare', 'Financial Services', 'Retail', 'Government', 'Education', 'Professional Services', 'Transportation'],
      caseStudies: [
        {
          title: 'Houston Manufacturing Plant',
          description: 'Completed digital transformation with NovaBoost™, reducing production costs by 30% and improving quality by 45%.'
        },
        {
          title: 'Texas Retail Chain',
          description: 'Modernized digital infrastructure, improving customer satisfaction by 60% and increasing online sales by 200%.'
        }
      ]
    }
  },
  novaglobal: {
    id: 'novaglobal',
    title: 'NovaGlobal™',
    subtitle: 'International Expansion Platform',
    icon: '🌍',
    color: 'green',
    colorClass: 'from-green-600 to-teal-600',
    badgeClass: 'clearance-badge-trust',
    glowClass: 'futuristic-glow-green',
    description: 'Comprehensive international expansion platform that enables organizations to successfully enter and scale in global markets.',
    longDescription: 'NovaGlobal™ provides end-to-end international expansion services that help organizations navigate the complexities of global markets. Our platform combines market intelligence, regulatory expertise, and operational support to ensure successful international growth.',
    features: ['Market Entry Strategy', 'Regulatory Compliance', 'Local Partnerships', 'Operational Setup'],
    benefits: ['Global Reach', 'Market Access', 'Risk Mitigation', 'Scalable Growth'],
    useCases: ['International Expansion', 'Market Entry', 'Global Operations', 'Cross-Border Business'],
    technologies: ['Market Intelligence', 'Compliance Management', 'Global Logistics', 'Cultural Intelligence'],
    seoTitle: 'NovaGlobal™ International Expansion | Houston Global Solutions | Nova Stratagem',
    seoDescription: 'Expand globally with NovaGlobal™, the international expansion platform. Global market entry for Houston businesses. International growth and market access.',
    seoKeywords: ['international expansion', 'Houston global', 'market entry', 'global markets', 'regulatory compliance', 'cross-border business', 'global operations', 'market intelligence', 'international growth', 'global expansion'],
    content: {
      overview: 'NovaGlobal™ is our comprehensive international expansion platform designed to help Houston businesses and organizations across the United States successfully enter and scale in global markets. By combining market intelligence, regulatory expertise, and operational support, NovaGlobal™ provides the guidance and resources needed to navigate the complexities of international business.',
      howItWorks: 'NovaGlobal™ operates through a structured international expansion methodology that begins with comprehensive market research, regulatory analysis, and strategic planning. Our expert team works closely with your organization to develop market entry strategies, establish local partnerships, and set up operational infrastructure. The platform provides ongoing support for compliance management, cultural adaptation, and business scaling.',
      features: [
        {
          title: 'Market Entry Strategy',
          description: 'Comprehensive market entry strategies that identify opportunities and develop effective entry approaches for target markets.'
        },
        {
          title: 'Regulatory Compliance',
          description: 'Expert guidance on international regulations, compliance requirements, and legal frameworks for global operations.'
        },
        {
          title: 'Local Partnerships',
          description: 'Strategic partnership development with local businesses, suppliers, and service providers in target markets.'
        },
        {
          title: 'Operational Setup',
          description: 'Complete operational setup including infrastructure, processes, and systems for international business operations.'
        }
      ],
      benefits: [
        {
          title: 'Global Reach',
          description: 'Expand your business reach to international markets and access new customer segments and revenue opportunities.'
        },
        {
          title: 'Market Access',
          description: 'Gain access to new markets through strategic partnerships and local market knowledge.'
        },
        {
          title: 'Risk Mitigation',
          description: 'Minimize international business risks through expert guidance and comprehensive risk management strategies.'
        },
        {
          title: 'Scalable Growth',
          description: 'Achieve scalable growth through systematic international expansion and operational excellence.'
        }
      ],
      industries: ['Technology', 'Manufacturing', 'Financial Services', 'Healthcare', 'Retail', 'Energy', 'Professional Services', 'E-commerce'],
      caseStudies: [
        {
          title: 'Houston Tech Company',
          description: 'Expanded to 12 countries with NovaGlobal™, achieving $50M in international revenue within 18 months.'
        },
        {
          title: 'Texas Manufacturing Firm',
          description: 'Established operations in 8 countries, reducing production costs by 40% and increasing market share by 25%.'
        }
      ]
    }
  }
};

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesData[serviceId] : null;

  useEffect(() => {
    if (service) {
      document.title = service.seoTitle;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link to="/services" className="btn-tesla-primary">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const seoData = serviceId && serviceSEO[serviceId] ? serviceSEO[serviceId] : null;

  return (
    <div className="min-h-screen bg-white">
      {seoData && (
        <SEOHead 
          seo={seoData} 
          structuredData={seoData.structuredData}
        />
      )}
      <Navigation />
      
      <div className="pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="mb-8 flex justify-center space-x-4">
              <span className={`${service.badgeClass} text-sm`}>
                {service.color.toUpperCase()}
              </span>
              <span className="clearance-badge-classified text-sm">
                ENTERPRISE SOLUTION
              </span>
            </div>
            
            <div className={`w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br ${service.colorClass} flex items-center justify-center text-3xl shadow-lg`}>
              {service.icon}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-slate-700 mb-8 max-w-3xl mx-auto">
              {service.subtitle}
            </p>
            
            <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              {service.longDescription}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="btn-tesla-primary text-lg px-8 py-3"
              >
                GET STARTED
              </Link>
              <Link 
                to="/services" 
                className="btn-tesla-secondary text-lg px-8 py-3"
              >
                VIEW ALL SERVICES
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Key Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Advanced capabilities that drive your success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {service.content.features.map((feature, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.colorClass} flex items-center justify-center mb-6`}>
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Business Benefits
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Transform your operations with measurable results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {service.content.benefits.map((benefit, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.colorClass} flex items-center justify-center mb-6`}>
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Proven solutions across diverse sectors
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {service.content.industries.map((industry, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.colorClass} flex items-center justify-center mx-auto mb-4`}>
                  <Building2 className="h-5 w-5 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900">
                  {industry}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Success Stories
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Real results from Houston and Texas businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {service.content.caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.colorClass} flex items-center justify-center mb-6`}>
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {caseStudy.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {caseStudy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Join leading Houston enterprises that trust Nova Stratagem
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="btn-tesla-primary text-lg px-8 py-3"
            >
              START YOUR JOURNEY
            </Link>
            <Link 
              to="/services" 
              className="btn-tesla-secondary text-lg px-8 py-3"
            >
              EXPLORE ALL SOLUTIONS
            </Link>
          </div>
                  </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default ServiceDetail; 