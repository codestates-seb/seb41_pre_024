import React from "react";
import styled from "styled-components";

export default function detailPage() {
  return (
    <>
      <DetailPageContainer>
        <NavBar />
        <DetailContent>
          <hr />
        </DetailContent>
      </DetailPageContainer>
    </>
  );
}

const DetailPageContainer = styled.div`
  height: 800px;
  display: flex;
  justify-content: center;
`;

const NavBar = styled.div`
  width: 200px;
  height: 700px;

  border-right: 1px solid black;
`;

const DetailContent = styled.div`
  width: 800px;
  height: 700px;
  border: 1px solid green;
`;

const RightSection = styled.div`
  width: 100px;
  border: 1px solid red;
`;
