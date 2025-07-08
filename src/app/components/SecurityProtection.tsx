'use client';

import { useEffect } from 'react';

/**
 * Componente responsável por implementar proteções contra cópia do site
 * e melhorar a segurança da aplicação
 */
const SecurityProtection: React.FC = () => {
  useEffect(() => {
    // Desabilitar menu de contexto (botão direito)
    const disableContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Desabilitar seleção de texto para dificultar cópia
    const disableSelection = (e: Event) => {
      e.preventDefault();
      return false;
    };

    // Desabilitar atalhos de teclado comuns para cópia
    const disableKeyboardShortcuts = (e: KeyboardEvent) => {
      // Ctrl+C, Ctrl+U (visualizar código fonte), F12, etc.
      if (
        (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 85 || e.keyCode === 83)) ||
        e.keyCode === 123
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Aplicar proteções apenas no navegador
    if (typeof window !== 'undefined') {
      document.addEventListener('contextmenu', disableContextMenu);
      document.addEventListener('selectstart', disableSelection as EventListener);
      document.addEventListener('keydown', disableKeyboardShortcuts as EventListener);

      // Adicionar meta tags para proteção contra indexação de conteúdo em robots.txt
      const metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      metaRobots.content = 'noindex, nofollow';
      document.head.appendChild(metaRobots);

      // Ocultar código fonte
      document.documentElement.style.display = 'block';
    }

    // Limpeza dos event listeners
    return () => {
      if (typeof window !== 'undefined') {
        document.removeEventListener('contextmenu', disableContextMenu);
        document.removeEventListener('selectstart', disableSelection as EventListener);
        document.removeEventListener('keydown', disableKeyboardShortcuts as EventListener);
      }
    };
  }, []);

  return null; // Componente não renderiza nada visualmente
};

export default SecurityProtection;
