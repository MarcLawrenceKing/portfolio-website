import Button from "../components/Button";
import { DynamicIcon } from "lucide-react/dynamic";
import useContactForm from "../hooks/useContactForm";

const Contact = () => {
  const { formData, errors, submissionStatus, handleChange, handleSubmit } =
    useContactForm();
  return (
    <div className="flex flex-col justify-center items-center py-30 bg-accent4 px-5 sm:px-28 overflow-x-hidden ">
      <div className="flex flex-col bg-accent1 w-full items-center py-10 rounded-xl sm:w-110 md:w-155 lg:w-215 xl:w-260 ">
        <DynamicIcon
          name={"mail"}
          color="oklch(93.92% 0.0648 128.43)"
          size={48}
          className="p-2 rounded-lg bg-gradient-primary-to-secondary mb-2 "
        />
        <p className="text-center px-5 text-[1.75rem] font-bold sm:text-[1.938rem] md:text-[2.063rem] lg:text-[2.5rem]">
          Get in touch
        </p>
        <p className="text-center px-5 text-[1.25rem] text-accent2 mb-12">
          Let's work together!
        </p>
        {submissionStatus.isVisible && (
          <div
            className={`w-5/6 p-3 mb-4 rounded-lg text-center sm:w-3/4 lg:w-1/2 ${
              submissionStatus.isSubmitting
                ? "bg-accent2 text-white"
                : submissionStatus.isSuccess
                ? "bg-primary text-white"
                : "bg-red-800 text-white"
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
              errors.fname ? "border-red-500" : "border-primary"
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
              errors.email ? "border-red-500" : "border-primary"
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
              errors.number ? "border-red-500" : "border-primary"
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
              errors.message ? "border-red-500" : "border-primary"
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
          <Button
            className="mt-10"
            isDisabled={submissionStatus.isSubmitting ? true : false}
          >
            <p className="font-normal text-xl">
              {submissionStatus.isSubmitting ? "Submitting..." : "Submit"}
            </p>
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
