import React from 'react';
import InputField from '../../Pages/TableLayout/InputField';
import './CustomerRegistration.css';
import Navbar from '../../Pages/Navbar/Navbar';

function CustomerRegistration() {
  // Static form data (no state management)
  const formData = {
    account_name: '',
    print_name: '',
    account_group: 'CUSTOMERS',
    address1: '',
    address2: '',
    city: '',
    pincode: '',
    state: '',
    state_code: '',
    phone: '',
    religion: '',
    mobile: '',
    email: '',
    birthday: '',
    anniversary: '',
    bank_account_no: '',
    bank_name: '',
    ifsc_code: '',
    branch: '',
    gst_in: '',
    aadhar_card: '',
    pan_card: '',
  };

  const states = [
    { state_name: 'Andhra Pradesh', state_code: 'AP' },
    { state_name: 'Maharashtra', state_code: 'MH' },
    { state_name: 'Karnataka', state_code: 'KA' },
  ];

  // Dummy handlers
  const handleChange = () => {};
  const handleStateChange = () => {};
  const handleSubmit = (e) => e.preventDefault();
  const handleBack = () => {};
  const handleCheckboxChange = () => {};

  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="customer-master-container">
          <h2>Customer Registration</h2>
          <form className="customer-master-form" onSubmit={handleSubmit}>
            
            <InputField
              label="Trade / Customer Name"
              name="account_name"
              value={formData.account_name}
              onChange={handleChange}
              required
            />
            <InputField
              label="Print Name"
              name="print_name"
              value={formData.print_name}
              onChange={handleChange}
              required
            />
            <InputField
              label="Religion"
              name="religion"
              type="select"
              value={formData.religion}
              onChange={handleChange}
              options={[
                { value: "Hinduism", label: "Hinduism" },
                { value: "Islam", label: "Islam" },
                { value: "Christianity", label: "Christianity" },
                { value: "Sikhism", label: "Sikhism" },
                { value: "Others", label: "Others" },
              ]}
            />

            <InputField label="Address1" name="address1" value={formData.address1} onChange={handleChange} />
            <InputField label="Address2" name="address2" value={formData.address2} onChange={handleChange} />
            <InputField label="City" name="city" value={formData.city} onChange={handleChange} />

            <InputField label="Pincode" name="pincode" value={formData.pincode} onChange={handleChange} />
            <InputField
              label="State"
              name="state"
              type="select"
              value={formData.state}
              onChange={handleStateChange}
              options={states.map((state) => ({
                value: state.state_name,
                label: state.state_name,
              }))}
            />
            <InputField label="State Code" name="state_code" value={formData.state_code} onChange={handleChange} readOnly />

            <InputField label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
            <InputField label="Mobile" name="mobile" value={formData.mobile} onChange={handleChange} required />
            <InputField label="Email" name="email" value={formData.email} onChange={handleChange} />

            {/* <InputField label="Birthday" name="birthday" type="date" value={formData.birthday} onChange={handleChange} />
            <InputField label="Anniversary" name="anniversary" type="date" value={formData.anniversary} onChange={handleChange} /> */}
            <InputField label="Bank Account No" name="bank_account_no" value={formData.bank_account_no} onChange={handleChange} />

            <InputField label="Bank Name" name="bank_name" value={formData.bank_name} onChange={handleChange} />
            <InputField label="IFSC Code" name="ifsc_code" value={formData.ifsc_code} onChange={handleChange} />
            <InputField label="Branch" name="branch" value={formData.branch} onChange={handleChange} />

            <InputField label="GSTIN" name="gst_in" value={formData.gst_in} onChange={handleChange} />
            <InputField label="Aadhar Card" name="aadhar_card" value={formData.aadhar_card} onChange={handleChange} />
            <InputField label="PAN Card" name="pan_card" value={formData.pan_card} onChange={handleChange} />

            {/* Checkbox full width */}
            <div className="checkbox-wrapper">
              <label className="checkbox-label" htmlFor="tcs">
                <input
                  type="checkbox"
                  id="tcs"
                  name="tcsApplicable"
                  className="checkbox-input"
                  onChange={handleCheckboxChange}
                />
                TCS Applicable
              </label>
            </div>

            {/* Buttons full width row */}
            <div className="sup-button-container">
              <button type="button" className="cus-back-btn" onClick={handleBack}>
                Close
              </button>
              <button type="submit" className="cus-submit-btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default CustomerRegistration;
