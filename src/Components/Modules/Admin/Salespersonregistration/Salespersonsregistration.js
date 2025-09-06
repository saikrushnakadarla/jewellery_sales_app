import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from 'react-router-dom';
import InputField from "../../../Pages/TableLayout/InputField";
import "./SalespersonRegister.css";
import Navbar from "../../../Pages/Navbar/Navbar";

const SalespersonRegister = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    account_name: "",
    address1: "",
    address2: "",
    city: "",
    pincode: "",
    state: "",
    state_code: "",
    phone: "",
    mobile: "",
    email: "",
    tcs: false,
  });

  const handleClose = () => {
    navigate('/salespersontable');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  // Fixed options as objects
  const address2Options = [
    { label: "Hinduism", value: "Hinduism" },
    { label: "Islam", value: "Islam" },
    { label: "Christianity", value: "Christianity" },
    { label: "Sikhism", value: "Sikhism" },
    { label: "Others", value: "Others" },
  ];

  const stateOptions = [
    { label: "Andhra Pradesh", value: "Andhra Pradesh" },
    { label: "Maharashtra", value: "Maharashtra" },
  ];

  return (
    <>
      <Navbar />
      <div className="salesperson-container container ">
        <div className="salesperson-card card p-4 shadow-lg">
          <h2 className="salesperson-title mb-4 text-center">
            Sales Person Registration
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-4 col-sm-6 col-12">
                <InputField
                  label="Sales Person Name"
                  name="account_name"
                  value={formData.account_name}
                  onChange={handleChange}
                  required
                />
              </div>

                 <div className="col-md-4 col-sm-6 col-12">
                <InputField
                  label="Mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 col-sm-6 col-12">
                <InputField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 col-sm-6 col-12">
                <InputField
                  label="Address1"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="col-md-4 col-sm-6 col-12">
                <InputField
                  label="Address2"
                  name="address2"
                  type="select"
                  value={formData.address2}
                  onChange={handleChange}
                  options={address2Options} // ✅ fixed
                />
              </div>

              <div className="col-md-4 col-sm-6 col-12">
                <InputField
                  label="City"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 col-sm-6 col-12">
                <InputField
                  label="Pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 col-sm-6 col-12">
                <InputField
                  label="State"
                  name="state"
                  type="select"
                  value={formData.state}
                  onChange={handleChange}
                  options={stateOptions} // ✅ fixed
                />
              </div>

              <div className="col-md-4 col-sm-6 col-12">
                <InputField
                  label="State Code"
                  name="state_code"
                  type="number"
                  value={formData.state_code}
                  onChange={handleChange}
                />
              </div>

              {/* <div className="col-md-4 col-sm-6 col-12">
                <InputField
                  label="Phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div> */}
            </div>

            {/* TCS Checkbox and Buttons */}
            <div className="row mt-4 align-items-center">
              <div className="col-md-6">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="tcs"
                    name="tcs"
                    checked={formData.tcs}
                    onChange={handleChange}
                  />
                 
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-end gap-3">
                <button type="button" className="cus-back-btn" onClick={handleClose}>
                  Close
                </button>
                <button type="submit" className="cus-submit-btn">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SalespersonRegister;
