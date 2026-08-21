import { useEffect } from "react";

/**
 * Atualiza o título da aba do navegador sempre que o componente que o chama
 * for montado ou quando o parâmetro `titulo` mudar.
 */
export function usePageTitle(titulo: string): void {
  useEffect(() => {
    document.title = `${titulo} | Avatar Inteligente`;

    return () => {
      document.title = "Avatar Inteligente | SoulUp";
    };
  }, [titulo]);
}
