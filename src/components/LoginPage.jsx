import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import cattleImg from '../assets/cattle.jpg';

function LoginPage () {
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[isChecked, setIsChecked] = useState(false);
  const[showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleCheckBoxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Checked:', isChecked);
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="image-section">
          <img src={cattleImg} alt="code" />
        </div>
        
        <div className="form-section">
          <h2>Welcome Back!</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input type="text"
                value={email}
                placeholder="Email address"
                onChange={handleEmailChange} required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder="Password"
                onChange={handlePasswordChange} required
              />
              <span className="toggle-password" onClick={handleTogglePassword}>{showPassword ? 'Hide' : 'Show'}</span>
            </div>
            <div className="checkbox-group">
              <input type="checkbox" checked={isChecked} onChange={handleCheckBoxChange} />
              <label>By continuing with the platform, you accept our <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.</label>
            </div>
            <button className="login-button">Login</button>
            <button className="create-account-button">Create an Account</button>
          </form>
          <p className="copyright">Lyme 2024. All rights reserved</p>  
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
