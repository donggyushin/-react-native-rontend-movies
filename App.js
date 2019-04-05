import React from "react";
import { AppLoading } from "expo";
import StackNavigator from "./navigations/StackNavigator";
import { _cacheResourcesAsync } from "./config";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false
    };
  }
  render() {
    const { _appLoaded, _onError } = this;
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

  _appLoaded = () => {
    this.setState({
      loaded: true
    });
  };

  _onError = err => {
    console.log(err);
  };
}
