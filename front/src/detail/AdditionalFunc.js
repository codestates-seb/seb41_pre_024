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
import axios from 'axios';

export default function AdditionalFunc({ question, answer, isMyQuestion }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLike = ({ answerId }) => {
    async function request() {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/answers/recommend/${answerId}?recommendStatus=up`,
        {
          headers: {
            Authorization: localStorage.access_token,
          },
        }
      );
      console.log('liked!');
    }
    request();
  };

  const handleUnlike = ({ answerId }) => {
    async function request() {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/answers/recommend/${answerId}?recommendStatus=down`
      );
      console.log('unliked');
    }
    request();
  };

  const handleCancelAdopt = ({ answerId }) => {
    if (isMyQuestion) {
      async function request() {
        await axios.patch(
          `${process.env.REACT_APP_API_URL}/api/answers/adoption/${answerId}?adiptStatus=no`
        );
        console.log('unliked');
      }
      request();
    } else {
      alert('본인이 작성한 질문만 답변 채택을 취소할 수 있습니다.');
    }
  };

  return (
    <>
      {question && (
        <Container>
          <Up>
            <GoTriangleUp className="vote" />
          </Up>
          <Likes>{question.totalRecommend}</Likes>
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
          <Up onClick={() => handleLike(answer.answerId)}>
            <GoTriangleUp className="vote" />
          </Up>
          <Likes>{answer.recommend}</Likes>
          <Down onClick={() => handleUnlike(answer.answerId)}>
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
          {answer.choose && (
            <Icons onClick={() => handleCancelAdopt(answer.answerId)}>
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
