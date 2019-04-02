import React from "react";
import MoviesPresenter from "./moviesPresenter";
import { MOVIE_API } from "../../api";
import { Alert } from "react-native";

export default class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      movies: null
    };
    this._goToDetails = this._goToDetails.bind(this);
  }

  async componentDidMount() {
    try {
      const movies = await MOVIE_API.getPopular();
      this.setState({
        ...this.state,
        movies,
        loading: false
      });
    } catch (error) {
      console.log(error);
      Alert.alert("Alert Title", `${error}`);
    }
  }

  render() {
    const { _goToDetails } = this;
    const { loading } = this.state;
    return <MoviesPresenter loading={loading} _goToDetails={_goToDetails} />;
  }

  _goToDetails = () => {
    const { navigation } = this.props;
    navigation.navigate("Details");
  };
}
