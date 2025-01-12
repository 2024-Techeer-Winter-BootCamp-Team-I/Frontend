import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '@/App';
import Main from './Main';

const AppRouter = () => {
  return (
    <Router>
      <App>
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </App>
    </Router>
  );
}

export default AppRouter;
