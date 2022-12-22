import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Layout = styled.div`
    .title{
        background: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368) no-repeat right/500px;
        height: 130px;
        line-height:130px;
    }

`


export const QuestionsCrate = () => {
  return (
    <>
      <Layout>
        <div className="title">
            <h1>Ask a public question</h1>
        </div>
        <div>
          <h3>Writing a good question</h3>
          <p>
            You’re ready to ask a programming-related question and this form
            will help guide you through the process. n-programming question? See
            the topics here to find a relevant site.
          </p>
          <h5>Steps</h5>
          <ul>
            <li>Summarize your problem in a one-line title.</li>
            <li>Describe your problem in more detail.</li>
            <li>Describe what you tried and what you expected to happen.</li>
            <li>
              Add “tags” which help surface your question to members of the
              community.
            </li>
            <li>Review your question and post it to the site.</li>
          </ul>
        </div>


      </Layout>
      <Footer />
    </>
  );
};
