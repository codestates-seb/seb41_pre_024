import SideNavbar from "./Navbar";
import styled from "styled-components";

const Sidebar = styled.aside`
  #aside {
    background-color: (255, 255, 255);
    flex-basis: 164px;
    min-height: calc(100vh - 372px);
    position: relative;
    border-right: 1px solid black;
  }

  #scroll {
    width: 100px;
    height: 100px;
    position: sticky;
    top: 74px;
  }
`;

const Aside = () => {
  return (
    <Sidebar id="aside">
      <div id="scroll">
        <SideNavbar />
      </div>
    </Sidebar>
  );
};
export default Aside;
