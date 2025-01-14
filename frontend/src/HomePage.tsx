import { useState, SyntheticEvent } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { BookContext } from "./types";
import "./HomePage.css";

const HomePage = () => {
  const { loginUser, authenticatedUser, logout }: BookContext = useOutletContext();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await loginUser({ username, password });
      setSuccess("Connexion réussie ! Redirection...");
      navigate("/");
    } catch (err) {
      setError("Échec de la connexion. Vérifiez vos identifiants.");
      console.error("LoginPage::error: ", err);
    }
  };

  const handleUsernameInputChange = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setUsername(input.value);
  };

  const handlePasswordChange = (e: SyntheticEvent) => {
    const input = e.target as HTMLInputElement;
    setPassword(input.value);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (authenticatedUser) {
    return (
      <div className="home-container">
        <div className="header">
          <h1>Welcome, {authenticatedUser.user?.username}!</h1>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
        </div>
        {/* Add your authenticated content here */}
      </div>
    );
  }

  return (
    <div className="login-container">
      <h1>Connexion Admin</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            value={username}
            type="text"
            id="username"
            onChange={handleUsernameInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            value={password}
            type="password"
            id="password"
            onChange={handlePasswordChange}
            required
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        {success && <div className="success-message">{success}</div>}
        <button type="submit">Se connecter</button>
      </form>
    </div>
  );
};

export default HomePage;