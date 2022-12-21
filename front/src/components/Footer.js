import styled from 'styled-components';
import logo from '../assets/stackoverflow_small.png';

export default function Footer() {
  return (
    <FooterContainer>
      <LogoAndLightMode>
        <Logo src={logo} />
        <LightMode>
          <p className="mode selected">Light</p>
          <p className="mode">Dark</p>
          <p className="mode">Auto</p>
        </LightMode>
      </LogoAndLightMode>
      <Category>
        <p className="categoryTitle">STACK OVERFLOW</p>
        <Menu>Questions</Menu>
        <Menu>Help</Menu>
      </Category>
      <Category>
        <p className="categoryTitle">PRODUCTS</p>
        <Menu>Teams</Menu>
        <Menu>Advertising</Menu>
        <Menu>Collectives</Menu>
        <Menu>Talent</Menu>
      </Category>
      <Category>
        <p className="categoryTitle">COMPANY</p>
        <Menu>About</Menu>
        <Menu>Press</Menu>
        <Menu>Work Here</Menu>
        <Menu>Legal</Menu>
        <Menu>Privacy Policy</Menu>
        <Menu>Terms of Service</Menu>
        <Menu>Contact Us</Menu>
        <Menu>Cookie Settings</Menu>
        <Menu>Cookie Policy</Menu>
      </Category>
      <Category>
        <p className="categoryTitle">STACK EXCHANGE NETWORK</p>
        <Menu>Technology</Menu>
        <Menu>Culture & recreation</Menu>
        <Menu>Life & arts</Menu>
        <Menu>Science</Menu>
        <Menu>Professional</Menu>
        <Menu>Business</Menu>
        <br />
        <Menu>API</Menu>
        <Menu>Data</Menu>
      </Category>
      <SnsAndCopyright>
        <SnsContainer>
          <p className="sns">Blog</p>
          <p className="sns">Facebook</p>
          <p className="sns">Twitter</p>
          <p className="sns">LinkedIn</p>
          <p className="sns">Instagram</p>
        </SnsContainer>
        <p>
          Site design / logo © 2022 Stack Exchange Inc; user contributions
          licensed under CC BY-SA. rev 2022.12.19.43125
        </p>
      </SnsAndCopyright>
    </FooterContainer>
  );
}

const FooterContainer = styled.div`
  height: 322px;
  background-color: rgb(35 38 41);
  color: #9199a1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
`;

const LogoAndLightMode = styled.div`
  width: 5rem;
  height: 260px;
  padding: 0 12 24 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 35px;
  height: 35px;
`;

const LightMode = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  border: 1px solid rgb(145 153 161);
  border-radius: 2rem;
  padding: 5px;

  .mode {
    border-radius: 2rem;
    padding: 5px 8px;
    font-size: 13px;
  }

  .selected {
    border: 1px solid #5dba7d;
    background-color: #5dba7d;
    color: white;
  }
`;

const Category = styled.div`
  height: 260px;
  padding: 0 12 24 0px;
  margin: 0 50px;

  .categoryTitle {
    height: 3rem;
    padding: 10px 0;
    font-size: 15px;
    font-weight: 700;
    color: #babfc4;
  }
`;

const Menu = styled.p`
  font-size: 13px;
  padding-bottom: 8px;
`;

const SnsAndCopyright = styled.div`
  width: 15rem;
  height: 260px;
  padding: 0 12 24 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 11px;
`;

const SnsContainer = styled.div`
  width: 10rem;
  display: flex;
  justify-content: space-between;
  border-radius: 2rem;
  padding-top: 10px;

  .sns {
    border-radius: 2rem;
    padding-right: 10px;
  }
`;
