import React, { useState } from "react";
import './RegisterPage.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    country: "",
    businessEmail: "",
    businessPhoneNumber: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postalCode: "",
    vatNumber: "",
    registrationNumber: "",
    businessLogo: null,
    primaryFirstName: "",
    primaryLastName: "",
    primaryEmail: "",
    primaryPhoneNumber: "",
    nationality: "",
    secondaryContactName: "",
    secondaryContactEmail: "",
    secondaryContactPhoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2>Create a Business</h2>

        <div className="form-section">
          <h3>Business Information</h3>
          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
          
          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="businessEmail"
            placeholder="Business Email"
            value={formData.businessEmail}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="businessPhoneNumber"
            placeholder="Business Phone Number"
            value={formData.businessPhoneNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address1"
            placeholder="Address Line 1"
            value={formData.address1}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="address2"
            placeholder="Address Line 2"
            value={formData.address2}
            onChange={handleChange}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="province"
            placeholder="province"
            value={formData.province}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="postalCode"
            placeholder="Postal Code"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="vatNumber"
            placeholder="VAT Number"
            value={formData.vatNumber}
            onChange={handleChange}
          />
          <input
            type="text"
            name="registrationNumber"
            placeholder="Registration Number"
            value={formData.registrationNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-section">
          <h3>Primary Contact Information</h3>
          <input
            type="text"
            name="primaryFirstName"
            placeholder="First Name"
            value={formData.primaryFirstName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="primaryLastName"
            placeholder="Last Name"
            value={formData.primaryLastName}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="primaryEmail"
            placeholder="Primary Contact Email"
            value={formData.primaryEmail}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="primaryPhoneNumber"
            placeholder="Primary Contact Phone Number"
            value={formData.primaryPhoneNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            value={formData.nationality}
            onChange={handleChange}
          />
        </div>

        <div className="form-section">
          <h3>Secondary Contact Information</h3>
          <input
            type="text"
            name="secondaryContactName"
            placeholder="Secondary Contact Name"
            value={formData.secondaryContactName}
            onChange={handleChange}
          />
          <input
            type="email"
            name="secondaryContactEmail"
            placeholder="Secondary Contact Email"
            value={formData.secondaryContactEmail}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="secondaryContactPhoneNumber"
            placeholder="Secondary Contact Phone Number"
            value={formData.secondaryContactPhoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="form-section">
          <h3>Authentication Information</h3>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Register Account</button>
      </form>
    </div>
  );
};

export default RegisterForm;
