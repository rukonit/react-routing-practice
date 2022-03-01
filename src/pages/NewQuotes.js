import React from 'react'
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm'
function NewQuotes() {
    const history = useHistory()
    const handleNewQuote = (quoteData) => {
        console.log(quoteData);

        history.push('/quotes')
    }

  return (
    <div><QuoteForm onAddQuote={handleNewQuote} /> </div>
  )
}

export default NewQuotes