'use client';

import { useQuizContext } from '../contexts/QuizContext';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const QuizContainer: React.FC = () => {
  const { 
    currentInfluencer, 
    quizData, 
    handleAnswer, 
    isLoading, 
    showRewardModal, 
    rewardAmount,
    formatCurrency
  } = useQuizContext();
  
  // Estado para a animação de contagem
  const [countValue, setCountValue] = useState(0);
  
  // Efeito para a animação de contagem quando o modal de recompensa é exibido
  useEffect(() => {
    if (showRewardModal && rewardAmount > 0) {
      let startValue = 0;
      const duration = 1500; // Duração da animação em ms
      const frameDuration = 30; // Duração de cada frame em ms
      const totalFrames = duration / frameDuration;
      const valueIncrement = rewardAmount / totalFrames;
      
      // Reset contador
      setCountValue(0);
      
      const timer = setInterval(() => {
        startValue += valueIncrement;
        if (startValue >= rewardAmount) {
          clearInterval(timer);
          setCountValue(rewardAmount);
        } else {
          setCountValue(startValue);
        }
      }, frameDuration);
      
      return () => clearInterval(timer);
    }
  }, [showRewardModal, rewardAmount]);

  if (!currentInfluencer || !quizData[currentInfluencer]) {
    return null;
  }

  const influencerData = quizData[currentInfluencer];

  return (
    <>
      <div className="quiz-container">
        {/* Header */}
        <header className="influencer-header">
          <div className="profile-info">
            <div className="relative w-[50px] h-[50px]">
              <Image 
                src={influencerData.profileImage} 
                alt={influencerData.displayName}
                className="profile-pic"
                width={50}
                height={50}
              />
            </div>
            <div className="profile-details">
              <h2>
                {influencerData.displayName} <i className="fas fa-check-circle verified"></i>
              </h2>
              <p>{influencerData.username}</p>
            </div>
          </div>
        </header>
        
        <div className="influencer-image">
          <Image 
            src={influencerData.mainImage} 
            alt={influencerData.displayName}
            width={600}
            height={600}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>

        {/* Question Section */}
        <div className="question-container" style={{ backgroundColor: '#111', padding: '20px', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.1)', boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)' }}>
          <h1>Você tem interesse nessa publicação?</h1>
          <div className="answer-buttons">
            <button className="btn-no" onClick={handleAnswer} disabled={isLoading}>
              <i className="fas fa-thumbs-down"></i>
              <span>Não</span>
            </button>
            <button className="btn-yes" onClick={handleAnswer} disabled={isLoading}>
              <i className="fas fa-thumbs-up"></i>
              <span>Sim</span>
            </button>
          </div>
        </div>
      </div>

      {/* Preloader */}
      <div className={`preloader ${isLoading ? 'show' : ''}`}>
        <div className="spinner"></div>
        <div className="preloader-text">Procurando influenciadores...</div>
      </div>

      {/* Reward Modal */}
      <div className={`reward-modal ${showRewardModal ? 'show' : ''}`} id="rewardModal">
        <div className="modal-content">
          <div className="checkmark">
            <i className="fas fa-check"></i>
          </div>
          <h2 className="modal-title-gradient">Saldo atualizado!</h2>
          <p className="reward-text">Você recebeu:</p>
          <div className="reward-amount" id="rewardAmount">
            {formatCurrency(countValue)}
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizContainer;
