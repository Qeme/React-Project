import React , { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBook = () => {
    const { AddBook } = useContext(BookContext);
    const [ title, setTitle ] = useState('')
    const [ author, setAuthor ] = useState('')

    // create a handleSubmit funct to make sure it can submit the value without prob
    const handleSubmit = (e) => {
        // prevent from auto submit
        e.preventDefault()

        // call the AddBook function
        AddBook(title,author)

        // reset back the title and author value to empty string
        setTitle('')
        setAuthor('')
    }

    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value)}} required />
            <input type="text" placeholder='Author' value={author} onChange={(e) => { setAuthor(e.target.value)}} required />
            <input type="submit" value="Add Book"/>
        </form>
     );
}
 
export default NewBook;
