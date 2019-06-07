import React from "react";
import { Image } from "react-native";
const Logo = props => {
  return (
    <Image {...props} source={require("../../assets/common/logo-dark.png")} />
  );
};

export default Logo;
