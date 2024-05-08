import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Counter from './Components/CounterBox/CounterBox';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className="page-blue">
      <Counter />
  </div>
);
