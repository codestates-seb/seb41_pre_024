import React from 'react';
import styled from 'styled-components';

import { QuestionsSub } from '../home/QuestionsSub';
import { useSelector } from 'react-redux';
import { BiTrash } from 'react-icons/bi';

import { useDispatch } from 'react-redux';

import {
  remove_answer_bookmark,
  remove_question_bookmark,
} from '../detail/bookmarkSlice';

export const BookmarkItem = ({ question, answer }) => {
  const dispatch = useDispatch();

  return (
    <DetailBody>
      <DetailText>
        {question && question.question_content}
        {answer && answer.answer_content}
      </DetailText>
      <DetailFooter>
        <Author>
          <div className="createdAt">
            asked {question && question.question_time}
            {answer && answer.answer_time}
          </div>
          <div className="user">
            <div className="userInfoText">
              <div className="userName userInfo">
                {question && question.member_id}
                {answer && answer.member_id}
              </div>
            </div>
          </div>
        </Author>
        <DeleteBtn>
          <BiTrash
            className="delete"
            onClick={() => {
              question && dispatch(remove_question_bookmark(question));
              answer && dispatch(remove_answer_bookmark(answer));
            }}
          />
        </DeleteBtn>
      </DetailFooter>
    </DetailBody>
  );
};

export default function BookmarkPage() {
  const bookmarks = useSelector((state) => state.bookmarkReducer);

  const { question_bookmarks, answer_bookmarks } = bookmarks;

  return (
    <>
      <ContentsAndSideBox>
        <ContentsContainer>
          <Header>Question Bookmark 📚</Header>
          {question_bookmarks.map((question) => (
            <BookmarkItem question={question} />
          ))}
          <Header>Answer Bookmark 📚</Header>
          {answer_bookmarks.map((answer) => (
            <BookmarkItem answer={answer} />
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
  width: 900px;
  display: flex;
  justify-content: space-between;
`;

const ContentsContainer = styled.div`
  width: 780px;
`;

const Header = styled.div`
  font-size: 24px;
  padding: 20px 0;
`;

const SideBox = styled.div`
  width: 320px;
  margin: 24px;
`;

const DetailBody = styled.div`
  flex: 1;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
`;

const DetailText = styled.div`
  line-height: 24px;
  margin-bottom: 15px;
`;

const DetailFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Author = styled.div`
  padding: 8px 30px 8px 8px;
  background-color: #d9e9f7;
  font-size: 14px;
  color: #6a737c;

  .createdAt {
    font-size: 12px;
    padding: 3px;
  }
  .user {
    display: flex;
  }

  .userInfo {
    margin: 3px;
  }

  .userIcon {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }

  .userName {
    color: #0995ff;

    :hover {
      color: #4066b2;
    }
  }

  .userreputation {
    font-weight: 900;
  }
`;

const DeleteBtn = styled.div`
  .delete {
    font-size: 20px;
    color: #0995ff;

    :hover {
      color: #4066b2;
    }
  }
`;
