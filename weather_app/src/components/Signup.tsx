import React, { useState, ChangeEvent, FormEvent } from "react";

// Define the Signup component
const Signup = () => {
  // Define state variable for form data using useState hook
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  // Define function to handle changes in input fields
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Extract name and value from the input element
    const { name, value } = e.target;
    // Update the form data state with the new value
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Define function to handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Add signup logic here (this is where you would handle form submission, validation, etc.)
  };

  // Render the Signup component TSX
  return (
    <div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        {/* Input field for first name */}
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        {/* Input field for last name */}
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        {/* Input field for email */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        {/* Input field for password */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        {/* Submit button */}
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

// Export the Signup component
export default Signup;
