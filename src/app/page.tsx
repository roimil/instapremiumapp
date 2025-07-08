'use client';

import { useState, useEffect } from 'react';
import WelcomeModal from './components/WelcomeModal';
import QuizContainer from './components/QuizContainer';
import Header from './components/Header';
import { QuizProvider } from './contexts/QuizContext';

export default function HomePage() {
  const [showQuiz, setShowQuiz] = useState(false);

  // Limpar localStorage quando a página home é carregada
  useEffect(() => {
    // Definir o valor inicial do saldo
    localStorage.setItem('quizCurrentAmount', '50.00');
    
    // Remover outros registros que possam existir
    localStorage.removeItem('quizFlowCompleted');
  }, []);

  const handleStart = () => {
    setShowQuiz(true);
  };

  return (
    <QuizProvider influencerId="anitta">
      <Header showBalance={false} />
      
      {!showQuiz ? (
        <WelcomeModal onStart={handleStart} />
      ) : (
        <QuizContainer />
      )}
    </QuizProvider>
  );
}
