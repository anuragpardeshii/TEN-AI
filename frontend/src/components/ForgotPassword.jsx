import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

export default function ForgotPassword() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
    });

    const handleChange = () => {
    }

    const sendOtp = () => {
        const OTP = Math.floor(Math.random() * 9000 + 1000);
        navigate("/verify-otp")
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
            <form
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md w-full max-w-md"
            >
                <h2 className="text-2xl font-bold mb-6 text-center">
                    Forgot Password
                </h2>
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
                <button
                    onClick={sendOtp}
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                >
                    Get OTP
                </button>
            </form>
        </div>
    )
}
