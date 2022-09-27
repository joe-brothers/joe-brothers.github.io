import React from 'react';
import { Content } from './components/content';
import { TopBar } from './components/TopBar';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Content />
    </div>
  );
}
