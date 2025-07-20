import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

const VideoSection: React.FC = React.memo(() => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleVideoClick = () => {
    setShowControls(!showControls);
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  return (
    <section className="relative py-28 md:py-36 overflow-hidden">
      {/* Optimized Static Gradient Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0ea5e9]" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-md bg-cyan-500/20 border border-cyan-400/30 mb-6 shadow-lg">
            <div className="status-indicator-classified mr-2"></div>
            <span className="monospace-text text-xs font-mono tracking-wider uppercase !text-white" style={{color: '#fff'}}>Enterprise Presentation</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 classified-header text-white drop-shadow-lg">
            NOVA STRATAGEM
          </h2>
          <p className="monospace-text text-lg max-w-3xl mx-auto leading-relaxed font-bold drop-shadow !text-white" style={{color: '#fff'}}>
            EXPERIENCE THE FUTURE OF ENTERPRISE TECHNOLOGY SOLUTIONS
          </p>
        </div>

        {/* Video Container with Light Glassmorphism and Minimal Shadow */}
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="relative rounded-3xl overflow-hidden bg-white/10 shadow-xl border border-cyan-400/20"
            style={{
              boxShadow: '0 8px 32px 0 rgba(14,165,233,0.10), 0 0 16px 0 rgba(59,130,246,0.08)'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-auto max-h-[60vh] object-cover cursor-pointer"
              onClick={handleVideoClick}
              onEnded={handleVideoEnded}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              poster="/thumbnail.png"
              style={{borderRadius: '1.5rem'}}
              preload="none"
            >
              <source src="/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            {/* Video Controls Overlay */}
            <motion.div 
              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0'}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: showControls ? 1 : 0 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlay}
                    className="w-12 h-12 rounded-full bg-cyan-500/80 hover:bg-cyan-400 shadow-lg flex items-center justify-center transition-all duration-200 border-2 border-cyan-300"
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-1" />
                    )}
                  </button>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-slate-800/70 hover:bg-slate-700/80 flex items-center justify-center transition-all duration-200 border border-cyan-300"
                  >
                    {isMuted ? (
                      <VolumeX className="w-5 h-5 text-cyan-200" />
                    ) : (
                      <Volume2 className="w-5 h-5 text-cyan-200" />
                    )}
                  </button>

                  {/* Video Status */}
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-400 animate-pulse' : 'bg-cyan-300'}`}></div>
                    <span className="text-cyan-100 text-sm font-mono">
                      {isPlaying ? 'PLAYING' : 'PAUSED'}
                    </span>
                  </div>
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 rounded-full bg-slate-800/70 hover:bg-slate-700/80 flex items-center justify-center transition-all duration-200 border border-cyan-300"
                >
                  <Maximize2 className="w-5 h-5 text-cyan-200" />
                </button>
              </div>
            </motion.div>

            {/* Video Info Overlay */}
            <div className="absolute top-6 left-6">
              <div className="bg-cyan-700/60 backdrop-blur-sm rounded-lg px-4 py-2 shadow-md">
                <span className="text-white text-sm font-mono tracking-wide">NOVA STRATAGEM PRESENTATION</span>
              </div>
            </div>
          </motion.div>

          {/* Video Description */}
          <motion.div 
            className="mt-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="monospace-text text-lg max-w-4xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] !text-white" style={{color: '#fff'}}>
              Experience the cutting-edge technology and innovative solutions that define Nova Stratagem. 
              Our comprehensive enterprise platform delivers unmatched performance, security, and scalability 
              for forward-thinking organizations across the United States.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-tesla-primary text-lg px-8 py-3 futuristic-glow-blue transform hover:scale-105 transition-all duration-300 text-white">
              EXPLORE SOLUTIONS
            </button>
            <button className="btn-tesla-secondary text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300 text-white">
              CONTACT TEAM
            </button>
          </div>
        </motion.div>
      </div>

      {/* Connector */}
      <div className="classified-connector absolute bottom-0 left-0 right-0 h-2"></div>
    </section>
  );
});

export default VideoSection; 