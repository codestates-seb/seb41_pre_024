import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

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
  // localStorage 에 있는 유저 아이디 조회해서
  const memberId = localStorage.getItem("user_id");
  const [answers, setAnswers] = useState([]);

  // 유저가 작성한 질문 리스트 조회 요청
  useEffect(() => {
    const token = localStorage.getItem("access_token");

    axios
      .get(
        `http://ec2-52-78-191-151.ap-northeast-2.compute.amazonaws.com:8080/api/members/answers/${memberId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: token,
          },
        }
      )
      .then((res) => {
        console.log("res :", res);
        setAnswers(res.data);
        console.log("answers :", answers);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <h1>{answers.length} Questions</h1>
      <TextContainer>
        <div className="head">
          {answers.map((answer, index) => {
            return (
              <div className="body" key={index}>
                <p>{answer.title}</p>
              </div>
            );
          })}
        </div>
      </TextContainer>
    </Container>
  );
};

export default Answers;
