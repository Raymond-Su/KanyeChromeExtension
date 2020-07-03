import React from 'react';
import QuoteRetrieve from './quoteRetrieve/quoteRetrieve';
import QuoteForm from './quoteForm/QuoteForm';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kanye West Quotes Generator
        </p>
      </header>
      <QuoteForm/>
      <hr/>
      <QuoteRetrieve/>
    </div>
  );
}

export default App;
