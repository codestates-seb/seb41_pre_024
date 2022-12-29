import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function AnswerSubmit({ data }) {
  const [answer, answerBind] = useInput();
  const navigate = useNavigate();
  const { questionId } = useParams();

  const newAnswer = {
    answerId: data.length + 1,
    content: answer,
    recommend: 0,
    createdAt: new Date().toLocaleDateString('ko-KR'),
    choose: false,
    member_id: 'Pika', // 로그인한 user_id 필요
    questionId: questionId,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    async function request() {
      await axios.patch(
        // `${process.env.REACT_APP_API_URL}/questions/${questionId}`,
        `/questions/${questionId}`,
        { answers: [...data, newAnswer] }
      );
      window.location.reload();
    }
    request();
  };

  return (
    <div>
      <AnswerFormHeader>Your Answer</AnswerFormHeader>
      <form onSubmit={handleSubmit}>
        <Textarea required {...answerBind} placeholder=""></Textarea>
        <Guideline>
          Thanks for contributing an answer to Stack Overflow!
          <br />
          <br />
          • Please be sure to answer the question. Provide details and share
          your research!
          <br />
          <br />
          But avoid …
          <br />
          <br />
          • Asking for help, clarification, or responding to other answers.
          <br />
          • Making statements based on opinion; back them up with references or
          personal experience.
          <br />
          <br />
          To learn more, see our tips on writing great answers.
        </Guideline>
        <SubmitBtn>Post Your Answer</SubmitBtn>
      </form>
    </div>
  );
}

const Textarea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 24px;
  font-size: 18px;
`;

const AnswerFormHeader = styled.div`
  font-size: 24px;
  padding: 20px 0;
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
  width: 150px;
  height: 42px;
  margin: 20px 0;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    background-color: #0074cc;
  }
`;
