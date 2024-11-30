'use client'

import { motion } from 'framer-motion'
import { FileText, FileSpreadsheet, FileCheck, FileSearch } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

const useCases = [
  {
    title: "Processamento de Contratos",
    icon: FileText,
    description: "Automatize a extração de dados contratuais",
    benefits: [
      "Extrai automaticamente cláusulas importantes, datas e informações das partes envolvidas",
      "Reduz significativamente o tempo de análise de contratos",
      "Permite que equipes jurídicas foquem em análises estratégicas",
      "Aumenta a precisão e consistência na revisão de documentos"
    ]
  },
  {
    title: "Análise de Faturas",
    icon: FileSpreadsheet,
    description: "Capture dados financeiros sem esforço manual",
    benefits: [
      "Automatiza a entrada de dados de milhares de faturas mensalmente",
      "Reduz erros humanos e inconsistências na entrada de dados",
      "Libera equipes financeiras para atividades de maior valor",
      "Acelera o processamento de contas a pagar e receber"
    ],
    isNew: true
  },
  {
    title: "Verificação de Documentos",
    icon: FileCheck,
    description: "Valide documentos com precisão e rapidez",
    benefits: [
      "Reduz drasticamente o tempo de verificação de documentos",
      "Melhora a segurança e conformidade em processos de onboarding",
      "Permite escalar operações mantendo a qualidade do serviço",
      "Aumenta a satisfação do cliente com processos mais rápidos"
    ]
  },
  {
    title: "Extração de Dados de Relatórios",
    icon: FileSearch,
    description: "Transforme relatórios em dados acionáveis",
    benefits: [
      "Converte relatórios em PDF em dados estruturados e analisáveis",
      "Facilita a tomada de decisões baseadas em dados",
      "Automatiza a compilação de informações de múltiplos relatórios",
      "Melhora a eficiência na análise de grandes volumes de documentos"
    ]
  }
]

const UseCaseCard = ({ useCase, index }: { useCase: typeof useCases[0], index: number }) => {
  const Icon = useCase.icon
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 bg-white/5 border-white/10 hover:border-white/20 transition-colors h-full">
        <div className="flex items-start gap-4 mb-4">
          <div className="p-3 rounded-xl bg-gradient-to-br from-[#5D32F5] to-[#8261F3]">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-bold text-white">{useCase.title}</h3>
              {useCase.isNew && (
                <Badge variant="secondary" className="bg-[#5D32F5] text-white">
                  Novo
                </Badge>
              )}
            </div>
            <p className="mt-1 text-sm text-gray-400">{useCase.description}</p>
          </div>
        </div>

        <ul className="mt-4 space-y-2">
          {useCase.benefits.map((benefit, index) => (
            <li key={index} className="flex items-start">
              <svg className="w-6 h-6 text-[#5D32F5] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  )
}

export default function UseCases() {
  return (
    <section className="relative py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4"
          >
            Como o Scanify transforma negócios
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg"
          >
            Descubra como empresas estão automatizando processos e economizando tempo com nossa solução de OCR
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <UseCaseCard key={useCase.title} useCase={useCase} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

