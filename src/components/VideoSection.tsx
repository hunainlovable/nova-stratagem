import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';

const VideoSection: React.FC = () => {
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
    <section className="relative py-24 overflow-hidden classified-gradient-bg">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-md bg-red-500/10 border border-red-500/30 mb-6">
            <div className="status-indicator-classified mr-2"></div>
            <span className="text-red-400 text-xs font-mono tracking-wider uppercase">ENTERPRISE PRESENTATION</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 classified-header">
            NOVA STRATAGEM
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed monospace-text font-bold">
            EXPERIENCE THE FUTURE OF ENTERPRISE TECHNOLOGY SOLUTIONS
          </p>
        </div>

        {/* Video Container */}
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="relative rounded-2xl overflow-hidden classified-panel"
            style={{
              boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)'
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Video Element */}
            <video
              ref={videoRef}
              className="w-full h-auto max-h-[70vh] object-cover cursor-pointer"
              onClick={handleVideoClick}
              onEnded={handleVideoEnded}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              poster="/thumbnail.png"
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
                    className="w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center transition-all duration-200 futuristic-glow-blue"
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 text-white" />
                    ) : (
                      <Play className="w-5 h-5 text-white ml-1" />
                    )}
                  </button>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gray-600/50 flex items-center justify-center transition-all duration-200"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>

                  {/* Video Status */}
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-500'}`}></div>
                    <span className="text-white text-sm font-mono">
                      {isPlaying ? 'PLAYING' : 'PAUSED'}
                    </span>
                  </div>
                </div>

                {/* Fullscreen Button */}
                <button
                  onClick={toggleFullscreen}
                  className="w-10 h-10 rounded-full bg-gray-700/50 hover:bg-gray-600/50 flex items-center justify-center transition-all duration-200"
                >
                  <Maximize2 className="w-4 h-4 text-white" />
                </button>
              </div>
            </motion.div>

            {/* Video Info Overlay */}
            <div className="absolute top-6 left-6">
              <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <span className="text-white text-sm font-mono">NOVA STRATAGEM PRESENTATION</span>
              </div>
            </div>
          </motion.div>

          {/* Video Description */}
          <motion.div 
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed monospace-text">
              Experience the cutting-edge technology and innovative solutions that define Nova Stratagem. 
              Our comprehensive enterprise platform delivers unmatched performance, security, and scalability 
              for forward-thinking organizations across the United States.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-tesla-primary text-lg px-8 py-3 futuristic-glow-blue transform hover:scale-105 transition-all duration-300">
              EXPLORE SOLUTIONS
            </button>
            <button className="btn-tesla-secondary text-lg px-8 py-3 transform hover:scale-105 transition-all duration-300">
              CONTACT TEAM
            </button>
          </div>
        </motion.div>
      </div>

      {/* Connector */}
      <div className="classified-connector absolute bottom-0 left-0 right-0 h-2"></div>
    </section>
  );
};

export default VideoSection; 