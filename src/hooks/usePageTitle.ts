import { useEffect } from "react";

const FAVICON_PADRAO = "/imagens/IconeHome.png";

function definirFavicon(caminho: string): void {
  const link = document.querySelector<HTMLLinkElement>("link[rel='icon']");
  if (link) {
    link.href = caminho;
  }
}

/**
 * Atualiza o título da aba do navegador e o favicon sempre que o componente
 * que o chama for montado ou quando `titulo`/`favicon` mudarem.
 *
 * @param titulo   Texto exibido antes de "| Avatar Inteligente" na aba.
 * @param favicon  Caminho do ícone da página (padrão: IconeHome.png).
 */
export function usePageTitle(titulo: string, favicon: string = FAVICON_PADRAO): void {
  useEffect(() => {
    document.title = `${titulo} | Avatar Inteligente`;
    definirFavicon(favicon);

    return () => {
      document.title = "Avatar Inteligente | SoulUp";
      definirFavicon(FAVICON_PADRAO);
    };
  }, [titulo, favicon]);
}
