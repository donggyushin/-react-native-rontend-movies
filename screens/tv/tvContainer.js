import React from "react";
import TvPresenter from "./tvPresenter";
import { TV_API } from "../../api";

export default class TvContainer extends React.Component {
  state = {
    loading: true,
    popular: null,
    onTheAir: null,
    airingToday: null,
    error: null
  };

  async componentDidMount() {
    let error, popular, onTheAir, airingToday;
    try {
      popular = await TV_API.getPopular();
      popular = popular.data.results;
      onTheAir = await TV_API.onTheAir();
      onTheAir = onTheAir.data.results;
      airingToday = await TV_API.airingToday();
      airingToday = airingToday.data.results;
    } catch (error) {
      error = error;
    } finally {
      this.setState({
        loading: false,
        popular,
        onTheAir,
        airingToday,
        error
      });
    }
  }

  render() {
    const { loading, error, popular, onTheAir, airingToday } = this.state;

    return (
      <TvPresenter
        loading={loading}
        error={error}
        popular={popular}
        onTheAir={onTheAir}
        airingToday={airingToday}
      />
    );
  }
}
