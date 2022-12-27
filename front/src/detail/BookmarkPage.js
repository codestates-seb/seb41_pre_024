import React from 'react';
import styled from 'styled-components';

import { QuestionsSub } from '../home/QuestionsSub';
import { useSelector } from 'react-redux';

export default function BookmarkPage() {
  const bookmarks = useSelector((state) => state.bookmarkReducer);

  const { question_bookmarks, answer_bookmarks } = bookmarks;

  return (
    <>
      <ContentsAndSideBox>
        <ContentsContainer>
          <Header>Question Bookmark 📚</Header>
          <div></div>
          <Header>Answer Bookmark 📚</Header>
          {answer_bookmarks.map((answer) => (
            <div key={answer.answer_id}>{answer.answer_content}</div>
          ))}
        </ContentsContainer>
        <SideBox>
          <QuestionsSub />
        </SideBox>
      </ContentsAndSideBox>
    </>
  );
}

const ContentsAndSideBox = styled.div`
  /* border: 3px solid aliceblue; */
  width: 900px;
  display: flex;
  justify-content: space-between;
`;

const ContentsContainer = styled.div`
  width: 780px;
  /* height: 700px;
  border: 3px solid yellowgreen; */
`;

const Header = styled.div`
  font-size: 24px;
  padding: 20px 0;
`;

const SideBox = styled.div`
  width: 320px;
  /* height: 700px; */
  margin: 24px;
  /* border: 3px solid sandybrown; */
  /* background-color: #fbf3d5; */
`;
