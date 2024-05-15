import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

const BookList = () => {
    const { books } = useContext(BookContext)

    // so for return, we can do if else statement, where if no books, we output something else
    return books.length ? ( 
        <div className="book-list">
            <ul>
                {/* 
                    so instead of showing all the value here, we can call BookDetail component to deal with this
                    ,hence for each book, we call that 
                */}
                { books.map(book => {
                    // need to return as well
                    return ( <BookDetails book={book} key={book.id}/> );
                })}
            </ul>
        </div>
     ) : ( 
        <div className="empty">No books to read. Hello free time ;)</div>
     );
}
 
export default BookList;
