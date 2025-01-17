import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SettingPage from './pages/SettingPage';
import FrontPackage from './pages/FrontPackage';
import FrontBuild from './pages/FrontBuild';
import FrontFramework from './pages/FrontFramework';
import FrontLanguage from './pages/FrontLangauge';
import BackFramework from './pages/BackFramework';
import BackDatabase from './pages/BackDatabase';

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
      </Routes>
    </Router>
  );
}

export default App;
