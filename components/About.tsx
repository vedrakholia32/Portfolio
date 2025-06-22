'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  return (    <section id="about" className="section-padding relative z-10 pt-32 overflow-hidden">      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-black/95 z-10"></div>
        <Image
          src="/images/workspace-background.jpg"
          alt="Workspace Background"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      
      {/* Smooth background transition overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        viewport={{ once: true, margin: "-200px" }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/20 to-gray-900/40 -z-10"
      />
      
      <div className="container-custom relative z-10">        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-xl text-gray-300">Get to know me better</p>
        </motion.div><div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}          ><p className="text-lg text-gray-300 mb-6">
              I'm a passionate web developer and machine learning enthusiast who bridges the gap between 
              beautiful user interfaces and intelligent systems. I specialize in creating modern web applications 
              while exploring the cutting-edge world of artificial intelligence and data science.
            </p>
            
            <p className="text-lg text-gray-300 mb-8">
              From responsive React applications to neural networks, I love building solutions that combine 
              aesthetic design with powerful algorithms. When I'm not coding, you'll find me experimenting 
              with new ML models, contributing to open-source projects, or diving deep into research papers.
            </p>

            <div className="grid grid-cols-3 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
                <p className="text-gray-300">Projects Completed</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-3xl font-bold text-cyan-400">3+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-3xl font-bold text-cyan-400">25+</h3>
                <p className="text-gray-300">Happy Clients</p>
              </div>
            </div>          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true, margin: "-50px" }}
            className="flex justify-center"
          >            <div className="relative">
              <div className="w-96 h-80 rounded-lg overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                <div className="w-full h-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center backdrop-blur-sm overflow-hidden">
                      {/* Option 1: Use your own profile photo */}
                      <Image
                        src="/images/ved-profile.jpg"
                        alt="Ved Rakholia"
                        width={96}
                        height={96}
                        className="w-full h-full object-cover rounded-full"
                      />
                      {/* Option 2: Use SVG avatar (comment out the Image above and uncomment below) */}
                      {/* <svg className="w-12 h-12 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg> */}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Ved Rakholia</h3>
                    <p className="text-cyan-300">Full Stack Developer</p>
                  </div>
                </div>
              </div>
              {/* Floating elements for visual interest */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full opacity-80 animate-pulse"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 rounded-full opacity-60 animate-pulse delay-1000"></div>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-white">Skills & Technologies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold mb-6 text-cyan-400">Web Development</h4>
              <div className="flex flex-wrap gap-3">
                {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'JavaScript', 'Tailwind CSS', 'MongoDB', 'PostgreSQL'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium hover:bg-white/30 transition-colors backdrop-blur-sm border border-white/20">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-lg font-semibold mb-6 text-cyan-400">Machine Learning & AI</h4>
              <div className="flex flex-wrap gap-3">
                {['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter', 'OpenAI API', 'Computer Vision', 'NLP'].map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-cyan-500/20 text-cyan-100 rounded-full text-sm font-medium hover:bg-cyan-500/30 transition-colors backdrop-blur-sm border border-cyan-500/30">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
