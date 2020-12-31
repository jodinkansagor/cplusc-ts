import React from 'react'
import useAuth from '../../hooks/useAuth';

const Login = () => {
  const {email, setEmail, password, setPassword, handleSubmit} = useAuth("login")

  return (
    <form onSubmit={handleSubmit}>
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
      <button>Login</button>
    </form>
  );
}

export default Login