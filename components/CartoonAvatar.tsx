'use client'

import { motion } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'

// Cartoon Avatar Component that follows cursor - Styled to look like Ved
const CartoonAvatar = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const avatarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (avatarRef.current) {
        const rect = avatarRef.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        
        // Calculate angle for eye direction
        const deltaX = e.clientX - centerX
        const deltaY = e.clientY - centerY
        
        setMousePosition({ x: deltaX, y: deltaY })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  // Calculate eye positions based on mouse
  const maxEyeMovement = 5
  const distance = Math.sqrt(mousePosition.x ** 2 + mousePosition.y ** 2)
  const eyeX = distance > 0 ? (mousePosition.x / distance) * Math.min(distance / 50, maxEyeMovement) : 0
  const eyeY = distance > 0 ? (mousePosition.y / distance) * Math.min(distance / 50, maxEyeMovement) : 0

  return (
    <div className="relative">
      {/* Cartoon Avatar - Styled to look like Ved */}
      <motion.div
        ref={avatarRef}
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Main Head - Realistic proportions */}
        <div className="relative w-40 h-40 mx-auto">
          {/* Head Shape - More realistic skin tone */}
          <div className="absolute inset-0 bg-gradient-to-b from-amber-100 to-amber-200 rounded-full border-2 border-gray-300 shadow-xl">
            
            {/* Hair - Dark brown/black, modern style */}
            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-36 h-24 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full"></div>
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-full"></div>
            
            {/* Eyes Container */}
            <div className="absolute top-14 left-1/2 transform -translate-x-1/2 flex gap-5">
              {/* Left Eye */}
              <div className="relative w-7 h-7 bg-white rounded-full border border-gray-300 shadow-sm">
                <motion.div
                  className="absolute w-5 h-5 bg-gradient-to-br from-amber-800 to-amber-900 rounded-full top-1/2 left-1/2"
                  style={{
                    x: eyeX,
                    y: eyeY,
                    transformOrigin: 'center'
                  }}
                  animate={{ scale: [1, 0.95, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                {/* Pupil */}
                <motion.div
                  className="absolute w-2 h-2 bg-black rounded-full top-1/2 left-1/2"
                  style={{
                    x: eyeX * 1.2,
                    y: eyeY * 1.2,
                    transformOrigin: 'center'
                  }}
                />
                {/* Eye shine */}
                <div className="absolute w-1 h-1 bg-white rounded-full top-2 left-2"></div>
              </div>
              
              {/* Right Eye */}
              <div className="relative w-7 h-7 bg-white rounded-full border border-gray-300 shadow-sm">
                <motion.div
                  className="absolute w-5 h-5 bg-gradient-to-br from-amber-800 to-amber-900 rounded-full top-1/2 left-1/2"
                  style={{
                    x: eyeX,
                    y: eyeY,
                    transformOrigin: 'center'
                  }}
                  animate={{ scale: [1, 0.95, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.1 }}
                />
                {/* Pupil */}
                <motion.div
                  className="absolute w-2 h-2 bg-black rounded-full top-1/2 left-1/2"
                  style={{
                    x: eyeX * 1.2,
                    y: eyeY * 1.2,
                    transformOrigin: 'center'
                  }}
                />
                {/* Eye shine */}
                <div className="absolute w-1 h-1 bg-white rounded-full top-2 left-2"></div>
              </div>
            </div>

            {/* Eyebrows - Natural looking */}
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2 flex gap-6">
              <div className="w-6 h-1 bg-gray-800 rounded-full transform -rotate-12"></div>
              <div className="w-6 h-1 bg-gray-800 rounded-full transform rotate-12"></div>
            </div>

            {/* Nose - Subtle and realistic */}
            <div className="absolute top-20 left-1/2 transform -translate-x-1/2">
              <div className="w-2 h-3 bg-amber-300 rounded-full shadow-sm"></div>
              {/* Nostrils */}
              <div className="absolute bottom-0 left-0 w-0.5 h-1 bg-amber-400 rounded-full"></div>
              <div className="absolute bottom-0 right-0 w-0.5 h-1 bg-amber-400 rounded-full"></div>
            </div>

            {/* Mouth - Natural smile */}
            <motion.div
              className="absolute top-24 left-1/2 transform -translate-x-1/2"
              animate={{ 
                scaleY: [1, 1.05, 1],
                rotateZ: [0, 0.5, 0, -0.5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity }}
            >
              <div className="w-8 h-2 bg-red-400 rounded-full"></div>
              {/* Teeth hint */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-white rounded-b-sm"></div>
            </motion.div>

            {/* Facial hair/shadow - if applicable */}
            <div className="absolute top-22 left-1/2 transform -translate-x-1/2 w-10 h-6 bg-gray-700 opacity-20 rounded-b-full"></div>
          </div>

          {/* Body - More realistic clothing */}
          <div className="absolute top-36 left-1/2 transform -translate-x-1/2 w-20 h-24 bg-gradient-to-b from-blue-600 to-blue-700 rounded-t-3xl border-2 border-gray-300">
            {/* Shirt collar */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-4 bg-white border-b border-gray-300"></div>
            {/* Buttons */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 space-y-2">
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Interactive speech bubble */}
      <motion.div
        className="absolute -top-16 -left-12 bg-white rounded-xl px-4 py-3 shadow-xl border-2 border-blue-300"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="text-blue-600 font-bold text-sm whitespace-nowrap">👋 Hi! I'm Ved in cartoon mode!</div>
        <div className="absolute bottom-0 left-8 transform translate-y-full">
          <div className="w-0 h-0 border-l-4 border-r-4 border-t-6 border-transparent border-t-white"></div>
        </div>
      </motion.div>

      {/* Floating code elements around avatar */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { symbol: "</>;", position: { x: '-20%', y: '20%' }, color: 'text-blue-400' },
          { symbol: "{ }", position: { x: '120%', y: '30%' }, color: 'text-green-400' },
          { symbol: "=>", position: { x: '-10%', y: '70%' }, color: 'text-purple-400' },
          { symbol: "npm", position: { x: '110%', y: '75%' }, color: 'text-red-400' }
        ].map((item, index) => (
          <motion.div
            key={item.symbol}
            className={`absolute ${item.color} font-mono text-lg font-bold`}
            style={{ 
              left: item.position.x, 
              top: item.position.y 
            }}
            animate={{ 
              y: [0, -8, 0],
              rotate: [0, 10, 0, -10, 0],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 3 + index * 0.5, 
              repeat: Infinity, 
              delay: index * 0.3,
              ease: "easeInOut" 
            }}
          >
            {item.symbol}
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default CartoonAvatar
