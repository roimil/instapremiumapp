'use client';

import Header from '../components/Header';
import QuizContainer from '../components/QuizContainer';
import { QuizProvider } from '../contexts/QuizContext';

export default function LarissaPage() {
  return (
    <QuizProvider influencerId="larissa">
      <Header />
      <QuizContainer />
    </QuizProvider>
  );
}
