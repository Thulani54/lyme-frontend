import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegisterPage.css';

const RegisterPage = () => {
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
        <h2>Create Business</h2>
        <div className="form-section">
          <h3>Business Information</h3>
          
          <label>Business Name</label>
          <input type="text" name="businessName" value={formData.businessName}
            onChange={handleChange} required/>
          
          <label>Country</label>
          <input type="text" name="country" value={formData.country}
            onChange={handleChange} required/>

          <label>Business Email</label>
          <input type="email" name="businessEmail" value={formData.businessEmail}
            onChange={handleChange} required/>

          <label>Business Phone Number</label>
          <input type="tel" name="businessPhoneNumber" value={formData.businessPhoneNumber}
            onChange={handleChange} required/>

          <label>Address Line 1</label>
          <input type="text" name="address1" value={formData.address1}
            onChange={handleChange} required/>

          <label>Address Line 2</label>
          <input type="text" name="address2" value={formData.address2}
            onChange={handleChange}/>

          <label>City</label>
          <input type="text" name="city" value={formData.city}
            onChange={handleChange} required/>

          <label>Province</label>
          <input type="text" name="province" value={formData.province}
            onChange={handleChange} required/>

          <label>Postal Code</label>
          <input type="text" name="postalCode" value={formData.postalCode}
            onChange={handleChange} required/>

          <label>VAT Number</label>
          <input type="text" name="vatNumber" value={formData.vatNumber}
            onChange={handleChange}/>

          <label>Registration Number</label>
          <input type="text" name="registrationNumber" value={formData.registrationNumber}
            onChange={handleChange}/>
        </div>
    
        <div className="form-section">
          <h3>Primary Contact Information</h3>
          <label>First Name</label>
          <input type="text" name="primaryFirstName" value={formData.primaryFirstName}
            onChange={handleChange} required/>

          <label>Last Name</label>
          <input type="text" name="primaryLastName" value={formData.primaryLastName}
            onChange={handleChange} required/>


          <label>Primary Contact Email</label>
          <input type="email" name="primaryEmail" value={formData.primaryEmail}
            onChange={handleChange} required/>

          <label>Primary Contact Phone Number</label>
          <input type="tel" name="primaryPhoneNumber" value={formData.primaryPhoneNumber}
            onChange={handleChange} required/>

          <label>Nationality</label>
          <input type="text" name="nationality" value={formData.nationality}
            onChange={handleChange}/>
        </div>

        <div className="form-section">
          <h3>Secondary Contact Information</h3>

          <label>Secondary Contact Name</label>
          <input type="text" name="secondaryContactName" value={formData.secondaryContactName}
            onChange={handleChange}/>

          <label>Secondary Contact Email</label>
          <input type="email" name="secondaryContactEmail" value={formData.secondaryContactEmail}
            onChange={handleChange}/>


          <label>Secondary Contact Phone Number</label>
          <input type="tel" name="secondaryContactPhoneNumber" value={formData.secondaryContactPhoneNumber}
            onChange={handleChange}/>
        </div>

        <div className="form-section">
          <h3>Authentication Information</h3>

          <label>Password</label>
          <input type="password" name="password" value={formData.password}
            onChange={handleChange} required/>

          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" value={formData.confirmPassword}
            onChange={handleChange} required/>
        </div>

        <button type="submit">Register Account</button>
      </form>
      <p>Already have an account? <a href="/LoginPage">Login</a></p>
    </div>
  );
};

export default RegisterPage;
