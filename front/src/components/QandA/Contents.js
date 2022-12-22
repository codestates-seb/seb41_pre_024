import React from 'react';
import styled from 'styled-components';

import Question from './Question';
import AnswerList from './AnswerList';
import AnswerSubmit from './AnswerSubmit';

// axios!

export default function Contents({ data }) {
  return (
    <div>
      {data && (
        <div>
          <Question data={data} />
          <AnswerList data={data} />
          <AnswerSubmit />
        </div>
      )}
    </div>
  );
}
