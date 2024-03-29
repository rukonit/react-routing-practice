import React from 'react'
import { Route, useParams, Link, useRouteMatch } from 'react-router-dom'
import Comments from    '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
    { id: 'q1', author: 'Rukon', text: 'Learning React is fun' },
    {id: 'q2', author: 'Khan', text: 'Learning React Route is fun'

}]

function QuoteDetails(props) {

    const match = useRouteMatch()


    const params = useParams()

    const quote = DUMMY_QUOTES.find(quote => quote.id === params.quoteId)

    if (!quote) {
        return <p>No quote found</p>
    }

  return (
    <div>
        <HighlightedQuote text={quote.text} author={quote.author} />
        <Route path={`${match.path}`} exact>
        <div className='centered'>
            <Link className='btn--flat' to={`${match.url}/comments`}>Load Comments</Link>
        </div>
        </Route>
       <Route path={`${match.path}/comments`}>
           <Comments />
       </Route>
    
    </div>
    
  )
}

export default QuoteDetails