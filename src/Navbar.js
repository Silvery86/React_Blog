import { Link } from "react-router-dom";
import React from 'react'
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>My new Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Blog</Link>
                <Link to="/game">Memory Game</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;