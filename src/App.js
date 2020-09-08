import React, { useState } from 'react';
import logo from "./logo512.png";
import "./App.css";

function App() {
  const [quoteToSend, setQuoteToSend] = useState("");
  const [retrievedQuote, setRetrievedQuote] = useState("Kanye West Quotes");

  function handleGetQuote(){
    fetch('https://c71lfcgm50.execute-api.ap-southeast-2.amazonaws.com/quote')
    .then(response => response.json())
    .then(data => setRetrievedQuote(data.quote))
    .catch((error)=> console.log(error))
  }

  function handleSubmitForm() {
    let quotePayload = {
      quote: quoteToSend
    };
    fetch("https://c71lfcgm50.execute-api.ap-southeast-2.amazonaws.com/quote", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(quotePayload)
    })
      .then((response) => response.text())
      .then ((data) => alert(data))
      .catch((error) => console.log(error));
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kanye West Quotes
        </p>
      </header>
      <div className='quote-retriever'>
        <p>{retrievedQuote}</p>
        <button className='quoteRetrieveButton' onClick={() => handleGetQuote()}> Get Kanye Quote</button>
     </div>
      <div className="quote-submission">
          <input
            type="text"
            placeholder="Enter a Kanye quote"
            onChange={(e) => setQuoteToSend(e.target.value)}
          />
          <button onClick={() => handleSubmitForm()}> Send to Kanye</button>
        </div>
    </div>
  );
}

export default App;
