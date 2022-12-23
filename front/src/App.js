import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import DetailPage from './pages/DetailPage';
import Header from './components/Header';
import { QuestionsCrate } from './components/QuestionsCrate';
import UserPage from "./pages/UserPage";
import SideNavbar from "./components/Navbar";




function App() {
  return (
    <BrowserRouter>
      <div id="layout">
        <Header />
        <main id="main">
          <section id="section">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/question" element={<DetailPage />}></Route>
              <Route path="/user" element={<UserPage />} />
              <Route path="/ask" element={<QuestionsCrate />} />
            </Routes>
          </section>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;



