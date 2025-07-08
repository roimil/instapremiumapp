'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useQuizContext } from '../contexts/QuizContext';

const PixForm: React.FC = () => {
  const router = useRouter();
  const { currentAmount, formatCurrency } = useQuizContext();
  const [activeType, setActiveType] = useState('cpf');
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  
  useEffect(() => {
    // Resetar o valor do input quando o tipo for alterado
    setInputValue('');
    setErrorMessage('');
  }, [activeType]);

  const formatCpf = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const formatPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    
    if (activeType === 'cpf') {
      setInputValue(formatCpf(value));
    } else {
      setInputValue(formatPhone(value));
    }
  };

  const validateInput = () => {
    if (activeType === 'cpf') {
      // Validar CPF (apenas verificação básica de formato)
      const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
      return cpfRegex.test(inputValue);
    } else {
      // Validar telefone (apenas verificação básica de formato)
      const phoneRegex = /^\(\d{2}\) \d{5}-\d{4}$/;
      return phoneRegex.test(inputValue);
    }
  };

  const handleSubmit = () => {
    if (!inputValue) {
      setErrorMessage(`Por favor, digite seu ${activeType === 'cpf' ? 'CPF' : 'telefone'}.`);
      return;
    }

    if (!validateInput()) {
      setErrorMessage(`${activeType === 'cpf' ? 'CPF' : 'Telefone'} inválido.`);
      return;
    }

    // Se tudo estiver válido, mostrar a mensagem de sucesso
    setShowSuccess(true);

    // Após 3 segundos, redirecionar para a próxima página
    setTimeout(() => {
      router.push('/mc');
    }, 3000);
  };

  return (
    <>
      <main className="pix-container">
        <div className="content-wrapper">
          <p className="balance-label">Seu saldo</p>
          <h1 className="balance-amount" id="mainBalance">{formatCurrency(currentAmount)}</h1>

          <h2 className="pix-title">Selecione seu tipo de chave PIX</h2>
          <p className="pix-description">
            Ao validar sua chave Pix, você receberá um "Pix Teste" de R$ 0,10, enviado por 5 Pagamentos.
          </p>
          <p className="pix-description">
            Após validação, você poderá usar o aplicativo normalmente e sacar os valores ganhos com suas avaliações.
          </p>

          <div className="pix-type-selector">
            <button 
              className={`pix-type-btn ${activeType === 'cpf' ? 'active' : ''}`} 
              onClick={() => setActiveType('cpf')}
            >
              <i className="fas fa-id-card"></i>
              <span>CPF</span>
            </button>
            <button 
              className={`pix-type-btn ${activeType === 'phone' ? 'active' : ''}`}
              onClick={() => setActiveType('phone')}
            >
              <i className="fas fa-mobile-alt"></i>
              <span>Telefone</span>
            </button>
          </div>

          <div className="input-container">
            <input 
              type="text" 
              className="pix-input" 
              placeholder={activeType === 'cpf' ? "Digite seu CPF..." : "Digite seu telefone..."}
              maxLength={activeType === 'cpf' ? 14 : 15}
              value={inputValue}
              onChange={handleInputChange}
            />
            {errorMessage && <i className="fas fa-times-circle error-icon"></i>}
          </div>
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button 
            className="btn-submit-pix"
            onClick={handleSubmit}
          >
            Cadastrar Chave PIX
          </button>
        </div>
      </main>

      {/* Modal de sucesso */}
      <div className={`background-blur ${showSuccess ? 'show' : ''}`} id="backgroundOverlay"></div>

      <div className={`success-modal ${showSuccess ? 'show' : ''}`} id="successModal">
        <h1>Parabéns!</h1>
        <p className="success-message">Sua chave PIX foi cadastrada com sucesso!</p>
        <p className="next-step-message">Agora basta realizar mais <strong>3 avaliações</strong> para realizar seu primeiro saque!</p>
        <button 
          className="btn-continue"
          onClick={() => router.push('/mc')}
        >
          Continuar
        </button>
      </div>
    </>
  );
};

export default PixForm;
