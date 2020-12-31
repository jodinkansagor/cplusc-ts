import React from 'react'
import useAuth from '../../hooks/useAuth';

const Signup = () => {
  const { username, email, password, setUsername, setEmail, setPassword, handleSubmit} = useAuth("signup")

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:{" "}
        <input
          type="text"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </label>
      <label>
        Email:{" "}
        <input
          type="text"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </label>
      <label>
        Password:{" "}
        <input
          type="password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </label>
      <button>Sign Up</button>
    </form>
  );
}

export default Signup