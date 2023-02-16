import React from "react";
import {Link} from "react-router-dom";
import { logout } from "../api";

const Header =({token, setToken, setUser}) =>{
    return<header>
        <nav>
            <ul id="leftNav">
            <Link to = '/Home' className="Links">Home</Link>
            <Link to = '/routines' className="Links">Routines</Link>
            <Link to = '/activities' className="Links">Activities</Link>
            {token ?<Link onClick={ev =>logout(setToken, setUser)} to = "./signIn">Logout</Link> : <Link to = './signIn' className="Links">Login/Register</Link>}
            </ul>
            <ul id="rightNav" >

            </ul>
        </nav>
      </header>
}

export default Header;