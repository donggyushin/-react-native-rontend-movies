import React from "react";
import { SIZES } from "../../contants/sizes";
import { COLORS } from "../../contants/colors";
import styled from "styled-components";
import LoadingComponent from "../../components/loadingComponent";
import BigMoviePoster from "../../components/bigMoviePoster";
import DetailPageDesc from "../../components/detailPageDesc";

const Container = styled.ScrollView`
  flex: 1;
  /* align-items: center;
  justify-content: flex-start; */
  background-color: ${COLORS.bgColor};
`;

const SmallContainer = styled.View``;

const Detail = ({ movie, tv, error, loading, isMovie, pressVideoButton }) => {
  if (loading) {
    return <LoadingComponent />;
  }

  console.log(tv);

  return (
    <Container>
      {movie ? (
        <SmallContainer>
          <BigMoviePoster moviePoster={movie.backdrop_path} />
          <DetailPageDesc
            genres={movie.genres}
            homepage={movie.homepage}
            original_title={movie.original_title}
            production_companies={movie.production_companies}
            runtime={movie.runtime}
            status={movie.status}
            tagline={movie.tagline}
            videoKey={movie.videos.results[0].key}
            videoTitle={movie.videos.results[0].name}
            pressVideoButton={pressVideoButton}
            overview={movie.overview}
          />
        </SmallContainer>
      ) : null}
      {tv ? (
        <SmallContainer>
          <BigMoviePoster moviePoster={tv.backdrop_path} />
        </SmallContainer>
      ) : null}
    </Container>
  );
};

export default Detail;
