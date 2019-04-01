import React from "react";
import MoviesPresenter from "./moviesPresenter";

export default class MoviesContainer extends React.Component {
  render() {
    const { _goToDetails } = this;
    return <MoviesPresenter _goToDetails={_goToDetails} />;
  }

  _goToDetails = () => {
    const { navigation } = this.props;
    navigation.navigate("Details");
  };
}
