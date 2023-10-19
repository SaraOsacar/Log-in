import "../styles/Form.scss"; 
import { useState } from "react";

export function Form ({setUser}) {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault()

        if(name === "" || password === "") {
            setError(true)
            return
        }
        setError(false)
        setUser([name])
    }


    return (
      <section>
        <h1 className="title">Login</h1>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button">Sign in</button>
        </form>
        {error && <p className="errorMessage">All fields are required</p>}
      </section>
    );
    }