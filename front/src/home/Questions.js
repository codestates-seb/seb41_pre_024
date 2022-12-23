import styled from "styled-components";
import {QuestionsTap} from "./QuestionsTap";
import {QuestionsSub} from "./QuestionsSub"

const Layout = styled.div`
  display:flex;
  

  .listLine{
    flex:5;
  }
  .subLine{
    margin-left: 15px;
    // height: 100vh;
    flex:2;
  }
  .searchTitle{
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .crateBtn{
    padding:10px;
    background-color:#0a95ff;
    border-radius: 3px;
    margin-right:12px;

    a{
      padding:5px;
      color: white;
      font-size:13px;

    }
  }

  .serachLang{
    font-size:14px;
    margin-bottom: 45px;
  }
`

export default function Questios() {
  return (
  <Layout>
    {/* 검색에 영향을 받는영역 */}
    <div className="listLine">
      <div className="searchTitle">
        <h2>Search Results</h2>
        <div className="crateBtn"><a href="/ask">Ask Question</a></div>
      </div>
      <div className="serachLang">Results for ㄴㄴ</div>
      <div className="serachList">
        <QuestionsTap/>
      </div>
    </div>

    {/* 검색과 무관 */}
    <div className="subLine">
      <QuestionsSub/>
    </div>
  </Layout>
  )
  
};
