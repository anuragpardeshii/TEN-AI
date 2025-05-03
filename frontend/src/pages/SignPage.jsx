import { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignPage = () => {
  const location = useLocation();
  const isSignUp =
    new URLSearchParams(location.search).get("mode") === "signup";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const url = isSignUp
        ? "http://localhost:5000/api/user/register"
        : "http://localhost:5000/api/user/login";

      const { data } = await axios.post(url, formData, {
        withCredentials: true
      });
      console.log("Success:", data);

      if (isSignUp) {
        toast.success("Sign Up successful! Please log in.");
        navigate("/sign-page?mode=signin");
      } else {
        localStorage.setItem("token", data.token);
        toast.success("Sign In successful! Welcome back.");
        navigate("/");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Something went wrong.");
      toast.error(err.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignUp ? "Sign Up" : "Sign In"}
        </h2>

        {isSignUp && (
          <div className="mb-4">
            <label className="block mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded"
            />
          </div>
        )}

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
        </div>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {isSignUp ? "Create Account" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default SignPage;
