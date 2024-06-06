import { BrowserRouter, Routes, Route } from 'react-router-dom'

// import the Pages & Components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Signup from './pages/Signup';
import Login from './pages/Login';

function App()  {
  return (
    <div className='App'>
      <BrowserRouter>
      {/* Now call the Navbar components inside BrowserRouter not outside it */}
      <Navbar />
      <div className="pages">
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
        </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}
export default App;
