import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import Design from './pages/Design'
import Api from './pages/Api'
import Erd from './pages/Erd'
import Diagram from './pages/Diagram'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/design" element={<Design />} />
        <Route path="/api" element={<Api />} />
        <Route path="/erd" element={<Erd />} />
        <Route path="/diagram" element={<Diagram />} />
       </Routes>
    </Router>
  );
}

export default App;
