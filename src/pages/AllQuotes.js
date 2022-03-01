import React from 'react'
import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Rukon', text: 'Learning React is fun' },
    {id: 'q2', author: 'Khan', text: 'Learning React Route is fun'

}]

function AllQuotes() {
    
  return (
    <div><QuoteList quotes={DUMMY_QUOTES}/></div>
  )
}

export default AllQuotes