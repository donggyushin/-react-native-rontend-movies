import React from "react";
import MoviesPresenter from "./moviesPresenter";
import { MOVIE_API } from "../../api";
import { Alert } from "react-native";

export default class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      popular: null
    };
    this._goToDetails = this._goToDetails.bind(this);
  }

  async componentDidMount() {
    try {
      let response = await MOVIE_API.getPopular();
      const popular = response.data.results;
      this.setState({
        popular,
        loading: false
      });
    } catch (err) {
      Alert.alert("Alert Title", "My Alert Msg");
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
