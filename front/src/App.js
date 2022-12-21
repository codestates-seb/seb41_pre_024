import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DetailPage from './pages/DetailPage';

import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div id="layout">
        <Header />
        <section id="section">
          <Routes>
            <Route path="/" exact={true} element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/question" element={<DetailPage />} />
          </Routes>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
