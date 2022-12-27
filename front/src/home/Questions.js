import styled from "styled-components";
import {QuestionsTap} from "./QuestionsTap";
import {QuestionsSub} from "./QuestionsSub"

/* 
  [구현해야할 기능]
  1. 처음 첫 홈화면에는 모든 Questons 데이터를 보여준다 15개로~ 총개수도 보여야함 -> 페이지네이션(15,30,50) 보여질 개수 지정가능
  2. 필터 시간최신순, 답변많은순, 답변적은순, 구현 필요
  3. 검색했을시에 리스트 목록에 검색내용 & 리스트 수 구현필요
  4.   

*/

const Layout = styled.div`
  display:flex;
  

  .listLine{
    flex:5;
  }
  .subLine{
    margin-left: 20px;
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
    box-shadow: 0px 0px 3px 0px white inset;

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
