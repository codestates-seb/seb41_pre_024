import { useState } from "react";
import styled from "styled-components";
import { IoSearchOutline } from "react-icons/io5";
// import logo from "logo-stackoverflow.png";
import { VscAccount } from "react-icons/vsc";
import { BsFillInboxFill } from "react-icons/bs";
import { AiFillTrophy } from "react-icons/ai";
import { AiFillQuestionCircle } from "react-icons/ai";
import { FaRegSnowflake } from "react-icons/fa";
import { BsFillChatSquareTextFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 50px;

  background-color: rgb(247, 247, 247);
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  border-top: 3px solid #f48225;
  display: flex;
  justify-content: center;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
`;

const Logo = styled.img`
  width: 150px;
  height: 32px;
  margin-right: 20px;
  display: flex;
  justify-content: center;
`;

const SearchForm = styled.form`
  div {
    width: 700px;
    height: 35px;
    margin-right: 10px;
    border-radius: 3px;
    border: solid 1px #babfc4;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
  }

  input {
    width: 95%;
    border: none;
    text-align: left;
    z-index: 10000;
    margin-left: 10px;
    font-size: 16px;
    background-color: inherit;
  }

  input:focus {
    outline: none;
    width: 95%;
    text-align: left;
  }
`;

const Button = styled.button`
  width: 65px;
  height: 35px;
  margin: 0 5px;
  background-color: #e1ecf4;
  color: #39739d;
  border: 1px solid #7aa7c7;
  border-radius: 3px;
  font-size: medium;
  cursor: pointer;
`;

const SignupButton = styled(Button)`
  background-color: #0a95ff;
  color: white;
  border: none;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 20px;

  .icon {
    font-size: 24px;
    color: #525960;
  }
`;

const Header = () => {
  const [isClick, setIsClick] = useState(false);

  const onClickBtn = (e) => {
    setIsClick(true);
  };

  return (
    <Container>
      <Link to="/">
        <Logo
          src={`${process.env.PUBLIC_URL}/assets/logo-stackoverflow.png`}
        ></Logo>
      </Link>
      <SearchForm>
        <div>
          <IoSearchOutline />
          <input type="text" placeholder="Search..." />
        </div>
      </SearchForm>
      {/* {isClick ? (
        <IconContainer>
          <VscAccount className="icon" />
          <BsFillInboxFill className="icon" />
          <AiFillTrophy className="icon" />
          <AiFillQuestionCircle className="icon" />
          <FaRegSnowflake className="icon" />
          <BsFillChatSquareTextFill className="icon" />
        </IconContainer>
      ) : (
        <div>
          <Button onClick={onClickBtn}>Log in</Button>
          <Link to="/login">
            <SignupButton>Sign up</SignupButton>
          </Link>
        </div>
      )} */}
      <Link to="/login">
        <Button>Log in</Button>
      </Link>
      <Link to="/signup">
        <SignupButton>Sign up</SignupButton>
      </Link>
    </Container>
  );
};

export default Header;
