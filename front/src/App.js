import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Questios } from "./components/Questions";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuestionsCrate } from "./components/QuestionsCrate";

const Content = () => {
  return (
    <main id="main">
      <aside id="aside">
        <div id="scroll"></div>
      </aside>
      <section id="section">
        <Questios />
      </section>
    </main>
  );
};

function App() {
  return (
    <div id="layout">
      <header id="header">
        <Header />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Content/>}/>
          <Route path="/ask" element={<QuestionsCrate/>}/>
        </Routes>
      </BrowserRouter>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;



