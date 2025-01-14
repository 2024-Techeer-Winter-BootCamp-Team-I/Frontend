import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/Main'
import Design from './pages/Design'
import Test from './pages/Test'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/design" element={<Design />} />
        <Route path="/test" element={<Test />} />
       </Routes>
    </Router>
  );
}

export default App;
