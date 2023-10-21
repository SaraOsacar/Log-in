import '../styles/Form.scss';
import React, { useState } from 'react';

export function Form({ setUser }) {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name === '' || password === '') {
      setError(true);
      return;
    }
    setError(false);
    setUser([name]);
  };

  return (
    <section className="container">
      <h1 className="title">Login</h1>

      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="input"
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
