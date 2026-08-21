import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface LinkNavegacao {
  label: string;
  to: string;
}

const linksNavegacao: LinkNavegacao[] = [
  { label: "Sobre", to: "/sobre" },
  { label: "Integrantes", to: "/integrantes" },
  { label: "Solução", to: "/solucao" },
  { label: "Contato", to: "/contato" },
  { label: "FAQ", to: "/faq" },
];

export default function Header() {
  const [menuAberto, setMenuAberto] = useState<boolean>(false);
  const location = useLocation();

  // Fecha o menu mobile automaticamente sempre que a rota muda
  useEffect(() => {
    setMenuAberto(false);
  }, [location.pathname]);

  return (
    <header className="flex items-center justify-between">
      <div>
        <Link to="/">
          <h1 className="px-4 py-6 font-sans text-xl sm:px-8 sm:text-3xl">
            Avatar Inteligente
          </h1>
        </Link>
      </div>

      {/* Botão hamburguer - visível apenas em telas menores (md:hidden) */}
      <button
        type="button"
        aria-label="Abrir menu"
        aria-controls="navegacao"
        aria-expanded={menuAberto}
        onClick={() => setMenuAberto((aberto) => !aberto)}
        className="mr-5 flex h-6 w-8 flex-col justify-between md:hidden"
      >
        <span
          className={`block h-[3px] w-full rounded bg-white transition-transform ${
            menuAberto ? "translate-y-[10.5px] rotate-45" : ""
          }`}
        />
        <span
          className={`block h-[3px] w-full rounded bg-white transition-opacity ${
            menuAberto ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-[3px] w-full rounded bg-white transition-transform ${
            menuAberto ? "-translate-y-[10.5px] -rotate-45" : ""
          }`}
        />
      </button>

      <div
        id="navegacao"
        className={`w-full overflow-hidden transition-all duration-300 md:mr-12 md:w-auto md:overflow-visible ${
          menuAberto ? "max-h-80" : "max-h-0 md:max-h-none"
        }`}
      >
        <nav className="flex flex-col bg-secondary md:flex-row md:gap-10 md:bg-transparent">
          {linksNavegacao.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="border-t border-primary px-5 py-4 font-sans text-base transition-colors hover:text-white md:border-none md:p-2 md:text-sm"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
