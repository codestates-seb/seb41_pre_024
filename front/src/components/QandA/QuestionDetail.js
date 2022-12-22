import React from 'react';

import styled from 'styled-components';

import AdditionalFunction from './AdditionalFunc';

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
            <div>asked Dec 21, 2021 at 19:33</div>
            <div>
              <img src="https://stackoverflow.com/users/15350294/stephan-bazbaz"></img>
              <span>stephan bazbaz</span>
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
  border: 3px solid gold;
`;

const DetailBody = styled.div`
  flex: 1;
  border: 3px solid gray;
`;

const DetailText = styled.div`
  border: 3px solid gray;
  line-height: 24px;
`;

const DetailFooter = styled.div`
  display: flex;
  justify-content: space-between;
  border: 3px solid gray;
  padding: 20px 0;
`;

const ShareAndFollow = styled.div`
  border: 3px solid gray;

  .shareAndFollow {
    border: none;
    margin-right: 20px;

    :hover {
      cursor: pointer;
    }
  }
`;

const Author = styled.div`
  border: 3px solid gray;
`;
