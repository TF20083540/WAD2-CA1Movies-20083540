import React from "react";
import { useLocation } from "react-router-dom";
import PageTemplate from "../components/templateAlbumPage";
import AlbumReview from "../components/albumReview";

const AlbumReviewPage = (props) => {
  let location = useLocation();
  const {album, review} = location.state;

  return (
    <PageTemplate album={album}>
      <AlbumReview review={review} />
    </PageTemplate>
  );
};

export default AlbumReviewPage;