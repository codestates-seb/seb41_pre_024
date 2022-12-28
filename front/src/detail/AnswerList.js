/* eslint-disable no-unused-expressions */
import React from 'react';
import styled from 'styled-components';
import AdditionalFunction from './AdditionalFunc';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { FaCheck } from 'react-icons/fa';

export default function AnswerList({ data }) {
  const { questionId } = useParams();
  console.log(data);

  const checked = data.filter((answer) => answer.choose === true).length === 1;

  function handleAnswerDelete(e, answerId) {
    const newAnswerList = data.filter((el) => el.answerId !== answerId);
    e.preventDefault();

    async function request() {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/questions/${questionId}`,
        { answers: newAnswerList }
      );
      window.location.reload();
    }
    request();
  }

  const handleAdopt = ({ answerId }) => {
    async function request() {
      await axios.patch(
        `${process.env.REACT_APP_API_URL}/api/answers/adoption/${answerId}?adiptStatus=yes`
      );
      console.log('unliked');
      window.location.reload();
    }
    request();
  };

  return (
    <div>
      {data &&
        data.map((answer) => (
          <DetailContainer key={answer.answerId}>
            <AdditionalFunction answer={answer} />
            <DetailBody>
              <DetailText>{answer.content}</DetailText>
              <DetailFooter>
                <Menu>
                  {checked ? null : (
                    <button
                      className="menu adopt"
                      onClick={() => handleAdopt(answer.answerId)}
                    >
                      <FaCheck className="icon check" />
                      Accept
                    </button>
                  )}
                  <button className="menu">Share</button>
                  <button className="menu">Follow</button>
                  <Link to={`/posts/${questionId}/edit/${answer.answerId}`}>
                    <button className="menu">Edit</button>
                  </Link>
                  <button
                    onClick={(e) => handleAnswerDelete(e, answer.answerId)}
                    className="menu"
                  >
                    Delete
                  </button>
                </Menu>
                <Author>
                  <div className="createdAt">answered {answer.createdAt}</div>
                  <div className="user">
                    <img
                      src={`${process.env.PUBLIC_URL}/assets/userIcon_02.png`}
                      className="userIcon userInfo"
                      alt="userIcon"
                    ></img>
                    <div className="userInfoText">
                      <div className="userName userInfo">
                        {answer.member_id}
                      </div>
                      <div className="userreputation userInfo">3,205</div>
                    </div>
                  </div>
                </Author>
              </DetailFooter>
              <hr />
            </DetailBody>
          </DetailContainer>
        ))}
    </div>
  );
}

const DetailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #3b4044;
`;

const DetailBody = styled.div`
  flex: 1;
`;

const DetailText = styled.div`
  padding: 10px 0;
  line-height: 24px;
`;

const DetailFooter = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 20px 0;
`;

const Menu = styled.div`
  .menu {
    border: none;
    margin-right: 20px;
    color: #6a737c;
    background-color: inherit;

    :hover {
      cursor: pointer;
    }
  }

  .adopt {
    padding: 5px;
    border-radius: 3px;
    color: #0995ff;
    /* background-color: #0995ff; */
    border: 1px solid #0995ff;
  }
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
