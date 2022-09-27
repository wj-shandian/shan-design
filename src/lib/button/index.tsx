import React from "react";
import classNames from "classnames";
import "./index.scss";

interface IProps {
  children?: React.ReactNode;
  size?: "large" | "small" | "middle";
  type?: "primary" | "ghost" | "dashed" | "link" | "text" | "default";
  shape?: "default" | "circle" | "round";
  icon?: React.ReactNode;
  disabled?: boolean;
  danger?: boolean;
  block?: boolean;
  style?: any;
}
export default function Button(props: IProps) {
  const { type = "default" } = props;
  const classes = classNames({
    "shan-btn": true,
    [`shan-btn-${type}`]: type,
  });
  return (
    <button className={classes} style={{ ...props.style }}>
      <span>{props.children}</span>
    </button>
  );
}
