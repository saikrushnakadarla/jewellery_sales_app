import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import InputField from "../TableLayout/InputField";
import logo from "../../Pages/images/JIYAA JEWELS logo_page-0001.jpg";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const staticMobile = "9876543210";
  const staticPassword = "test@123";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (mobile === staticMobile && password === staticPassword) {
      Swal.fire({ icon: "success", title: "Login Successful!" }).then(() =>
        navigate("/dashboard")
      );
    } else {
      Swal.fire({ icon: "error", title: "Invalid mobile or password!" });
    }
  };

  return (
    <div className="saleslogin-container container-fluid">
      <div className="row vh-100 d-flex align-items-center justify-content-center">
        {/* Left Logo */}
        <div className="col-12 col-md-6 d-flex justify-content-center align-items-center saleslogin-left">
          <img src={logo} alt="Logo" className="saleslogin-logo" />
        </div>

        {/* Right Login Form */}
        <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-center saleslogin-right">
          <div className="card saleslogin-card shadow-lg border-0 rounded-4">
            <div className="card-body saleslogin-card-body">
              <h2 className="text-center mb-4">Welcome Back</h2>

              <form onSubmit={handleSubmit}>
                {/* Country Code + Mobile Number Row */}
                <div className="saleslogin-mobile-row mb-3">
                  <div className="saleslogin-countrycode-wrapper">
                    <InputField
                      label="Country Code"
                      type="select"
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      options={[
                        { value: "+91", label: "+91" },
                        { value: "+355", label: "+355" },
                        { value: "+213", label: "+213" },
                        { value: "+1684", label: "+1684" },
                        { value: "+376", label: "+376" },
                        { value: "+244", label: "+244" },
                        { value: "+1264", label: "+1264" },
                      ]}
                      className="saleslogin-countrycode"
                    />
                  </div>

                  <div className="saleslogin-mobile-wrapper">
                    <InputField
                      label="Mobile Number"
                      type="tel"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      placeholder="Enter mobile"
                      className="saleslogin-input"
                    />
                  </div>
                </div>

                {/* Password */}
                <div className="saleslogin-password-container">
                  <InputField
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                    togglePassword={() => setShowPassword(!showPassword)}
                    className="saleslogin-input mb-3"
                  />
                  <span
                    className="saleslogin-eye-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {/* Eye icon handling assumed to be in InputField */}
                  </span>
                </div>

                {/* Buttons */}
                <div className="saleslogin-btn-wrapper">
                  <button type="submit" className="saleslogin-btn">
                    Login
                  </button>
                </div>
                <div className="saleslogin-guest-btn-wrapper mt-3">
                  <button
                    type="button"
                    className="saleslogin-guest-btn"
                    onClick={() => navigate("/")}
                  >
                    Guest
                  </button>
                </div>

                {/* Forgot Password */}
                <div className="text-center mt-3">
                  <a href="/forgot-password" className="saleslogin-forgot">
                    Forgot Password?
                  </a>
                </div>

                {/* Footer */}
                <div className="saleslogin-footer mt-4">
                  <a href="/terms" className="saleslogin-footer-link">
                    Terms & Conditions
                  </a>
                  <a href="/privacy" className="saleslogin-footer-link">
                    Privacy Policy
                  </a>
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