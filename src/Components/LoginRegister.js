import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import { register, login } from '../api';

const LoginRegister =(props) =>{
    const {setUser, setToken} = props;
    const navigate = useNavigate();

    const [lError, setLError] = useState("");
    const [rError, setRError] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerPassword, setRegisterPassword] =useState("");
    const [loginUser, setLoginUser] =useState("");
    const [loginPass, setLoginPass] = useState("");


    const goRegister = async(ev) =>
    {
        
        ev.preventDefault();
       const result = await register(registerName, registerPassword);
       setRError(result.message);
        setRegisterName("");
        setRegisterPassword("");
        
    }

    const goSignIn = async(ev) =>
    {
        ev.preventDefault();
       const result = await login(loginUser, loginPass)
        setLoginPass("");
        setLoginUser("");
        
        
        setUser(result.user);
        setToken(result.token);
        setLError(result.message);
        
        //move the user to their personal page.
        navigate('/MyRoutines');

    }

    return <div id="userAcess">
        <div id="login">
            <form onSubmit={goSignIn}>
                <input placeholder="Username" onChange={ev => setLoginUser(ev.target.value)}></input>
                <input placeholder="Password" type="password" onChange={ ev => setLoginPass(ev.target.value)}></input>
                <button>Login</button>
                <h6 className="error">{lError}</h6>
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