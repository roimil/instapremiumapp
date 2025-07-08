'use client';

import Header from '../components/Header';
import QuizContainer from '../components/QuizContainer';
import { QuizProvider } from '../contexts/QuizContext';

export default function NeymarPage() {
  return (
    <QuizProvider influencerId="neymar">
      <Header />
      <QuizContainer />
    </QuizProvider>
  );
}
