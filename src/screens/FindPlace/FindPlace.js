import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated
} from "react-native";
import { Navigation } from "react-native-navigation";
import { connect } from "react-redux";
import PlaceList from "../../components/PlaceList/PlaceList";

class FindPlaceScreen extends Component {
  state = {
    placesLoaded: false,
    removeAnimation: new Animated.Value(1),
    placesAnimation: new Animated.Value(0)
  };

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

  placesSearchHandler = () => {
    Animated.timing(this.state.removeAnimation, {
      toValue: 0,
      duration: 500
    }).start(() => {
      this.setState({
        placesLoaded: true
      });
      this.placesLoadedHandler();
    });
  };

  placesLoadedHandler = () => {
    Animated.timing(this.state.placesAnimation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true
    }).start();
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
    let content = (
      <View>
        <Animated.View
          style={{
            opacity: this.state.removeAnimation,
            transform: [
              {
                scale: this.state.removeAnimation.interpolate({
                  inputRange: [0, 1],
                  outputRange: [12, 1]
                })
              }
            ]
          }}
        >
          <View>
            <TouchableOpacity onPress={this.placesSearchHandler}>
              <View style={styles.searchButton}>
                <Text style={styles.searchButtonText}>Find Places</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    );
    if (this.state.placesLoaded) {
      content = (
        <Animated.View
          style={{
            opacity: this.state.placesAnimation
          }}
        >
          <PlaceList
            places={this.props.places}
            onItemSelected={this.itemSelectedHandler}
          />
        </Animated.View>
      );
    }
    return (
      <View style={this.state.placesLoaded ? null : styles.buttonContainer}>
        {content}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  listContainer: {},
  searchButton: {
    borderColor: "orange",
    borderWidth: 3,
    borderRadius: 50,
    padding: 20
  },
  searchButtonText: {
    color: "orange",
    fontWeight: "bold",
    fontSize: 26
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places
  };
};

export default connect(
  mapStateToProps,
  null
)(FindPlaceScreen);
