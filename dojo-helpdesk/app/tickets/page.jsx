import TicketList from "./TicketList";

export default function Tickets() {
  return (
    <main>
        <nav>
            <div>
                <h2>Tickets</h2>
                <p><small>Currently open tickets</small></p>
            </div> 
        </nav>
    
    {/* make sure all the components must be inside the main */}
    <TicketList />
    </main>
  )
}
