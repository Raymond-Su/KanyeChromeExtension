import React, { useState } from 'react';
import logo from './logo.png';
import './App.css';

function App() {
    const [kanyeQuote, setKanyeQuote] = useState('');
    const [retrievedKanyeQuote, setRetrievedKanyeQuote] = useState('Cool Kanye Quote');
    const apiURL = 'https://c71lfcgm50.execute-api.ap-southeast-2.amazonaws.com/quote';
    
    function handleSendQuote() {
        let kanyeWestQuotePayload = {
            quote : kanyeQuote
        }
        fetch(apiURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors',
            body: JSON.stringify(kanyeWestQuotePayload)
        })
        .then(response => console.log(response))
        .catch((error) => console.log(error));       
    }
    
    function handleGetQuote() {
        fetch(apiURL)
        .then(response => response.json())
        .then(data => setRetrievedKanyeQuote(data.quote))
        .catch((error) => console.log(error));
    }

    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>Kanye West Quote Generator</p>
            </header>
            <div className='QuoteForm'>
                <input 
                    type='text' 
                    placeholder='Enter a Kanye quote' 
                    onChange={(e) => setKanyeQuote(e.target.value)} 
                />
                <button onClick={handleSendQuote}>Send to Kanye</button>
            </div>
            <hr />
            <div className='QuoteRetrieve'>
                <p>{retrievedKanyeQuote}</p>
                <button onClick={handleGetQuote}>Get Kanye Quote</button>
            </div>
        </div>
    );
}

export default App;
