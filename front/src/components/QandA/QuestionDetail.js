import React from 'react';
import styled from 'styled-components';
import AdditionalFunction from './AdditionalFunc';
import userIcon from '../../assets/userIcon.png';

export default function QuestionDetail() {
  return (
    <DetailContainer>
      <AdditionalFunction />
      <DetailBody>
        <DetailText>
          Excuse all the Console.WriteLines! Trying to figure out what is
          happening here😀
          <br />
          <br />
          The following code actually works if I run it in visual studio. The
          problem is when I compile and run it as a command line program - the
          line that tries to access an api using HttpClient completely stops the
          whole process and ends the program. No error handling , nothing. How
          can this happen? It bombs out if I remove the try/ with block as well.
          I am baffled. I'm building a dynamic table using React-Table and i
          want to add a new row of editable cells. At the moment i can add new
          row but only when i press the global edit button i can edit it,
          instead i want to add a row which would be editable at first.
          <br />
          <br />
          This is my code I'm building a dynamic table using React-Table and i
          want to add a new row of editable cells. At the moment i can add new
          row but only when i press the global edit button i can edit it,
          instead i want to add a row which would be editable at first. This is
          my code I'm building a dynamic table using React-Table and i want to
          add a new row of editable cells. At the moment i can add new row but
          only when i press the global edit button i can edit it, instead i want
          to add a row which would be editable at first. This is my code
        </DetailText>
        <DetailFooter>
          <ShareAndFollow>
            <button className="shareAndFollow">Share</button>
            <button className="shareAndFollow">Follow</button>
          </ShareAndFollow>
          <Author>
            <div className="createdAt">asked Dec 21, 2021 at 19:33</div>
            <div className="user">
              <img
                src={userIcon}
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
      </DetailBody>
    </DetailContainer>
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
