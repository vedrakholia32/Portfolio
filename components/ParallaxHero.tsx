'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

const ParallaxHero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  // Transform values for parallax effects
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.5, 2])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.5, 0.2])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const backgroundY = useTransform(scrollYProgress, [0, 1], [0, -300])
  
  const [currentSection, setCurrentSection] = useState(0)
    useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((value) => {
      if (value < 0.25) {
        setCurrentSection(0) // Introduction
      } else if (value < 0.65) {
        setCurrentSection(1) // Web Development
      } else {
        setCurrentSection(2) // Machine Learning
      }
    })
    
    return () => unsubscribe()
  }, [scrollYProgress])
  const sections = [
    {
      title: "Hi, I'm Ved",
      subtitle: "Full Stack Developer & AI Enthusiast",
      description: "Welcome to my digital world! I'm a passionate technologist who loves creating innovative solutions that bridge the gap between complex technology and seamless user experiences. Let me take you on a journey through my expertise.",
      bgColor: "from-blue-900 via-purple-900 to-indigo-900",
      textColor: "text-white",
      accentColor: "text-cyan-400"
    },
    {
      title: "Web Development Expert",
      subtitle: "Crafting Digital Experiences",
      description: "I specialize in building modern, responsive web applications using cutting-edge technologies. From React and Next.js to Node.js and TypeScript, I create scalable solutions that perform beautifully across all devices. Clean code, optimized performance, and exceptional user experience are my priorities.",
      bgColor: "from-green-900 via-teal-900 to-blue-900",
      textColor: "text-white",
      accentColor: "text-green-400"
    },
    {
      title: "Machine Learning Enthusiast",
      subtitle: "Exploring AI Frontiers",
      description: "Diving deep into the fascinating world of artificial intelligence and machine learning. I work with neural networks, computer vision, and natural language processing to build intelligent systems that learn, adapt, and solve complex real-world problems. The future is AI, and I'm building it.",
      bgColor: "from-purple-900 via-pink-900 to-red-900",
      textColor: "text-white",
      accentColor: "text-pink-400"
    }
  ]

  const currentSectionData = sections[currentSection]
  return (
    <div ref={containerRef} className="relative h-[400vh] overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className={`fixed inset-0 bg-gradient-to-br ${currentSectionData.bgColor} transition-all duration-1000`}
        style={{ y: backgroundY }}
      >
        {/* Animated particles/dots for tech effect */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Fixed Content Container */}
      <div className="fixed inset-0 flex items-center justify-center">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Side - Content */}
          <motion.div 
            className="text-center lg:text-left z-10"
            style={{ y: textY }}
          >
            <motion.h1 
              className={`text-4xl md:text-6xl font-bold mb-6 ${currentSectionData.textColor}`}
              key={currentSection}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {currentSection === 0 ? (
                <>Hi, I'm <span className={currentSectionData.accentColor}>Ved</span></>
              ) : (
                <span className={currentSectionData.accentColor}>{currentSectionData.title}</span>
              )}
            </motion.h1>
            
            <motion.p 
              className={`text-xl md:text-2xl mb-4 ${currentSectionData.textColor} opacity-90`}
              key={`subtitle-${currentSection}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {currentSectionData.subtitle}
            </motion.p>
            
            <motion.p 
              className={`text-lg mb-8 max-w-2xl ${currentSectionData.textColor} opacity-80`}
              key={`desc-${currentSection}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {currentSectionData.description}
            </motion.p>            {/* Section Indicators with Labels */}
            <div className="flex gap-2 justify-center lg:justify-start mb-8">
              {sections.map((section, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-12 h-1 rounded-full transition-all duration-300 ${
                      index === currentSection 
                        ? `bg-current ${currentSectionData.accentColor}` 
                        : 'bg-white bg-opacity-30'
                    }`}
                  />
                  <span className={`text-xs mt-1 transition-all duration-300 ${
                    index === currentSection 
                      ? `${currentSectionData.accentColor} opacity-100` 
                      : 'text-white opacity-50'
                  }`}>
                    {index === 0 ? 'Intro' : index === 1 ? 'Web Dev' : 'AI/ML'}
                  </span>
                </div>
              ))}
            </div>

            {/* Tech Icons based on section */}
            <motion.div 
              className="flex gap-4 justify-center lg:justify-start"
              key={`icons-${currentSection}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {currentSection === 1 && (
                // Web Dev Icons
                <>
                  <div className="p-3 bg-white bg-opacity-10 rounded-full backdrop-blur-sm">
                    <span className="text-2xl">⚛️</span>
                  </div>
                  <div className="p-3 bg-white bg-opacity-10 rounded-full backdrop-blur-sm">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div className="p-3 bg-white bg-opacity-10 rounded-full backdrop-blur-sm">
                    <span className="text-2xl">💻</span>
                  </div>
                </>
              )}
              {currentSection === 2 && (
                // ML Icons
                <>
                  <div className="p-3 bg-white bg-opacity-10 rounded-full backdrop-blur-sm">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div className="p-3 bg-white bg-opacity-10 rounded-full backdrop-blur-sm">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <div className="p-3 bg-white bg-opacity-10 rounded-full backdrop-blur-sm">
                    <span className="text-2xl">🔬</span>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>

          {/* Right Side - Transforming Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            style={{ scale: imageScale, opacity: imageOpacity }}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white border-opacity-20 shadow-2xl relative"
                animate={{
                  rotateY: currentSection * 5,
                  rotateX: currentSection * 2,
                }}
                transition={{ duration: 1 }}
              >
                {/* Base Image */}
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Ved"
                  width={400}
                  height={400}
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    currentSection === 2 ? 'filter brightness-50 contrast-200 hue-rotate-180' : ''
                  }`}
                />
                
                {/* Neural Network Overlay for ML section */}
                {currentSection === 2 && (
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full opacity-60" viewBox="0 0 400 400">
                      {/* Neural network nodes */}
                      {[...Array(12)].map((_, i) => {
                        const angle = (i * 30) * (Math.PI / 180)
                        const radius = 120 + Math.sin(Date.now() * 0.001 + i) * 20
                        const x = 200 + Math.cos(angle) * radius
                        const y = 200 + Math.sin(angle) * radius
                        
                        return (
                          <motion.circle
                            key={i}
                            cx={x}
                            cy={y}
                            r="4"
                            fill="#ff006e"
                            animate={{
                              r: [3, 6, 3],
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: i * 0.1,
                            }}
                          />
                        )
                      })}
                      
                      {/* Neural network connections */}
                      {[...Array(8)].map((_, i) => (
                        <motion.line
                          key={i}
                          x1={200}
                          y1={200}
                          x2={200 + Math.cos(i * 45 * Math.PI / 180) * 140}
                          y2={200 + Math.sin(i * 45 * Math.PI / 180) * 140}
                          stroke="#ff006e"
                          strokeWidth="1"
                          opacity="0.4"
                          animate={{
                            opacity: [0.2, 0.8, 0.2],
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.2,
                          }}
                        />
                      ))}
                    </svg>
                  </div>
                )}
                
                {/* Tech Grid Overlay for Web Dev section */}
                {currentSection === 1 && (
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="w-full h-full opacity-30">
                      <div className="grid grid-cols-6 gap-1 h-full p-4">
                        {[...Array(36)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="bg-green-400 rounded-sm"
                            animate={{
                              opacity: [0.1, 0.8, 0.1],
                              scale: [0.8, 1.2, 0.8],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: (i % 6) * 0.1,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-20 h-20 rounded-full flex items-center justify-center backdrop-blur-sm"
                style={{
                  background: currentSection === 1 ? 'rgba(34, 197, 94, 0.2)' : 
                             currentSection === 2 ? 'rgba(236, 72, 153, 0.2)' : 
                             'rgba(59, 130, 246, 0.2)'
                }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity },
                }}
              >
                <div className={`w-12 h-12 rounded-full ${
                  currentSection === 1 ? 'bg-green-400' : 
                  currentSection === 2 ? 'bg-pink-400' : 
                  'bg-blue-400'
                }`}></div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
        {/* Scroll Indicator - Only show until almost end */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 1 }}
        animate={{ opacity: scrollYProgress.get() > 0.85 ? 0 : 1 }}
      >
        <div className="flex flex-col items-center text-white">
          <p className="text-sm mb-2 opacity-80">
            {currentSection === 0 ? "Scroll to explore my journey" : 
             currentSection === 1 ? "Continue scrolling for ML expertise" :
             "Keep scrolling to see my work"}
          </p>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white border-opacity-50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white bg-opacity-80 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>

      {/* Transition to next section */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"
        style={{
          opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1])
        }}
      />
    </div>
  )
}

export default ParallaxHero
