import React from "react";

const variantClasses = {
  h1: "text-[8px]",
  h2: "font-bold text-[22px] sm:text-lg md:text-xl",
  h3: "font-normal text-base",
  h4: "font-normal text-[15px]",
  h5: "font-medium text-xs",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
