import React, { Component } from "react";
import { View } from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
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
  };

  itemSelectedHandler = key => {
    const place = this.props.places.find(place => {
      return place.key === key;
    });
    Navigation.push(this.props.componentId, {
      component: {
        name: "awesome-places.PlaceDetailScreen",
        passProps: {
          selectedPlace: place
        },
        options: {
          topBar: {
            title: {
              text: place.name
            }
          }
        }
      }
    });
  };

  render() {
    return (
      <View>
        <PlaceList
          places={this.props.places}
          onItemSelected={this.itemSelectedHandler}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(
  mapStateToProps,
  null
)(FindPlaceScreen);
