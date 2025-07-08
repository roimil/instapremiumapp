'use client';

import Header from '../components/Header';
import QuizContainer from '../components/QuizContainer';
import { QuizProvider } from '../contexts/QuizContext';

export default function BrunaPage() {
  return (
    <QuizProvider influencerId="bruna">
      <Header />
      <QuizContainer />
    </QuizProvider>
  );
}
