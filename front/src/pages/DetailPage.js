import React from 'react';
import styled from 'styled-components';

import Title from '../components/QandA/Title';
import Contents from '../components/QandA/Contents';
import Footer from '../components/Footer';

import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import Aside from '../components/Aside';
import SideNavbar from '../components/Navbar';

export default function DetailPage() {
  const [questionData, setQuestionData] = useState();
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    async function request() {
      const response = await axios.get(`http://localhost:3001/questions/${id}`);
      const { data } = response;
      setQuestionData(data);
    }
    request();
  }, []);

  return (
    <>
      {questionData && (
        <div>
          <Main>
            <AsideContainer>
              <div id="scroll">
                <SideNavbar />
              </div>
            </AsideContainer>
            <Section>
              <DetailContainer>
                <Title data={questionData} />
                <hr />
                <ContentsAndSideBox>
                  <ContentsContainer>
                    <Contents data={questionData} />
                  </ContentsContainer>
                  <SideBox>
                    <Aside />
                  </SideBox>
                </ContentsAndSideBox>
              </DetailContainer>
            </Section>
          </Main>
        </div>
      )}
      <Footer />
    </>
  );
}

const Main = styled.div`
  max-width: 2000px;
  display: flex;
  margin: 0 auto;
  background-color: rgba(128, 128, 128, 0.098);
  /* border: 3px solid green; */
  justify-content: center;
`;

const AsideContainer = styled.div`
  background-color: (255, 255, 255);
  flex-basis: 164px;
  min-height: calc(100vh - 372px);
  position: relative;
  /* border: 3px solid violet; */
  background-color: #f48224;
  border-right: 1px solid black;

  #aside {
    background-color: (255, 255, 255);
    flex-basis: 164px;
    min-height: calc(100vh - 372px);
    position: relative;
    border-right: 1px solid black;
    border: 3px solid red;
  }

  #scroll {
    width: 100px;
    height: 100px;
    /* background-color: black; */
    position: sticky;
    top: 74px;
  }
`;

const Section = styled.div`
  background-color: (255, 255, 255);
  flex: 0.5;
  padding: 24px;
  /* border: 3px solid goldenrod; */
`;

// const Scroll = styled.div`
//   width: 100px;
//   height: 100px;
//   background-color: black;
//   position: sticky;
//   top: 74px;
// `;

const DetailContainer = styled.div`
  width: 900px;
  /* height: 700px;
  border: 1px solid blue; */
`;

const ContentsAndSideBox = styled.div`
  /* border: 3px solid aliceblue; */
  display: flex;
  justify-content: space-between;
`;

const ContentsContainer = styled.div`
  width: 780px;
  /* height: 700px;
  border: 3px solid yellowgreen; */
`;

const SideBox = styled.div`
  width: 320px;
  /* height: 700px; */
  margin: 24px;
  /* border: 3px solid sandybrown; */
  background-color: #fbf3d5;
`;
