import React from "react";
import PageTemplate from "../components/templateAlbumPage";
import ReviewForm from "../components/reviewForm";
import { useLocation } from "react-router-dom";
import { useQuery } from "react-query";
import { getAlbum } from "../api/album-api"; //FOR GOD SAKES REMEMBER TO CHANGE ME
import Spinner from "../components/spinner";

const WriteReviewPage = (props) => {
  const location = useLocation()
  const { albumId } = location.state;
  const { data: album, error, isLoading, isError } = useQuery(
    ["album", { id: albumId }],
    getAlbum
  );

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <h1>{error.message}</h1>;
  }
  return (
    <PageTemplate album={album}>
      <ReviewForm album={album} />
    </PageTemplate>
  );
};

export default WriteReviewPage;
