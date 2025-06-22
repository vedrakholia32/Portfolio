'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Brain, BarChart3, Eye, Zap } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import CartoonAvatar from './CartoonAvatar'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -400])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0])
  const webDevY = useTransform(scrollYProgress, [0, 1], [0, 0])
  const webDevOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.55, 0.65], [0, 1, 1, 0])
  const mlY = useTransform(scrollYProgress, [0, 1], [0, 0])
  const mlOpacity = useTransform(scrollYProgress, [0.7, 0.8, 0.92, 1], [0, 1, 1, 0])  // Background image transforms for Web Dev section
  const bgImageScale = useTransform(scrollYProgress, [0, 0.15, 0.4], [1, 1, 0.6])
  const bgImageX = useTransform(scrollYProgress, [0, 0.15, 0.4], ['0%', '0%', '-40%'])
  const bgImageOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25, 0.55, 0.65], [1, 1, 1, 1, 0])  // Dynamic image filter for minimal coding aesthetic + cartoon transformation
  const bgImageFilter = useTransform(
    scrollYProgress,
    [0, 0.15, 0.25, 0.55],
    [
      'none', // Hero: Natural appearance
      'none', // Start of transition
      'grayscale(85%) contrast(1.3) brightness(0.9) saturate(0.2)', // Web Dev: Minimal coding aesthetic
      'grayscale(85%) contrast(1.3) brightness(0.9) saturate(0.2)'  // Web Dev: Maintain minimal look
    ]
  )

  // Transform real image into cartoon
  const imageOpacity = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0])
  const cartoonOpacity = useTransform(scrollYProgress, [0.15, 0.25, 0.55], [0, 1, 1])
  const [webDevVisible, setWebDevVisible] = useState(false)
  const [mlVisible, setMlVisible] = useState(false)
  // Update visibility based on scroll progress
  useEffect(() => {    const unsubscribe = scrollYProgress.onChange((progress) => {
      setWebDevVisible(progress >= 0.15 && progress <= 0.65)
      setMlVisible(progress >= 0.7 && progress <= 0.98)
    })
    return unsubscribe
  }, [scrollYProgress])

  const handleScrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (    <div ref={containerRef} className="relative overflow-x-hidden" style={{ height: '700vh' }}>      {/* Background Image that transforms into cartoon */}
      <motion.div 
        className="fixed inset-0 z-15 pointer-events-none"
        style={{ 
          scale: bgImageScale,
          x: bgImageX,
          opacity: bgImageOpacity,
          transformOrigin: 'center center'
        }}
      >
        {/* Original Image */}
        <motion.div 
          className="absolute inset-0"
          style={{ opacity: imageOpacity, filter: bgImageFilter }}
        >
          <Image
            src="/images/hero-background.png"
            alt="Ved Rakholia Portrait"
            fill
            className="object-contain object-right"
            priority
          />
        </motion.div>

        {/* Cartoon Overlay */}
        <motion.div 
          className="absolute inset-0 flex items-center justify-end pr-32"
          style={{ opacity: cartoonOpacity }}
        >
          <CartoonAvatar />
        </motion.div>
      </motion.div>
      
      {/* Hero Section */}      <motion.section 
        id="home" 
        className="min-h-screen flex items-center justify-center fixed inset-0 overflow-x-hidden relative z-10"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        {/* Additional gradient overlay for better text contrast during hero */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-5"></div>

        <div className="container-custom text-center px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-x-hidden relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 sm:space-y-8 w-full max-w-full"
          >            {/* Main Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-tight break-words w-full max-w-full font-bold text-white"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Ved Rakholia
            </motion.h1>            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-400 max-w-2xl mx-auto px-4 break-words w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Web Developer & Machine Learning Enthusiast
            </motion.p>
          </motion.div>
        </div>{/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer relative z-10"
          onClick={handleScrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >          <div className="flex flex-col items-center space-y-1 sm:space-y-2 text-gray-300 hover:text-white transition-colors duration-300">
            <span className="text-xs uppercase tracking-widest font-light hidden sm:block">Scroll</span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </motion.div>        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-20">
          <motion.div
            className="absolute top-1/3 right-1/5 w-16 h-16 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-blue-50 rounded-full opacity-30"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/5 w-20 h-20 sm:w-40 sm:h-40 md:w-60 md:h-60 bg-purple-50 rounded-full opacity-20"
            animate={{ 
              scale: [1.1, 1, 1.1],
              rotate: [360, 180, 0] 
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </div>
      </motion.section>      {/* Web Development Section */}
      {webDevVisible && (        <motion.section 
          className="min-h-screen flex items-center justify-center fixed inset-0 bg-gradient-to-br from-blue-50/60 to-indigo-100/60 z-20 overflow-x-hidden"
          style={{ y: webDevY, opacity: webDevOpacity }}
        >
        <div className="container-custom px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-x-hidden">
          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 lg:mb-12 w-full max-w-full"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-3 sm:px-4 break-words w-full max-w-full">
              Web Development            
            </h2>            
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-3 sm:px-4 break-words w-full">
              Crafting modern, responsive, and performant web applications using cutting-edge technologies 
              and best practices to deliver exceptional user experiences.
            </p>          
          </motion.div>          

          {/* Two-column layout: Avatar on left, Cards on right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full max-w-6xl mx-auto">
            
            {/* Left Column: Cartoon Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-center space-y-6"
            >
              <CartoonAvatar />
              
              {/* Interactive Message */}
              <motion.div
                className="bg-white/10 backdrop-blur-md rounded-lg p-4 lg:p-6 border border-white/20 max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-gray-600 mb-2">
                  Interactive Mode!
                </h3>
                <p className="text-gray-400 text-sm">
                  Move your cursor around to see my eyes follow you! 
                  This represents my attention to detail and user interaction focus.
                </p>
              </motion.div>
            </motion.div>

            {/* Right Column: Tech Skills Cards */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Tech Skills Grid */}
              <div className="grid grid-cols-2 gap-4 lg:gap-6">
                {[
                  { name: "React", color: "text-cyan-400", bg: "bg-cyan-500/20" },
                  { name: "Next.js", color: "text-white", bg: "bg-gray-500/20" },
                  { name: "TypeScript", color: "text-blue-400", bg: "bg-blue-500/20" },
                  { name: "Node.js", color: "text-green-400", bg: "bg-green-500/20" },
                  { name: "Python", color: "text-yellow-400", bg: "bg-yellow-500/20" },
                  { name: "Docker", color: "text-blue-500", bg: "bg-blue-600/20" },
                  { name: "AWS", color: "text-orange-400", bg: "bg-orange-500/20" },
                  { name: "PostgreSQL", color: "text-blue-300", bg: "bg-blue-400/20" }
                ].map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    className={`${tech.bg} ${tech.color} rounded-lg p-3 lg:p-4 backdrop-blur-sm border border-white/20 font-bold text-center`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-sm lg:text-base">{tech.name}</span>
                  </motion.div>
                ))}
              </div>

              {/* Additional Skills */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 lg:p-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-lg font-bold text-white mb-3">
                  🚀 What I Build
                </h3>
                <ul className="text-gray-300 text-sm space-y-2">
                  <li>• Responsive Web Applications</li>
                  <li>• E-commerce Platforms</li>
                  <li>• API Development & Integration</li>
                  <li>• Database Design & Optimization</li>
                  <li>• Cloud Infrastructure & DevOps</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      )}

      {/* Machine Learning Section */}
      {mlVisible && (        <motion.section 
          className="min-h-screen flex items-center justify-center fixed inset-0 bg-gradient-to-br from-purple-50 to-pink-100 z-30 overflow-x-hidden"
          style={{ y: mlY, opacity: mlOpacity }}
        >        <div className="container-custom px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6 sm:mb-8 lg:mb-12 w-full max-w-full"
          >            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 lg:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent px-3 sm:px-4 break-words w-full max-w-full">
              Machine Learning
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed px-3 sm:px-4 break-words w-full">
              Leveraging the power of artificial intelligence and machine learning to create intelligent systems 
              that learn, adapt, and provide valuable insights from data.
            </p>          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 px-3 sm:px-4 w-full max-w-full overflow-x-hidden">
            {[
              {
                icon: Brain,
                title: "Deep Learning",
                description: "Neural networks and deep learning models for complex pattern recognition and prediction tasks.",
                technologies: ["TensorFlow", "PyTorch", "Keras", "Neural Networks"]
              },
              {
                icon: Eye,
                title: "Computer Vision",
                description: "Image processing, object detection, and visual recognition systems using advanced CV techniques.",
                technologies: ["OpenCV", "YOLO", "CNN", "Image Processing"]
              },
              {
                icon: BarChart3,
                title: "Data Science",
                description: "Statistical analysis, data visualization, and predictive modeling for actionable insights.",
                technologies: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn"]
              },
              {
                icon: Zap,
                title: "NLP & AI",
                description: "Natural language processing, chatbots, and intelligent text analysis systems.",
                technologies: ["BERT", "GPT", "spaCy", "Transformers"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 rounded-lg p-3 sm:p-4 lg:p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 w-full max-w-full overflow-hidden"
              >
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-2 sm:mb-3 lg:mb-4 mx-auto">
                  <service.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-7 lg:h-7 text-white" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-bold mb-1 sm:mb-2 lg:mb-3 text-gray-800 text-center leading-tight">{service.title}</h3>
                <p className="text-xs sm:text-xs lg:text-sm text-gray-600 mb-2 sm:mb-3 lg:mb-4 leading-snug text-center">{service.description}</p><div className="flex flex-wrap gap-1 sm:gap-2 justify-center w-full max-w-full">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium break-words"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}          </div>
        </div>        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-12 h-12 sm:w-24 sm:h-24 bg-purple-200 rounded-full opacity-30"
            animate={{ 
              y: [0, -10, 0],
              x: [0, 5, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-10 h-10 sm:w-20 sm:h-20 bg-pink-200 rounded-full opacity-40"
            animate={{ 
              y: [0, 10, 0],
              x: [0, -8, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.section>
      )}
    </div>
  )
}

export default Hero