import React, { Component } from "react";
import { View } from "react-native";

import Logo from "../../components/logo/dark";
import Text from "../../components/text";

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          alignItems: "center",
          justifyContent: "space-around"
        }}
      >
        <Logo style={{ maxWidth: 150, resizeMode: "contain", width: "100%" }} />
        <Text
          style={{
            textTransform: "capitalize",
            fontSize: 18,
            fontFamily: "light",
            color: "#cccccc"
          }}
        >
          Loading ...
        </Text>
      </View>
    );
  }
}

export default Loading;
