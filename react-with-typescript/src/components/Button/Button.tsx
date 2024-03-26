import React, { FC } from "react";
import { ButtonProps } from "../../interfaces/ButtonProps";
import "./Button.css";

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  href,
  className,
  target,
  type,
  style,
  formAction,
  formEncType,
  icon,
  formMethod,
  rel,
  id,
  text,
}) => {
  if (href) {
    return (
      <a
        href={href}
        onClick={onClick}
        className={className}
        target={target}
        type={type}
        style={style}
        rel={rel}
        id={id}
      >
        {icon && <i className={icon}></i>}{" "}
        {text}{children}
      </a>
    );
  }
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
      style={style}
      formAction={formAction}
      formEncType={formEncType}
      formMethod={formMethod}
      rel={rel}
      id={id}
    >
      {icon && <i className={icon}></i>}{" "}
      {text} {children}
    </button>
  );
};

export default Button;
