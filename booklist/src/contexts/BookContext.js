// only import createContext to create the context and useState to manipulate the state value
import React, { createContext, useState } from 'react';
import { v1 as uuid } from 'uuid'

// apply createContext
export const BookContext = createContext();

// Now the provider will get the props parameter
const BookContextProvider = (props) => {
    // include useState here [] the value that u will manipulate, [] is the default value 
    const [ books, setBooks ] = useState([
        {title: 'name of the wind', author: 'patrick rothfuss', id: 1},
        {title: 'the final empire', author: 'brandon sanderson', id: 2}
    ])

    // create a function to use the setBooks
    const AddBook = (title,author) => {
        // [] first is to take the previous value, then we set new data into books taken from the params
        setBooks([...books, {title: title, author: author, id: uuid() }])
    }

    // we add then we remove, hence create a function to removeBook as well, so we take the id as params
    const RemoveBook = (id) => {
        // use .filter to iterate all the books and only choose the one that you desire based on the id
        setBooks(books.filter(book => book.id !== id))
    }

    return (
        // we pass the BookContext Provider with value of books, func addbook and func removebook
        <BookContext.Provider value={{books, AddBook, RemoveBook}}>
            {/* we then pass the value to those children later */}
            { props.children }
        </BookContext.Provider>
    )
}

// we export BookContextProvider
export default BookContextProvider