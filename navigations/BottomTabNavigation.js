import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Movies from "../screens/movies";
import Search from "../screens/search";
import Tv from "../screens/tv";
import { COLORS } from "../contants/colors";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === "Movies") {
    iconName = `${focused ? "ios-film" : "md-film"}`;
  } else if (routeName === "Search") {
    iconName = `${focused ? "ios-search" : "md-search"}`;
  } else if (routeName === "TV") {
    iconName = `${focused ? "ios-tv" : "md-tv"}`;
  }
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const bottomTabNavigator = createBottomTabNavigator(
  {
    Movies: { screen: Movies },
    TV: { screen: Tv },
    Search: { screen: Search }
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
