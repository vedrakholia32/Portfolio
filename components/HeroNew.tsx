'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronDown, Code, Database, Globe, Laptop } from 'lucide-react'
import { useRef } from 'react'

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 1], [0, -200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const webDevY = useTransform(scrollYProgress, [0, 1], [200, -100])
  const webDevOpacity = useTransform(scrollYProgress, [0.2, 0.8], [0, 1])

  const handleScrollToNext = () => {
    const aboutSection = document.querySelector('#about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section */}
      <motion.section 
        id="home" 
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-gray-50 to-white"
        style={{ y: heroY, opacity: heroOpacity }}
      >
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Main Title */}
            <motion.h1
              className="text-hero"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Ved Rakholia
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-subtitle max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Web Developer & Machine Learning Enthusiast
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-lg text-gray-500 max-w-xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Building innovative web solutions and exploring the frontiers of artificial intelligence to create meaningful digital experiences.
            </motion.p>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleScrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <div className="flex flex-col items-center space-y-2 text-gray-400 hover:text-gray-600 transition-colors duration-300">
            <span className="text-xs uppercase tracking-widest font-light">Scroll</span>
            <ChevronDown className="w-5 h-5" />
          </div>
        </motion.div>

        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full opacity-50"
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360] 
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
          <motion.div
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-50 rounded-full opacity-30"
            animate={{ 
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0] 
            }}
            transition={{ 
              duration: 25, 
              repeat: Infinity, 
              ease: "linear" 
            }}
          />
        </div>
      </motion.section>

      {/* Web Development Section */}
      <motion.section 
        className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-100"
        style={{ y: webDevY, opacity: webDevOpacity }}
      >
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Web Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Crafting modern, responsive, and performant web applications using cutting-edge technologies 
              and best practices to deliver exceptional user experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl mb-6 mx-auto">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-800">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-20 text-center"
          >
            <h3 className="text-3xl font-bold mb-8 text-gray-800">Why Choose My Web Development Services?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Performance Optimized",
                  description: "Lightning-fast websites with optimized code, lazy loading, and CDN integration."
                },
                {
                  title: "Mobile-First Design",
                  description: "Responsive designs that work flawlessly across all devices and screen sizes."
                },
                {
                  title: "SEO & Accessibility",
                  description: "Built with SEO best practices and accessibility standards for maximum reach."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white/50 backdrop-blur-sm rounded-xl p-6 hover:bg-white/70 transition-all duration-300"
                >
                  <h4 className="text-lg font-semibold mb-3 text-gray-800">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-20 right-20 w-32 h-32 bg-blue-200 rounded-full opacity-30"
            animate={{ 
              y: [0, -20, 0],
              x: [0, 10, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-24 h-24 bg-purple-200 rounded-full opacity-40"
            animate={{ 
              y: [0, 20, 0],
              x: [0, -15, 0]
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </div>
      </motion.section>
    </div>
  )
}

export default Hero
