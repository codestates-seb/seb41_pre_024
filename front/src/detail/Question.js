import React from 'react';
import styled from 'styled-components';
import AdditionalFunction from './AdditionalFunc';

export default function Question({ data }) {
  return (
    <>
      {data && (
        <DetailContainer>
          <AdditionalFunction likes={data.question_recommend} />
          <DetailBody>
            <DetailText>
              {data.question_content}
              {/* Excuse all the Console.WriteLines! Trying to figure out what is
          happening here😀
          <br />
          <br />
          The following code actually works if I run it in visual studio. The
          problem is when I compile and run it as a command line program - the
          line that tries to access an api using HttpClient completely stops the
          whole process and ends the program. No error handling , nothing.
      */}
            </DetailText>
            <DetailFooter>
              <Menu>
                <button className="menu">Share</button>
                <button className="menu">Follow</button>
                <button className="menu">Edit</button>
                <button className="menu">Delete</button>
              </Menu>
              <Author>
                <div className="createdAt">asked Dec 21, 2021 at 19:33</div>
                <div className="user">
                  <img
                    src={`${process.env.PUBLIC_URL}/assets/userIcon.png`}
                    className="userIcon userInfo"
                    alt="userIcon"
                  ></img>
                  <div className="userInfoText">
                    <div className="userName userInfo">Martin Thompson</div>
                    <div className="userreputation userInfo">3,205</div>
                  </div>
                </div>
              </Author>
            </DetailFooter>
            <hr />
          </DetailBody>
        </DetailContainer>
      )}
    </>
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
