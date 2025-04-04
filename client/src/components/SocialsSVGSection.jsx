const SocialsSVGSection = () => {
  return (
    <div className="flex gap-6 items-center mt-3">
      {/* facebook logo */}
      <a href="https://www.facebook.com/marclawrence.king" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43px"
          height="43px"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient
              id="facebook-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="50%" stopColor="#1b512d" />
              <stop offset="100%" stopColor="#73e2a7" />
            </linearGradient>
          </defs>
          <path
            d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02"
            fill="url(#facebook-gradient)"
          ></path>
        </svg>
      </a>

      {/* linkedin logo */}
      <a
        href="https://www.linkedin.com/in/marc-lawrence-king-0721a6261/"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50px"
          height="50px"
          fill="none"
          viewBox="0 0 24 24"
        >
          <defs>
            <linearGradient
              id="linkedin-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="50%" stopColor="#1b512d" />
              <stop offset="100%" stopColor="#73e2a7" />
            </linearGradient>
          </defs>
          <path
            d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4M9 17.34H6.67v-7.13H9zM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23m9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84 1.4 1.4 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13z"
            fill="url(#linkedin-gradient)"
          ></path>
        </svg>
      </a>

      {/* github logo */}
      <a href="https://github.com/MarcLawrenceKing" target="_blank">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43px"
          height="43px"
          fill="none"
          viewBox="0 0 16 16"
        >
          <defs>
            <linearGradient
              id="github-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="50%" stopColor="#1b512d" />
              <stop offset="100%" stopColor="#73e2a7" />
            </linearGradient>
          </defs>
          <path
            fill="url(#github-gradient)"
            fillRule="evenodd"
            d="M8 1C4.133 1 1 4.13 1 7.993c0 3.09 2.006 5.71 4.787 6.635.35.064.478-.152.478-.337 0-.166-.006-.606-.01-1.19-1.947.423-2.357-.937-2.357-.937-.319-.808-.778-1.023-.778-1.023-.635-.434.048-.425.048-.425.703.05 1.073.72 1.073.72.624 1.07 1.638.76 2.037.582.063-.452.244-.76.444-.935-1.554-.176-3.188-.776-3.188-3.456 0-.763.273-1.388.72-1.876-.072-.177-.312-.888.07-1.85 0 0 .586-.189 1.924.716A6.7 6.7 0 0 1 8 4.381c.595.003 1.194.08 1.753.236 1.336-.905 1.923-.717 1.923-.717.382.963.142 1.674.07 1.85.448.49.72 1.114.72 1.877 0 2.686-1.638 3.278-3.197 3.45.251.216.475.643.475 1.296 0 .934-.009 1.688-.009 1.918 0 .187.127.404.482.336A7 7 0 0 0 15 7.993 6.997 6.997 0 0 0 8 1"
            clipRule="evenodd"
          ></path>
        </svg>
      </a>
    </div>
  );
};

export default SocialsSVGSection;
