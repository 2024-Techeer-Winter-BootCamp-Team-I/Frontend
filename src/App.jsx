import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import MyPage from './pages/MyPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
