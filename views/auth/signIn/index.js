import React, { Component } from "react";
import { View, ScrollView } from "react-native";

import Text from "../../../components/text";
import Logo from "../../../components/logo/dark";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#ffffff",
          padding: "5%"
        }}
      >
        <View
          style={{
            width: "100%",
            flex: 1,
            flexDirection: "row"
          }}
        >
          <Logo style={{ maxWidth: 130, resizeMode: "contain" }} />
          <Text style={{ fontFamily: "light", fontSize: 14 }}>V1.0.0</Text>
        </View>
      </ScrollView>
    );
  }
}

export default SignIn;
