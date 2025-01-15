import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './page/Main.jsx';

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
