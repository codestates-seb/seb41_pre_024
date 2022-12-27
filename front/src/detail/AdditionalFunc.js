import React from 'react';
import styled from 'styled-components';
import { GoTriangleUp } from 'react-icons/go';
import { GoTriangleDown } from 'react-icons/go';
import { FiBookmark } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';
import { RxCounterClockwiseClock } from 'react-icons/rx';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  add_answer_bookmark,
  add_question_bookmark,
} from '../detail/bookmarkSlice';

export default function AdditionalFunc({ question, answer }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  console.log('answer', answer);

  return (
    <>
      {question && (
        <Container>
          <Up>
            <GoTriangleUp className="vote" />
          </Up>
          <Likes>{question.question_recommend}</Likes>
          <Down>
            <GoTriangleDown className="vote" />
          </Down>
          <Icons>
            <FiBookmark
              className="icon"
              onClick={() => {
                dispatch(add_question_bookmark(question));
                navigate('/bookmark');
              }}
            />
          </Icons>
          <Icons>
            <RxCounterClockwiseClock className="icon" />
          </Icons>
        </Container>
      )}
      {answer && (
        <Container>
          <Up>
            <GoTriangleUp className="vote" />
          </Up>
          <Likes>{answer.answer_recommend}</Likes>
          <Down>
            <GoTriangleDown className="vote" />
          </Down>
          <Icons>
            <FiBookmark
              className="icon"
              onClick={() => {
                dispatch(add_answer_bookmark(answer));

                navigate('/bookmark');
              }}
            />
          </Icons>
          {answer.answer_choose && (
            <Icons>
              <FaCheck className="icon check" />
            </Icons>
          )}
          <Icons>
            <RxCounterClockwiseClock className="icon" />
          </Icons>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  width: 100px;
  height: 200px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Up = styled.button`
  border: none;
  background-color: inherit;

  .vote {
    font-size: 40px;
    color: #babfc3;

    :hover {
      cursor: pointer;
      color: #f48224;
    }
  }
`;

const Down = styled(Up)``;

const Likes = styled.p`
  font-size: 24px;
  color: #6a737c;
`;

const Icons = styled(Up)`
  .icon {
    font-size: 20px;
    color: #babfc3;
    margin-bottom: 6px;
  }

  .check {
    font-size: 35px;
    color: #2e6f44;
  }
`;
