import React, { useState } from "react";
import contactimg from "../assets/contact.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("https://healingheavenbyarha.onrender.com/api/contact", formData);
      toast.success(response.data.message || "Message sent!");
      setFormData({ email: "", name: "", phone: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12" id="contact">
      <ToastContainer position="top-right" autoClose={3000} />
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Tell Us How You Really Feel, <br />
        <span className="text-gray-700">For free...!</span>
      </h2>

      <div className="mt-8 bg-white shadow-lg rounded-2xl p-6 md:p-10 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2">
          <h3 className="text-xl font-bold text-[#f178f3] text-center mb-4">
            Get in touch
          </h3>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium text-gray-700">E-mail</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-[#f178f3]"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-[#f178f3]"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Phone number</label>
              <input
                type="tel"
                name="phone"
                placeholder="Enter your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-[#f178f3]"
                required
              />
            </div>
            <div>
              <label className="block font-medium text-gray-700">
                Tell us more about you
              </label>
              <textarea
                name="message"
                placeholder="optional"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-3 rounded-md focus:outline-[#f178f3] text-gray-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#f178f3] text-white py-3 rounded-md font-semibold hover:bg-[#f467f6] transition flex items-center justify-center"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
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
                  Sending...
                </>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={contactimg}
            alt="Customer Support"
            className="w-full max-w-sm"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
