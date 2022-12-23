import styled from "styled-components";
import { Link } from "react-router-dom";
import { IoEarthSharp } from "react-icons/io5";

const Container = styled.ol`
  /* border: 1px solid red; */
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
      /* margin-left: 15px; */
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
  if (window.location.pathname === "/login") return null;
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
            <Link to="/user">
              <li>User</li>
            </Link>
          </ol>
        </li>
      </Container>
    </>
  );
};

export default SideNavbar;
