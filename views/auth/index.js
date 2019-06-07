import React, { Component } from "react";
import { View, TouchableOpacity } from "react-native";
import Logo from "../../components/logo/dark";
import Text from "../../components/text";

class Auth extends Component {
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
          justifyContent: "space-between",
          paddingBottom: 10
        }}
      >
        <View />
        <View
          style={{
            flexGrow: 2.5,
            width: "100%",
            flex: 1,
            alignItems: "center",
            justifyContent: "space-around"
          }}
        >
          <Logo
            style={{ maxWidth: 150, resizeMode: "contain", width: "100%" }}
          />
        </View>
        <View style={{ flexGrow: 1 }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontFamily: "semiBold",
                fontSize: 18,
                textAlign: "center"
              }}
            >
              Dummy !!!
            </Text>
            <Text
              style={{
                fontFamily: "light",
                fontSize: 14,
                textAlign: "center",
                width: "70%"
              }}
            >
              I am dummy some dummy text must change before production.
            </Text>
          </View>
          <View style={{ padding: "10%" }}>
            <TouchableOpacity
              onPress={() => null}
              style={{
                backgroundColor: "#00A6EF",
                padding: 12,
                borderRadius: 10
              }}
            >
              <Text style={{ color: "#ffffff", textAlign: "center" }}>
                LOGIN
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => null}
              style={{
                marginTop: 5,
                borderColor: "#00A6EF",
                borderWidth: 2,
                padding: 11,
                borderRadius: 10
              }}
            >
              <Text style={{ color: "#00A6EF", textAlign: "center" }}>
                REGISTER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{ fontFamily: "light", fontSize: 14 }}>V1.0.0</Text>
        </View>
      </View>
    );
  }
}

export default Auth;
