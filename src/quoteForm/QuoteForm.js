import React, { useState } from 'react';

function QuoteForm() {
  const [quote, setQuote] = useState('');
  
  function handleSubmitForm(){
    let quotePayload ={
      quote: quote
    }
    fetch('https://c71lfcgm50.execute-api.ap-southeast-2.amazonaws.com/quote', {
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(quotePayload), 
      mode: 'no-cors'
    })
    .then(response => console.log(response))
    .catch((error)=> console.log(error))
  }

  return (
    <div>
      <input
        type='text'
        placeholder='Enter a Kanye quote'
        onChange={(e) => setQuote(e.target.value)}
      />
      <button onClick={handleSubmitForm}> Send to Kanye</button>
    </div>

  );
}

export default QuoteForm;