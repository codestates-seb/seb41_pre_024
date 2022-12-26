import styled from "styled-components";

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  height: 200px;
  gap: 20px;
  border-bottom: 1px solid #babfc4;
`;

const UserProfile = styled.img`
  width: 128px;
  height: 128px;
`;

const UserName = styled.div`
  display: flex;
  flex-direction: column;
  height: 128px;
  justify-content: space-around;
`;

const UserInfo = () => {
  return (
    <UserContainer>
      <UserProfile
        src={`${process.env.PUBLIC_URL}/assets/profile-example.jpeg`}
      />
      <UserName>
        <div>Hello, I'm User</div>
        <div>User@google.com</div>
      </UserName>
    </UserContainer>
  );
};

export default UserInfo;
