import React from 'react';
import styled from 'styled-components';

import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import useInput from '../hooks/useInput';
import axios from 'axios';
import { QuestionsSub } from '../home/QuestionsSub';

export default function EditAnswerPage() {
  const [data, setData] = useState();
  const { id, answer_id } = useParams(); // question id와 answer id 가져옴

  console.log(id);

  const [edited, editedBind] = useInput();
  const navigate = useNavigate();

  useEffect(() => {
    async function request() {
      const response = await axios.get(`http://localhost:3001/questions/${id}`);
      const { data } = response; // 답변 속한 질문 데이터 전체
      setData(data);
    }
    request();
  }, []);

  console.log(data);

  const handleEditSubmit = (e, answer_id) => {
    const editedAnswerList = data.answers.filter(
      (el) => el.answer_id !== Number(answer_id)
    ); // 수정할 answer만 뺀 answers 리스트

    const editedAnswer = {
      answer_id: Number(answer_id), // params로 받아옴
      answer_content: edited, // useInput 이용해서 받아옴
      answer_recommend: data.answers[answer_id - 1].answer_recommend,
      answer_time: data.answers[answer_id - 1].answer_time,
      answer_choose: data.answers[answer_id - 1].answer_choose,
      member_id: data.answers[answer_id - 1].member_id,
      question_id: Number(id), // params로 받아옴
    };

    e.preventDefault();
    fetch(`http://localhost:3001/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answers: [...editedAnswerList, editedAnswer],
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw Error('could not fetch the data for that resource');
        }
        return res.json();
      })
      .then((data) => {
        navigate(`/questions/${id}`);
        window.location.reload(); // 새로고침
      })
      .catch((err) => {
        console.error('Error', err);
      });
  };

  return (
    <>
      {data && (
        <ContentsAndSideBox>
          <ContentsContainer>
            <AnswerFormHeader>Answer</AnswerFormHeader>
            <form onSubmit={(e) => handleEditSubmit(e, answer_id)}>
              <Textarea
                required
                {...editedBind}
                placeholder={data.answers[answer_id - 1].answer_content}
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
  /* height: 700px; */
  margin: 24px;
  /* border: 3px solid sandybrown; */
  /* background-color: #fbf3d5; */
`;
