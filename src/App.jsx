import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SettingPage from './pages/SettingPage';
import FrontPackage from './pages/FrontPackage';
import FrontBuild from './pages/FrontBuild';
import FrontFramework from './pages/FrontFramework';
import FrontLanguage from './pages/FrontLangauge';
import BackFramework from './pages/BackFramework';
import BackDatabase from './pages/BackDatabase';

import Main from './pages/Main';

import Design from './pages/Design';
import Api from './pages/Api';
import Erd from './pages/Erd';
import Diagram from './pages/Diagram';

import SettingCheck from './pages/SettingCheck';


function App() {
  return (
    <Router>
      <Routes>

        <Route path="/setting" element={<SettingPage />} />
        <Route path="/front-package" element={<FrontPackage />} />
        <Route path="/front-build" element={<FrontBuild />} />
        <Route path="/front-framework" element={<FrontFramework />} />
        <Route path="/front-language" element={<FrontLanguage />} />
        <Route path="/back-framework" element={<BackFramework />} />
        <Route path="/back-database" element={<BackDatabase />} />

        <Route path="/" element={<Main />} />

        <Route path="/design" element={<Design />} />
        <Route path="/api" element={<Api />} />
        <Route path="/erd" element={<Erd />} />
        <Route path="/diagram" element={<Diagram />} />
        <Route path="/settingcheck" element={<SettingCheck />} />

      </Routes>
    </Router>
  );
}

export default App;
