import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // now call the useSignup hook and take those 3 components data
  const { signup, isLoading, error } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // it takes sometimes to finish the logic, so we put await
    await signup(email, password);
  };

  return (
    <form className="signup" onSubmit={handleSubmit}>
      <h3>Sign up</h3>

      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />

      {/* add disabled to the button, so if true, means the user cant spamming the Sign up button while the sign up process ongoing  */}
      <button disabled={isLoading}>Sign Up</button>
      {/* put error message downhere as if there are error, show div section with error message there */}
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
