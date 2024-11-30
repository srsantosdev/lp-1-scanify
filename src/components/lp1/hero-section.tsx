'use client'

import { motion } from 'motion'
import { Button } from "@/components/ui/button"
import { NavBar } from "./nav-bar"
import { Play } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="min-h-screen bg-[#050407] relative overflow-hidden">
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-purple-700/5 to-transparent pointer-events-none" />
      
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Animated spheres */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              right: `${20 + i * 15}%`,
              top: `${40 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div 
              className="w-32 h-32 rounded-full"
              style={{
                background: `radial-gradient(circle at 30% 30%, rgba(93, 50, 245, ${0.2 - i * 0.05}), rgba(130, 97, 243, ${0.1 - i * 0.03}))`,
                filter: "blur(8px)",
              }}
            />
          </motion.div>
        ))}
        
        {/* Gradient waves */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px]">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-0 left-0 right-0 h-full"
              style={{
                background: `linear-gradient(to right, rgba(93, 50, 245, ${0.07 - i * 0.015}), rgba(130, 97, 243, ${0.02 - i * 0.008}))`,
                transform: `skewY(${6 + i * 2}deg)`,
                transformOrigin: "left",
              }}
              animate={{
                skewY: [6 + i * 2, 8 + i * 2, 6 + i * 2],
              }}
              transition={{
                duration: 8,
                delay: i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>

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
            Nova atualização: v1.01 Beta disponível
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
    </div>
  )
}

