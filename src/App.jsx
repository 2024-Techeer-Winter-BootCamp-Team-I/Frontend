import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Main from './pages/Login';

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
