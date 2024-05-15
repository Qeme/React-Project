// we will take all the functions from the BookContext.js to be handled here

// replace uuid library from BookContext to here
import { v1 as uuid } from 'uuid'

// export the function reducer here
export const BookReducer = ( state, action ) => {
    switch(action.type){
        case 'ADD_BOOK':
            return [...state,{
                title: action.book.title,
                author: action.book.author,
                id: uuid()
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id !== action.id)
        default:
            return state
    }
        
}