import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

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
  // access token 이 만료됐을 때 ?
  // access token 이 만료되면 서버가 만료됐다는 response 보내줌
  // 클리아언트는 해당 response 를 받으면 refresh token 보낸다
  // 서버는 refresh token 유효성 체크하고, 새로는 access token 발급
  // 클라이언트는 새롭게 받은 access token 을 기존의 access token 에 덮어씀

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const [isValidate, setIsValidate] = useState(false);

  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
  };

  const checkEmail = () => {
    if (!emailValue) {
      setEmailErr(true);
      return false;
    } else {
      setEmailErr(false);
      return true;
    }
  };

  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
  };

  const checkPassword = () => {
    if (!passwordValue) {
      setPasswordErr(true);
      return false;
    } else {
      setPasswordErr(false);
      return true;
    }
  };

  const validation = () => {
    checkEmail();
    checkPassword();
    if (checkEmail() && checkPassword()) {
      return true;
    } else return false;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (validation()) {
      console.log('로그인 성공');
      onLogin();
      // 로그인 성공 후 홈 화면으로 이동
      navigate('/');
    }
  };

  const onLogin = () => {
    const body = {
      email: emailValue,
      password: passwordValue,
    };
    console.log('body: ', body);
    axios
      .post(
        `http://ec2-52-78-191-151.ap-northeast-2.compute.amazonaws.com:8080/login`,
        body,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res);
        const { email, name, memberId } = res.data;
        const accessToken = res.headers.authorization;
        localStorage.setItem('access_token', accessToken);
        localStorage.setItem('user_name', name);
        localStorage.setItem('user_email', email);
        localStorage.setItem('user_id', memberId);
      })
      .catch((err) => {
        console.log(err);
        setIsValidate(true);
      });
  };

  return (
    <>
      <Main>
        <Logo
          src={`${process.env.PUBLIC_URL}/assets/stackoverflow_small.png`}
        />
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
            <input type="text" onChange={onChangeEmail} value={emailValue} />
            {emailErr && <p className="emailErrMsg">이메일을 입력해주세요.</p>}
            {isValidate && (
              <p className="errMessage">
                이메일 또는 비밀번호가 일치하지 않습니다.
              </p>
            )}
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              onChange={onChangePassword}
              value={passwordValue}
            />
            {passwordErr && (
              <p className="emailErrMsg">비밀번호를 입력해주세요</p>
            )}
          </div>
          <button type="submit">Log in</button>
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
