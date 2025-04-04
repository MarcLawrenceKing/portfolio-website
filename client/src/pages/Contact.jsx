import { useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DynamicIcon } from "lucide-react/dynamic";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbxmLwHEG_Y8EA4PtsPOUqVlud2VGxPa6giVgJxa7aAJ18c7_9j3ZBkh3JWiFErD75AL/exec";
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    number: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    fname: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fname.trim()) newErrors.fname = "Name is required!";
    if (!formData.email.trim()) newErrors.email = "Email is required!";
    if (!formData.number.trim()) newErrors.number = "Phone number is required!";
    if (!formData.message.trim()) newErrors.message = "Message is required!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const data = new URLSearchParams();
    data.append("fname", formData.fname);
    data.append("email", formData.email);
    data.append("number", formData.number);
    data.append("message", formData.message);

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: data,
      });
      const result = await response.json();
      console.log(result);
      if (result.result === "success") {
        alert("Submitted successfully!");
        setFormData({ fname: "", email: "", number: "", message: "" });
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      alert("Failed to submit. Please try again.");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center py-30 bg-accent4 px-12 sm:px-28 ">
      <div className="flex flex-col bg-accent1 w-full items-center p-10 rounded-xl sm:w-110 md:w-155 lg:w-215 xl:w-260">
        <DynamicIcon
          name={"mail"}
          color="oklch(93.92% 0.0648 128.43)"
          size={48}
          className="p-2 rounded-lg bg-gradient-primary-to-secondary mb-2 "
        />
        <p className="text-center text-[1.75rem] font-bold sm:text-[1.938rem] md:text-[2.063rem] lg:text-[2.5rem]">
          Get in touch
        </p>
        <p className="text-center text-[1.25rem] text-accent2 mb-12">
          Let's work together!
        </p>

        <form
          method="POST"
          className="flex flex-col w-5/6 gap-4 lg:w-5/8 xl:w-1/2 "
          onSubmit={handleSubmit}
          noValidate
        >
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Full name"
            className={`border-2 p-2 rounded ${
              errors.fname ? "border-red-500" : "border-accent3"
            }  focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary `}
            value={formData.fname}
            onChange={handleChange}
          />
          {errors.fname && (
            <p className="text-red-500 text-sm mb-1 mt-[-10px] mb-[-2px]">
              {errors.fname}
            </p>
          )}

          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            className={`border-2 p-2 rounded ${
              errors.email ? "border-red-500" : "border-accent3"
            } focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mb-1 mt-[-10px]  mb-[-2px]">
              {errors.email}
            </p>
          )}
          <input
            type="tel"
            id="number"
            name="number"
            placeholder="Phone number"
            className={`border-2 p-2 rounded ${
              errors.number ? "border-red-500" : "border-accent3"
            } focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary`}
            value={formData.number}
            onChange={handleChange}
          />
          {errors.number && (
            <p className="text-red-500 text-sm mb-1 mt-[-10px]  mb-[-2px]">
              {errors.number}
            </p>
          )}

          <textarea
            id="message"
            name="message"
            rows="4"
            className={`border-2 p-2 rounded w-full ${
              errors.message ? "border-red-500" : "border-accent3"
            } focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary `}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm mt-[-10px] mb-[-2px]">
              {errors.message}
            </p>
          )}
          <Button className="mt-10">
            <p className="font-normal text-xl">Submit</p>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
