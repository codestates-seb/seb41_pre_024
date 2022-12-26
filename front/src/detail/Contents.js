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
          <AnswerHeader>
            <div className="answer">{data.answers.length} Answer</div>
            <div>
              <span className="sortedBy">Sorted by:</span>
              <select className="select">
                <option value="Highest">Highest score (default)</option>
                <option value="Trending">
                  Trending (redent votes count more)
                </option>
                <option value="Date">Date modified (newest first)</option>
              </select>
            </div>
          </AnswerHeader>
          <AnswerList data={data} />
          <AnswerSubmit data={data} />
        </div>
      )}
    </div>
  );
}

const AnswerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;

  .select {
    height: 30px;
    padding: 5px;
    font-size: 14px;
  }

  .answer {
    font-size: 24px;
  }

  .sortedBy {
    font-size: 12px;
    padding-right: 10px;
  }
`;
