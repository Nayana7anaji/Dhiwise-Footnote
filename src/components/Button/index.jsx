import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray60001:
    "bg-gray_50_01 outline outline-[0.5px] outline-gray_600_01 text-gray_600_02",
  OutlineGray60001_1:
    "bg-white_A700 outline outline-[0.5px] outline-gray_600_01 text-gray_600_02",
};
const sizes = { sm: "p-[15px]" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,

  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(size && sizes[size]) || ""} ${
        (variant && variants[variant]) || ""
      }`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,

  variant: PropTypes.oneOf(["OutlineGray60001", "OutlineGray60001_1"]),
  size: PropTypes.oneOf(["sm"]),
};

Button.defaultProps = { className: "", variant: "", size: "" };
export { Button };
