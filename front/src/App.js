/* eslint no-use-before-define: 0 */
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Footer from './components/Footer';
import Question from './pages/Question';

function App() {
  return (
    <BrowserRouter>
      <div id="layout">
        <header id="header"></header>
        <main id="main">
          <aside id="aside">
            <div id="scroll"></div>
          </aside>
          <section id="section">
            <Routes>
              <Route path="/" />
              <Route path="/questions" element={<Question />} />
            </Routes>
          </section>
        </main>
        <Footer id="footer" />
      </div>
    </BrowserRouter>
  );
}

export default App;
