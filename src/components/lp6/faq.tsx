"use client";

import { useState } from "react";
import { motion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  FileText,
  DollarSign,
  LayoutDashboard,
  Terminal,
  ChevronDown,
} from "lucide-react";

const faqItems = [
  {
    question: "O que é o Scanify?",
    answer:
      "O Scanify é uma API de OCR (Reconhecimento Óptico de Caracteres) que transforma documentos físicos e digitais, como PDFs e imagens, em dados úteis. Ele é ideal para desenvolvedores e empresas que buscam automatizar a extração de informações, de maneira rápida e acessível.",
    category: "general",
  },
  {
    question: "Como funciona o Scanify?",
    answer:
      "O Scanify é uma API simples de integrar:\n\n- Faça o upload do documento ou imagem via nossa API.\n- A API processa o arquivo, extraindo textos, coordenadas das palavras, dimensões das páginas e outras informações úteis.\n- Os resultados são devolvidos diretamente para o seu sistema, prontos para uso. Você também pode configurar webhooks para receber notificações automáticas.",
    category: "general",
  },
  {
    question: "Quem pode usar o Scanify?",
    answer:
      "Qualquer desenvolvedor ou empresa que precise digitalizar e processar documentos pode usar o Scanify. Ele é perfeito para pequenas e médias empresas (PMEs) brasileiras, startups e desenvolvedores que buscam uma solução de OCR fácil de integrar e com suporte local.",
    category: "general",
  },
  {
    question:
      "O Scanify funciona com documentos escaneados ou apenas arquivos digitais?",
    answer:
      "O Scanify processa tanto documentos escaneados quanto imagens digitais, como fotos de smartphones.",
    category: "general",
  },
  {
    question: "Preciso ter conhecimento técnico para usar o Scanify?",
    answer:
      "O Scanify é projetado para ser simples de usar, mas conhecimento básico em APIs pode ajudar a acelerar a integração.",
    category: "general",
  },
  {
    question: "O Scanify funciona com sistemas já existentes?",
    answer:
      "Sim, o Scanify é compatível com qualquer sistema que suporte integração via API.",
    category: "general",
  },
  {
    question: "Quais são os planos de preço disponíveis?",
    answer:
      "Oferecemos planos flexíveis para atender às necessidades de diferentes empresas. Para informações detalhadas sobre preços, por favor, entre em contato com nossa equipe de vendas.",
    category: "pricing",
  },
  {
    question: "Como posso acessar o dashboard do Scanify?",
    answer:
      "Após se cadastrar, você receberá credenciais de acesso ao nosso dashboard, onde poderá gerenciar suas integrações, visualizar estatísticas de uso e acessar documentação detalhada.",
    category: "dashboard",
  },
  {
    question: "Qual é o formato da resposta da API?",
    answer:
      "A API do Scanify retorna respostas em formato JSON, contendo informações como texto extraído, coordenadas das palavras, confiança da extração e metadados do documento.",
    category: "api",
  },
];

const categories = [
  { name: "general", label: "Geral", icon: FileText },
  { name: "pricing", label: "Preços", icon: DollarSign },
  { name: "dashboard", label: "Dashboard", icon: LayoutDashboard },
  { name: "api", label: "API", icon: Terminal },
];

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState("general");

  return (
    <section className="py-24 bg-gradient-to-b from-[#0A0A0F] to-[#030304]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-gray-400 mb-12 text-center">
            Estas são as perguntas mais comuns sobre o Scanify. Não encontrou o
            que procura?{" "}
            <a
              href="https://wa.me/5575991206853"
              className="text-[#5D32F5] hover:underline"
            >
              Fale com nossa equipe!
            </a>
          </p>

          <div className="flex justify-center space-x-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={
                  activeCategory === category.name ? "default" : "outline"
                }
                className={`${
                  activeCategory === category.name
                    ? "bg-[#5D32F5] hover:bg-[#5D32F5]/80 text-white"
                    : "bg-gray-950 border-gray-800 text-gray-400 hover:text-white hover:bg-[#5D32F5]/10"
                }`}
                onClick={() => setActiveCategory(category.name)}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.label}
              </Button>
            ))}
          </div>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems
              .filter((item) => item.category === activeCategory)
              .map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-gray-700 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 text-white hover:text-[#5D32F5] text-left">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-lg bg-[#5D32F5]/10 flex items-center justify-center mr-4">
                        <FileText className="w-5 h-5 text-[#5D32F5]" />
                      </div>
                      <span>{item.question}</span>
                    </div>
                    {/* Custom chevron icon */}
                    <ChevronDown className="shrink-0 text-[#5D32F5] ml-2" />
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 text-gray-400">
                    {item.answer.split("\n").map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-2">
                        {paragraph}
                      </p>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
