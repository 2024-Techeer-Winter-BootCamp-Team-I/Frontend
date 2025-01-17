import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';

import Design from './pages/Design';
import Api from './pages/Api';
import Erd from './pages/Erd';
import Diagram from './pages/Diagram';

import SettingCheck from './pages/SettingCheck';

import Mypage from './pages/Mypage';
import InputPage from './pages/InputPage';
import Specific from './pages/Specific';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/design" element={<Design />} />
        <Route path="/api" element={<Api />} />
        <Route path="/erd" element={<Erd />} />
        <Route path="/diagram" element={<Diagram />} />
        <Route path="/settingcheck" element={<SettingCheck />} />
        <Route path="/input" element={<InputPage />} />

        <Route path="/mypage" element={<Mypage />} />
        <Route path="/specific" element={<Specific />} />
      </Routes>
    </Router>
  );
}

export default App;
