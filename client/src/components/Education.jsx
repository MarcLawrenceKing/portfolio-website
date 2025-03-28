const Education = ({ year, school, place, degree, course, description }) => {
  return (
    <div className="flex flex-col justify-between gap-4 lg:flex-row">
      <div className="flex flex-col flex-1 gap-1 items-center bg-accent4 rounded-2xl lg:items-start  p-5">
        <p className="mb-1 font-bold text-accent2">{year}</p>
        <p className="text-[0.875rem] font-bold">{school}</p>
        <p className="text-[0.875rem] text-gray">{place}</p>
        <p className="text-[0.875rem] text-gray italic">{degree}</p>
        <p className="text-[0.875rem] text-gray italic">{course}</p>
      </div>
      <div className="flex flex-2 items-center p-5">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Education;
