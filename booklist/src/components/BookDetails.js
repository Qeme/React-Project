import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

// then as we already notice the book={book}, this is considered as params, so pass it there ()
const BookDetails = ({ book }) => {
    // take the removeBook from the BookContext.js -> now change it to dispatch
    const { dispatch } = useContext(BookContext)
    return ( 
        /*
            1. onclick={RemoveBook(book.id)} calls the RemoveBook function immediately as the component renders, rather than when the onClick event occurs.
            2. {() => RemoveBook(book.id)} creates a new function that, when invoked (by clicking the <li> element), will call RemoveBook(book.id).

            Now chage the RemoveBook to dispatch where it take action as argument
        */ 
        <li onClick={ () => dispatch({type: 'REMOVE_BOOK', id: book.id}) }>
            <div className="title">{ book.title }</div>
            <div className="author">{ book.author }</div>
        </li> 
     );
}
 
export default BookDetails;
