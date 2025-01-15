import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Design from './pages/Design';
import Api from './pages/Api';
import Erd from './pages/Erd';
import Diagram from './pages/Diagram';

import SettingPage from './pages/SettingPage';
import FrontPackage from './pages/FrontPackage';
import FrontBuild from './pages/FrontBuild';
import FrontFramework from './pages/FrontFramework';
import FrontLanguage from './pages/FrontLanguage';
import BackFramework from './pages/BackFramework';
import BackDatabase from './pages/BackDatabase';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/design" element={<Design />} />
        <Route path="/api" element={<Api />} />
        <Route path="/erd" element={<Erd />} />
        <Route path="/diagram" element={<Diagram />} />

        <Route path="/settingpage" element={<SettingPage />} />
        <Route path="/frontpackage" element={<FrontPackage />} />
        <Route path="/frontbuild" element={<FrontBuild />} />
        <Route path="/frontframework" element={<FrontFramework />} />
        <Route path="/frontlanguage" element={<FrontLanguage />} />
        <Route path="/backframework" element={<BackFramework />} />
        <Route path="/backdatabase" element={<BackDatabase />} />
      </Routes>
    </Router>
  );
}

export default App;
