"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      setEmail("");
      setIsSubscribed(true);
    } catch {
      setError(
        "Ocorreu um erro ao tentar se inscrever na newsletter. Por favor, tente novamente."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b to-[#0A0A0F] from-[#030304]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fique por dentro das novidades
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Inscreva-se em nossa newsletter para receber atualizações sobre
            novos recursos e dicas de OCR.
          </p>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Input
              type="email"
              placeholder="Seu endereço de e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-grow bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[#5D32F5] focus:ring-[#5D32F5]"
              aria-label="Endereço de e-mail para newsletter"
            />
            <Button
              type="submit"
              className="bg-[#5D32F5] hover:bg-[#4A28C4] text-white transition-colors duration-300"
            >
              {isLoading ? "Enviando..." : "Inscrever-se"}
            </Button>
          </form>
          <div className="flex items-start">
            {error && <p className="mt-4 text-destructive text-sm">{error}</p>}
            {isSubscribed && (
              <p className="mt-4 text-emerald-500 text-sm">
                Você foi inscrito com sucesso na newsletter!
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
