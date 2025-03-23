import React from "react";
import clsx from "clsx";

const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) => {
  const baseStyles = "rounded-lg transition border";

  const variantStyles = {
    toggle: "sm:hidden ",
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline:
      "border border-gray-300 text-gray-700 hover:bg-gray-100 focus:ring-gray-400",
  };

  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-3 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
