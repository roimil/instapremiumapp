'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface HeaderProps {
  showBalance?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showBalance = true }) => {
  const [currentAmount, setCurrentAmount] = useState('50,00');

  useEffect(() => {
    // Carregar o saldo do localStorage, se disponível
    const STORAGE_KEY = 'quizCurrentAmount';
    const storedAmount = localStorage.getItem(STORAGE_KEY);
    
    if (storedAmount) {
      const amount = parseFloat(storedAmount).toFixed(2).replace('.', ',');
      setCurrentAmount(amount);
    }
  }, []);

  return (
    <header className="main-header">
      <div className="logo">
        <Link href="/">
          <div className="logo-container">
            <span>InstaPremium</span>
            <div className="dollar-icon" style={{color: '#ffffff', fontWeight: 'bold'}}>
              <span style={{color: '#ffffff'}}>$</span>
            </div>
          </div>
        </Link>
      </div>
      {showBalance && (
        <div className="balance" id="headerBalance">
          <span>R$ {currentAmount}</span>
        </div>
      )}
    </header>
  );
};

export default Header;
