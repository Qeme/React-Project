// import Link to do link components
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

// create a Navbar function
const Navbar = () => {
  // call for the logout component
  const { logout } = useLogout();

  // create a function to call for the logout function from useLogout custom hook
  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="container">
        {/* now create a link to the Home */}
        <Link to="/">
          <h1>Workout Buddy</h1>
        </Link>
        <nav>
          <div>
            <button onClick={handleClick}>Logout</button>
          </div>
          <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

// export Navbar
export default Navbar;
