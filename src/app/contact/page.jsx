"use client";
import { useState } from "react";
import { BRAND_ADDRESS, BRAND_COLOR, BRAND_NAME } from "../constants";

export default function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.trim().length < 5) {
      newErrors.name = "Name must be at least 5 characters.";
    }

    // Phone validation (Pakistani format)
    const phoneRegex = /^(?:\+92|0)?3\d{9}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone.replace(/\s+/g, ""))) {
      newErrors.phone =
        "Please enter a valid Pakistani phone number (e.g., +92 300 1234567).";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    return newErrors;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const formErrors = validateForm();

  //   if (Object.keys(formErrors).length > 0) {
  //     setErrors(formErrors);
  //     return;
  //   }

  //   setIsSubmitting(true);

  //   // Simulate API call (replace with actual fetch later)
  //   try {
  //     await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate network delay
  //     console.log("Form Data:", formData);
  //     setSubmitSuccess(true);
  //     setFormData({ name: "", phone: "", message: "" });
  //   } catch (err) {
  //     alert("Something went wrong. Please try again.");
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappUrl = `https://wa.me/9421616978?text=Hello, my name is ${formData.name}. My message is ${formData.message}. Contact me at ${formData.phone}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    // <form onSubmit={handleSubmit} className="flex flex-col w-1/2 mx-auto mt-10 gap-4">
    //   <input type="text" placeholder="Name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="border p-2 rounded"/>
    //   <input type="text" placeholder="Phone" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="border p-2 rounded"/>
    //   <textarea placeholder="Message" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="border p-2 rounded"/>
    //   <button type="submit" className="bg-green-500 text-white p-2 rounded">Send on WhatsApp</button>
    // </form>
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      {/* Left Side - Contact Info */}
      <div
        className={`md:w-1/2 bg-gradient-to-br from-${BRAND_COLOR}-500 to-${BRAND_COLOR}-600 text-white p-10 md:p-16 flex flex-col justify-center`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
        <p className="text-lg mb-8 leading-relaxed">
          Have a dream space in mind? Let’s bring your vision to life. Reach out
          to {BRAND_NAME} — where architecture meets elegance.
        </p>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className={`text-${BRAND_COLOR}-100`}>+92 300 1234567</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className={`text-${BRAND_COLOR}-100`}>hello@{BRAND_NAME}.com</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">Location</h3>
            <p className={`text-${BRAND_COLOR}-100`}>{BRAND_ADDRESS}</p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm opacity-90">
            We respond within 24 hours. Let’s design your future.
          </p>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="md:w-1/2 p-8 md:p-16 flex items-center bg-white">
        <div className="w-full max-w-lg mx-auto">
          {submitSuccess ? (
            <div className="text-center p-6 bg-green-50 border border-green-200 rounded-lg">
              <svg
                className="w-12 h-12 text-green-500 mx-auto mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
              <h3 className="text-xl font-semibold text-gray-800">
                Message Sent!
              </h3>
              <p className="text-gray-600 mt-2">
                Thank you for reaching out. We'll get back to you soon.
              </p>
              <button
                onClick={() => setSubmitSuccess(false)}
                className={`mt-4 text-${BRAND_COLOR}-500 hover:underline font-medium`}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 text-black">
              <h2 className="text-3xl font-bold text-gray-800">
                Send Us a Message
              </h2>

              {/* Name Input */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${BRAND_COLOR}-500 transition ${
                    errors.name
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-transparent"
                  }`}
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                )}
              </div>

              {/* Phone Input */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${BRAND_COLOR}-500 transition ${
                    errors.phone
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-transparent"
                  }`}
                  placeholder="+92 300 1234567"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
              </div>

              {/* Message Input */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-${BRAND_COLOR}-500 transition resize-none ${
                    errors.message
                      ? "border-red-500 focus:ring-red-500"
                      : "border-gray-300 focus:border-transparent"
                  }`}
                  placeholder="Tell us about your project, ideas, or needs..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-${BRAND_COLOR}-500 hover:bg-${BRAND_COLOR}-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-${BRAND_COLOR}-500 focus:ring-offset-2 flex items-center justify-center ${
                  isSubmitting ? "opacity-80 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
