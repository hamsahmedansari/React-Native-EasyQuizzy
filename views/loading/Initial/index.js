import React, { Component } from "react";
import { View, Text, Image } from "react-native";

class InitialLoading extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#272727",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <View>{/* <Text>v1.0.0</Text> */}</View>
        <Image
          source={require("../../../assets/common/logo-dark.png")}
          style={{ maxWidth: 200, resizeMode: "contain", width: "100%" }}
        />
        <View>
          <Text
            style={{
              fontFamily: "Open Sans",
              fontSize: 18,
              color: "#fff",
              textTransform: "capitalize"
            }}
          >
            Checking Files....
          </Text>
        </View>
      </View>
    );
  }
}

export default InitialLoading;
