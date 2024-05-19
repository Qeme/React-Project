// import Link from next framework to use similar like a anchor
import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
        <h1>Dojo Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}

