import Image from "next/image";
import { Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#030304] text-gray-400 py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#5D32F5] to-transparent"
          style={{ mixBlendMode: "color" }}
        />
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 32 0 L 0 0 0 32"
                fill="none"
                stroke="rgba(255,255,255,0.05)"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo-KIv3GRnN1k69k1NZactfNTSkPjDtta.svg"
              alt="Scanify Logo"
              width={120}
              height={35}
              className="w-auto h-8 mb-4"
            />
            <p className="text-xs">
              Transformando documentos em dados úteis com tecnologia OCR de
              ponta.
            </p>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#why-scanify"
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleSmoothScroll(e, "#why-scanify")}
                >
                  Por que Scanify
                </Link>
              </li>
              <li>
                <Link
                  href="#use-cases"
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleSmoothScroll(e, "#use-cases")}
                >
                  Casos de uso
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="hover:text-white transition-colors"
                  onClick={(e) => handleSmoothScroll(e, "#pricing")}
                >
                  Preços
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Recursos</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href="https://scanify.com.br"
                  className="hover:text-white transition-colors"
                >
                  Documentação da API
                </Link>
              </li>
              <li>
                <Link
                  href="https://wa.me/5575991206853"
                  className="hover:text-white transition-colors"
                >
                  Suporte
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-sm font-semibold mb-4">Siga-nos</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/scanify.br"
                className="hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://www.linkedin.com/company/scanifybr"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>
            &copy; {new Date().getFullYear()} Scanify. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
