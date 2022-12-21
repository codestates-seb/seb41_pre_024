import styled from "styled-components";
import useState from "react";

const Layout = styled.div`
  display: flex;

  .flex_3 {
    flex: 3;
    background-color: gray;
  }
  .flex_1 {
    flex: 1;
    background-color: rgba(255, 255, 0, 0.5);
  }
`;

const Header = styled.header`
  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .tap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  .tap_ul {
    display: flex;
  }
`;

const Main = styled.div``;

export const Questios = () => {
  return (
    <Layout>
      <div className="flex_3">
        <Header>
          <div className="title">
            <div>
              {/* 기본제목 & 검색시 제목 */}
              <h2>All Questions</h2>
            </div>
            <div>
              {/* 클릭시 질문작성 페이지 (비로그인시 로그인창으로) */}
              <button>Ask Question</button>
            </div>
          </div>
          <div className="tap">
            <div>
              {/* 리스트 목록개수 */}
              <h3>257 questions with bounties</h3>
            </div>
            {/* 탭 버튼 */}
            <div>
              <ul className="tap_ul">
                <li>
                  <button>Recent</button>
                </li>
                <li>
                  <button>AnswerUp</button>
                </li>
                <li>
                  <button>AnswerDown</button>
                </li>
              </ul>
            </div>
          </div>
        </Header>

        <Main>리스트부분</Main>
        <footer>페이지 네이션</footer>
      </div>
      <aside className="flex_1">사이드부분</aside>
    </Layout>
  );
};
