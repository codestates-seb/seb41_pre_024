import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';
import { useParams } from 'react-router-dom';

export default function AnswerSubmit({ data }) {
  const [answer, answerBind] = useInput();
  const navigate = useNavigate();
  const { id } = useParams();

  console.log('submit', data);

  const newAnswer = {
    answer_id: data.answers.length + 1,
    answer_content: answer,
    answer_recommend: 0,
    answer_time: new Date().toLocaleDateString('ko-KR'),
    answer_choose: false,
    member_id: 'Pika', // 로그인한 user_id 필요
    question_id: id,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`http://localhost:3001/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answers: [...data.answers, newAnswer],
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);

        window.location.reload(); // 새로고침
      })
      .catch((err) => {
        console.error('Error', err);
      });
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

const AnswerFormHeader = styled.div`
  font-size: 24px;
  padding: 20px 0;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 300px;
  padding: 24px;
  font-size: 18px;
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
