import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { LayoutWithTopBarAndFooter } from './layouts/LayoutWithTopBarAndFooter';
import { Main, Games } from './components/content';
import './App.css';

export const App = () => {
  return (
    <Routes>
      <Route path="" element={<LayoutWithTopBarAndFooter />}>
        <Route index element={<Main />} />
        <Route path="games" element={<Games />} />
      </Route>
    </Routes>
  );
}
