import React from "react";

import { Group } from "@mantine/core";

import classes from "./styles.module.css";



export type ButtonOutlineProps = {
  children: React.ReactNode
  onClick?: () => void
}

const ButtonOutline: React.FC<ButtonOutlineProps> = (props) => {
  return (
    <Group
      onClick={props.onClick}
      className={classes.btn}
    >{props.children}</Group>
  )
}

export default ButtonOutline;