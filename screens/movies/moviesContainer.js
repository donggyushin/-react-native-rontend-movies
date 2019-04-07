import React from "react";
import MoviesPresenter from "./moviesPresenter";
import { MOVIE_API } from "../../api";

export default class MoviesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      popular: null,
      error: null,
      nowPlaying: null,
      upComing: null
    };
    this._goToDetails = this._goToDetails.bind(this);
  }

  async componentDidMount() {
    let popular, nowPlaying, upComing, error;
    try {
      popular = await MOVIE_API.getPopular();
      popular = popular.data.results;
      nowPlaying = await MOVIE_API.nowPlaying();
      nowPlaying = nowPlaying.data.results;
      upComing = await MOVIE_API.upComing();
      upComing = upComing.data.results;
    } catch (error) {
      error = error;
    } finally {
      this.setState({
        popular,
        nowPlaying,
        upComing,
        loading: false,
        error
      });
    }
  }

  render() {
    const { _goToDetails } = this;
    const { loading, popular, nowPlaying, upComing, error } = this.state;

    return (
      <MoviesPresenter
        loading={loading}
        popular={popular}
        nowPlaying={nowPlaying}
        upComing={upComing}
        error={error}
        _goToDetails={_goToDetails}
      />
    );
  }

  _goToDetails = () => {
    const { navigation } = this.props;
    navigation.navigate("Details");
  };
}
