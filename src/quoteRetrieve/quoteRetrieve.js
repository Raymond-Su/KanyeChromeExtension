import React, { useState } from 'react';
import './quoteRetrieve.css'

function QuoteRetrieve() {
  const [retrievedQuote, setRetrievedQuote] = useState("This is a cool kanye quote");
  function handleGetQuote(){
    fetch('https://c71lfcgm50.execute-api.ap-southeast-2.amazonaws.com/quote')
    .then(response => response.json())
    .then(data => setRetrievedQuote(data.quote))
    .catch((error)=> console.log(error))
  }

  return (
    <div className='quoteRetrieveDiv'>
      <p>{retrievedQuote}</p>
      <button className='quoteRetrieveButton' onClick={handleGetQuote}> Get Kanye Quote</button>
    </div>

  );
}

export default QuoteRetrieve;