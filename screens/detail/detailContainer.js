import React from "react";
import { Linking } from "react-native";
import DetailPresenter from "./detailPresenter";
import { MOVIE_API, TV_API } from "../../api";

export default class DetailContainer extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("title", "Detail")
    };
  };

  state = {
    movie: null,
    tv: null,
    error: null,
    loading: true,
    isMovie: true
  };

  async componentDidMount() {
    let movie, tv, error, isMovie;
    const { navigation } = this.props;
    const id = navigation.getParam("id");
    title = navigation.getParam("title");
    isMovie = navigation.getParam("isMovie", true);
    try {
      if (isMovie) {
        movie = await MOVIE_API.detail(id);
        movie = movie.data;
      } else {
        tv = await TV_API.detail(id);
        tv = tv.data;
      }
    } catch {
      error = "can't find tv or movie";
    } finally {
      this.setState({
        movie,
        tv,
        error,
        loading: false,
        isMovie
      });
    }
  }
  render() {
    const { movie, tv, error, loading, isMovie } = this.state;
    const { pressVideoButton } = this;
    return (
      <DetailPresenter
        movie={movie}
        tv={tv}
        isMovie={isMovie}
        error={error}
        loading={loading}
        pressVideoButton={pressVideoButton}
      />
    );
  }

  pressVideoButton = url => {
    Linking.openURL(url);
  };
}
