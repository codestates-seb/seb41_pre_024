import styled from "styled-components";
import { QuestionsList } from "./QuestionsList";
import { useState, useEffect } from "react";

const Tap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: -24px;
  border-bottom: 1px solid rgb(206, 207, 212);
  padding: 0 12px 12px 24px;
  align-items: center;
  .tapCount {
  }

  .tapBtn {
    display: flex;
    color: #6a737c;
    font-size: 13px;

    li {
      border: 1px solid rgb(206, 207, 212);
      padding: 9px 11px;
      margin-right: -1px;
    }

    & :first-child {
      border-radius: 5px 0 0 5px;
    }
    & :last-child {
      border-radius: 0 5px 5px 0;
    }
  }
`;

const Pagecount = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuestionsTap = () => {
  // 페이지네이션 테스트용
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const [startList, setStartlist] = useState(0);
  const [endList, setEndlist] = useState(15);
  const [currentPage, setCurrentpage] = useState(1);
  const [countList, setCountlist] = useState(15);
  const page = [];
  
  for (let i = 1; i <= Math.ceil(arr.length / countList); i++) {
    page.push(i);
  }

  useEffect(() => {
    setStartlist((currentPage - 1) * countList);
    setEndlist(currentPage * countList);
  }, [currentPage, countList]);

const Nextbtn = ()=>{
    if(page.length === currentPage){
    return null
  }
  return <button onClick={Nextcount}> Next</button>
};

const Nextcount = () =>{
  setCurrentpage(currentPage + 1);
}

const Listcont = (e)=>{
  setCountlist(Number(e.target.innerText))
};

  return (
    <div>
      <Tap>
        <div>
          <span>{arr.length} questions</span>
        </div>
        <div>
          <ul className="tapBtn">
            <li>Recent</li>
            <li>AnswerUp</li>
            <li>AnswerDown</li>
          </ul>
        </div>
      </Tap>
      <div>
        <QuestionsList />
        {arr.slice(startList, endList).map((e, idx) => {
          return <div key={idx}>{e}</div>;
        })}
      </div>
      <Pagecount>
        <div className="count">
          {currentPage > 1 ? (
            <button onClick={() => setCurrentpage(currentPage - 1)}>pre</button>) : null}
          {page.length <= 1 ? null : page.map((e, idx)=>{

            return ( <button key={idx} onClick={()=> setCurrentpage(e)}>{e}</button>)})}
          {page.length > 1 ? Nextbtn() : undefined}
        </div>
        <div className="listcount">
          <button onClick={(e)=> Listcont(e)}>15</button>
          <button onClick={(e)=> Listcont(e)}>30</button>
          <button onClick={(e)=> Listcont(e)}>50</button>
          <span>per page</span>
        </div>
      </Pagecount>
    </div>
  );
};
