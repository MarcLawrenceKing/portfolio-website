import { useState } from "react";

const useContactForm = () => {
  // handles form data
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    number: "",
    message: "",
  });
  // handles error messages
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
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
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

    if (submissionStatus.isSubmitting) {
      return;
    }
    if (!validateForm()) return;

    try {
      setSubmissionStatus({
        message: "Submitting...",
        isSuccess: false,
        isVisible: true,
        isSubmitting: true,
      });

      const formPayload = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formPayload.append(key, value);
      });

      const scriptUrl =
        "https://script.google.com/macros/s/AKfycbxmLwHEG_Y8EA4PtsPOUqVlud2VGxPa6giVgJxa7aAJ18c7_9j3ZBkh3JWiFErD75AL/exec";

      let response;
      try {
        response = await fetch(scriptUrl, {
          method: "POST",
          body: formPayload,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        });
      } catch (postError) {
        console.log("POST failed, trying GET...", postError);
        response = await fetch(`${scriptUrl}?${formPayload.toString()}`);
      }

      // First check if we got a response at all
      if (!response) {
        throw new Error("No response from server");
      }

      // Parse the JSON response (important for reading Google Script errors)
      const result = await response.json();

      // Check for the submission limit error from Google Script
      if (
        result.result === "error" &&
        result.error.includes("Maximum submission limit")
      ) {
        throw new Error(
          "This form has reached its maximum capacity (100 submissions)."
        );
      }

      // Check for other errors
      if (!response.ok || result.result === "error") {
        throw new Error(
          result.error || `Server responded with ${response.status}`
        );
      }

      // Success handling
      setSubmissionStatus({
        message: "Message sent successfully!",
        isSuccess: true,
        isVisible: true,
        isSubmitting: false,
      });

      setFormData({
        fname: "",
        email: "",
        number: "",
        message: "",
      });

      setTimeout(() => {
        setSubmissionStatus((prev) => ({ ...prev, isVisible: false }));
      }, 3000);
    } catch (error) {
      console.error("Submission error:", error);
      setSubmissionStatus({
        message: error.message,
        isSuccess: false,
        isVisible: true,
        isSubmitting: false,
      });
    }
  };

  return {
    formData,
    errors,
    submissionStatus,
    handleChange,
    handleSubmit,
  };
};

export default useContactForm;
