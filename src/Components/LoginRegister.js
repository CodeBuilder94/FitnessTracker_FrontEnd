import React, {useState} from "react";
import { register } from '../api';

const LoginRegister =(props) =>{
    const {user, setUser, token, setToken} = props;

    const [lError, setLError] = useState("");
    const [rError, setRError] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerPassword, setRegisterPassword] =useState("");


    const goRegister = async(ev) =>
    {
        
        ev.preventDefault();
        await register(registerName, registerPassword,setRError,setRegisterName, setRegisterPassword);
        
        
        
    }

    return <div id="userAcess">
        <div id="login">
            <form>
                <input placeholder="Username"></input>
                <input placeholder="Password"></input>
                <button>Login</button>
            </form>
        </div>
        <div id="register">
            <form onSubmit={goRegister}>
                <input placeholder="Username" onChange={ev => setRegisterName(ev.target.value)}></input>
                <input placeholder="Password" type="password" onChange={ev => setRegisterPassword(ev.target.value)}></input>
                <button>Register</button>
                <h6 className="error">{rError}</h6>
            </form>
        </div>
        
    </div>
}

export default LoginRegister