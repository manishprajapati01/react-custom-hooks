import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FetchAPI from './components/FetchAPI';
import Counter from './components/Counter';

const App: React.FC = () => (
  <>
    <a href='/'>Fetch API Hook</a>&nbsp;
    <a href='/counter'>Counter Hook</a> 
    <br />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FetchAPI />} />
        <Route path="counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>

  </>
);

export default App;
