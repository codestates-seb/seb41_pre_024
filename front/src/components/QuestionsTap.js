import styled from "styled-components";
import { QuestionsList } from "./QuestionsList";

const Tap = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    padding: 0 12px 20px 12px;
    align-items: center;

    .tapCount{

    }

    .tapBtn{
        display:flex;

        li{
            border: 1px solid black;
            padding: 9px 11px;
            margin-right:-1px;
        }
    
        & :first-child{
        border-radius: 5px 0 0 5px;
        }
        & :last-child{
            border-radius: 0 5px 5px 0;
        }
    }

`

export const QuestionsTap = () => {
  return (
    <div>
      <Tap>
        <div><span>1 result</span></div>
        <div>
          <ul className="tapBtn">
            <li>Relevance</li>
            <li>Newset</li>
            <li>More</li>
          </ul>
        </div>
      </Tap>
      <div>
        <QuestionsList/>
        <QuestionsList/>
        <QuestionsList/>
        <QuestionsList/>
        <QuestionsList/>
        <QuestionsList/>
        <QuestionsList/>
        <QuestionsList/>
      </div>
    </div>
  );
};
