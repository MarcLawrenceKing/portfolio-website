import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center flex-col mt-30 mx-10 pb-12 sm:mx-20 md:mx-30 2xl:mx-12 2xl:flex-row 2xl:mt-15 bg-secondary">
        <div className="flex flex-col">
          <p> Get in touch</p>
          <p> Let's work together</p>
          <input
            type="text"
            id="fname"
            name="fname"
            placeholder="Full name"
            className="border-2"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email address"
            className="border-2"
          />
          <input
            type="number"
            id="number"
            name="number"
            placeholder="Phone number"
            className="border-2"
          />
          <input
            type="text"
            id="message"
            name="message"
            placeholder="Message"
            className="border-2 h-20"
          />
          <Button>Submit</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
