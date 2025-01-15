import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontendSetting4 from './pages/FrontendSetting4';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/front4" element={<FrontendSetting4 />} />
      </Routes>
    </Router>
  );
}

export default App;
