import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const response = await axios.post("https://healingheavenbyarha.onrender.com/api/contact", formData);
      if (response.data.message) {
        toast.success("Subscribed to newsletter!");
        setFormData({ email: "", name: "", phone: "", message: "" });
      }
    } catch (error) {
      toast.error("Error sending message. Please try again.");
    }
    setLoading(false);
  };

  return (
    <footer className="bg-white border-t border-gray-300 py-10">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-md font-bold text-[#fa62fc]">ABOUT</h3>
            <ul className="mt-2 text-gray-600 space-y-2">
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Help/FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-bold text-[#fa62fc]">CONDITIONS</h3>
            <ul className="mt-2 text-gray-600 space-y-2">
              <li><a href="#">Anxiety</a></li>
              <li><a href="#">Depression</a></li>
              <li><a href="#">Work Stress</a></li>
              <li><a href="#">Women Health</a></li>
              <li><a href="#">Any Addiction</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-md font-bold text-[#fa62fc]">SERVICES</h3>
            <ul className="mt-2 text-gray-600 space-y-2">
              <li><a href="#">Adult Therapy</a></li>
              <li><a href="#">Teen Therapy</a></li>
              <li><a href="#">Couples Therapy</a></li>
              <li><a href="#">Individual Therapy</a></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-1">
            <h3 className="text-lg font-bold">Join our newsletter</h3>
            <p className="text-gray-600 text-sm mt-1">
              We’ll send you a nice letter once per week, No spam
            </p>
            <div className="flex mt-3 space-x-2">
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="border border-gray-400 px-4 py-2 rounded-md w-full"
                value={formData.email}
                onChange={handleChange}
              />
              <button
                className="bg-[#fa62fc] text-white px-4 py-2 rounded-md flex items-center justify-center"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-gray-500 text-xs">
          <p>
            HEALING HEAVEN does not deal with medical or psychological emergencies. We are not
            designed to offer support in crisis situations – including when an individual is
            experiencing thoughts of self-harm or suicide, or is showing symptoms of severe
            clinical disorders such as schizophrenia and other psychotic conditions. In these
            cases, in-person medical intervention is the most appropriate form of help.
          </p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row md:justify-between items-center text-gray-700">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-gray-700 text-xl font-bold w-20 h-20 overflow-hidden rounded-full">
              <img src={logo} alt="logo" width={300} />
            </Link>
            <span className="font-semibold">Healing Heaven</span>
          </div>

          <div className="flex space-x-4 mt-4 md:mt-0">
            {/* <a href="#" className="text-xl">i</a>
            <a href="#" className="text-xl">g</a>
            <a href="#" className="text-xl">x</a> */}
          </div>

          <p className="text-xs mt-4 md:mt-0">&copy;2025 Healing Heaven LLC. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
