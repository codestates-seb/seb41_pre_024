import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Contents from './Contents';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { QuestionsSub } from '../home/QuestionsSub';

export default function DetailPage() {
  const [questionData, setQuestionData] = useState();
  const { questionId } = useParams();

  useEffect(() => {
    async function request() {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/questions/${questionId}`
      );
      const { data } = response;
      console.log(data);
      setQuestionData(data);
    }
    request();
  }, []);

  return (
    <>
      {questionData && (
        <DetailContainer>
          <Title data={questionData} />
          <hr />
          <ContentsAndSideBox>
            <ContentsContainer>
              <Contents data={questionData} />
            </ContentsContainer>
            <SideBox>
              <QuestionsSub />
            </SideBox>
          </ContentsAndSideBox>
        </DetailContainer>
      )}
    </>
  );
}

const DetailContainer = styled.div`
  width: 900px;
`;

const ContentsAndSideBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContentsContainer = styled.div`
  width: 780px;
`;

const SideBox = styled.div`
  width: 320px;
  margin: 24px;
`;
