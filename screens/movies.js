import React from "react";
import { View, Text, StatusBar, Button } from "react-native";
import { COLORS } from "../contants/colors";
import { SIZES } from "../contants/sizes";

class Movies extends React.Component {
  render() {
    const { _goToDetails } = this;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: COLORS.bgColor
        }}
      >
        <StatusBar barStyle={"light-content"} />
        <Text
          style={{
            color: COLORS.fontColor,
            fontSize: SIZES.big
          }}
        >
          Movies
        </Text>
        <Button onPress={_goToDetails} title={"Go To Details"} />
      </View>
    );
  }

  _goToDetails = () => {
    const { navigation } = this.props;
    navigation.navigate("Details");
  };
}

// const Movies = () => {
//   return (
//     <View
//       style={{
//         flex: 1,
//         alignItems: "center",
//         justifyContent: "center",
//         backgroundColor: COLORS.bgColor
//       }}
//     >
//       <StatusBar barStyle={"light-content"} />
//       <Text
//         style={{
//           color: COLORS.fontColor,
//           fontSize: SIZES.big
//         }}
//       >
//         Movies
//       </Text>
//     </View>
//   );
// };

export default Movies;
