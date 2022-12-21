/* eslint no-use-before-define: 0 */
import './App.css';
import { Questios } from './components/Questions';
import Footer from './components/Footer';

function App() {
  return (
    <div id="layout">
      <header id="header"></header>
      <main id="main">
        <aside id="aside">
          <div id="scroll"></div>
        </aside>
        <section id="section">
          <Questios/>
        </section>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
