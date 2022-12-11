import { useEffect, useState } from "react";
import {getAlbum} from '../api/album-api' //remember this!

const useAlbum = mbid => {
  const [album, setAlbum] = useState(null);
  useEffect(() => {
    getAlbum(mbid).then(album => {
      setAlbum(album);
    });
  }, [mbid]);
  return [album, setAlbum];
};

export default useAlbum