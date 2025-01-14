import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
       </Routes>
    </Router>
  );
}

export default App;
