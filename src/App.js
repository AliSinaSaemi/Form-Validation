import React from 'react';
import ValidationLoginForm from './ValidatedLoginForm';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Form Validation</h1>
      <div className="container">
        <ValidationLoginForm />
      </div>
    </div>
  )
}

export default App;
