import { Suspense } from "react";
import TicketList from "./TicketList";
import Loading from "../loading";

export default function Tickets() {
  return (
    <main>
        <nav>
            <div>
                <h2>Tickets</h2>
                <p><small>Currently open tickets</small></p>
            </div> 
        </nav>

    {/* Use Suspense component to cover the TicketList components only while the nav still showing as it already rendered */}
    <Suspense fallback={<Loading/>}>
      {/* make sure all the components must be inside the main */}
      <TicketList />
    </Suspense>

    </main>
  )
}
