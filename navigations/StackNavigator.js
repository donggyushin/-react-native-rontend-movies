import { createStackNavigator, createAppContainer } from "react-navigation";
import BottomTabNavigation from "./BottomTabNavigation";
import Detail from "../screens/detail";
import { COLORS } from "../contants/colors";
import BackToMoviesButton from "../components/backToMoviesButton";
import React from "react";

const AppNavigator = createStackNavigator(
  {
    BottomTabNavigation: {
      screen: BottomTabNavigation,
      navigationOptions: ({ navigation }) => ({
        header: null,
        headerStyle: {
          backgroundColor: COLORS.bgColor,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0
        }
      })
    },
    Details: {
      screen: Detail,
      navigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: COLORS.bgColor,
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0
        },
        headerTitleStyle: {
          color: COLORS.fontColor
        },
        headerLeft: <BackToMoviesButton navigation={navigation} />
      })
    }
  },
  {
    initialRouteName: "BottomTabNavigation",
    mode: "card"
  }
);

export default createAppContainer(AppNavigator);
