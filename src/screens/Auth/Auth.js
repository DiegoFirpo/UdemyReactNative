import React, { Component } from "react";
import { View, ImageBackground, Dimensions, StyleSheet } from "react-native";
import startTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput";
import MainText from "../../components/UI/MainText";
import HeadingText from "../../components/UI/HeadingText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground";
import backgroundImage from "../../../assets/background.jpg";

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
  };

  constructor(props) {
    super(props);

    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  loginHandler = () => {
    startTabs();
  };

  render() {
    let headingText = null;

    if (this.state.viewMode === "portrait") {
      headingText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }

    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headingText}
          <ButtonWithBackground color="#29aaf4">
            Switch to Login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput
              placeholder="Your email address"
              style={styles.input}
            />
            <View
              style={
                this.state.viewMode === "portrait"
                  ? styles.portraitPasswordContainer
                  : styles.landscapePasswordContainer
              }
            >
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput placeholder="Password" style={styles.input} />
              </View>
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput
                  placeholder="Confirm password"
                  style={styles.input}
                />
              </View>
            </View>
          </View>
          <ButtonWithBackground color="#29aaf4" onPress={this.loginHandler}>
            Login
          </ButtonWithBackground>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    width: "100%",
    flexGrow: 1
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  },
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  landscapePasswordWrapper: {
    width: "45%"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }
});

export default AuthScreen;
