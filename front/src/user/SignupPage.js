import Header from '../Header';
import styled from 'styled-components';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { FaFacebookSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { RiQuestionnaireFill } from 'react-icons/ri';
import { TiArrowUnsorted } from 'react-icons/ti';
import { BsTagsFill } from 'react-icons/bs';
import { AiFillTrophy } from 'react-icons/ai';

const HeaderContainer = styled.header`
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

const Main = styled.div`
  background-color: #f1f2f3;
  height: 100vh;
  padding-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  .script {
    width: 410px;
    height: 285px;

    h1 {
      font-size: x-large;
      margin-bottom: 24px;
    }

    div {
      display: flex;
      margin-bottom: 24px;
      gap: 10px;

      .icon {
        color: #0a95ff;
        font-size: 26px;
      }
    }

    .bottom {
      font-size: small;
      margin-bottom: 5px;
    }
  }

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
  return (
    <>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <Main>
        <div className="script">
          <h1>Join the Stack Overflow Community</h1>
          <div>
            <RiQuestionnaireFill className="icon" />
            <p>Get unstuck — ask a question</p>
          </div>
          <div>
            <TiArrowUnsorted className="icon" />
            <p>Unlock new privileges like voting and commenting</p>
          </div>
          <div>
            <BsTagsFill className="icon" />
            <p>Save your favorite tags, filters, and jobs</p>
          </div>
          <div>
            <AiFillTrophy className="icon" />
            <p>Earn reputation and badges</p>
          </div>
          <p className="bottom">
            Collaborate and share knowledge with a private group for FREE.
          </p>
          <p className="bottom">
            Get Stack Overflow for Teams free for up to 50 users.
          </p>
        </div>
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

          <SignupContainer>
            <div>
              <label>Display Name</label>
              <input type="text" />
            </div>
            <div>
              <label>Email</label>
              <input type="text" />
            </div>
            <div>
              <label>Password</label>
              <input type="password" />
              <p>
                Passwords must contain at least eight characters, including at
                least 1 letter and 1 number.
              </p>
            </div>
            <button>Sign up</button>
            <p>
              By clicking “Sign up”, you agree to our terms of service, privacy
              policy and cookie policy
            </p>
          </SignupContainer>

          <Script>
            <div>
              <p>Already have an account?</p>
              <Link to="/login">Log in</Link>
            </div>
            <div>
              <p>Are you an employer?</p>
              <Link to="#">Sign up on Talent</Link>
            </div>
          </Script>
        </div>
      </Main>
    </>
  );
};
export default SignupPage;
