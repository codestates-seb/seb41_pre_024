import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoEarthSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const Container = styled.ol`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  gap: 15px;

  ol {
    color: #525960;
    display: flex;
    flex-direction: column;

    span {
      margin-bottom: 15px;
    }

    li {
      color: #525960;
      padding: 10px 0 10px 10px;
    }

    li:active {
      color: black;
      background-color: #d9d9d9;
      border-right: 3px solid #f48225;
    }
  }
`;

const SideNavbar = () => {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    checkLogin();
  }, []);

  // localStorage 에 토큰 저장되어있으면, 로그인 상태 변경
  const checkLogin = () => {
    if (localStorage.getItem("access_token")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };

  return (
    <>
      <Container>
        <Link to="/">
          <li>Home</li>
        </Link>
        <li>
          <ol>
            <span>Public</span>
            <Link to="/questions">
              <li>
                <IoEarthSharp /> Questions
              </li>
            </Link>
            {isLogin && (
              <Link to="/user">
                <li>User</li>
              </Link>
            )}
          </ol>
        </li>
      </Container>
    </>
  );
};

export default SideNavbar;
