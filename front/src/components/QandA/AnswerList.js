import React from 'react';
import styled from 'styled-components';
import AdditionalFunction from './AdditionalFunc';
import userIcon2 from '../../assets/userIcon_02.png';

export default function AnswerList({ data }) {
  console.log(data);

  return (
    <div>
      {data &&
        data.answers.map((answer) => (
          <DetailContainer key={answer.answer_id}>
            <AdditionalFunction
              likes={answer.answer_recommend}
              checked={answer.answer_choose}
            />
            <DetailBody>
              <DetailText>{answer.answer_content}</DetailText>
              <DetailFooter>
                <ShareAndFollow>
                  <button className="shareAndFollow">Share</button>
                  <button className="shareAndFollow">Follow</button>
                </ShareAndFollow>
                <Author>
                  <div className="createdAt">asked {answer.answer_time}</div>
                  <div className="user">
                    <img
                      src={userIcon2}
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

const ShareAndFollow = styled.div`
  /* border: 3px solid gray; */

  .shareAndFollow {
    border: none;
    margin-right: 20px;
    color: #6a737c;

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
