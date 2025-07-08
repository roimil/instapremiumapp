'use client';

import Header from '../components/Header';
import QuizContainer from '../components/QuizContainer';
import { QuizProvider } from '../contexts/QuizContext';

export default function LuanPage() {
  return (
    <QuizProvider influencerId="luan">
      <Header />
      <QuizContainer />
    </QuizProvider>
  );
}
