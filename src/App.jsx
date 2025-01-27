import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from './pages/Main';

import Api from './pages/Api';
import Erd from './pages/Erd';
import Diagram from './pages/Diagram';

import SettingCheck from './pages/SettingCheck';

import Mypage from './pages/Mypage';
import InputPage from './pages/InputPage';
import Specific from './pages/Specific';

import FrontPackage from './pages/FrontSetting/FrontPackage';
import FrontBuild from './pages/FrontSetting/FrontBuild';
import FrontFramework from './pages/FrontSetting/FrontFramework';
import FrontLanguage from './pages/FrontSetting/FrontLangauge';
import BackFramework from './pages/BackendSetting/BackFramework';
import BackDatabase from './pages/BackendSetting/BackDatabase';
import SettingPage from './pages/SettingPage';
import ErdPage from './pages/ErdPage';
import DiagramPage from './pages/DiagramPage';
import SwaggerPage from './pages/SwaggerPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/api" element={<Api />} />
        <Route path="/erd" element={<Erd />} />
        <Route path="/diagram" element={<Diagram />} />
        <Route path="/settingcheck" element={<SettingCheck />} />
        <Route path="/input" element={<InputPage />} />

        <Route path="/mypage" element={<Mypage />} />

        <Route path="/specific" element={<Specific />} />

        <Route path="/frontpackage" element={<FrontPackage />} />
        <Route path="/frontbuild" element={<FrontBuild />} />
        <Route path="/frontframework" element={<FrontFramework />} />
        <Route path="/frontlanguage" element={<FrontLanguage />} />
        <Route path="/backframework" element={<BackFramework />} />
        <Route path="/backdatabase" element={<BackDatabase />} />
        <Route path="/setting" element={<SettingPage />} />
        <Route path="/erdpage" element={<ErdPage />} />
        <Route path="/diagrampage" element={<DiagramPage />} />
        <Route path="/swaggerpage" element={<SwaggerPage />} />
      </Routes>
    </Router>
  );
}

export default App;
