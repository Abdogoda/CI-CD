import React, { useState } from 'react';
import './App.css';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-container">
      <div className="counter-card">
        <h1 className="counter-title">React Counter</h1>
        <div className="count-display">{count}</div>
        
        <div className="button-group">
          <button 
            className="btn btn-decrement" 
            onClick={() => setCount(prev => prev - 1)}
          >
            -
          </button>
          
          <button 
            className="btn btn-reset" 
            onClick={() => setCount(0)}
          >
            Reset
          </button>

          <button 
            className="btn btn-increment" 
            onClick={() => setCount(prev => prev + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
