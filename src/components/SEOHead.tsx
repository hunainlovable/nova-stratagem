import { useEffect } from 'react';
import { SEOData } from '@/lib/seo';

interface SEOHeadProps {
  seo: SEOData;
  structuredData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({ seo, structuredData }) => {
  useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update meta tags
    const updateMeta = (selector: string, content: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement;
      if (element) {
        element.content = content;
      } else {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          element.setAttribute('property', selector.split('property="')[1].split('"')[0]);
        } else {
          element.setAttribute('name', selector.split('name="')[1].split('"')[0]);
        }
        element.content = content;
        document.head.appendChild(element);
      }
    };

    // Update basic meta tags
    updateMeta('meta[name="description"]', seo.description);
    updateMeta('meta[name="keywords"]', seo.keywords.join(', '));
    
    // Update Open Graph tags
    updateMeta('meta[property="og:title"]', seo.ogTitle || seo.title);
    updateMeta('meta[property="og:description"]', seo.ogDescription || seo.description);
    updateMeta('meta[property="og:type"]', seo.ogType || 'website');
    updateMeta('meta[property="og:image"]', seo.ogImage || 'https://novastratagem.com/og-image.jpg');
    updateMeta('meta[property="og:url"]', seo.canonicalUrl || window.location.href);

    // Update Twitter tags
    updateMeta('meta[name="twitter:card"]', seo.twitterCard || 'summary_large_image');
    updateMeta('meta[name="twitter:title"]', seo.twitterTitle || seo.title);
    updateMeta('meta[name="twitter:description"]', seo.twitterDescription || seo.description);
    updateMeta('meta[name="twitter:image"]', seo.ogImage || 'https://novastratagem.com/twitter-image.jpg');

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (canonical) {
      canonical.href = seo.canonicalUrl || window.location.href;
    } else {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = seo.canonicalUrl || window.location.href;
      document.head.appendChild(canonical);
    }

    // Add structured data
    if (structuredData) {
      let script = document.querySelector('script[type="application/ld+json"][data-seo="dynamic"]') as HTMLScriptElement;
      if (script) {
        script.textContent = JSON.stringify(structuredData);
      } else {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-seo', 'dynamic');
        script.textContent = JSON.stringify(structuredData);
        document.head.appendChild(script);
      }
    }
  }, [seo, structuredData]);

  return null;
};

export default SEOHead;