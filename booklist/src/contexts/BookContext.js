// only import createContext to create the context and useState to manipulate the state value
import React, { createContext, useReducer } from 'react';
import { BookReducer } from '../reducers/BookReducer';

// apply createContext
export const BookContext = createContext();

// Now the provider will get the props parameter
const BookContextProvider = (props) => {
    // include useState here [] the value that u will manipulate, [] is the default value 
    // change the useState to useReducer where it took 2 arguments, 1 function and 1 initial value for state
    const [ books, dispatch ] = useReducer(BookReducer, [])

    return (
        // we pass the BookContext Provider with value of books, func addbook and func removebook
        // remove all the other functions to dispatch only
        <BookContext.Provider value={{books, dispatch }}>
            {/* we then pass the value to those children later */}
            { props.children }
        </BookContext.Provider>
    )
}

// we export BookContextProvider
export default BookContextProvider