import React from 'react';
import styled from 'styled-components';

import Title from './Title';
import Contents from './Contents';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useLocation, useNavigate } from 'react-router-dom';

import { QuestionsSub } from '../home/QuestionsSub';

export default function DetailPage() {
  const [questionData, setQuestionData] = useState();
  const { questionId } = useParams();
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  // console.log(location);
  console.log(params);
  // console.log(navigate);

  useEffect(() => {
    async function request() {
      const response = await axios.get(
        `http://ec2-52-78-191-151.ap-northeast-2.compute.amazonaws.com:8080/api/questions/${questionId}`
      );
      const { data } = response.data;
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
