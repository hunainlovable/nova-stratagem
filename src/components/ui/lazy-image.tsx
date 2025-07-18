import React, { useState, useEffect, useRef } from 'react';
import { useIntersectionObserver } from '../../hooks/use-intersection-observer';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzM3NDE1MSIvPjwvc3ZnPg==',
  width,
  height,
  loading = 'lazy'
}) => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px',
  });

  useEffect(() => {
    if (isIntersecting && !imageLoaded && !imageError) {
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setImageLoaded(true);
      };
      
      img.onerror = () => {
        setImageError(true);
        setImageSrc(placeholder);
      };
      
      img.src = src;
    }
  }, [isIntersecting, src, imageLoaded, imageError, placeholder]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div ref={elementRef as React.RefObject<HTMLDivElement>}>
        <img
          ref={imgRef}
          src={imageSrc}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className={`transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            filter: imageLoaded ? 'none' : 'blur(10px)',
          }}
        />
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-800 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LazyImage; 