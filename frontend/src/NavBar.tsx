import { Link } from 'react-router-dom';
import "./NavBar.css";

const NavBar = () => (
    <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/books">Library</Link>
    </nav>
);

export default NavBar;
