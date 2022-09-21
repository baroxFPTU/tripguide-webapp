import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import 'styles/index.scss';
import PageNotFound from 'pages/PageNotFound';

const router = (
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode>{router}</React.StrictMode>);
