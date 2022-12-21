import styled from "styled-components";
import { QuestionsCrate } from "./QuestionsCrate";
import {QuestionsTap} from "./QuestionsTap";
import {Link} from "react-router-dom";




const Layout = styled.div`
  display:flex;

  .listLine{
    background-color: red;
    flex:5;
  }
  .subLine{
    background-color: blue;
    margin-left: 15px;
    height: 100vh;
    flex:2;
  }
  .searchTitle{
    display: flex;
    justify-content:space-between;
    align-items: 
    
    a{
      background-color:yellow;
      padding:10px;
    }
  }

  .crateBtn{
    
  }

`

export const Questios = () => {
  return (
  <Layout>
    {/* 검색에 영향을 받는영역 */}
    <div className="listLine">
      <div className="searchTitle">
        <h2>Search Results</h2>
        <div className="crateBtn"><Link to="/ask">Ask Question</Link></div>
      </div>

      <div className="serachLang">검색언어</div>
      <div className="serachList"><QuestionsTap/></div>

    </div>


    {/* 검색과 무관 */}
    <div className="subLine">
      서브창
    </div>
  </Layout>
  )
  
};
