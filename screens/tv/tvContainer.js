import React from "react";
import TvPresenter from "./tvPresenter";
import { TV_API } from "../../api";

export default class TvContainer extends React.Component {
  state = {
    loading: true,
    popular: null,
    onTheAir: null,
    recommendations: null,
    error: null
  };

  async componentDidMount() {
    let error, popular, onTheAir, recommendations;
    try {
      popular = await TV_API.getPopular();
      popular = popular.data.results;
      onTheAir = await TV_API.onTheAir();
      onTheAir = onTheAir.data.results;
      recommendations = await TV_API.recommendations();
      recommendations = recommendations.data.results;
    } catch (error) {
      error = error;
    } finally {
      this.setState({
        loading: false,
        popular,
        onTheAir,
        recommendations,
        error
      });
    }
  }

  render() {
    const { loading, error, popular, onTheAir, recommendations } = this.state;

    return (
      <TvPresenter
        loading={loading}
        error={error}
        popular={popular}
        onTheAir={onTheAir}
        recommendations={recommendations}
      />
    );
  }
}
