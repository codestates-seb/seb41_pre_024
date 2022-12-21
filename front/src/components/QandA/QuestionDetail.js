import React from 'react';
import styled from 'styled-components';

export default function QuestionDetail() {
  return (
    <DetailContainer>
      <AdditionalFunction />
      <DetailBody>질문 본문입니당.</DetailBody>
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid gold;
`;

const AdditionalFunction = styled.div`
  width: 100px;
  height: 400px;
  border: 3px solid green;
`;

const DetailBody = styled.div`
  flex: 1;
  height: 400px;
  border: 3px solid gray;
`;
