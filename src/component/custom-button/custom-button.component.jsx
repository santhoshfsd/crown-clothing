import React from "react";

import "./custom-buttom.styles.scss";

import { CustomButtonContainer } from "./custom-button.styles.js";

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

export default CustomButton;
