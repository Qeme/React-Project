// this code to include 404 page for any unwanted id ticket
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
        <h2 className="text-3xl">We hit a brick</h2>
        <p>We could not find the ticket that you are looking for</p>
        <p>Go back to the <Link href="/">Tickets</Link></p>
    </main>
  )
}
