import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import Movies from "../screens/movies";
import Search from "../screens/search";
import Tv from "../screens/tv";
import { COLORS } from "../contants/colors";
import { Platform } from "react-native";

const iOS = Platform.OS === "ios";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === "Movies") {
    iconName = `${iOS ? "ios-film" : "md-film"}`;
  } else if (routeName === "Search") {
    iconName = `${iOS ? "ios-search" : "md-search"}`;
  } else if (routeName === "TV") {
    iconName = `${iOS ? "ios-tv" : "md-tv"}`;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const bottomTabNavigator = createBottomTabNavigator(
  {
    Movies: {
      screen: createStackNavigator({
        Movie: {
          screen: Movies,
          navigationOptions: ({ navigation }) => ({
            title: "Movie",
            headerTitleStyle: {
              color: COLORS.fontColor
            },
            headerStyle: {
              backgroundColor: COLORS.bgColor
            }
          })
        }
      })
    },
    TV: {
      screen: createStackNavigator({
        Tv: {
          screen: Tv,
          navigationOptions: ({ navigation }) => ({
            title: "TV",
            headerStyle: {
              backgroundColor: COLORS.bgColor
            },
            headerTitleStyle: {
              color: COLORS.fontColor
            }
          })
        }
      })
    },
    Search: {
      screen: createStackNavigator({
        Search: {
          screen: Search,
          navigationOptions: ({ navigation }) => ({
            title: "Search",
            headerStyle: {
              backgroundColor: COLORS.bgColor
            },
            headerTitleStyle: {
              color: COLORS.fontColor
            }
          })
        }
      })
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      activeTintColor: COLORS.activeColor,
      inactiveTintColor: COLORS.inactiveColor,
      style: {
        backgroundColor: COLORS.bgColor
      },
      showLabel: false
    }
  }
);

export default createAppContainer(bottomTabNavigator);
