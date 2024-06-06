// import Link to do link components
import { Link } from 'react-router-dom'

// create a Navbar function
const Navbar = () =>{
    return (
        <header>
            <div className="container">
            {/* now create a link to the Home */}
            <Link to='/'>
                <h1>Workout Buddy</h1>
            </Link>
            <nav>
                <div>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">Signup</Link>
                </div>
            </nav>
            </div>
        </header>
    )
}

// export Navbar
export default Navbar