'use client';

import {
  useEffect,
  useRef,
  useState,
  ReactNode,
  TouchEvent,
  WheelEvent,
  useCallback,
} from 'react';
import { motion } from 'framer-motion';

interface ScrollExpandMediaProps {
  mediaType?: 'video' | 'image';
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  children?: ReactNode;
}

// Throttle function for performance optimization
const throttle = (func: Function, limit: number) => {
  let inThrottle: boolean;
  return function(this: any, ...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
};

const ScrollExpandMedia = ({
  mediaType = 'video',
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  date,
  scrollToExpand,
  textBlend,
  children,
}: ScrollExpandMediaProps) => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [mediaFullyExpanded, setMediaFullyExpanded] = useState<boolean>(false);
  const [touchStartY, setTouchStartY] = useState<number>(0);
  const [isMobileState, setIsMobileState] = useState<boolean>(false);

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    setScrollProgress(0);
    setShowContent(false);
    setMediaFullyExpanded(false);
  }, [mediaType]);

  // Optimized scroll handler with throttling
  const handleScroll = useCallback((deltaY: number) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    animationFrameRef.current = requestAnimationFrame(() => {
      const scrollDelta = deltaY * 0.0008; // Reduced sensitivity for smoother performance
      const newProgress = Math.min(
        Math.max(scrollProgress + scrollDelta, 0),
        1
      );
      setScrollProgress(newProgress);

      if (newProgress >= 1) {
        setMediaFullyExpanded(true);
        setShowContent(true);
      } else if (newProgress < 0.75) {
        setShowContent(false);
      }
    });
  }, [scrollProgress]);

  // Throttled wheel handler
  const throttledWheelHandler = useCallback(
    throttle((e: WheelEvent) => {
      if (mediaFullyExpanded && e.deltaY < 0 && window.scrollY <= 5) {
        setMediaFullyExpanded(false);
        e.preventDefault();
      } else if (!mediaFullyExpanded) {
        e.preventDefault();
        handleScroll(e.deltaY);
      }
    }, 16), // ~60fps
    [mediaFullyExpanded, handleScroll]
  );

  // Optimized touch handlers
  const handleTouchStart = useCallback((e: TouchEvent) => {
    setTouchStartY(e.touches[0].clientY);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!touchStartY) return;

    const touchY = e.touches[0].clientY;
    const deltaY = touchStartY - touchY;

    if (mediaFullyExpanded && deltaY < -20 && window.scrollY <= 5) {
      setMediaFullyExpanded(false);
      e.preventDefault();
    } else if (!mediaFullyExpanded) {
      e.preventDefault();
      const scrollFactor = deltaY < 0 ? 0.006 : 0.004; // Reduced sensitivity
      const scrollDelta = deltaY * scrollFactor;
      handleScroll(scrollDelta);
      setTouchStartY(touchY);
    }
  }, [touchStartY, mediaFullyExpanded, handleScroll]);

  const handleTouchEnd = useCallback(() => {
    setTouchStartY(0);
  }, []);

  // Optimized scroll position handler
  const handleScrollPosition = useCallback(() => {
    if (!mediaFullyExpanded) {
      window.scrollTo(0, 0);
    }
  }, [mediaFullyExpanded]);

  useEffect(() => {
    const throttledScrollPosition = throttle(handleScrollPosition, 100);

    window.addEventListener('wheel', throttledWheelHandler as unknown as EventListener, {
      passive: false,
    });
    window.addEventListener('scroll', throttledScrollPosition as EventListener);
    window.addEventListener(
      'touchstart',
      handleTouchStart as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener(
      'touchmove',
      handleTouchMove as unknown as EventListener,
      { passive: false }
    );
    window.addEventListener('touchend', handleTouchEnd as EventListener);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener(
        'wheel',
        throttledWheelHandler as unknown as EventListener
      );
      window.removeEventListener('scroll', throttledScrollPosition as EventListener);
      window.removeEventListener(
        'touchstart',
        handleTouchStart as unknown as EventListener
      );
      window.removeEventListener(
        'touchmove',
        handleTouchMove as unknown as EventListener
      );
      window.removeEventListener('touchend', handleTouchEnd as EventListener);
    };
  }, [throttledWheelHandler, handleScrollPosition, handleTouchStart, handleTouchMove, handleTouchEnd]);

  useEffect(() => {
    const checkIfMobile = (): void => {
      setIsMobileState(window.innerWidth < 768);
    };

    checkIfMobile();
    const throttledResize = throttle(checkIfMobile, 250);
    window.addEventListener('resize', throttledResize);

    return () => window.removeEventListener('resize', throttledResize);
  }, []);

  const mediaWidth = 300 + scrollProgress * (isMobileState ? 650 : 1250);
  const mediaHeight = 400 + scrollProgress * (isMobileState ? 200 : 400);
  const textTranslateX = scrollProgress * (isMobileState ? 180 : 150);

  const firstWord = title ? title.split(' ')[0] : '';
  const restOfTitle = title ? title.split(' ').slice(1).join(' ') : '';

  return (
    <div
      ref={sectionRef}
      className='transition-colors duration-700 ease-in-out overflow-x-hidden'
    >
      <section className='relative flex flex-col items-center justify-start min-h-[100dvh]'>
        <div className='relative w-full flex flex-col items-center min-h-[100dvh]'>
          <motion.div
            className='absolute inset-0 z-0 h-full'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 - scrollProgress }}
            transition={{ duration: 0.1 }}
          >
            <img
              src={bgImageSrc}
              alt='Background'
              width={1920}
              height={1080}
              className='w-screen h-screen'
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              loading='eager'
            />
            <div className='absolute inset-0 bg-black/10' />
          </motion.div>

          <div className='container mx-auto flex flex-col items-center justify-start relative z-10'>
            <div className='flex flex-col items-center justify-center w-full h-[100dvh] relative'>
              <div
                className='absolute z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-none rounded-2xl'
                style={{
                  width: `${mediaWidth}px`,
                  height: `${mediaHeight}px`,
                  maxWidth: '95vw',
                  maxHeight: '85vh',
                  boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.2)',
                }}
              >
                {mediaType === 'video' ? (
                  mediaSrc.includes('youtube.com') ? (
                    <div className='relative w-full h-full pointer-events-none'>
                      <iframe
                        width='100%'
                        height='100%'
                        src={
                          mediaSrc.includes('embed')
                            ? mediaSrc +
                              (mediaSrc.includes('?') ? '&' : '?') +
                              'autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1'
                            : mediaSrc.replace('watch?v=', 'embed/') +
                              '?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&disablekb=1&modestbranding=1&playlist=' +
                              mediaSrc.split('v=')[1]
                        }
                        className='w-full h-full rounded-xl'
                        frameBorder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowFullScreen
                      />
                      <div
                        className='absolute inset-0 z-10'
                        style={{ pointerEvents: 'none' }}
                      ></div>

                      <motion.div
                        className='absolute inset-0 bg-black/30 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  ) : (
                    <div className='relative w-full h-full pointer-events-none'>
                      <video
                        src={mediaSrc}
                        poster={posterSrc}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className='w-full h-full rounded-xl object-cover'
                      />
                      <motion.div
                        className='absolute inset-0 bg-black/30 rounded-xl'
                        initial={{ opacity: 0.7 }}
                        animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                        transition={{ duration: 0.2 }}
                      />
                    </div>
                  )
                ) : (
                  <div className='relative w-full h-full'>
                    <img
                      src={mediaSrc}
                      alt={title || 'Media'}
                      className='w-full h-full rounded-xl object-cover'
                      loading='eager'
                    />
                    <motion.div
                      className='absolute inset-0 bg-black/30 rounded-xl'
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: 0.5 - scrollProgress * 0.3 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                )}
              </div>

              <motion.div
                className='relative z-10 text-center text-white max-w-4xl mx-auto px-4'
                style={{
                  transform: `translateX(${textTranslateX}px)`,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ 
                  opacity: showContent ? 1 : 0.8,
                  y: showContent ? 0 : 50
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.h1
                  className='text-6xl md:text-8xl font-bold mb-6 leading-tight'
                  style={{
                    textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
                  }}
                >
                  <span className='block'>{firstWord}</span>
                  <span className='block'>{restOfTitle}</span>
                </motion.h1>
                
                {date && (
                  <motion.p
                    className='text-xl md:text-2xl text-gray-300 mb-8'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showContent ? 1 : 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {date}
                  </motion.p>
                )}

                {scrollToExpand && (
                  <motion.div
                    className='text-sm text-gray-400 mt-8'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: showContent ? 0 : 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {scrollToExpand}
                  </motion.div>
                )}

                {children && (
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ 
                      opacity: showContent ? 1 : 0,
                      y: showContent ? 0 : 30
                    }}
                    transition={{ delay: 0.5, duration: 0.5 }}
                  >
                    {children}
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollExpandMedia;
