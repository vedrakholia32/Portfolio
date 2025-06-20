'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Github } from 'lucide-react'

interface Project {
  id: number
  title: string
  description: string
  fullDescription: string
  tech: string[]
  image: string
  liveUrl: string
  githubUrl: string
  category: string
}

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Modern e-commerce solution with seamless user experience",
    fullDescription: "A comprehensive e-commerce platform built with React and Node.js, featuring user authentication, payment processing, inventory management, and an intuitive admin dashboard. The platform handles thousands of products and provides real-time analytics.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative productivity tool for modern teams",
    fullDescription: "A sophisticated task management application that enables teams to collaborate effectively. Features include real-time updates, drag-and-drop functionality, team workspaces, time tracking, and comprehensive reporting tools.",
    tech: ["Vue.js", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "Web Development"
  },  {
    id: 3,
    title: "AI Image Recognition System",
    description: "Computer vision model for object detection and classification",
    fullDescription: "A sophisticated computer vision system built with TensorFlow and OpenCV for real-time object detection and image classification. The model achieves 95% accuracy on custom datasets and includes features like batch processing, confidence scoring, and API integration.",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "Machine Learning"
  },
  {
    id: 4,
    title: "Customer Sentiment Analysis",
    description: "NLP model for analyzing customer feedback and reviews",
    fullDescription: "A natural language processing system that analyzes customer sentiment from reviews, social media, and feedback forms. Built using BERT transformers and deployed with real-time monitoring, providing actionable insights for business decision-making.",
    tech: ["Python", "PyTorch", "BERT", "Streamlit"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "Machine Learning"
  },
  {
    id: 5,
    title: "Predictive Analytics Dashboard",
    description: "ML-powered forecasting and data visualization platform",
    fullDescription: "A comprehensive analytics platform combining machine learning predictions with interactive visualizations. Features time series forecasting, anomaly detection, and automated reporting using advanced statistical models and neural networks.",
    tech: ["Python", "Scikit-learn", "Plotly", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "Data Science"
  },  {
    id: 6,
    title: "Financial Market Predictor",
    description: "Deep learning model for stock price prediction and analysis",
    fullDescription: "An advanced financial analysis system using LSTM neural networks and ensemble methods to predict market trends. Incorporates technical indicators, sentiment analysis, and macroeconomic data to provide comprehensive market insights and risk assessment.",
    tech: ["Python", "TensorFlow", "Pandas", "Alpha Vantage API"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop",
    liveUrl: "#",
    githubUrl: "#",
    category: "Data Science"
  }
]

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [filter, setFilter] = useState('All')

  const categories = ['All', 'Web Development', 'Machine Learning', 'Data Science', 'Mobile Development']
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="work" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-section-title mb-6">Selected Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A collection of projects that showcase my passion for creating meaningful digital experiences.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 text-sm font-light tracking-wide transition-all duration-300 ${
                filter === category
                  ? 'text-gray-900 border-b-2 border-gray-900'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
                className="project-card group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative h-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="project-card-overlay">
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl font-medium mb-2">{project.title}</h3>
                      <p className="text-sm opacity-90 mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {project.tech.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 text-xs bg-white/20 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 md:h-80 object-cover"
                />
                
                <div className="p-8">
                  <div className="mb-6">
                    <span className="text-sm text-gray-500 uppercase tracking-wider">
                      {selectedProject.category}
                    </span>
                    <h3 className="text-3xl font-light text-gray-900 mt-2 mb-4">
                      {selectedProject.title}
                    </h3>
                    <p className="text-lg text-gray-600 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-medium text-gray-900 mb-3 uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={selectedProject.liveUrl}
                      className="btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="btn-secondary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Work
