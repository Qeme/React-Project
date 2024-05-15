// only import createContext to create the context and useState to manipulate the state value
// to use localStorage, we need to apply useEffect
import React, { createContext, useReducer, useEffect } from 'react';
import { BookReducer } from '../reducers/BookReducer';

// apply createContext
export const BookContext = createContext();

// Now the provider will get the props parameter
const BookContextProvider = (props) => {
    // include useState here [] the value that u will manipulate, [] is the default value 
    // change the useState to useReducer where it took 2 arguments, 1 function and 1 initial value for state
    // now add the third params : get the data from the localStorage, key is 'books'
    // then return the localData if exist, change the Json format to String, if not exist, make it empty []... this return value will replace the books state
    const [ books, dispatch ] = useReducer(BookReducer, [], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [] ;
    })

    // first parameter is the cobalt funtion, second is the array of the books...so any changes to books array, this useEffect will be executed
    // however, when u refresh it, the data gone because the useReducer with 2 parameters are not making the data initialize with null array
    // to tackle this problem, we need to put additional params ... which is a function
    useEffect(() => {
        // apply the syntax to set the item to localStorage
        // so whenever new data is added or deleted, it will setItem with the current state
        localStorage.setItem('books', JSON.stringify(books))
    },[books])

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