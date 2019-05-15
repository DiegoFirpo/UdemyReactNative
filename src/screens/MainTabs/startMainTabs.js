import { Navigation } from "react-native-navigation";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === "android" ? "md-map" : "ios-map", 30),
    Icon.getImageSource(
      Platform.OS === "android" ? "md-share-alt" : "ios-share",
      30
    ),
    Icon.getImageSource(Platform.OS === "android" ? "md-menu" : "ios-menu", 30)
  ]).then(sources => {
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: "awesome-places.SideDrawer"
            }
          },
          center: {
            bottomTabs: {
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: "awesome-places.FindPlaceScreen",
                          passProps: {
                            text: "Find Place"
                          }
                        }
                      }
                    ],
                    options: {
                      topBar: {
                        title: {
                          text: "Find Place"
                        },
                        leftButtons: [
                          {
                            icon: sources[2],
                            text: "Menu",
                            id: "sideDrawerToggle"
                          }
                        ]
                      },
                      bottomTab: {
                        text: "Find Place",
                        icon: sources[0]
                      }
                    }
                  }
                },
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: "awesome-places.SharePlaceScreen",
                          passProps: {
                            text: "Share Place"
                          }
                        }
                      }
                    ],
                    options: {
                      topBar: {
                        title: {
                          text: "Share Place"
                        },
                        leftButtons: [
                          {
                            icon: sources[2],
                            text: "Menu",
                            id: "sideDrawerToggle"
                          }
                        ]
                      },
                      bottomTab: {
                        text: "Share Place",
                        icon: sources[1]
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      }
    });
  });
};

export default startTabs;
