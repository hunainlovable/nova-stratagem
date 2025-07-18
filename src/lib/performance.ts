// Performance optimization utilities

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

export const requestAnimationFrameThrottle = <T extends (...args: any[]) => any>(
  func: T
): ((...args: Parameters<T>) => void) => {
  let ticking = false;
  
  return (...args: Parameters<T>) => {
    if (!ticking) {
      requestAnimationFrame(() => {
        func(...args);
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Performance monitoring utilities
export const measurePerformance = (name: string, fn: () => void) => {
  const start = performance.now();
  fn();
  const end = performance.now();
  console.log(`${name} took ${end - start}ms`);
};

// Memory optimization utilities
export const cleanupEventListeners = (element: HTMLElement | Window, event: string, handler: EventListener) => {
  element.removeEventListener(event, handler);
};

// Image optimization utilities
export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

// Batch DOM updates
export const batchDOMUpdates = (updates: (() => void)[]) => {
  requestAnimationFrame(() => {
    updates.forEach(update => update());
  });
};

// Intersection Observer with performance optimization
export const createOptimizedIntersectionObserver = (
  callback: IntersectionObserverCallback,
  options: IntersectionObserverInit = {}
) => {
  const defaultOptions: IntersectionObserverInit = {
    threshold: 0.1,
    rootMargin: '50px',
    ...options,
  };
  
  return new IntersectionObserver(callback, defaultOptions);
};

// Resize observer with throttling
export const createThrottledResizeObserver = (
  callback: (entries: ResizeObserverEntry[]) => void,
  throttleMs: number = 16
) => {
  const throttledCallback = throttle(callback, throttleMs);
  return new ResizeObserver(throttledCallback);
}; 