import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Design from './pages/Design';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/design" element={<Design />} />
      </Routes>
    </Router>
  );
}

export default App;
