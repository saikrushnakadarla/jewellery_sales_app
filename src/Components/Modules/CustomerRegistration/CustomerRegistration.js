import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputField from "../../Pages/TableLayout/InputField";
import "./CustomerRegistration.css";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function CustomerRegistration() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    dob: "",
    gender: "",
    designation: "",
    anniversary: "",
    country: "",
    state: "",
    city: "",
    password: "",
    confirmPassword: "",
    company_name: "",
    pincode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <div className="customerregistration-main-container">
      <div className="customerregistration-form-container">
        <h2>Customer Registration</h2>
        <form className="customerregistration-form" onSubmit={handleSubmit}>
          {/* Full Name */}
          <InputField
            label="Full Name"
            placeholder="Enter full name"
            name="full_name"
            value={formData.full_name}
            onChange={handleChange}
            required
          />

          {/* Email */}
          <InputField
            label="Email Id"
            placeholder="Enter your email id"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Date of Birth */}
          <InputField
            label="Date of Birth"
            placeholder="Select birthdate"
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />

          {/* Gender */}
          <div className="customerregistration-gender-field">
            <label className="input-label">Gender</label>
            <div className="customerregistration-gender-options">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  required
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
          </div>

          {/* Designation */}
          <InputField
            label="Designation"
            type="select"
            placeholder="Select Designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
            options={[
              { value: "Director", label: "Director" },
              { value: "Managing Director", label: "Managing Director" },
              { value: "CEO", label: "CEO" },
              { value: "General Manager", label: "General Manager" },
              { value: "Proprietor", label: "Proprietor" },
              { value: "Partner", label: "Partner" },
              { value: "CFO", label: "CFO" },
              { value: "Purchase Manager", label: "Purchase Manager" },
              { value: "Purchase Head", label: "Purchase Head" },
              { value: "Salesman", label: "Salesman" },
              { value: "Other", label: "Other" },
            ]}
          />

          {/* Anniversary */}
          <InputField
            label="Date of Anniversary"
            type="date"
            name="anniversary"
            value={formData.anniversary}
            onChange={handleChange}
          />

          {/* Country */}
          <div className="customerregistration-country-container">
            <InputField
              label="Country"
              type="select"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              options={[
                { value: "India", label: "India" },
                { value: "Albania", label: "Albania" },
                { value: "Algeria", label: "Algeria" },
                { value: "American Samoa", label: "American Samoa" },
                { value: "Andorra", label: "Andorra" },
              ]}
            />
          </div>

          {/* State */}
          <InputField
            label="State"
            placeholder="Select state"
            type="select"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            options={[
              { value: "Telangana", label: "Telangana" },
              { value: "Andhra Pradesh", label: "Andhra Pradesh" },
            ]}
          />

          {/* City */}
          <InputField
            label="City"
            type="select"
            placeholder="Select city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            options={[
              { value: "Rajanna Sircilla", label: "Rajanna Sircilla" },
              { value: "Karimnagar", label: "Karimnagar" },
            ]}
          />

          {/* Password */}
          <div className="customerregistration-password-container">
            <InputField
              label="Password"
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <span
              className="customerregistration-eye-icon"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Confirm Password */}
          <div className="customerregistration-password-container">
            <InputField
              label="Confirm Password"
              placeholder="Enter your confirm password"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
            <span
              className="customerregistration-eye-icon"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* Company Name */}
          <InputField
            label="Company Name"
            name="company_name"
            placeholder="Enter Company Name"
            value={formData.company_name}
            onChange={handleChange}
            required
          />

          {/* Pincode */}
          <InputField
            label="Pincode"
            placeholder="Enter Pincode"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            required
          />

          {/* Buttons */}
          <div className="customerregistration-button-container">
            <button
              type="button"
              className="customerregistration-back-btn"
              onClick={handleBack}
            >
              Close
            </button>
            <button type="submit" className="customerregistration-submit-btn">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CustomerRegistration;