import React from "react";
import { Text } from "react-native";

const C_Text = props => {
  return (
    <Text style={{ fontFamily: "default", color: "#47525E" }} {...props}>
      {props.children}
    </Text>
  );
};

export default C_Text;
