import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useUser } from "../hooks/useUser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 10px;
`;

const TextContainer = styled.div`
  border: 1px solid #babfc4;
  height: 500px;

  .head {
    height: 100%;
    overflow: scroll;
    padding: 20px;
  }

  .body {
    border: 1px solid #babfc4;
    height: 40px;
    width: 60%;
    padding: 10px;
    margin-bottom: 1px;
  }
`;

const Answers = () => {
  const { userInfo } = useUser(localStorage.getItem("access_token"));
  console.log(userInfo);

  // localStorage 에 있는 유저 아이디 조회해서
  const memberId = localStorage.getItem("user_id");

  const [answerss, setAnswers] = useState([]);

  // 유저가 작성한 질문 리스트 조회 요청
  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/members/answers/${memberId}`)
      .then((res) => {
        console.log(res);
        setAnswers(res.data ?? []);
        console.log(answerss);
      })
      .catch((err) => console.log(err));
  }, []);

  const answer = [
    { title: "예시 답변입니다", name: "누구일까요" },
    { title: "연습용 예시 답변입니다", name: "누구세요" },
    { title: "아무렇게나 작성한 예시 답변입니다", name: "누구신지" },
    { title: "예시 답변입니다", name: "누구일까요" },
    { title: "연습용 예시 답변입니다", name: "누구세요" },
    { title: "아무렇게나 작성한 예시 답변입니다", name: "누구신지" },
    { title: "예시 답변입니다", name: "누구일까요" },
    { title: "연습용 예시 답변입니다", name: "누구세요" },
    { title: "아무렇게나 작성한 예시 답변입니다", name: "누구신지" },
    { title: "예시 답변입니다", name: "누구일까요" },
    { title: "연습용 예시 답변입니다", name: "누구세요" },
    { title: "아무렇게나 작성한 예시 답변입니다", name: "누구신지" },
    { title: "예시 답변입니다", name: "누구일까요" },
    { title: "연습용 예시 답변입니다", name: "누구세요" },
    { title: "아무렇게나 작성한 예시 답변입니다", name: "누구신지" },
  ];

  // answers = [
  //   {
  //     "answerId": 0,
  //     "title": "stub answer title1",
  //     "content": null,
  //     "recommend": 0,
  //     "createdAt": null,
  //     "choose": false,
  //     "questionId": 0,
  //     "email": null
  //   },
  //   {
  //     "answerId": 0,
  //     "title": "stub answer title2",
  //     "content": null,
  //     "recommend": 0,
  //     "createdAt": null,
  //     "choose": false,
  //     "questionId": 0,
  //     "email": null
  //   }
  // ]

  // return (
  //   <Container>
  //     <h1>{answers.length} Answers</h1>
  //     <TextContainer>
  //       <div className="head">
  //         {answers.map((title, answerId) => {
  //           return (
  //             <div className="body" key={answerId}>
  //               <p>{title}</p>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     </TextContainer>
  //   </Container>
  // );

  return (
    <Container>
      <h1>{answer.length} Questions</h1>
      <TextContainer>
        <div className="head">
          {answer.map((title, index) => {
            return (
              <div className="body">
                <p key={index}>{title.title}</p>
              </div>
            );
          })}
        </div>
      </TextContainer>
    </Container>
  );
};
export default Answers;
