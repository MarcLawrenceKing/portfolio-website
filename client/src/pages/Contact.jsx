import { useState } from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { DynamicIcon } from "lucide-react/dynamic";

const Contact = () => {
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

  const [submissionStatus, setSubmissionStatus] = useState({
    message: "",
    isSuccess: false,
    isVisible: false,
    isSubmitting: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    // Name validation; checks if input is empty
    if (!formData.fname.trim()) {
      newErrors.fname = "Full name is required!";
      valid = false;
    }

    // Email validation; uses regex
    if (!formData.email.trim()) {
      newErrors.email = "Email is required!";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email!";
      valid = false;
    }

    // Phone number validation (optional)
    if (formData.number && !/^[\d\s+\-()]{10,}$/.test(formData.number)) {
      newErrors.number = "Please enter a valid phone number!";
      valid = false;
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required!";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters!";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      // Set submitting state
      setSubmissionStatus({
        message: "Submitting...",
        isSuccess: false,
        isVisible: true,
        isSubmitting: true,
      });

      // Prepare form data
      const formDataToSend = new URLSearchParams();
      for (const key in formData) {
        formDataToSend.append(key, formData[key]);
      }

      // Send to Google Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxmLwHEG_Y8EA4PtsPOUqVlud2VGxPa6giVgJxa7aAJ18c7_9j3ZBkh3JWiFErD75AL/exec",
        {
          redirect: "follow",
          method: "POST",
          body: formDataToSend,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.ok) {
        setSubmissionStatus({
          message: "Data submitted successfully!",
          isSuccess: true,
          isVisible: true,
          isSubmitting: false,
        });

        // Reset form
        setFormData({
          fname: "",
          email: "",
          number: "",
          message: "",
        });

        // Hide message after 2.6 seconds
        setTimeout(() => {
          setSubmissionStatus((prev) => ({ ...prev, isVisible: false }));
        }, 2600);
      } else {
        throw new Error("Failed to submit the form.");
      }
    } catch (error) {
      console.error(error);
      setSubmissionStatus({
        message: "An error occurred while submitting the form.",
        isSuccess: false,
        isVisible: true,
        isSubmitting: false,
      });
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex flex-col justify-center items-center py-30 bg-accent1 px-12 sm:px-28 ">
        <div className="flex flex-col bg-accent4 w-full items-center p-10 rounded-xl sm:w-110 md:w-155 lg:w-215 xl:w-260">
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
          {submissionStatus.isVisible && (
            <div
              className={`w-full max-w-md p-3 mb-4 rounded-xl text-center ${
                submissionStatus.isSuccess
                  ? "bg-green-500 text-beige"
                  : "bg-red-400 text-white"
              }`}
            >
              {submissionStatus.message}
            </div>
          )}
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
              <p className="font-normal text-xl">
                {submissionStatus.isSubmitting ? "Submitting..." : "Submit"}
              </p>
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
