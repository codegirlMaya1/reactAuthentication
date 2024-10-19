import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToken } from './TokenManager';

const ProtectedLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    if (!username || !email || !password) {
      setError('Username, Email, and Password are required.');
      return;
    }

    // Save the credentials for auto-fill
    saveToken(`${username}:${password}`);
    navigate('/login');
  };

  return (
    <div>
      <h1>Protected Login</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button onClick={handleLoginRedirect}>Login</button>
      </form>
    </div>
  );
};

export default ProtectedLogin;
