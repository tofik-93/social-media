import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext'; // Changed to named import

const Navbar = () => {
  const { user, logout } = useContext(AuthContext); // Now using the context directly

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg font-bold">SocialApp</Link>
        <div>
          {user ? (
            <button onClick={logout} className="text-white">Logout</button>
          ) : (
            <>
              <Link to="/login" className="text-white mr-4">Login</Link>
              <Link to="/signup" className="text-white">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;