import React, { useState, ChangeEvent, FormEvent } from "react";

// Define the Login component
const Login = () => {
  // Define state variables for email and password using useState hook
  const [email, setEmail] = useState(""); // Initialize email state with an empty string
  const [password, setPassword] = useState(""); // Initialize password state with an empty string

  // Define function to handle changes in email field
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value); // Update email state with the new value entered in the email field

  // Define function to handle changes in password field
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value); // Update password state with the new value entered in the password field

  // Define function to handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Add login logic here (this is where you would handle form submission, authentication, etc.)
  };

  // Render the Login component JSX
  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        {/* Email input field */}
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} /> {/* Input field for email with value bound to email state and onChange event handler */}
        </div>
        {/* Password input field */}
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} /> {/* Input field for password with value bound to password state and onChange event handler */}
        </div>
        {/* Submit button */}
        <button type="submit">Login</button> {/* Submit button for form submission */}
      </form>
    </div>
  );
};

// Export the Login component
export default Login;
