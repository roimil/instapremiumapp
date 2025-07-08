'use client';

import React from 'react';

interface InterestQuestionProps {
  onYesClick: () => void;
  onNoClick: () => void;
  questionText?: string;
}

const InterestQuestion: React.FC<InterestQuestionProps> = ({
  onYesClick,
  onNoClick,
  questionText = 'Você tem interesse nessa publicação?'
}) => {
  return (
    <div className="interest-question-container" style={{
      backgroundColor: '#000',
      padding: '20px',
      borderRadius: '12px',
      width: '100%',
      maxWidth: '500px',
      margin: '20px auto'
    }}>
      <h3 style={{
        color: '#fff',
        textAlign: 'center',
        marginBottom: '20px',
        fontSize: '20px'
      }}>
        {questionText}
      </h3>
      
      <div className="answer-buttons">
        <button className="btn-no" onClick={onNoClick}>
          <i className="fas fa-thumbs-down"></i>
          <span>Não</span>
        </button>
        <button className="btn-yes" onClick={onYesClick}>
          <i className="fas fa-thumbs-up"></i>
          <span>Sim</span>
        </button>
      </div>
    </div>
  );
};

export default InterestQuestion;
