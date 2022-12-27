import styled from "styled-components";
import { IoIosHelpCircle } from "react-icons/io";
import { ImUser } from "react-icons/im";

const List = styled.div`
  margin-left: -24px;
  display: flex;
  border-bottom: 1px solid rgb(206,207,212);
  padding: 16px;

  .head {
    margin-left: 20px;
    flex-basis: 80px;
    display: flex;
    flex-direction: column;
    align-items: end;
    font-size: 13px;

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
    margin: 0 15px;

    .title {
      display: flex;
      align-items: center;
      span{
        margin-right: 5px;
      }
      a {
        color: rgb(13,93,192);
      }
    }

    .content{
      display: -webkit-box;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size:13px;
        margin-bottom: 10px;
    }


    .info{
      display: flex;
      flex-direction: column;
      min-height: 35px;
      align-items: center;
      flex-wrap: wrap;

      .tagpoint{
        align-self: flex-start;
        
        .tag{
          display:flex;
          flex-wrap: wrap;
          gap: 4px;
      
          li{
            border-radius:5px;
            padding:5px;
            margin: 0 3px;
            color: hsl(205,47%,42%);
            background-color: hsl(205,46%,92%);
            font-size: 13px;
          }
      }}


   

      .users{
        // margin-top: 5px;
        align-self: flex-end;
        font-size: 13px;
        span{
          vertical-align: middle;
          margin:5px;
        }
      }}

  }
`;

export const QuestionsList = () => {
  return (
    <>
      <List>
        <div className="head">
          <div>
            <div>
              {/* 투표수에따른 값변화 */}
              <span>8</span>
              <span>votes</span>
            </div>
          </div>
          <div>
            <div>
              {/* 답변에따른 값변화 */}
              <span>1</span>
              <span>answer</span>
            </div>
          </div>
          <div>
            <div>
              {/* 클릭에 따른 값변화 */}
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
              there was no change shown, I would be left with there was no change shown, I would be left with there was no change shown, I would be left with
             </p>
          </div>
          <div className="info">
            <div className="tagpoint">
              <ul className="tag">
                <li>python</li>
                <li>macos</li>
                <li>Python-3.x</li>
                <li>osx-elcapitan</li>
                <li>osx-elcapitan</li>
              </ul>
            </div>
            <div className="users">
              {/* 태그 내용에 따른 위치변화 ? */}
              <span><ImUser></ImUser></span>
              <span>user3757849</span>
              <span>asked 31 secs ago</span>
            </div>
          </div>
        </div>
      </List>
    </>
  );
};
