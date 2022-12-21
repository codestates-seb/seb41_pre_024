import React from 'react';
import styled from 'styled-components';

import QuestionDetail from './QuestionDetail';
import AnswerList from './AnswerList';
import AnswerSubmit from './AnswerSubmit';

// axios!

export default function Content() {
  return (
    <div>
      <QuestionDetail />
      <AnswerList />
      <AnswerSubmit />
    </div>
  );
}

const ContentContainer = styled.div`
  border: 1px solid red;
`;
