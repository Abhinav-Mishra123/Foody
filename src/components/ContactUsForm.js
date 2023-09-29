import React, { useState } from "react";

const ContactUsForm = () => {
    const initialFormData = {
        name: "",
        email: "",
        address: "",
        query: ""
      };
      const [formData, setFormData] = useState(initialFormData);

  
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const validateField = (name, value) => {
      switch (name) {
        case "name":
          if (!value.trim()) {
            return "Name is required";
          }
          break;
        case "email":
          if (!value.trim()) {
            return "Email is required";
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            return "Invalid email address";
          }
          break;
        case "address":
          if (!value.trim()) {
            return "Address is required";
          }
          break;
        case "query":
          if (!value.trim()) {
            return "Query is required";
          }
          break;
        default:
          break;
      }
      return "";
    };
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      const errorMessage = validateField(name, value);
  
      setErrors({
        ...errors,
        [name]: errorMessage
      });
  
      setFormData({
        ...formData,
        [name]: value
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Additional validation before submission can be added here
      const formErrors = {};
      Object.keys(formData).forEach((key) => {
        formErrors[key] = validateField(key, formData[key]);
      });
  
      if (Object.values(formErrors).every((error) => !error)) {
        // Form submission logic can go here
        setFormData(initialFormData);
        setIsSubmitted(true);
        
      } else {
        // Form has errors, update the errors state
        setErrors(formErrors);
      }
    };

  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6 offset-md-3">
      <h2 className="text-center mb-4">Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className={`form-control ${errors.name ? "is-invalid" : ""}`}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <div className="invalid-feedback">{errors.name}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className={`form-control ${errors.email ? "is-invalid" : ""}`}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className={`form-control ${errors.address ? "is-invalid" : ""}`}
            id="address"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
          />
          <div className="invalid-feedback">{errors.address}</div>
        </div>
        <div className="mb-3">
          <label htmlFor="query" className="form-label">
            Query
          </label>
          <textarea
            className={`form-control ${errors.query ? "is-invalid" : ""}`}
            id="query"
            name="query"
            value={formData.query}
            onChange={handleInputChange}
          />
          <div className="invalid-feedback">{errors.query}</div>
        </div>
        <div className="btn-fomr text-center">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        </div>
      </form>
      {isSubmitted && <p className="text-center text-success mt-3">Your form has been successfully submitted!</p>}
      </div>
        </div>
    </div>
  );
};

export default ContactUsForm;
