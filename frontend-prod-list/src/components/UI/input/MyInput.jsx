import React from "react";
import classes from "./MyInput.module.css";
import clsx from "clsx";

const MyInput = React.forwardRef((props, ref) => {
  const { className, ...rest } = props;
  return (
    <input ref={ref} className={clsx(classes.myInput, className)} {...rest} />
  );
});

export default MyInput;
