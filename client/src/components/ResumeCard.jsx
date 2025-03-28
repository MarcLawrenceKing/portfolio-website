const ResumeCard = ({ children, className }) => {
  return (
    <div
      className={`bg-accent1 rounded-xl p-10 shadow-xl sm:w-120 md:w-160 lg:w-180 xl:w-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default ResumeCard;
