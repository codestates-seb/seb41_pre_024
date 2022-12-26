import Header from "../Header";
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
// import logo from "../assets/stackoverflow_small.png";
import { Link } from "react-router-dom";

// const HeaderContainer = styled.header`
//   background-color: rgb(247, 247, 247);
//   height: 50px;
//   position: fixed;
//   top: 0;
//   left: 0;
//   right: 0;
//   z-index: 1;
//   border-top: 3px solid #f48225;
//   display: flex;
//   justify-content: center;
//   box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
// `;

const Main = styled.div`
  background-color: #f1f2f3;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const Logo = styled.img`
  height: 35px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Google = styled.button`
  width: 280px;
  height: 35px;
  background-color: white;
  border: solid 1px #babfc4;
  border-radius: 5px;
`;

const Github = styled(Google)`
  background-color: #2f3337;
  color: white;
`;

const Facebook = styled(Github)`
  background-color: #385499;
  border: none;
`;

const LoginContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 15px;

  background-color: white;
  border-radius: 7px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
  padding: 20px;

  div {
    font-weight: 600;
  }

  input {
    width: 240px;
    height: 33px;
    border-radius: 3px;
    border: 1px solid #babfc4;
  }

  button {
    width: 240px;
    height: 33px;
    border-radius: 3px;
    margin-top: 20px;
    border: none;
    background-color: #0a95ff;
    text-align: center;
    color: white;
    cursor: pointer;
  }
`;

const Script = styled.div`
  width: 280px;
  padding: 16px;

  div {
    display: flex;
    gap: 10px;
    justify-content: center;
    font-size: small;
    margin-bottom: 10px;
  }
`;

const LoginPage = () => {
  return (
    <>
      {/* <HeaderContainer> */}
      <Header />
      {/* </HeaderContainer> */}

      <Main>
        {/* <Logo src={logo}></Logo> */}
        <ButtonContainer>
          <Google>
            <FcGoogle />
            Log in with Google
          </Google>
          <Github>
            <BsGithub />
            Log in with Github
          </Github>
          <Facebook>
            <FaFacebookSquare />
            Log in with Facebook
          </Facebook>
        </ButtonContainer>

        <LoginContainer>
          <div>
            <label>Email</label>
            <input type="text" />
          </div>
          <div>
            <label>Password</label>
            <input type="password" />
          </div>
          <button>Log in</button>
        </LoginContainer>

        <Script>
          <div>
            <p>Don't have an account?</p>
            <Link to="/signup">Sign up</Link>
          </div>
          <div>
            <p>Are tou an employer? </p>
            <Link to="#">Sign up on Talent</Link>
          </div>
        </Script>
      </Main>
    </>
  );
};

export default LoginPage;
