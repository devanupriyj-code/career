import { motion } from "framer-motion"

export default function GlowOrb({ color = "bg-cyan-500", size = "w-64 h-64", blur = "blur-3xl", position = "top-0 left-0", delay = 0, duration = 10 }) {
  return (
    <motion.div
      initial={{ opacity: 0.3, scale: 0.8 }}
      animate={{ 
        opacity: [0.3, 0.6, 0.3], 
        scale: [0.8, 1.2, 0.8],
        x: [0, 50, 0, -50, 0],
        y: [0, 30, -30, 0]
      }}
      transition={{ 
        duration, 
        delay, 
        repeat: Infinity, 
        ease: "easeInOut" 
      }}
      className={`absolute ${position} ${size} ${color} ${blur} rounded-full mix-blend-screen opacity-50 pointer-events-none`}
    />
  )
}
