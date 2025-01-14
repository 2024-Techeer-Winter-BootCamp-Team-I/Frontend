import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import SettingPage from './pages/SettingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/setting" element={<SettingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
