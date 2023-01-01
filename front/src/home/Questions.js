import styled from "styled-components";
import {QuestionsTap} from "./QuestionsTap";
import {QuestionsSub} from "./QuestionsSub"

/* 
  [구현해야할 기능]
  1.검색시에 해당리스트만나오게
  [추가: 검색언어표시, Search Results: 검색언어]
  검색시에 동작은?
  데이터를 받아올때 검색어와 일치하는 단어가
  내용, 제목에 속해있다면 그데이터만 받아온다

  2.필터기능구현
  [시간기준최신순, 답변많은순, 답변적은순]
  

  3.리스트의 부분
  [votes: 질문투표수, answer: 답변수, views: 클릭 수로 판단]
  [계정이 작성한 질문을 판단하여 유저아이디 렌더]

  5.리스트 클릭시에 해당 디테일 페이지로 이동

  6.메인홈에 보이는 리스트 태그들은 어떻게 배치할지

  7.리덕스 툴킷 사용법, JWT 받아서 사용방법

  8.배포

  [궁금중]
  a태그에 백쿼터를 쓸수없는지
  쓸수없다면 값에대한 페이지 변화는 어떻게 ?
  리액트적으로 해결해야하나 ? 

  

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
        {/* 회원이아닐시에 로그인 창으로 */}
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
