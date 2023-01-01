import styled from "styled-components";
import { RiQuestionnaireFill } from "react-icons/ri";
import { TiArrowUnsorted } from "react-icons/ti";
import { BsTagsFill } from "react-icons/bs";
import { AiFillTrophy } from "react-icons/ai";

const Container = styled.div`
  width: 410px;
  height: 285px;

  h1 {
    font-size: x-large;
    margin-bottom: 24px;
  }

  div {
    display: flex;
    margin-bottom: 24px;
    gap: 10px;

    .icon {
      color: #0a95ff;
      font-size: 26px;
    }
  }

  .bottom {
    font-size: small;
    margin-bottom: 5px;
  }
`;

const SignupInfo = () => {
  return (
    <Container>
      <h1>Join the Stack Overflow Community</h1>
      <div>
        <RiQuestionnaireFill className="icon" />
        <p>Get unstuck — ask a question</p>
      </div>
      <div>
        <TiArrowUnsorted className="icon" />
        <p>Unlock new privileges like voting and commenting</p>
      </div>
      <div>
        <BsTagsFill className="icon" />
        <p>Save your favorite tags, filters, and jobs</p>
      </div>
      <div>
        <AiFillTrophy className="icon" />
        <p>Earn reputation and badges</p>
      </div>
      <p className="bottom">
        Collaborate and share knowledge with a private group for FREE.
      </p>
      <p className="bottom">
        Get Stack Overflow for Teams free for up to 50 users.
      </p>
    </Container>
  );
};
export default SignupInfo;
