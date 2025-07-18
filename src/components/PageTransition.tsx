import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTransition: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    
    // Brief loading state for smooth transitions
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 animate-pulse">
      <div className="h-full bg-gradient-to-r from-transparent via-white to-transparent animate-ping"></div>
    </div>
  );
};

export default PageTransition; 