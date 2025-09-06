import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import logo from '../../Pages/images/JIYAA JEWELS logo_page-0001.jpg'; // <-- Replace with your logo path

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const staticEmail = 'admin@gmail.com';
  const staticPassword = 'admin@123';

  const handleSubmit = (e) => {
    e.preventDefault();
  if (email === staticEmail && password === staticPassword) {
  Swal.fire({
    icon: 'success',
    title: 'Login successful!',
    confirmButtonText: 'OK'
  }).then(() => {
    console.log('Logged in:', { email, password, rememberMe });
    navigate('/dashboard');
  });
}
 else {
      Swal.fire({
        icon: 'error',
        title: 'Invalid email or password!',
        confirmButtonText: 'Try Again'
      });
    }
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className="saleslogin-container container-fluid">
      <div className="row vh-100 d-flex align-items-center justify-content-center">

        {/* Left side - Logo */}
        <div className="col-md-6 d-flex justify-content-center align-items-center saleslogin-left">
          <img src={logo} alt="Company Logo" className="img-fluid saleslogin-logo" />
        </div>

        {/* Right side - Login Form */}
        <div className="col-md-6 d-flex justify-content-center align-items-center saleslogin-right">
          <div className="card saleslogin-card shadow-lg border-0 rounded-4">
            <div className="card-body saleslogin-card-body">
              <div className="text-center mb-4 saleslogin-welcome-container">
                <h2 className="fw-bold mb-3 saleslogin-welcome-text">Welcome Back</h2>
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
                    placeholder="Enter your email"
                  />
                </div>

                <div className="mb-3 saleslogin-password-container">
                  <label htmlFor="password" className="form-label fw-medium saleslogin-label">
                    Password
                  </label>
                  <div className="position-relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      className="form-control saleslogin-password-input pe-5"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      placeholder="Enter your password"
                    />
                    <button
                      type="button"
                      className="saleslogin-eye-toggle"
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
                    <a href="/customerregistration" className="saleslogin-register-link">
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

export default Login;
