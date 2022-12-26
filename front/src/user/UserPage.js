import MypageContent from "./MypageContent";
import UserInfo from "./MypageInfo";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserPage = () => {
  return (
    <>
      <Container>
        <UserInfo />
        <MypageContent />
      </Container>
    </>
  );
};
export default UserPage;
