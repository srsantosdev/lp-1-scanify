'use client'

import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { NavBar } from "./nav-bar"
import { Play } from 'lucide-react'
import WhyScanify from "./why-scanify"
import UseCases from './use-cases'

const styles = {
  shadowGlow: {
    boxShadow: '0 0 8px 3px rgba(255, 255, 255, 0.5)',
  },
};

const AnimatedBackground = () => {
  const lines = Array.from({ length: 12 }, (_, i) => i)
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {lines.map((line) => (
        <motion.div
          key={line}
          className="absolute h-px opacity-[0.1]"
          style={{
            top: `${(line + 1) * 8.33}%`,
            left: '-100%',
            right: '-100%',
            backgroundImage: 'linear-gradient(to right, transparent, transparent 50%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.7))',
            backgroundSize: '20px 1px',
            backgroundRepeat: 'repeat-x',
          }}
          animate={{
            x: ['0%', '100%'],
          }}
          transition={{
            duration: 20 + line * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Light points */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`light-h-${line}-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full shadow-glow"
              style={{ ...styles.shadowGlow, left: `${i * 20}%`, top: '-2px' }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.div>
      ))}
      {lines.map((line) => (
        <motion.div
          key={`vertical-${line}`}
          className="absolute w-px opacity-[0.1]"
          style={{
            left: `${(line + 1) * 8.33}%`,
            top: '-100%',
            bottom: '-100%',
            backgroundImage: 'linear-gradient(to bottom, transparent, transparent 50%, rgba(255,255,255,0.7) 50%, rgba(255,255,255,0.7))',
            backgroundSize: '1px 20px',
            backgroundRepeat: 'repeat-y',
          }}
          animate={{
            y: ['0%', '100%'],
          }}
          transition={{
            duration: 25 + line * 2,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {/* Light points */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`light-v-${line}-${i}`}
              className="absolute w-1 h-1 bg-white rounded-full shadow-glow"
              style={{ ...styles.shadowGlow, top: `${i * 20}%`, left: '-2px' }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </motion.div>
      ))}
    </div>
  )
}

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#030304] relative overflow-hidden">
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative">
        <NavBar />
        
        <div className="container mx-auto px-4 pt-20 pb-32 text-center">
          {/* Update badge */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm text-white/80 mb-8"
          >
            <span className="w-2 h-2 bg-green-500 rounded-full" />
            Nova atualização: v2.0 Beta disponível
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight"
          >
            Transforme documentos em dados úteis em segundos
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Fornecemos às empresas todas as ferramentas necessárias para automatizar a extração de dados de documentos e acelerar seu crescimento
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10"
          >
            <Button
              size="lg"
              className="relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#5D32F5] to-[#8261F3] group-hover:from-[#6B42FF] group-hover:to-[#9070FF]"></span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#8261F3] to-[#5D32F5] group-hover:from-[#9070FF] group-hover:to-[#6B42FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
              <motion.span 
                className="relative z-10 flex items-center gap-2 text-white font-semibold"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Play className="w-5 h-5" />
                Agende uma demo
              </motion.span>
            </Button>
          </motion.div>
        </div>
      </div>

      <WhyScanify />
      <UseCases />
    </div>
  )
}

