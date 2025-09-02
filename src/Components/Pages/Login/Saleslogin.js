import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Saleslogin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const SalesLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const staticEmail = 'admin@gmail.com';
  const staticPassword = 'admin@123';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === staticEmail && password === staticPassword) {
      alert('Login successful!');
      console.log('Logged in:', { email, password, rememberMe });
    } else {
      alert('Invalid email or password!');
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="saleslogin-container container-fluid">
      <div className="row justify-content-center align-items-center h-100 saleslogin-row">
        <div className="col-11 col-md-6 col-lg-4 saleslogin-col">
          <div className="card saleslogin-card shadow-lg border-0 rounded-4">
            <div className="card-body saleslogin-card-body">
              <div className="text-center mb-4 saleslogin-welcome-container">
                <h2 className="fw-bold mb-3 saleslogin-welcome-text">Welcome</h2>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label fw-medium saleslogin-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control saleslogin-input"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-3 saleslogin-password-container">
                  <label htmlFor="password" className="form-label fw-medium saleslogin-label">
                    Password
                  </label>
                  <div className="input-group saleslogin-input-group">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control saleslogin-password-input"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="input-group-text saleslogin-eye-toggle"
                      onClick={togglePasswordVisibility}
                    >
                      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                    </button>
                  </div>
                </div>

                <div className="mb-4 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input saleslogin-checkbox"
                    id="rememberMe"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <label className="form-check-label ms-2 saleslogin-remember" htmlFor="rememberMe">
                    Remember Me
                  </label>
                </div>

                <button type="submit" className="btn w-100 fw-bold saleslogin-btn">
                  Login
                </button>

                <div className="text-center mt-3">
                  <p className="saleslogin-register-text">
                    Don't have an account?{' '}
                    <a href="/salepersonregister" className="saleslogin-register-link">
                      Register Here
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesLogin;
