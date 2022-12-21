import React from 'react';
import QuestionDetail from './QuestionDetail';
import AnswerList from './AnswerList';
import AnswerSubmit from './AnswerSubmit';

export default function MainSection() {
  return (
    <>
      <QuestionDetail />
      <AnswerList />
      <AnswerSubmit />
    </>
  );
}
