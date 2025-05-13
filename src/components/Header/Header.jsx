import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
           
            <nav>
                <span>My Website</span><br></br>
                <Link to="/">Home</Link>
                 <Link to="/about" >About</Link>
                 <NavLink to="/posts">Posts</NavLink>
                 {/* <Link to= "/posts">Posts</Link> */}
                 <Link to="/contact">Contact</Link>
                 {/* <Link to="/users">Users</Link> */}
                 <NavLink to="/users">Users</NavLink>
            </nav>
        </div>
    );
};

export default Header;