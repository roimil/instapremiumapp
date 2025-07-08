'use client';

interface WelcomeModalProps {
  onStart: () => void;
}

const WelcomeModal: React.FC<WelcomeModalProps> = ({ onStart }) => {

  return (
    <>
      <div className="blur-background"></div>
      <div className="modal">
        <h1>Parabéns!</h1>
        <p>Você acaba de ganhar 1 licença gratuita para avaliar influenciadores em nosso app!</p>
        <p className="highlight">Aproveite, você já ganhou R$ 50,00!</p>
        <p>Avalie 3 influenciadores e realize seu primeiro saque!</p>
        <button className="start-button" onClick={onStart}>
          COMEÇAR
        </button>
      </div>
    </>
  );
};

export default WelcomeModal;
