import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveToken } from './TokenManager';

const ProtectedLogin: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    if (!username || !email || !password) {
      setError('All fields are required.');
      return;
    }

    // Save the credentials for auto-fill (in a real app, this should be encrypted and handled securely)
    saveToken(`${username}:${email}:${password}`);
    navigate('/login');
  };

  return (
    <div>
      <h1>Protected Login</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default ProtectedLogin;
