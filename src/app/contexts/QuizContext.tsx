'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { playCashSound } from '../utils/cashSound';

interface QuizFlow {
  [key: string]: {
    reward: number;
    nextPage: string;
    profileImage: string;
    mainImage: string;
    displayName: string;
    username: string;
  }
}

interface QuizContextType {
  currentAmount: number;
  currentInfluencer: string | null;
  quizData: QuizFlow;
  handleAnswer: () => void;
  formatCurrency: (value: number) => string;
  updateBalance: (newAmount: number) => void;
  showRewardModal: boolean;
  rewardAmount: number;
  isLoading: boolean;
}

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuizContext = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuizContext deve ser usado dentro de um QuizProvider');
  }
  return context;
};

interface QuizProviderProps {
  children: ReactNode;
  influencerId?: string;
}

const STORAGE_KEY = 'quizCurrentAmount';
const INITIAL_AMOUNT = 50.00;

export const QuizProvider: React.FC<QuizProviderProps> = ({ children, influencerId }) => {
  const router = useRouter();
  
  // Configuração do fluxo do quiz
  const quizFlow: QuizFlow = {
    'anitta': {
      reward: 72.66,
      nextPage: '/neymar',
      profileImage: '/assets/images/perfilanita.jpeg',
      mainImage: '/assets/images/anita.jpeg',
      displayName: 'Anitta',
      username: '@anitta'
    },
    'neymar': {
      reward: 68.48,
      nextPage: '/bruna',
      profileImage: '/assets/images/neyprofile.jpeg',
      mainImage: '/assets/images/ney.jpeg',
      displayName: 'Neymar Jr',
      username: '@neymarjr'
    },
    'bruna': {
      reward: 75.63,
      nextPage: '/insert-pix',
      profileImage: '/assets/images/brunaprofile.jpeg',
      mainImage: '/assets/images/bruna.jpeg',
      displayName: 'Bruna Marquezine',
      username: '@brunamarquezine'
    },
    'mc': {
      reward: 70.00,
      nextPage: '/larissa',
      profileImage: '/assets/images/mcprofile.jpeg',
      mainImage: '/assets/images/mc.jpeg',
      displayName: 'MC Daniel',
      username: '@mcdaniell'
    },
    'larissa': {
      reward: 80.00,
      nextPage: '/luan',
      profileImage: '/assets/images/larissaProfile.jpeg',
      mainImage: '/assets/images/larissa.jpeg',
      displayName: 'Larissa Manoela',
      username: '@larissamanoela'
    },
    'luan': {
      reward: 65.00,
      nextPage: 'final',
      profileImage: '/assets/images/luan.jpeg',
      mainImage: '/assets/images/luanFoto.jpeg',
      displayName: 'Luan Santana',
      username: '@luansantana'
    }
  };

  const [currentAmount, setCurrentAmount] = useState(INITIAL_AMOUNT);
  const [showRewardModal, setShowRewardModal] = useState(false);
  const [rewardAmount, setRewardAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // Carregar o saldo do localStorage quando o componente montar
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedAmount = localStorage.getItem(STORAGE_KEY);
      if (storedAmount) {
        setCurrentAmount(parseFloat(storedAmount));
      }
    }
  }, []);

  // Formatar valor como moeda
  const formatCurrency = (value: number): string => {
    return `R$ ${value.toFixed(2).replace('.', ',')}`;
  };

  // Atualizar o saldo e salvar no localStorage
  const updateBalance = (newAmount: number) => {
    setCurrentAmount(newAmount);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newAmount.toString());
    }
  };

  // Manipular resposta do usuário
  const handleAnswer = () => {
    if (!influencerId || !quizFlow[influencerId]) return;
    
    // Primeiro mostrar o modal de recompensa com animação de contagem
    const reward = quizFlow[influencerId].reward;
    const nextPage = quizFlow[influencerId].nextPage;
    const finalBalance = currentAmount + reward;
    
    setRewardAmount(reward);
    setShowRewardModal(true);
    
    // Tocar o som de caixa registradora
    playCashSound();
    
    // Atualizar o saldo
    updateBalance(finalBalance);
    
    // Aguardar 1.5 segundos para a animação de contagem terminar completamente
    setTimeout(() => {
      // Só então esconder o modal de recompensa e mostrar o loader
      setShowRewardModal(false);
      setIsLoading(true);
      
      // Mostrar o loader "Procurando influenciadores" por 1 segundo
      setTimeout(() => {
        setIsLoading(false);
        
        // Redirecionar para a próxima página
        if (nextPage === 'final') {
          localStorage.setItem('quizFlowCompleted', 'true');
          router.push('/checkout');
        } else {
          router.push(nextPage);
        }
      }, 2000);  // 1 segundo de loader
    }, 2500);  // 1.5 segundos para a animação de contagem
  };

  const contextValue: QuizContextType = {
    currentAmount,
    currentInfluencer: influencerId || null,
    quizData: quizFlow,
    handleAnswer,
    formatCurrency,
    updateBalance,
    showRewardModal,
    rewardAmount,
    isLoading
  };

  return (
    <QuizContext.Provider value={contextValue}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContext;
