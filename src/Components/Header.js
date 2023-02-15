import React from "react";
import {Link} from "react-router-dom";

const Header =({token}) =>{
    return<header>
        <nav>
            <ul>
           {token ?<Link onClick={ev}>Logout</Link> : <Link to = './signIn' className="Links">Login/Register</Link>}
            <Link to = '/routines' className="Links">Routines</Link>
            <Link to = '/activities' className="Links">Activities</Link>
            </ul>
        </nav>
      </header>
}

export default Header;