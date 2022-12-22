import styled from "styled-components";
import { IoIosHelpCircle } from "react-icons/io";

const List = styled.div`
  display: flex;
  padding: 20px;

  .head {
    flex-basis: 80px;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    & > div {
      border: 1px solid black;
    }

    span {
      margin-right: 3px;
    }
  }

  .body {
    flex: 1;
    text-align: left;

    .title {
      a {
        color: blue;
      }
    }
  }
`;

export const QuestionsList = () => {
  return (
    <>
      <List>
        <div className="head">
          <div>
            <div>
              <span>8</span>
              <span>votes</span>
            </div>
          </div>
          <div>
            <div>
              <span>1</span>
              <span>answer</span>
            </div>
          </div>
          <div>
            <div>
              <span>105</span>
              <span>views</span>
            </div>
          </div>
        </div>

        <div className="body">
          <div className="title">
            <span>
              <IoIosHelpCircle size={"20px"} />
            </span>
            <a href="#">
              Python3 unexpected visual interaction with input function and CJK
            </a>
          </div>
          <div className="content">
            <p>
              type afterwards looks like 가나다 This seems to be only a visual
              issue, as if I were to type "ㄴㄴㄴㄴㄴ" and hit backspace until
              there was no change shown, I would be left with
            </p>
          </div>
          <div className="info">
            <div>
              <ul>
                <li>태그</li>
              </ul>
            </div>
            <div>
              <img src="#" alt="#" />
              <span>유저아이디</span>
              <span>시간</span>
            </div>
          </div>
        </div>
      </List>
    </>
  );
};
