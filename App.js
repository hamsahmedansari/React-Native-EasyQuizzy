import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Font } from "expo";
import Auth from "./views/auth";

export default class App extends React.Component {
  state = {
    fonts: false
  };
  componentDidMount = async () => {
    // temporary loading
    await Font.loadAsync({
      "Open-Sans": require("./assets/fonts/Open_Sans/OpenSans-Regular.ttf"),
      "Open-Sans-light": require("./assets/fonts/Open_Sans/OpenSans-Light.ttf")
    });
    this.setState({ fonts: true });
  };
  render() {
    if (!this.state.fonts) return <View />;
    return (
      // <View style={styles.container}>
      //   <Text>Open up App.js to start working on your app!</Text>
      // </View>
      <Auth />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
