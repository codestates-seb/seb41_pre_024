import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import SignupInfo from './SignupInfo';
import axios from 'axios';

const Main = styled.div`
  background-color: #f1f2f3;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .signup-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
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

const SignupContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 280px;
  gap: 15px;

  background-color: white;
  border-radius: 7px;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.05);
  padding: 20px;

  .err {
    font-size: small;
    color: #ea4335;
  }

  div {
    font-weight: 600;
  }

  p {
    color: #6a737c;
    font-size: small;
    font-weight: 400;
    margin-top: 5px;
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

const SignupPage = () => {
  const [nameValue, setNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);

  const navigate = useNavigate();

  const onChangeName = (e) => {
    setNameValue(e.target.value);
    const nameRegex = /^[a-zA-Z가-힣0-9]{3,}$/;
    if (!nameValue || !nameRegex.test(nameValue)) {
      setNameErr(true);
      return false;
    } else {
      setNameErr(false);
      return true;
    }
  };

  const onChangeEmail = (e) => {
    setEmailValue(e.target.value);
    const emailRegexp = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!emailValue || !emailRegexp.test(emailValue)) {
      setEmailErr(true);
      return false;
    } else {
      setEmailErr(false);
      return true;
    }
  };

  const onChangePassword = (e) => {
    setPasswordValue(e.target.value);
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;
    if (!passwordValue || !passwordRegex.test(passwordValue)) {
      setPasswordErr(true);
      return false;
    } else {
      setPasswordErr(false);
      return true;
    }
  };

  function checkValidation() {
    if (!nameErr && !emailErr && !passwordErr) {
      console.log('Go to login!');
      return true;
    }
    return false;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (checkValidation()) {
      signup();
      alert('회원가입이 완료되었습니다.');
      navigate('/login');
    }
  };

  const signup = () => {
    const body = {
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    };
    console.log(body);
    axios
      .post(
        `http://ec2-52-78-191-151.ap-northeast-2.compute.amazonaws.com:8080/api/members`,
        body,
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.error('Error :', err);
      });
  };

  
  return (
    <>
      <Main>
        <SignupInfo />
        <div className="signup-form">
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

          <SignupContainer onSubmit={onSubmit}>
            <div>
              <label>Display Name</label>
              <input type="text" value={nameValue} onChange={onChangeName} />
              {nameErr && (
                <p className="err">특수문자 없이 3자 이상 입력해주세요.</p>
              )}
            </div>
            <div>
              <label>Email</label>
              <input type="text" value={emailValue} onChange={onChangeEmail} />
              {emailErr && <p className="err">이메일 형식에 맞지 않습니다.</p>}
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={passwordValue}
                onChange={onChangePassword}
              />
              {passwordErr && (
                <p className="err">
                  영문 대, 소문자, 숫자, 특수문자 포함 8자 이상 입력해주세요.
                </p>
              )}
            </div>
            <button type="submit">Sign up</button>
          </SignupContainer>

          <Script>
            <div>
              <p>Already have an account?</p>
              <Link to="/login">Log in</Link>
            </div>
          </Script>
        </div>
      </Main>
    </>
  );
};
export default SignupPage;
