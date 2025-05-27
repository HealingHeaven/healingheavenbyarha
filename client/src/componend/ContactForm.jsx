import React, { useState } from "react";
import contactimg from "../assets/contact.png";
import axios from "axios";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      console.log(formData);
      const response = await axios.post("http://localhost:5000/api/contact", formData);
      setResponseMessage(response.data.message);
      setFormData({ email: "", name: "", phone: "", message: "" });
    } catch (error) {
      setResponseMessage("Error sending message. Please try again.");
    }

    setLoading(false);
  };

  return (
    <section className="max-w-5xl mx-auto px-6 py-12">
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
              className="w-full bg-[#f178f3] text-white py-3 rounded-md font-semibold hover:bg-[#f467f6] transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Submit"}
            </button>
          </form>

          {responseMessage && (
            <p className="text-center mt-4 text-gray-700">{responseMessage}</p>
          )}
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
