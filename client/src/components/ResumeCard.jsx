const ResumeCard = ({ children, className }) => {
  return (
    <div
      className={`bg-accent1 rounded-xl p-4 shadow-md sm:w-120 sm:p-10 md:w-160 lg:w-180 xl:w-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default ResumeCard;
