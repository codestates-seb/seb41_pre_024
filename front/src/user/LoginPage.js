import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState, useDispatch } from "react";

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

    p {
      font-size: small;
      font-weight: 300;
      margin-top: 5px;
    }

    .emailErrMsg {
      font-size: small;
      color: #ea4335;
    }
  }

  .emailErr {
    border: 2px solid #de4f54;
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
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  // 이메일 유효성 검사
  const [isEmail, setIsEmail] = useState(false);
  const [isEmailErr, setIsEmailErr] = useState("");
  // 이메일, 비밀번호 일치 검사
  // const [isValidate, setIsValidate] = useState(false);

  // const navigate = useNavigate();
  // const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (!emailRegex.test(e.target.value)) {
      setIsEmailErr("올바른 이메일 형식이 아닙니다.");
      setIsEmail(true);
    } else {
      setIsEmailErr("올바른 이메일 형식입니다.");
      setIsEmail(false);
    }
  };

  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // let body = {
    //   email: emailValue,
    //   password: passwordValue,
    // };
    // dispatch(loginUser(body));
  };

  const onClick = () => {
    console.log("Email : ", emailValue);
    console.log("Password : ", passwordValue);
  };

  return (
    <>
      <Main>
        <Logo
          src={`${process.env.PUBLIC_URL}/assets/stackoverflow_small.png`}
        ></Logo>
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

        <LoginContainer onSubmit={onSubmit}>
          <div>
            <label>Email</label>
            <input
              type="text"
              onChange={onChangeEmail}
              value={emailValue}
              className={isEmail ? "emailErr" : undefined}
            />
            <p className={isEmail ? "emailErrMsg" : undefined}>{isEmailErr}</p>
            {/* {isValidate && (
              <p className="errMessage">
                The email or password is incorrect
              </p>
            )} */}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              onChange={onChangePassword}
              value={passwordValue}
            />
          </div>
          <button onClick={onClick}>Log in</button>
        </LoginContainer>

        <Script>
          <div>
            <p>Don't have an account?</p>
            <Link to="/signup">Sign up</Link>
          </div>
        </Script>
      </Main>
    </>
  );
};

export default LoginPage;
