import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function Title() {
  return (
    <TitieContainer>
      <TitleAndInfo>
        <TitleText>
          Merge two videos on the client or backend side using javascript
        </TitleText>
        <QuestionInfo>
          <span className="infoTitle">
            Asked<span className="infoText">11 days ago</span>
          </span>
          <span className="infoTitle">
            Modified<span className="infoText">today</span>
          </span>
          <span className="infoTitle">
            Viewed<span className="infoText">235 times</span>
          </span>
        </QuestionInfo>
      </TitleAndInfo>
      <Link to="/questions/ask">
        <AskQuestionBtn>Ask Question</AskQuestionBtn>
      </Link>
    </TitieContainer>
  );
}

const TitieContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleAndInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled.h2`
  color: #3b4045;
  font-size: 27px;
`;

const QuestionInfo = styled.div`
  width: 25rem;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin-top: 8px;

  .infoTitle {
    color: #6a737c;
  }
  .infoText {
    padding-left: 0.2rem;
    color: #232629;
  }
`;

const AskQuestionBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #0a95ff;
  color: white;
  width: 100px;
  height: 38px;

  &:hover {
    cursor: pointer;
    background-color: #0074cc;
  }
`;
