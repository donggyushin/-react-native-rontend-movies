import React from "react";
import { AppLoading, Font } from "expo";
import StackNavigator from "./navigations/StackNavigator";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  render() {
    const { _appLoaded, _onError, _cacheResourcesAsync } = this;
    if (!this.state.loaded) {
      return (
        <AppLoading
          startAsync={_cacheResourcesAsync}
          onFinish={_appLoaded}
          onError={_onError}
        />
      );
    }
    return <StackNavigator />;
  }

  _cacheResourcesAsync = async () => {
    await Font.loadAsync({
      "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
      "open-sans-light": require("./assets/fonts/OpenSans-Light.ttf"),
      "open-sans-regular": require("./assets/fonts/OpenSans-Regular.ttf")
    });
  };

  _appLoaded = () => {
    this.setState({
      loaded: true
    });
  };

  _onError = err => {
    console.log(err);
  };
}
