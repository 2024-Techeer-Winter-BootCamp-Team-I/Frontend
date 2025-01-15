import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SpecificPage from './pages/SpecificPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/specific" element={<SpecificPage />} />
      </Routes>
    </Router>
  );
}

export default App;
