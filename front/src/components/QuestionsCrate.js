import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Layout = styled.div`
  // display:flex;
  // flex-direction: column;
  // align-items: flex-start;

  .title {
    background: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368)
      no-repeat right/500px;
    height: 130px;
    line-height: 130px;
    flex:1;
  }


  .exple {
    border: 1px solid rgb(150,195,232);
    padding: 20px;
    background-color: rgb(230,241,250);

    .exple_sub{
      margin: 10px 0
    }
  }

  .exple_list{
    margin-left: 15px;
    list-style: inside;
  }

  h5{
    padding: 5px;
    font-size:14px;
  }
`;

export const QuestionsCrate = () => {
  return (
    <>
      <Layout>
          <div className="title">
            <h1>Ask a public question</h1>
          </div>
        <div>
          <div className="exple">
            <h3>Writing a good question</h3>
            <div className="exple_sub">
              <p>
                You’re ready to ask a programming-related question and this form
                will help guide you through the process.
              </p>
              <p>
                Looking to ask a non-programming question? See the topics here
                to find a relevant site.
              </p>
            </div>
            <h5>Steps</h5>
            <ul className="exple_list">
              <li>Summarize your problem in a one-line title.</li>
              <li>Describe your problem in more detail.</li>
              <li>Describe what you tried and what you expected to happen.</li>
              <li>Add “tags” which help surface your question to members of the community.</li>
              <li>Review your question and post it to the site.</li>
            </ul>
          </div>
        </div>
      </Layout>
      {/* <Footer /> */}
    </>
  );
};
