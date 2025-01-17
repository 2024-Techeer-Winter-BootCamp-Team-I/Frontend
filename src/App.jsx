import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpecificPage from './pages/SpecificPage';
import Onboarding from './pages/Onboarding';

import Design from './pages/Design';
import Api from './pages/Api';
import Erd from './pages/Erd';
import Diagram from './pages/Diagram';

import InputPage from './pages/InputPage';
import SettingPage from './pages/SettingPage';

import FrontPackage from './pages/FrontPackage';
import FrontBuild from './pages/FrontBuild';
import FrontFramework from './pages/FrontFramework';
import FrontLanguage from './pages/FrontLanguage';

import BackFramework from './pages/BackFramework';
import BackDatabase from './pages/BackDatabase';

import MyPage from './pages/MyPage';
import SettingCheck from './pages/SettingCheck';
import Main from './pages/Main';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/main" element={<Main />} />
        <Route path="/specific" element={<SpecificPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/design" element={<Design />} />
        <Route path="/api" element={<Api />} />
        <Route path="/erd" element={<Erd />} />
        <Route path="/diagram" element={<Diagram />} />
        <Route path="/input" element={<InputPage />} />
        <Route path="/mypage" element={<MyPage />} />

        <Route path="/settingpage" element={<SettingPage />} />
        <Route path="/frontpackage" element={<FrontPackage />} />
        <Route path="/frontbuild" element={<FrontBuild />} />
        <Route path="/frontframework" element={<FrontFramework />} />
        <Route path="/frontlanguage" element={<FrontLanguage />} />
        <Route path="/backframework" element={<BackFramework />} />
        <Route path="/backdatabase" element={<BackDatabase />} />
        <Route path="/settingcheck" element={<SettingCheck />} />
      </Routes>
    </Router>
  );
}

export default App;
