import React, {useState} from "react";
import { register } from '../api';

const LoginRegister =(props) =>{
    const {user, setUser, token, setToken} = props;

    const [error, setError] = useState("");
    const [registerName, setRegisterName] = useState("");
    const [registerPassword, setRegisterPassword] =useState("");


    const submit = async(ev) =>
    {
        ev.preventDefault();
        await register(registerName, registerPassword,setError);
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
            <form onSubmit={submit}>
                <input placeholder="Username" onChange={ev => setRegisterName(ev.target.value)}></input>
                <input placeholder="Password" onChange={ev => setRegisterPassword(ev.target.value)}></input>
                <button>Register</button>
            </form>
        </div>
        <p className="error">{error}</p>
    </div>
}

export default LoginRegister