/* eslint no-use-before-define: 0 */
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div id="layout">
      <header id="header">
        <Header />
      </header>
      <main id="main">
        <aside id="aside">
          <div id="scroll"></div>
        </aside>
        <section id="section"></section>
      </main>
      <footer id="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
