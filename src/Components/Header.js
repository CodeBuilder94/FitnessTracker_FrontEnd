import React from "react";
import {Link} from "react-router-dom";

const Header =(props) =>{
    return<header>
        <nav>
            <ul>
            <li className="Links">Login/Register</li>
            <Link to = '/routines' className="Links">Routines</Link>
            <li className="Links">Activities</li>
            </ul>
        </nav>
      </header>
}

export default Header;