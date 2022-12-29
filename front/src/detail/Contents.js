import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Question from './Question';
import AnswerList from './AnswerList';
import AnswerSubmit from './AnswerSubmit';

// axios!

export default function Contents({ data }) {
  const [isLogin, setIsLogin] = useState(false);
  const [isMyQuestion, setIsMyQuestion] = useState(false);

  console.log(data);
  useEffect(() => {
    // 로그인 상태인지
    if (localStorage.access_token) {
      setIsLogin(true);
    }

    // 내가 쓴 질문인지
    if (data.member_id === localStorage.email) {
      setIsMyQuestion(true);
    }
  }, []);

  // answer 데이터 id 순으로 정렬
  const sortedAnswerData = data.answers.sort(function (a, b) {
    if (a.answerId > b.answerId) {
      return 1;
    }
    if (a.answerId < b.answerId) {
      return -1;
    }
    return 0;
  });

  return (
    <div>
      {data && (
        <div>
          <Question isMyQuestion={isMyQuestion} data={data} />
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
          <AnswerList isMyQuestion={isMyQuestion} data={sortedAnswerData} />
          {isLogin && <AnswerSubmit data={sortedAnswerData} />}
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
