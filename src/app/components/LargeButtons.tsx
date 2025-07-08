'use client';

import React from 'react';

interface LargeButtonsProps {
  onYesClick?: () => void;
  onNoClick?: () => void;
  yesText?: string;
  noText?: string;
  singleButton?: boolean;
  singleButtonText?: string;
  singleButtonOnClick?: () => void;
  singleButtonType?: 'yes' | 'no';
}

const LargeButtons: React.FC<LargeButtonsProps> = ({ 
  onYesClick, 
  onNoClick, 
  yesText = 'Sim', 
  noText = 'Não', 
  singleButton = false,
  singleButtonText = '',
  singleButtonOnClick,
  singleButtonType = 'yes'
}) => {
  if (singleButton) {
    return (
      <div className="btn-container">
        <button 
          className={`btn-large ${singleButtonType === 'yes' ? 'btn-yes' : 'btn-no'}`} 
          onClick={singleButtonOnClick}
        >
          <span>
            {singleButtonType === 'yes' ? '👍 ' : '👎 '}
            {singleButtonText}
          </span>
        </button>
      </div>
    );
  }

  return (
    <div className="btn-container">
      <button className="btn-large btn-yes" onClick={onYesClick}>
        <span>👍 {yesText}</span>
      </button>
      <button className="btn-large btn-no" onClick={onNoClick}>
        <span>👎 {noText}</span>
      </button>
    </div>
  );
};

export default LargeButtons;
