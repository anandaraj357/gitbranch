// App.js
import React, { useState } from "react";

function Form() {
  // State to store form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });

  const [submittedData, setSubmittedData] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target; // Get input field name & value
    setFormData({ ...formData, [name]: value }); // Update state dynamically
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmittedData(formData); // Store submitted data
    setFormData({ name: "", email: "", course: "" }); // Clear form
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>📋 Student Registration Form</h1>
      
      <form onSubmit={handleSubmit} style={{ display: "inline-block", textAlign: "left" }}>
        <div style={{ marginBottom: "10px" }}>
          <label>Name: </label>
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Email: </label>
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label>Course: </label>
          <select 
            name="course" 
            value={formData.course} 
            onChange={handleChange}
            required
          >
            <option value="">--Select--</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Electronics">Electronics</option>
            <option value="Mechanical">Mechanical</option>
          </select>
        </div>

        <button type="submit">Register</button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "30px" }}>
          <h2>✅ Submitted Student Details</h2>
          <p><b>Name:</b> {submittedData.name}</p>
          <p><b>Email:</b> {submittedData.email}</p>
          <p><b>Course:</b> {submittedData.course}</p>
        </div>
      )}
    </div>
  );
}

export default Form;
