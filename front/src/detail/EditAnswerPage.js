import React from 'react';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import axios from 'axios';
import { QuestionsSub } from '../home/QuestionsSub';

export default function EditAnswerPage() {
  const [answerData, setAnswerData] = useState();
  const { questionId, answerId } = useParams();

  const [edited, editedBind] = useInput();
  const navigate = useNavigate();

  useEffect(() => {
    async function request() {
      const response = await axios.get(
        // `${process.env.REACT_APP_API_URL}/questions/${questionId}`
        `/questions/${questionId}`
      );
      const { data } = response; // 답변 속한 질문 데이터 전체

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

      setAnswerData(sortedAnswerData);
    }
    request();
  }, []);

  const handleEditSubmit = (e, answerId) => {
    const editedAnswerList = answerData.filter(
      (el) => el.answerId !== Number(answerId)
    ); // 수정할 answer만 뺀 answers 리스트

    const editedAnswer = {
      answerId: Number(answerId), // params로 받아옴
      content: edited, // useInput 이용해서 받아옴
      recommend: answerData[answerId - 1].recommend,
      createdAt: answerData[answerId - 1].createdAt,
      choose: answerData[answerId - 1].choose,
      member_id: answerData[answerId - 1].member_id,
      questionId: Number(questionId), // params로 받아옴
    };

    e.preventDefault();

    async function request() {
      await axios.patch(
        // `${process.env.REACT_APP_API_URL}/questions/${questionId}`,
        `/questions/${questionId}`,
        { answers: [...editedAnswerList, editedAnswer] }
      );
      navigate(`/questions/${questionId}`);
    }
    request();
  };

  return (
    <>
      {answerData && (
        <ContentsAndSideBox>
          <ContentsContainer>
            <AnswerFormHeader>Answer</AnswerFormHeader>
            <form onSubmit={(e) => handleEditSubmit(e, answerId)}>
              <Textarea
                required
                {...editedBind}
                placeholder={answerData[answerId - 1].content}
              ></Textarea>
              <Guideline>
                Thanks for contributing an answer to Stack Overflow!
                <br />
                <br />
                • Please be sure to answer the question. Provide details and
                share your research!
                <br />
                <br />
                But avoid …
                <br />
                <br />
                • Asking for help, clarification, or responding to other
                answers.
                <br />
                • Making statements based on opinion; back them up with
                references or personal experience.
                <br />
                <br />
                To learn more, see our tips on writing great answers.
              </Guideline>
              <SubmitBtn>Save edits</SubmitBtn>
            </form>
          </ContentsContainer>
          <SideBox>
            <QuestionsSub />
          </SideBox>
        </ContentsAndSideBox>
      )}
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

const AnswerFormHeader = styled.div`
  font-size: 24px;
  padding: 20px 0;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 24px;
  font-size: 18px;

  ::placeholder {
    font-size: 18px;
  }
`;

const Guideline = styled.div`
  width: 100%;

  padding: 24px;
  font-size: 18px;
  background-color: #fdf7e2;
  border: 1px solid #f2ca52;
  margin: 20px 0;
  color: #6a737c;
  line-height: 18px;
  font-size: 14px;
`;

const SubmitBtn = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #0a95ff;
  color: white;
  width: 100px;
  height: 42px;
  margin: 20px 0;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: #0074cc;
  }
`;

const SideBox = styled.div`
  width: 320px;
  margin: 24px;
`;
