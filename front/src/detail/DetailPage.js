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
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function request() {
      const response = await axios.get(`http://localhost:3001/questions/${id}`);
      const { data } = response;
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
  /* border: 1px solid blue; */
`;

const ContentsAndSideBox = styled.div`
  /* border: 3px solid aliceblue; */
  display: flex;
  justify-content: space-between;
`;

const ContentsContainer = styled.div`
  width: 780px;
  /* height: 700px;
  border: 3px solid yellowgreen; */
`;

const SideBox = styled.div`
  width: 320px;
  /* height: 700px; */
  margin: 24px;
  /* border: 3px solid sandybrown; */
`;
