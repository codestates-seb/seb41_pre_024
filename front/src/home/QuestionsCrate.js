import styled from "styled-components";
import Header from "../Header";
import Footer from "../Footer";

const Layout = styled.div`
  // display:flex;
  // flex-direction: column;
  // height: calc(100vh - 342px);

  .title {
    background: url(https://cdn.sstatic.net/Img/ask/background.svg?v=2e9a8205b368)
      no-repeat right/500px;
    height: 130px;
    line-height: 130px;
    // flex: 1;
  }

  .exple {
    border: 1px solid rgb(150, 195, 232);
    padding: 20px;
    background-color: rgb(230, 241, 250);
    width: 851px;
    margin-bottom: 20px;
    .exple_sub {
      margin: 10px 0;
    }
  }

  .exple_list {
    margin-left: 15px;
    list-style: inside;
  }

  h5 {
    font-size: 14px;
  }
`;


const Form = styled.form`
  width: 851px;
  display: flex;
  flex-direction: column;
  gap: 20px;

.conTitle{
  display:flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid rgb(220,244,226);
  
  p{
    font-size: 12px;
  }

  & > *{
    margin: 2px 0;
  }

  .isTitle{
    padding:5px;
    flex:1;
    flex-basis: 33px;
  }
}

.content{
  padding: 20px;
  border: 1px solid rgb(220,244,226);
}

textarea {
  width: 100%;
  resize: vertical;
  height: 256px;
}

button{
  padding: 10px 13px;
}
`

export const QuestionsCrate = () => {


  
  return (
    <>
      <Layout>
        <div className="title">
          <h1>Ask a public question</h1>
        </div>
        <div className="exple">
          <div>
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
              <li>
                Add “tags” which help surface your question to members of the
                community.
              </li>
              <li>Review your question and post it to the site.</li>
            </ul>
          </div>
        </div>
        <Form>
          <div className="conTitle">
            <h5>Title</h5>
            <p>
              Be specific and imagine you’re asking a question to another
              person.
            </p>
            <input type="text" className="isTitle" placeholder="e.g is there an R function fpr finding the index of an element in a vector"/>
          </div>
          <div className="content">
            <h5>What are the details of your problem?</h5>
            <p>
              Introduce the problem and expand on what you put in the title.
              Minimum 20 characters.
            </p>
            <textarea/>
            <div>
              <button type="submit">Next</button>
            </div>
          </div>
        </Form>
      </Layout>
    </>
  );
};
