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

  return (
    <Container>
      <h1>{answer.length} Questions</h1>
      <TextContainer>
        <div className="head">
          {answer.map((title, index) => {
            // return <li key={index}>{title.title}</li>;
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
