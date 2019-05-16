import React from "react";
import { Linking } from "react-native";
import DetailPresenter from "./detailPresenter";
import { MOVIE_API, TV_API } from "../../api";
import LoadingComponent from "../../components/loadingComponent";

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
    isMovie: true,
    seasons: null
  };

  async componentDidMount() {
    let movie, tv, error, isMovie, seasons;
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
        seasons = tv.seasons;
      }
    } catch {
      error = "can't find tv or movie";
    } finally {
      this.setState({
        movie,
        tv,
        error,
        loading: true,
        isMovie,
        seasons
      });
      this.setState({
        loading: false
      });
      console.log(tv);
    }
  }
  render() {
    const { movie, tv, error, loading, isMovie, seasons } = this.state;
    const { pressVideoButton, changeSeasonsVisiable } = this;

    if (loading) {
      return <LoadingComponent />;
    }
    return (
      <DetailPresenter
        movie={movie}
        tv={tv}
        isMovie={isMovie}
        error={error}
        loading={loading}
        pressVideoButton={pressVideoButton}
        changeSeasonsVisiable={changeSeasonsVisiable}
        seasons={seasons}
      />
    );
  }

  pressVideoButton = url => {
    Linking.openURL(url);
  };

  changeSeasonsVisiable = id => {
    const { seasons } = this.state;
    const updatedSeasons = seasons.map(season => {
      if (season.id == id) {
        season.visiable = !season.visiable;
      }
      return season;
    });
    this.setState({
      seasons: updatedSeasons
    });
  };
}
