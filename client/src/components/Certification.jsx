const Certification = ({ year, title, org, place, description }) => {
  return (
    <div className="flex flex-col justify-between gap-4 lg:flex-row">
      <div className="flex flex-col flex-1 gap-1 items-center bg-accent5 rounded-2xl lg:items-start  p-5">
        <p className="mb-1 font-bold text-primary text-center">{year}</p>
        <p className="text-[0.875rem] font-bold text-center lg:text-start">
          {title}
        </p>
        <p className="text-[0.875rem] text-gray text-center">{org}</p>
        <p className="text-[0.875rem] text-gray text-center">{place}</p>
      </div>
      <div className="flex flex-2 items-center p-5">
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default Certification;
