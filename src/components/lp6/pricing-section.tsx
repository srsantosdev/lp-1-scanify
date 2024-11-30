"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Básico",
    id: "basic",
    description: "Voltado para pequenas empresas com uso moderado de OCR.",
    price: "R$ 49,00",
    limit: "1.000 créditos de OCR por mês",
    features: [
      "Processamento individual de documentos",
      "Configuração de webhook",
      "API de fácil integração",
      "Suporte por email",
      "Documentação completa em português",
      "Dashboard de análise de uso",
    ],
    notIncluded: [
      "Processamento em lote",
      "Suporte prioritário",
      "Gerenciamento de múltiplas contas",
    ],
    onRequest: false,
  },
  {
    name: "Profissional",
    id: "professional",
    description:
      "Perfeito para empresas de médio porte que precisam de OCR regularmente.",
    price: "R$ 99,00",
    limit: "5.000 créditos de OCR por mês",
    features: [
      "Processamento individual",
      "Processamento em lote",
      "Configuração de webhook",
      "API de fácil integração",
      "Suporte por email e chat",
      "Documentação completa em português",
      "Dashboard de análise de uso",
    ],
    notIncluded: ["Suporte prioritário", "Gerenciamento de múltiplas contas"],
    popular: true,
    onRequest: false,
  },
  {
    name: "Corporativo",
    id: "corporate",
    description: "Ideal para grandes empresas com alta demanda de OCR.",
    price: "R$ 299,00",
    limit: "Créditos de OCR ilimitados",
    features: [
      "Processamento individual",
      "Processamento em lote",
      "Configuração de webhook",
      "API de fácil integração",
      "Suporte por email, chat e telefone",
      "Suporte prioritário",
      "Documentação completa em português",
      "Dashboard de análise de uso",
      "Gerenciamento de múltiplas contas",
    ],
    notIncluded: [],
    onRequest: true,
  },
];

const PricingCard = ({ plan }: { plan: (typeof plans)[0] }) => (
  <Card
    className={`p-6 bg-black/40 border-white/20 hover:border-white/30 transition-all backdrop-blur-sm ${
      plan.popular ? "border-[#5D32F5] shadow-lg shadow-[#5D32F5]/20" : ""
    }`}
  >
    {plan.popular && (
      <div className="absolute top-0 right-0 bg-[#5D32F5] text-white text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-lg">
        Mais Popular
      </div>
    )}
    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
    <p className="text-gray-300 mb-4">{plan.description}</p>
    {plan.onRequest ? (
      <div className="mb-6">
        <span  className="text-3xl font-bold text-white">
         Preço sob consulta
        </span>
      </div>
    ) : (
      <div className="mb-6">
        <span className="text-3xl font-bold text-white">{plan.price}</span>
        <span className="text-gray-400">/mês</span>
      </div>
    )}
    <p className="text-sm text-gray-200 mb-6">{plan.limit}</p>
    <ul className="space-y-2 mb-6">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-200">
          <Check className="w-5 h-5 text-green-500 mr-2" />
          {feature}
        </li>
      ))}
      {plan.notIncluded.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-400">
          <X className="w-5 h-5 text-red-500 mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <Button
      className="w-full bg-[#5D32F5] hover:bg-[#4A28C4] text-white"
      onClick={() => {
        if (plan.onRequest) {
          return window.open("https://wa.me/5575991206853", "_blank");
        }

        window.open(
          `https://app.scanify.com.br/sign-up?plan=${plan.id}`,
          "_blank"
        );
      }}
    >
      {plan.onRequest ? "Entrar em contato" : "Iniciar teste grátis"}
    </Button>
  </Card>
);

const BackgroundPattern = () => (
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0A0A0F]" />
    <svg
      className="absolute w-full h-full opacity-5"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="url(#grad1)"
            strokeWidth="0.5"
          />
        </pattern>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5D32F5" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#8261F3" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
    <div
      className="absolute inset-0 opacity-0 animate-fade-in"
      style={{
        background:
          "radial-gradient(circle at 50% 50%, rgba(93, 50, 245, 0.1) 0%, rgba(130, 97, 243, 0.05) 25%, rgba(10, 10, 15, 0) 50%)",
        animation:
          "pulse 10s ease-in-out infinite alternate, fadeIn 2s ease-out forwards",
      }}
    />
  </div>
);

const pulseAnimation = `
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 0.3;
    }
    50% {
      transform: scale(1.05);
      opacity: 0.4;
    }
    100% {
      transform: scale(1);
      opacity: 0.3;
    }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 0.3; }
  }
`;

export default function PricingSection() {
  return (
    <>
      <div className="h-24 bg-gradient-to-b from-[#030304] to-[#0A0A0F]" />
      <section
        id="pricing"
        className="relative py-24 bg-[#0A0A0F] overflow-hidden"
      >
        <style jsx global>
          {pulseAnimation}
        </style>
        <BackgroundPattern />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Escolha o plano ideal para o seu negócio
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-gray-400 text-lg"
            >
              Soluções flexíveis para empresas de todos os tamanhos
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PricingCard plan={plan} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
