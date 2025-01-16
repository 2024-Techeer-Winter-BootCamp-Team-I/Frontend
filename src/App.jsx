import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import Design from './pages/Design'
import Api from './pages/Api'
import Erd from './pages/Erd'
import Diagram from './pages/Diagram'
import BackendSetting1 from './pages/BackendSetting1'
import BackendSetting2 from './pages/BackendSetting2'
import FrontendSetting1 from './pages/BackendSetting1'
import FrontendSetting2 from './pages/FrontendSetting2'
import FrontendSetting3 from './pages/FrontendSetting3'
import FrontendSetting4 from './pages/FrontendSetting4'
import InputPage from './pages/InputPage'
import Mypage from './pages/Mypage'
import SettingCheck from './pages/SettingCheck'
import SettingPage from './pages/SettingPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/design" element={<Design />} />
        <Route path="/api" element={<Api />} />
        <Route path="/erd" element={<Erd />} />
        <Route path="/diagram" element={<Diagram />} />
        <Route path="/bs1" element={<BackendSetting1 />} />
        <Route path="/bs2" element={<BackendSetting2 />} />
        <Route path="/fs1" element={<FrontendSetting1 />} />
        <Route path="/fs2" element={<FrontendSetting2 />} />
        <Route path="/fs3" element={<FrontendSetting3 />} />
        <Route path="/fs4" element={<FrontendSetting4 />} />
        <Route path="/inputpage" element={<InputPage />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/settingcheck" element={<SettingCheck />} />
        <Route path="/settingpage" element={<SettingPage />} />
       </Routes>
    </Router>
  );
}

export default App;
