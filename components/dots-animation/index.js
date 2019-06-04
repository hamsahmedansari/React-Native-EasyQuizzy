import React, { Component } from "react";
import { Text } from "react-native";

class DotsAnimation extends Component {
  constructor(props) {
    super(props);
    this.state = { dots: "." };
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      if (this.state.dots.length > 2) {
        this.setState({ dots: "." });
      } else {
        const { dots } = this.state;
        this.setState({ dots: dots + "." });
      }
    }, 500);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return <Text>{this.state.dots}</Text>;
  }
}

export default DotsAnimation;
