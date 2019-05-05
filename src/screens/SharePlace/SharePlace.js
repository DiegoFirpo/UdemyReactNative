import React, { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import InputAndButton from "../../components/InputAndButton/InputAndButton";
import { addPlace } from "../../store/actions/index";
import { Navigation } from "react-native-navigation";

class SharePlaceScreen extends Component {
  constructor(props) {
    super(props);

    Navigation.events().registerNavigationButtonPressedListener(
      this.onNavigatorEvent
    );
  }

  onNavigatorEvent = event => {
    if (event.buttonId === "sideDrawerToggle") {
      Navigation.mergeOptions(this.props.componentId, {
        sideMenu: {
          left: {
            visible: true
          }
        }
      });
    }
    console.log(event);
  };

  placeAddedHandler = placeName => {
    this.props.onAddPlace(placeName);
  };

  render() {
    return (
      <View>
        <InputAndButton onPlaceAdded={this.placeAddedHandler} />
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: placeName => dispatch(addPlace(placeName))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SharePlaceScreen);
