import styled from "styled-components";
import { QuestionsList } from "./QuestionsList";

const Tap = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: -24px;
    border-bottom: 1px solid rgb(206,207,212);
    padding: 0 12px 12px 24px;
    align-items: center;
    .tapCount{
    }

    .tapBtn{
        display:flex;
        color: #6A737C;
        font-size: 13px;

        li{
            border: 1px solid rgb(206,207,212);
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
        {/* 리스트의 개수 표시  */}
        <div><span>1 questions</span></div>
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
