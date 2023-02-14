import React from "react";
import {Link} from "react-router-dom";

const Header =(props) =>{
    return<header>
        <nav>
            <ul>
            <Link to = './signIn' className="Links">Login/Register</Link>
            <Link to = '/routines' className="Links">Routines</Link>
            <Link to = '/activities' className="Links">Activities</Link>
            </ul>
        </nav>
      </header>
}

export default Header;