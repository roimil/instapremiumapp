'use client';

import Header from '../components/Header';
import PixForm from '../components/PixForm';
import { QuizProvider } from '../contexts/QuizContext';
import '../../styles/pix.css';

export default function InsertPixPage() {
  return (
    <QuizProvider>
      <Header />
      <PixForm />
    </QuizProvider>
  );
}
