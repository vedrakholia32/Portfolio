'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Code, Database, Globe, Laptop, Brain, BarChart3, Eye, Zap } from 'lucide-react'
import { useRef, useState, useEffect } from 'react'

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
  const mlOpacity = useTransform(scrollYProgress, [0.7, 0.8, 0.95, 1], [0, 1, 1, 0])
  const [webDevVisible, setWebDevVisible] = useState(false)
  const [mlVisible, setMlVisible] = useState(false)
  // Update visibility based on scroll progress
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      setWebDevVisible(progress >= 0.15 && progress <= 0.65)
      setMlVisible(progress >= 0.7)
    })
    return unsubscribe
  }, [scrollYProgress])

  const handleScrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={containerRef} className="relative overflow-x-hidden" style={{ height: '700vh' }}>
      {/* Hero Section */}      <motion.section 
        id="home" 
        className="min-h-screen flex items-center justify-center fixed inset-0 bg-gradient-to-br from-gray-50 to-white overflow-x-hidden"
        style={{ y: heroY, opacity: heroOpacity }}
      >        <div className="container-custom text-center px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-6 sm:space-y-8 w-full max-w-full"
          >            {/* Main Title */}
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight break-words w-full max-w-full"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Ved Rakholia
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-2xl mx-auto px-4 break-words w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Web Developer & Machine Learning Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed px-4 break-words w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Building innovative web solutions and exploring the frontiers of artificial intelligence to create meaningful digital experiences.
            </motion.p>
          </motion.div>
        </div>        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleScrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex flex-col items-center space-y-1 sm:space-y-2 text-gray-400 hover:text-gray-600 transition-colors duration-300">
            <span className="text-xs uppercase tracking-widest font-light hidden sm:block">Scroll</span>
            <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
        </motion.div>        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-16 h-16 sm:w-32 sm:h-32 md:w-48 md:h-48 bg-blue-50 rounded-full opacity-50"
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
            className="absolute bottom-1/4 left-1/4 w-20 h-20 sm:w-40 sm:h-40 md:w-60 md:h-60 bg-purple-50 rounded-full opacity-30"
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
          className="min-h-screen flex items-center justify-center fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 z-10 overflow-x-hidden"
          style={{ y: webDevY, opacity: webDevOpacity }}
        >        <div className="container-custom px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 w-full max-w-full"
          >            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent px-4 break-words w-full max-w-full">
              Web Development
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 break-words w-full">
              Crafting modern, responsive, and performant web applications using cutting-edge technologies 
              and best practices to deliver exceptional user experiences.
            </p>          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 w-full max-w-full overflow-x-hidden">
            {[
              {
                icon: Globe,
                title: "Frontend Development",
                description: "Modern React, Next.js, and TypeScript applications with beautiful UI/UX design.",
                technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"]
              },
              {
                icon: Database,
                title: "Backend Development",
                description: "Scalable server-side solutions with Node.js, Python, and robust database systems.",
                technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"]
              },
              {
                icon: Laptop,
                title: "Full-Stack Solutions",
                description: "End-to-end web applications with seamless frontend-backend integration.",
                technologies: ["MERN Stack", "Next.js", "FastAPI", "Docker"]
              },
              {
                icon: Code,
                title: "API Development",
                description: "RESTful APIs and GraphQL services with proper authentication and documentation.",
                technologies: ["REST API", "GraphQL", "JWT", "OpenAPI"]
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}                viewport={{ once: true }}                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-full overflow-hidden"
              >
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-4 sm:mb-6 mx-auto">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>                <div className="flex flex-wrap gap-2 justify-center w-full max-w-full">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium break-words"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>        </div>
      </motion.section>
      )}

      {/* Machine Learning Section */}
      {mlVisible && (        <motion.section 
          className="min-h-screen flex items-center justify-center fixed inset-0 bg-gradient-to-br from-purple-50 to-pink-100 z-30 overflow-x-hidden"
          style={{ y: mlY, opacity: mlOpacity }}
        >        <div className="container-custom px-4 sm:px-6 lg:px-8 w-full max-w-full overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 w-full max-w-full"
          >            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent px-4 break-words w-full max-w-full">
              Machine Learning
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 break-words w-full">
              Leveraging the power of artificial intelligence and machine learning to create intelligent systems 
              that learn, adapt, and provide valuable insights from data.
            </p>          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 w-full max-w-full overflow-x-hidden">
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}                viewport={{ once: true }}                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full max-w-full overflow-hidden"
              >
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-4 sm:mb-6 mx-auto">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-gray-800">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>                <div className="flex flex-wrap gap-2 justify-center w-full max-w-full">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs sm:text-sm font-medium break-words"
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