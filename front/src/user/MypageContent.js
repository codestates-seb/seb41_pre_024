import { useState } from "react";
import styled from "styled-components";
import Answers from "./Answers";
import Edit from "./Edit";
import Questions from "./UserQuestions";

const Container = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 600px;
  gap: 20px;
`;

const TabMenu = styled.ul`
  display: flex;
  flex-direction: column;
  width: 120px;
  padding: 10px;

  .submenu {
    padding: 10px;
    color: #525960;
  }

  .focused {
    border-radius: 20px;
    background-color: #d9d9d9;
  }
`;

const Content = styled.div`
  width: 100%;
  padding: 10px;
`;

const MypageContent = ({ userInfo }) => {
  console.log(userInfo);
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: "Questions", content: <Questions userInfo={userInfo} /> },
    { name: "Answers", content: <Answers userInfo={userInfo} /> },
    { name: "Edit", content: <Edit /> },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <Container>
        <TabMenu>
          {menuArr.map((tab, index) => {
            return (
              <li
                key={index}
                className={currentTab === index ? "submenu focused" : "submenu"}
                onClick={() => selectMenuHandler(index)}
              >
                {tab.name}
              </li>
            );
          })}
        </TabMenu>
        <Content>
          <p>{menuArr[currentTab].content}</p>
        </Content>
      </Container>
    </>
  );
};

export default MypageContent;
