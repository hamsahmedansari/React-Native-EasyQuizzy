import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { Font } from "expo";
import DotsAnimation from "../../../components/dots-animation";

class InitialLoading extends Component {
  constructor(props) {
    super(props);
    this.state = { fonts: false };
  }
  componentDidMount = async () => {
    await Font.loadAsync({
      "Open-Sans": require("../../../assets/fonts/Open_Sans/OpenSans-Regular.ttf"),
      "Open-Sans-light": require("../../../assets/fonts/Open_Sans/OpenSans-Light.ttf")
    });
    this.setState({ fonts: true });
  };
  render() {
    const { fonts } = this.state;
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
              fontFamily: fonts ? "Open-Sans-light" : "sans-serif-thin",
              color: "#fff",
              textTransform: "capitalize",
              marginBottom: 10
            }}
          >
            {fonts ? "Checking Files" : "loading Fonts"} <DotsAnimation />
          </Text>
        </View>
      </View>
    );
  }
}

export default InitialLoading;
