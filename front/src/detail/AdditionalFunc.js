import React from 'react';
import styled from 'styled-components';
import { GoTriangleUp } from 'react-icons/go';
import { GoTriangleDown } from 'react-icons/go';
import { FiBookmark } from 'react-icons/fi';
import { FaCheck } from 'react-icons/fa';
import { RxCounterClockwiseClock } from 'react-icons/rx';

export default function AdditionalFunc({ likes, checked }) {
  // 추천 수, 채택 여부
  console.log('likes', likes);
  return (
    <Container>
      <Up>
        <GoTriangleUp className="vote" />
      </Up>
      <Likes>{likes}</Likes>
      <Down>
        <GoTriangleDown className="vote" />
      </Down>
      <Icons>
        <FiBookmark className="icon" />
      </Icons>
      {checked && (
        <Icons>
          <FaCheck className="icon check" />
        </Icons>
      )}
      <Icons>
        <RxCounterClockwiseClock className="icon" />
      </Icons>
    </Container>
  );
}

const Container = styled.div`
  width: 100px;
  height: 200px;
  /* border: 3px solid green; */

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
