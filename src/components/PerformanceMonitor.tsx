import React, { useEffect, useState } from 'react';

interface PerformanceMetrics {
  fps: number;
  memoryUsage?: number;
  loadTime: number;
  renderTime: number;
}

const PerformanceMonitor: React.FC = () => {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 0,
    loadTime: 0,
    renderTime: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(prev => !prev);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    // FPS monitoring
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime));
        setMetrics(prev => ({ ...prev, fps }));
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };

    // Memory usage monitoring (if available)
    const updateMemoryUsage = () => {
      if ('memory' in performance) {
        const memory = (performance as any).memory;
        const memoryUsage = Math.round(memory.usedJSHeapSize / 1024 / 1024); // MB
        setMetrics(prev => ({ ...prev, memoryUsage }));
      }
    };

    // Page load time
    const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
    setMetrics(prev => ({ ...prev, loadTime }));

    // Start monitoring
    measureFPS();
    const memoryInterval = setInterval(updateMemoryUsage, 1000);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
      cancelAnimationFrame(animationId);
      clearInterval(memoryInterval);
    };
  }, []);

  if (!isVisible || process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 text-white p-4 rounded-lg font-mono text-sm backdrop-blur-sm border border-white/20">
      <div className="mb-2 font-bold text-blue-400">Performance Monitor</div>
      <div className="space-y-1">
        <div className="flex justify-between">
          <span>FPS:</span>
          <span className={metrics.fps > 50 ? 'text-green-400' : metrics.fps > 30 ? 'text-yellow-400' : 'text-red-400'}>
            {metrics.fps}
          </span>
        </div>
        {metrics.memoryUsage && (
          <div className="flex justify-between">
            <span>Memory:</span>
            <span className={metrics.memoryUsage < 100 ? 'text-green-400' : metrics.memoryUsage < 200 ? 'text-yellow-400' : 'text-red-400'}>
              {metrics.memoryUsage}MB
            </span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Load Time:</span>
          <span>{metrics.loadTime}ms</span>
        </div>
        <div className="flex justify-between">
          <span>Render Time:</span>
          <span>{metrics.renderTime}ms</span>
        </div>
      </div>
      <div className="mt-2 text-xs text-gray-400">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  );
};

export default PerformanceMonitor; 