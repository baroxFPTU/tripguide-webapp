import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';

import 'styles/index.scss';
import PageNotFound from 'pages/PageNotFound';
import MainLayout from 'components/layouts/MainLayout';

const router = (
  <Router>
    <Routes>
      <Route
        path='/'
        element={
          <MainLayout>
            <Home />
          </MainLayout>
        }
      />
      <Route path='*' element={<PageNotFound />} />
    </Routes>
  </Router>
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<React.StrictMode>{router}</React.StrictMode>);
