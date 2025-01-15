import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import './App.css';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
    </Router>
  );
}

export default App;
