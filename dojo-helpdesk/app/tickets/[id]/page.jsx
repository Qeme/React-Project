import { notFound } from "next/navigation"

// setup dynamicParams to true -> assume every page is already rendered... including non existing id
export const dynamicParams = true

// call the function generateStaticParams() to help in generate static page
export async function generateStaticParams(){
    const res = await fetch("http://localhost:4000/tickets")

    const tickets = await res.json()

    // we return the page for each individua id of tickets
    return tickets.map((ticket) => ({
        id: ticket.id
    }))
}

async function getTicket(id){
    const response = await fetch("http://localhost:4000/tickets/" + id,{
        next: {
            revalidate: 60
        }
    })

    // if no response -> id false
    if(!response.ok){
        notFound()
    }

    return response.json()
}

// we take the id as argument object -> to access it use params.id
export default async function page({params}) {
    const ticket = await getTicket(params.id)

  return (
    <main>
        <nav>
            <h2>Ticket Details</h2>
        </nav>
        <div className="card">
            <h3>{ticket.title}</h3>
            <small>Created by: {ticket.user_email}</small>
            <p>{ticket.body}</p>
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>

    </main>
  )
}
