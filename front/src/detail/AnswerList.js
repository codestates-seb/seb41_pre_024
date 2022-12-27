import React from 'react';
import styled from 'styled-components';
import AdditionalFunction from './AdditionalFunc';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AnswerList({ data }) {
  const { id } = useParams();

  function handleAnswerDelete(e, answer_id) {
    const newAnswerList = data.filter((el) => el.answer_id !== answer_id);
    e.preventDefault();
    fetch(`http://localhost:3001/questions/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        answers: newAnswerList,
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
  }

  return (
    <div>
      {data &&
        data.map((answer) => (
          <DetailContainer key={answer.answer_id}>
            <AdditionalFunction answer={answer} />
            <DetailBody>
              <DetailText>{answer.answer_content}</DetailText>
              <DetailFooter>
                <Menu>
                  <button className="menu">Share</button>
                  <button className="menu">Follow</button>
                  <Link to={`/posts/${id}/edit/${answer.answer_id}`}>
                    <button className="menu">Edit</button>
                  </Link>
                  <button
                    onClick={(e) => handleAnswerDelete(e, answer.answer_id)}
                    className="menu"
                  >
                    Delete
                  </button>
                </Menu>
                <Author>
                  <div className="createdAt">asked {answer.answer_time}</div>
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
  /* border: 3px solid gold; */
`;

const DetailBody = styled.div`
  flex: 1;
  /* border: 3px solid gray; */
`;

const DetailText = styled.div`
  /* border: 3px solid gray; */
  padding: 10px 0;
  line-height: 24px;
`;

const DetailFooter = styled.div`
  display: flex;
  justify-content: space-between;
  /* border: 3px solid gray; */
  padding: 20px 0;
`;

const Menu = styled.div`
  /* border: 3px solid gray; */

  .menu {
    border: none;
    margin-right: 20px;
    color: #6a737c;
    background-color: inherit;

    :hover {
      cursor: pointer;
    }
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
