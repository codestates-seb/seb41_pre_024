import React from 'react';
import styled from 'styled-components';

import Title from '../components/QandA/Title';
import Content from '../components/QandA/Content';
import Footer from '../components/Footer';

export default function detailPage() {
  return (
    <>
      <Main>
        <Aside></Aside>
        <Section>
          <DetailContainer>
            <Title />
            <hr />
            <ContentAndSideBox>
              <ContentContainer>
                <Content />
              </ContentContainer>
              <SideBox />
            </ContentAndSideBox>
          </DetailContainer>
        </Section>
      </Main>
      <Footer />
    </>
  );
}

const Main = styled.div`
  max-width: 2000px;
  display: flex;
  margin: 0 auto;
  background-color: rgba(128, 128, 128, 0.098);
  border: 3px solid green;
  justify-content: center;
`;

const Aside = styled.div`
  background-color: (255, 255, 255);
  flex-basis: 164px;
  min-height: calc(100vh - 372px);
  position: relative;
  border: 3px solid violet;
  border-right: 1px solid black;
`;

const Section = styled.div`
  background-color: (255, 255, 255);
  flex: 0.5;
  padding: 24px;
  border: 3px solid goldenrod;
`;

// const Scroll = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: black;
//   position: sticky;
//   top: 74px;
// `;

const DetailContainer = styled.div`
  width: 1100px;
  height: 700px;
  border: 1px solid blue;
`;

const ContentAndSideBox = styled.div`
  border: 3px solid aliceblue;
  display: flex;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  width: 780px;
  height: 700px;
  border: 3px solid yellowgreen;
`;

const SideBox = styled.div`
  width: 320px;
  height: 700px;
  border: 3px solid sandybrown;
`;
