"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const steps = [
  {
    title: "Upload de Documentos",
    description:
      "Faça o upload dos seus documentos através da nossa API simples e intuitiva. Suportamos diversos formatos, incluindo PDFs, imagens e documentos digitalizados.",
    icon: (
      <svg
        className="w-8 h-8 text-[#5D32F5]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    ),
  },
  {
    title: "Processamento OCR",
    description:
      "Nossa tecnologia de ponta processa seus documentos, extraindo texto, coordenadas das palavras e metadados importantes com alta precisão e velocidade.",
    icon: (
      <svg
        className="w-8 h-8 text-[#5D32F5]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    ),
  },
  {
    title: "Dados Estruturados",
    description:
      "Receba os resultados em formato JSON estruturado, pronto para integração. Configure webhooks para notificações automáticas quando o processamento for concluído.",
    icon: (
      <svg
        className="w-8 h-8 text-[#5D32F5]"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        />
      </svg>
    ),
  },
];

const useAutoProgress = (length: number, interval: number) => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 1) {
          setActiveStep((prevStep) => (prevStep + 1) % length);
          return 0;
        }
        return prevProgress + 0.01;
      });
    }, interval / 100);

    return () => clearInterval(timer);
  }, [length, interval]);

  return [activeStep, setActiveStep, progress] as const;
};

const VerticalProgress = ({ progress }: { progress: number }) => (
  <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#1A1A1A] overflow-hidden">
    <motion.div
      className="w-full bg-[#5D32F5]"
      initial={{ height: 0 }}
      animate={{ height: `${progress * 100}%` }}
      transition={{ duration: 0.1, ease: "linear" }}
    />
  </div>
);

export default function HowItWorks() {
  const [activeStep, setActiveStep, progress] = useAutoProgress(
    steps.length,
    5000
  );

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Como funciona
          </h2>
          <p className="text-gray-400">
            Transforme seus documentos em dados estruturados em três passos
            simples
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`p-6 rounded-lg ${
                  activeStep === index
                    ? "bg-[#5D32F5]/10 border border-[#5D32F5]/30"
                    : "bg-white/5 border border-white/10"
                } cursor-pointer transition-all duration-300 relative overflow-hidden`}
                onClick={() => setActiveStep(index)}
              >
                <VerticalProgress
                  progress={
                    activeStep === index ? progress : activeStep > index ? 1 : 0
                  }
                />

                <div className="flex items-center mb-4">
                  {step.icon}
                  <h3 className="text-xl font-semibold text-white ml-4">
                    {step.title}
                  </h3>
                </div>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-lg p-8 sticky top-24"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="aspect-video bg-[#1A1A1A] rounded-lg overflow-hidden relative mb-6"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-2xl font-semibold">
                    Visualização do Passo {activeStep + 1}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-semibold text-white mb-2">
                  {steps[activeStep].title}
                </h4>
                <p className="text-gray-400 mb-4">
                  {steps[activeStep].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
