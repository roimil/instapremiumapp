// Utilitário para tocar som de caixa registradora
// Este arquivo espera que você tenha um arquivo cash-register.mp3 na pasta /public/assets/sounds/

export const playCashSound = () => {
  if (typeof window !== 'undefined') {
    try {
      // Tenta tocar o som usando um arquivo que você deve baixar e adicionar na pasta /public/assets/sounds/
      const audio = new Audio('/assets/sounds/cash-register.mp3');
      audio.play();
    } catch (err) {
      console.error('Erro ao tocar som:', err);
    }
  }
};
