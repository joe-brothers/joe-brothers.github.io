import React from 'react';
import './App.css';
import { Content } from './components/content';
import { TopBar } from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Content />
    </div>
  );
}

export default App;
