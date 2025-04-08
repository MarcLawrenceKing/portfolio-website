import React from "react";
import clsx from "clsx";

const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "submit",
  isDisabled = false,
  ...props
}) => {
  const baseStyles =
    "rounded-lg transition disabled:bg-accent2 disabled:cursor-not-allowed";

  const variantStyles = {
    toggle: "sm:hidden ",
    primary:
      "flex gap-4 justify-center items-center bg-primary text-white hover:bg-accent2 font-bold ",
    secondary:
      "border border-[#1b512d] border-accent2 text-accent2 hover:bg-accent2 hover:text-white font-bold",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-10 sm:px-8 py-4 text-lg",
    dl: "px-0  py-4 text-lg",
  };

  return (
    <button
      type={type}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
