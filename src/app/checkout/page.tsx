'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import { QuizProvider } from '../contexts/QuizContext';
import '../../styles/checkout.css';

export default function CheckoutPage() {
  const router = useRouter();
  const [currentAmount, setCurrentAmount] = useState(0);
  
  useEffect(() => {
    const STORAGE_KEY = 'quizCurrentAmount';
    const storedAmount = localStorage.getItem(STORAGE_KEY);
    
    if (storedAmount) {
      setCurrentAmount(parseFloat(storedAmount));
    }
    
    // Marcar o fluxo como completado
    localStorage.setItem('quizFlowCompleted', 'true');
  }, []);
  
  const formatCurrency = (value: number): string => {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  };

  const generateRandomDate = () => {
    const today = new Date();
    const futureDate = new Date();
    futureDate.setDate(today.getDate() + Math.floor(Math.random() * 3) + 1);
    
    return futureDate.toLocaleDateString('pt-BR');
  };

  const estimatedDate = generateRandomDate();

  return (
    <QuizProvider>
      <Header />
      <div className="checkout-container">
        <h1>Parabéns!</h1>
        <p className="checkout-intro">Você completou todas as avaliações!</p>
        
        <div className="checkout-summary">
          <div className="summary-header">Resumo</div>
          <div className="summary-content">
            <div className="summary-row">
              <span>Total Ganho:</span>
              <span className="amount">{formatCurrency(currentAmount)}</span>
            </div>
            <div className="summary-row">
              <span>Taxa de Processamento:</span>
              <span className="amount">R$ 0,00</span>
            </div>
            <div className="summary-row total">
              <span>Total a Receber:</span>
              <span className="amount">{formatCurrency(currentAmount)}</span>
            </div>
          </div>
        </div>
        
        <div className="checkout-info">
          <div className="info-icon">
            <i className="fas fa-info-circle"></i>
          </div>
          <div className="info-text">
            <p>Seu pagamento será processado em até 48 horas.</p>
            <p>Previsão de pagamento: <strong>{estimatedDate}</strong></p>
          </div>
        </div>
        
        <p className="checkout-note">
          O pagamento será enviado para a chave PIX cadastrada anteriormente.
        </p>
        
        <button className="btn-return" onClick={() => router.push('/validation')}>
          Sacar agora
        </button>
        
        <div className="checkout-footer">
          <p>Obrigado por usar o InstaPremium!</p>
          <p className="copyright">© 2025 InstaPremium. Todos os direitos reservados.</p>
        </div>
      </div>
    </QuizProvider>
  );
}
