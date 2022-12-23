import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import Question from './home/Questions';
import LoginPage from './user/LoginPage';
import DetailPage from './detail/DetailPage';
import SignupPage from './user/SignupPage';
import { QuestionsCrate } from './home/QuestionsCrate';
import Footer from './Footer';
import { Route, Routes, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import UserPage from './user/UserPage';

const Common = styled.div`
  display: flex;
  width: 1264px;
  margin: 0 auto;

  & > div {
    flex: 1;
    padding: 24px;
  }
`;

const Aside = () => {
  return (
    <>
      <aside id="aside">
        <div id="scroll">
          <Navbar />
        </div>
      </aside>
    </>
  );
};

const OverlapHssf = () => {
  return (
    <>
      <Common>
        <Aside />
        <Outlet />
      </Common>
      <Footer />
    </>
  );
};
const OverlapHsf = () => {
  return (
    <>
    <Common>
      <Outlet />
    </Common>
      <Footer />
    </>
  );
};
const OverlapSs = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <div id="app">
      <Header />
      <main id="main">
        <Routes>
          <Route element={<OverlapHssf />}>
            <Route path="/" element={<Question />} />
            <Route path="/questions/:id" element={<DetailPage />} />
            <Route path="/user" element={<UserPage />} />
          </Route>
          <Route element={<OverlapHsf />}>
            <Route path="/ask" element={<QuestionsCrate />} />
          </Route>
          <Route element={<OverlapSs />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
