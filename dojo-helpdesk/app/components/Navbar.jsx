// import Link from next framework to use similar like a anchor
import Image from "next/image";
import Link from "next/link";
// import Image here as logo
import Logo from "./dojo-logo.png";

export default function Navbar() {
  return (
    <nav>
        {/* call image Tag */}
        <Image 
            src={Logo}
            alt="Dojo Helpdesk Logo"
            width={70}
            quality={100}
            placeholder="blur"
        />
        <h1>Dojo Helpdesk</h1>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
    </nav>
  )
}

