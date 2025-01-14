import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import SettingCheck from './pages/SettingCheck'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/check" element={<SettingCheck/>} />
      </Routes>
    </Router>
  );
}

export default App;
