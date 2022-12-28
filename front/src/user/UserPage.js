import MypageContent from "./MypageContent";
import UserInfo from "./MypageInfo";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const UserPage = () => {
  const [userInfo, setUserInfo] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function request() {
      const response = await axios.get(`http://localhost:8080/members/${id}`);
      const { data } = response;
      setUserInfo(data);
    }
    request();
  }, []);
  return (
    <>
      <Container>
        <UserInfo userInfo={userInfo} />
        <MypageContent userInfo={userInfo} />
      </Container>
    </>
  );
};
export default UserPage;
