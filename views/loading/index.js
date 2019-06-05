import React, { Component } from "react";
import { View, Text, Image } from "react-native";

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
        <Image
          source={require("../../assets/common/logo-dark.png")}
          style={{ maxWidth: 150, resizeMode: "contain", width: "100%" }}
        />
        <Text
          style={{
            textTransform: "capitalize",
            fontSize: 18,
            fontFamily: "Open-Sans-light",
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
