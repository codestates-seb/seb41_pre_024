import styled from "styled-components";
import {QuestionsTap} from "./QuestionsTap";
import {QuestionsSub} from "./QuestionsSub"

/* 
  [구현해야할 기능]
  1. 처음 첫 홈화면에는 모든 Questons을 보여준다 15개씩 페이지네이션(15,30,50) 보여질 개수 지정가능
  2. 

*/

const Layout = styled.div`
  display:flex;
  

  .listLine{
    flex:5;
  }
  .subLine{
    margin-left: 15px;
    flex:2;
  }
  .searchTitle{
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin-bottom: 15px;
  }

  .crateBtn{

    padding: 10px;
    background-color:#0a95ff;
    border-radius: 3px;
    margin-right:12px;

    a{
      padding:5px;
      color: white;
      font-size:14px;

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
        {/* 기본 :  All Questions / 검색시 : Search Results */}
        <h2>All Questions</h2>
        <div className="crateBtn"><a href="/ask">Ask Question</a></div>
      </div>
      {/* 검색했을시 보여줄값 */}
      {/* <div className="serachLang">Results for ㄴㄴ</div> */}
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
