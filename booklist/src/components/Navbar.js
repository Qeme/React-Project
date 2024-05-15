// in components, u just need to use the context... so useContext applied here + the BookContext also need to be defined... so easy to know which one to use
import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext'

const Navbar = () => {
    // just take books value, the addbook and remove book is not applicable here
    const { books } = useContext(BookContext);

    return ( 
        <div className="navbar">
            <h3>Qeme Reading List</h3>
            <p>Currently you have around { books.length } books to go through...</p>
        </div>
     );
}
 
export default Navbar;
