import React from 'react';
import styled from 'styled-components';
import { GoTriangleUp } from 'react-icons/go';
import { GoTriangleDown } from 'react-icons/go';
import { FiBookmark } from 'react-icons/fi';
import { RxCounterClockwiseClock } from 'react-icons/rx';

export default function AdditionalFunc() {
  return (
    <>
      <Container>
        <Up>
          <GoTriangleUp className="vote" />
        </Up>
        <Likes>3</Likes>
        <Down>
          <GoTriangleDown className="vote" />
        </Down>
        <Icons>
          <FiBookmark className="icon" />
        </Icons>
        <Icons>
          <RxCounterClockwiseClock className="icon" />
        </Icons>
      </Container>
    </>
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

  :hover {
    cursor: pointer;
  }

  .vote {
    font-size: 40px;
    color: #babfc3;
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
`;
