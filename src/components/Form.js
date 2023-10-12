import "../styles/Form.scss"; 
import { useState } from "react";

export function Form () {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");


    return(
        <section>
            <h1 className="title">Login</h1>

            <form className="form">
                <input type="text" 
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <input type="password" 
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}/>
                <button>Sign in</button>
            </form>
        </section>
    )
    }