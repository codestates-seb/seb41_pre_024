import styled from "styled-components";
import { QuestionsList } from "./QuestionsList";
import { useState, useEffect } from "react";
import axios from "axios";

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

  margin-top: 40px;

  a {
    background-color: white;
    border: 1px solid hsl(210, 8%, 90%);
    padding: 6px 12px;
    margin: 0 2px;
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;
  }

  span {
    margin-left: 10px;
  }

  .current {
    background-color: #f48225;
    color: #ffffff;
  }
`;

export const QuestionsTap = () => {
  const [countList, setCountlist] = useState(15);
  const [currentPage, setCurrentpage] = useState(1);
  const [listData, setListdata] = useState([]);
  const page = [];

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/questions?page=${currentPage}&size=${countList}`
      )
      .then((res) => setListdata(res.data));
  }, [currentPage, countList]);

  for (
    let i = 1;
    i <= Math.ceil(listData.pageInfo?.totalElements / countList);
    i++
  ) {
    page.push(i);
  }

  const Nextbtn = () => {
    if (page.length === currentPage) {
      return undefined;
    }
    return (
      <a 
      href="#top"
      onClick={() => setCurrentpage(currentPage + 1)}
      >Next</a>
    );
  };

  const Listcont = () => {
    const listChange = [15, 30, 50];
    const listNumber = [];

    for (let i of listChange) {
      listNumber.push(
        <a
          href="#top"
          key={i}
          className={countList === i ? "current" : undefined}
          onClick={() => {
            setCountlist(i);
            setCurrentpage(1);
          }}
        >
          {i}
        </a>
      );
    }

    return (
      <>
        {listNumber}
        <span>per page</span>
      </>
    );
  };

  return (
    <div>
      <Tap>
        <div>
          <span>{listData.pageInfo?.totalElements} questions</span>
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
        {listData?.data?.map((el) => {
          return <QuestionsList key={el.questionId} el={el} />;
        })}
      </div>
      <Pagecount>
        <div className="count">
          {currentPage > 1 ? (
            <a 
            onClick={() => setCurrentpage(currentPage - 1)}
            href="#top"
            >
              prev
            </a>
          ) : undefined}
          {listData.pageInfo?.totalPages <= 1
            ? undefined
            : page.map((e, idx) => {
                return (
                  <a
                    href="#top"
                    key={idx}
                    onClick={() => setCurrentpage(e)}
                    className={currentPage === e ? "current" : undefined}
                  >{e}
                  </a>
                );
              })}
          {listData.pageInfo?.totalPages > 1 ? Nextbtn() : undefined}
        </div>
        <div className="listcount">
          {listData.pageInfo?.totalPages > 1 ? Listcont() : undefined}
        </div>
      </Pagecount>
    </div>
  );
};
