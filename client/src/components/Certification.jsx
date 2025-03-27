const Certification = ({ year, title, org, place, description }) => {
  return (
    <div className="bg-accent3 shadow flex justify-between gap-4 p-5">
      <div className="flex flex-col flex-1 gap-1">
        <p className="mb-2 font-bold">{year}</p>
        <p>{title}</p>
        <p>{org}</p>
        <p>{place}</p>
      </div>
      <div className="flex flex-2 items-center">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Certification;
