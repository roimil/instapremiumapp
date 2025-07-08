'use client';

import { useEffect } from 'react';

/**
 * Componente para dificultar inspeção e cópia do código-fonte
 * Implementa técnicas adicionais de proteção contra DevTools
 */
const CodeProtection: React.FC = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Detectar abertura de DevTools via redimensionamento da janela
      const detectDevTools = () => {
        const threshold = 160;
        const widthThreshold = window.outerWidth - window.innerWidth > threshold;
        const heightThreshold = window.outerHeight - window.innerHeight > threshold;
        
        if (widthThreshold || heightThreshold) {
          // Ação ao detectar DevTools
          // Apenas um alerta educado, pode ser substituído por outras ações
          console.clear();
          console.log('%c⚠️ Atenção!', 'color: red; font-size: 30px; font-weight: bold;');
          console.log(
            '%cEste site contém proteções contra inspeção e cópia.',
            'font-size: 18px;'
          );
        }
      };

      // Método para obfuscar o HTML
      const obfuscateHTML = () => {
        // Adiciona comentários aleatórios no HTML para dificultar leitura
        const comments = document.createTreeWalker(
          document.body,
          NodeFilter.SHOW_COMMENT,
          null
        );
        
        const randomComments = [
          ' Obfuscated code - do not copy ',
          ' Protected content ',
          ' Copyright protected ',
          ' Secured content '
        ];
        
        // Insere comentários aleatórios no DOM
        for (let i = 0; i < 10; i++) {
          const randomText = randomComments[Math.floor(Math.random() * randomComments.length)];
          document.body.appendChild(document.createComment(randomText));
        }
      };

      // Implementar listeners
      window.addEventListener('resize', detectDevTools);
      
      // Inicializar proteções
      obfuscateHTML();
      
      // Desabilitar algumas teclas de função
      document.addEventListener('keydown', (e) => {
        // Desabilitar F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (
          e.key === 'F12' || 
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C'))
        ) {
          e.preventDefault();
          return false;
        }
      });

      // Cleanup
      return () => {
        window.removeEventListener('resize', detectDevTools);
      };
    }
  }, []);

  return null;
};

export default CodeProtection;
