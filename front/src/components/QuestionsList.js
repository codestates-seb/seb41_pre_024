import styled from "styled-components";
import { IoIosHelpCircle } from "react-icons/io";
import { ImUser } from "react-icons/im";

const List = styled.div`
  display: flex;
  padding: 17px;
  border-bottom: 1px solid gray;

  .head {
    flex-basis: 80px;
    display: flex;
    flex-direction: column;
    align-items: end;

    & > div:nth-child(2) {
      border: 1px solid black;
      border-radius: 3px;
    }
    & > div {
      padding: 2px;
      margin-bottom: 5px;
    }

    span {
      margin: 5px;
      vertical-align: middle;
    }
  }


  .body {
    flex: 1;
    text-align: left;
    margin-left: 15px;

    .title {
      display: flex;
      align-items: center;
      span{
        margin-right: 5px;
      }
      a {
        color: blue;
      }
    }

    .content{
      display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        margin-bottom: 5px;
        font-size:13px;
    }


    .info{
      display: flex;
      height: 32px;
      justify-content: space-between;
      align-items: center;

      .tag{
        display:flex;
        margin-bottom: 10px;
        li{
          border-radius:5px;
          padding:5px;
          margin: 0 3px;
          color: hsl(205,47%,42%);
          background-color: hsl(205,46%,92%);
          font-size: 13px;
        }
      }

      .users{
        
        font-size: 13px;
        span{
          vertical-align: middle;
          margin:5px;
        }
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
            <a href="#" alt="#">
              Python3 unexpected visual interaction with input function and CJK
            </a>
          </div>
          <div className="content">
            <p>
              type sssssssssssssssssssssafterwards looks like 가나다 This seems to be only a visual
              issue, as if I were to type and hit backspace until
              there was no change shown, I would be left with
            </p>
          </div>
          <div className="info">
            <div className="tagpoint">
              <ul className="tag">
                <li>python</li>
                <li>macos</li>
                <li>Python-3.x</li>
                <li>osx-elcapitan</li>
              </ul>
            </div>
            <div className="users">
              <span><ImUser></ImUser></span>
              <span>유저아이디</span>
              <span>작성시간</span>
            </div>
          </div>
        </div>
      </List>
    </>
  );
};
