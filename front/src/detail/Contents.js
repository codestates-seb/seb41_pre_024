import React from 'react';
import styled from 'styled-components';

import Question from './Question';
import AnswerList from './AnswerList';
import AnswerSubmit from './AnswerSubmit';

// axios!

export default function Contents({ data }) {
  // answer 데이터 id 순으로 정렬
  const sortedAnswerData = data.answers.sort(function (a, b) {
    if (a.answer_id > b.answer_id) {
      return 1;
    }
    if (a.answer_id < b.answer_id) {
      return -1;
    }
    return 0;
  });

  console.log('data', data);
  console.log('sortedAnswerData', sortedAnswerData);

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
          <AnswerList data={sortedAnswerData} />
          <AnswerSubmit data={sortedAnswerData} />
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
