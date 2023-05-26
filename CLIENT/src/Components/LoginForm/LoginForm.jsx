import React, { useState } from 'react';

function LoginForm() {
  const [alias, setAlias] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validaciones y enviar los datos del formulario
    // a través de una API 
    console.log('Alias:', alias);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);

    if (password !== confirmPassword) {
        setError('Las contraseñas no coinciden');
        return;
      }

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    setAlias('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  return (
    <form className='formLogin' onSubmit={handleSubmit}>
      <h2>Iniciar sesión</h2>
      {error && <p>{error}</p>}
      <div>
        <label htmlFor="alias">Alias:</label>
        <input
          type="text"
          id="alias"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="confirmPassword">Repetir Contraseña:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
}

export default LoginForm;