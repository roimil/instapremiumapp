'use client';

import Header from '../components/Header';
import QuizContainer from '../components/QuizContainer';
import { QuizProvider } from '../contexts/QuizContext';

export default function McPage() {
  return (
    <QuizProvider influencerId="mc">
      <Header />
      <QuizContainer />
    </QuizProvider>
  );
}
