import { Link } from "react-router-dom";
import Button from "./Button";

const Banner = () => {
  return (
    <div className="flex flex-col py-20 bg-accent2 w-full items-center bg-gradient-to-r from-accent2 via-primary to-accent3 gap-4 px-8 sm:px-30 md:px-40">
      <p className="font-bold text-accent4 text-center text-[2.188rem] sm:text-[2.5rem] md:text-[2.75rem] lg:text-[3.125rem] xl:text-[3.5rem] ">
        Let's build something together
      </p>
      <Link to="/contact">
        <Button
          variant="secondary"
          size="lg"
          className="border-accent4 hover:border-accent2"
        >
          <p className="text-white font-normal">Contact me</p>
        </Button>
      </Link>
    </div>
  );
};

export default Banner;
