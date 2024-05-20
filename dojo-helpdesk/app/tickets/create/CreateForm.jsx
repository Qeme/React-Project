// to use the client side rendering
"use client"

// import useState and useRouter
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CreateForm() {
    // use the Router hook
    const router = useRouter()

    // isLoading state basically prevent user from spamming the submit button
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [priority, setPriority] = useState('low')
    const [isLoading, setIsLoading] = useState(false)

    // create a function to handle submission form
    const handleSubmit = async (e) => {
        // prevent from auto refresh
        e.preventDefault()
        // set the isLoading to true after submitting
        setIsLoading(true)

        // create a body object to store those properties
        const ticket = {
        title, body, priority, use_email: "qemeXuniten@gmail.com"
        }

        const response = await fetch('http://localhost:4000/tickets',{
            method: "POST",
            headers: { "Content-Type" : "application/json" },
            body: JSON.stringify(ticket)
        })

        // if the POST API works perfectly, redirect user to tickets page by pushing
        if(response.status === 201){
            // refresh the cache first
            router.push('/tickets')
        }
    }

  return (
    <form onSubmit={handleSubmit} className="w-1/2">
        <label>
            <span>Title:</span>
            <input 
                required
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title} />
        </label>
        <label>
            <span>Body:</span>
            <textarea 
                required
                onChange={(e) => setBody(e.target.value)}
                value={body} />
        </label>
        <label>
            <span>Priority:</span>
            <select 
                onChange={(e) => setPriority(e.target.value)}
                value={priority} >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
            </select>
        </label>

        {/* create a button where it will be disabled after submitting form */}
        <button 
            className="btn-primary"
            disabled={isLoading}
        >
            {/* isLoading is currently false, so it will execute the second option... if true, the top will be executed */}
            {isLoading && <span>Adding...</span>}
            {!isLoading && <span>Add Ticket</span>}
        
        </button>
    </form>
  )
}
