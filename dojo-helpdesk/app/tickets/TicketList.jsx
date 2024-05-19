// create a function to fetch the data 
async function getTickets(){
    const response = await fetch("http://localhost:4000/tickets",{
        next: {
            revalidate: 0 // use 0 to opt out of using cache -> instance
        }
    })

    return response.json()
}

export default async function TicketList() {
  const tickets = await getTickets()

  return (
    <>
    {/* show the tickets details here 
        Mistake: 
            1. For using map, after => dont use {} instead use ()
            2. For using the variable inside className string, dont use '' but use ``
    */}
    {tickets.map((ticket)=>(
        <div key={ticket.id} className="card my-5">
            <h3>{ticket.title}</h3>
            {/* only preview 200 words instead of all */}
            <p>{ticket.body.slice(0, 200)}...</p>
            {/* this part will show the priorities label for each ticket */}
            <div className={`pill ${ticket.priority}`}>
                {ticket.priority} priority
            </div>
        </div>
    ))}

    {/* if no ticket presented we need to notify user instead of blank page */}
    {tickets.length === 0 && (
        <p className="text-center">There are no open tickets, yay!</p>
    )}
    </>
  )
}
