import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpecificPage from './pages/SpecificPage';
import Onboarding from './pages/Onboarding';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/specific" element={<SpecificPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </Router>
  );
}

export default App;
