import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import InputPage from './pages/InputPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/input" element={<InputPage />} />
      </Routes>
    </Router>
  );
}

export default App;
