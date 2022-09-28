import React from 'react';
import { Content } from './components/content';
import { TopBar } from './components/TopBar';
import { Footer } from './components/Footer';
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <TopBar />
      <Content />
      <Footer />
    </div>
  );
}
