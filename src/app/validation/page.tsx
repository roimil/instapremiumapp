'use client';

import { useEffect, useState } from 'react';
import '../../styles/validation.css';
import { useRouter } from 'next/navigation';

export default function ValidationPage() {
  const router = useRouter();
  const [timeLeft, setTimeLeft] = useState(329); // 5:29 em segundos
  const [currentAmount, setCurrentAmount] = useState(0);
  
  useEffect(() => {
    const STORAGE_KEY = 'quizCurrentAmount';
    const storedAmount = localStorage.getItem(STORAGE_KEY);
    
    if (storedAmount) {
      setCurrentAmount(parseFloat(storedAmount));
    }
    
    // Contador regressivo
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);
  
  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handleCheckout = () => {
    window.open('https://go.disruptybr.com.br/fobvs0fo3z', '_blank');
    
    // Opcional: redirecionar para página de checkout após um tempo
    setTimeout(() => {
      router.push('/checkout');
    }, 500);
  };

  return (
    <>
      <div className="validation-page">
        <div className="time-limit-bar">
          Tempo limite para resgate: {formatTime(timeLeft)}
        </div>
        
        <div className="validation-container">
          <h1 className="validation-title">Taxa de Validação</h1>
          
          <p className="validation-description">
            Seguindo as diretrizes do Banco Central do Brasil, solicitamos uma
            confirmação de identidade de <strong>R$37,00</strong> para validarmos seu cadastro,
            garantindo a qualidade dos nossos usuários.
          </p>
          
          <p className="validation-note">
            Não se preocupe, o dinheiro será totalmente reembolsado em até 2
            horas junto ao saldo acumulado.
          </p>
          
          <div className="validation-features">
            <div className="feature-item">
              <div className="feature-icon green">
                <i className="fas fa-shield-alt"></i>
              </div>
              <div className="feature-text">
                <h3>Taxa obrigatória</h3>
                <p>Obrigatório para realizar o saque dos seus ganhos.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon green">
                <i className="fas fa-redo-alt"></i>
              </div>
              <div className="feature-text">
                <h3>Valor reembolsável</h3>
                <p>Você recebe os R$37,00 de volta após finalizar esta etapa.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon green">
                <i className="fas fa-lock"></i>
              </div>
              <div className="feature-text">
                <h3>Garantia de segurança</h3>
                <p>Seu pagamento é seguro e protegido pelo Banco Central do Brasil.</p>
              </div>
            </div>
          </div>
          
          <button className="btn-validate" onClick={handleCheckout}>
            Liberar meu saque de R$ {currentAmount.toFixed(2).replace('.', ',')}
          </button>
          
          <div className="security-badges">
            <span><i className="fas fa-shield-alt"></i> Site Seguro</span>
            <span><i className="fas fa-lock"></i> Dados Protegidos</span>
          </div>
        </div>
        
        <div className="comments-container">
          <div className="comments-header">
            <div className="facebook-header">
              <i className="fab fa-facebook"></i> Facebook Comments
            </div>
            <div className="comments-count">
              Exibindo 3 de 1.343 comentários
            </div>
          </div>
          
          <div className="comments-list">
            <div className="comment-item">
              <div className="comment-avatar">
                <img src="/assets/images/commenter1.jpg" alt="Josana de Oliveira" />
              </div>
              <div className="comment-content">
                <h3 className="comment-author">Josana de Oliveira:</h3>
                <p className="comment-text">Obrigadoo!! Recebi certinho os R$500, vai me ajudar muito na casa 🙏</p>
                <div className="comment-actions">
                  <span>Responder</span> • <span>Curtir</span> • <span>Seguir</span> • 
                  <span className="comment-time">3 Min</span>
                </div>
              </div>
            </div>
            
            <div className="comment-item">
              <div className="comment-avatar">
                <img src="/assets/images/commenter2.jpg" alt="Roberto Santos" />
              </div>
              <div className="comment-content">
                <h3 className="comment-author">Roberto Santos:</h3>
                <p className="comment-text">Até pensei que seria golpe, mas que bom que não é, fiz o pagamento da taxa e caiu por aqui.</p>
                <div className="comment-actions">
                  <span>Responder</span> • <span>Curtir</span> • <span>Seguir</span> • 
                  <span className="comment-time">6 Min</span>
                </div>
              </div>
            </div>
            
            <div className="comment-item">
              <div className="comment-avatar">
                <img src="/assets/images/commenter3.jpg" alt="Ulisses Soares" />
              </div>
              <div className="comment-content">
                <h3 className="comment-author">Ulisses Soares:</h3>
                <p className="comment-text">Sério? Estava desconfiado, mas vou tentar aqui...</p>
                <div className="comment-actions">
                  <span>Responder</span> • <span>Curtir</span> • <span>Seguir</span> • 
                  <span className="comment-time">8 Min</span>
                </div>
              </div>
            </div>
            
            <div className="comment-item">
              <div className="comment-avatar">
                <img src="/assets/images/commenter4.jpg" alt="Silvana Freitas" />
              </div>
              <div className="comment-content">
                <h3 className="comment-author">Silvana Freitas:</h3>
                <p className="comment-text">Pode confiar, testei aqui e funcionou, ja to usando a 1 semana</p>
                <div className="comment-actions">
                  <span>Responder</span> • <span>Curtir</span> • <span>Seguir</span> • 
                  <span className="comment-time">12 Min</span>
                </div>
              </div>
            </div>
            
            <div className="comment-item">
              <div className="comment-avatar">
                <img src="/assets/images/commenter5.jpg" alt="Felipe de Castro" />
              </div>
              <div className="comment-content">
                <h3 className="comment-author">Felipe de Castro:</h3>
                <p className="comment-text">Acabou de cair aqui na minha conta, obrigado 🙏</p>
                <div className="comment-actions">
                  <span>Responder</span> • <span>Curtir</span> • <span>Seguir</span> • 
                  <span className="comment-time">17 Min</span>
                </div>
              </div>
            </div>
            
            <div className="comment-item">
              <div className="comment-avatar">
                <img src="/assets/images/commenter6.jpg" alt="Sophia Andrade" />
              </div>
              <div className="comment-content">
                <h3 className="comment-author">Sophia Andrade:</h3>
                <p className="comment-text">Foi bem rápido até, muito obrigado, vim do Kwai ❤</p>
                <div className="comment-actions">
                  <span>Responder</span> • <span>Curtir</span> • <span>Seguir</span> • 
                  <span className="comment-time">22 Min</span>
                </div>
              </div>
            </div>
            
            <div className="comment-input">
              <div className="comment-avatar-input">
                <img src="/assets/images/commenter1.jpg" alt="Usuário" />
              </div>
              <div className="comment-form">
                <input type="text" placeholder="Escreva um comentário..." />
              </div>
            </div>
            
            <div className="comments-footer">
              <i className="fab fa-facebook"></i> Entre ou cadastre-se para comentar ou ver mais comentários
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
