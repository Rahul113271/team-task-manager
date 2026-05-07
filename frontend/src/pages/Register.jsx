import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "member",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "https://team-task-manager-igd6.onrender.com/api/auth/register",
        formData
      );

      alert("Registration Successful");

      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="container">
      <h1>Register</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          required
          onChange={(e) =>
            setFormData({ ...formData, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <select
          onChange={(e) =>
            setFormData({ ...formData, role: e.target.value })
          }
        >
          <option value="member">Member</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Register</button>
      </form>

      <p style={{ marginTop: "15px" }}>
        Already have account? <Link to="/">Login</Link>
      </p>
    </div>
  );
}

export default Register;