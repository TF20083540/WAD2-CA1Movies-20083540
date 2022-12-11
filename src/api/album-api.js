export const getAlbums = () => {
  return fetch(
    //`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&include_adult=false&include_video=false&page=1`
    'https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=2846818434115220cff1ba5246f8c71f&format=json').then((response) => {

    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
     throw error
  });
};


  
export const getAlbum = (args) => {
   console.log(args)
  const [, idPart] = args.queryKey;
  const { id } = idPart;
  return fetch(
    `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_TMDB_KEY}&artist=Cher&album=Believe&format=json` //Need to change
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.json().message);
    }
    return response.json();
  })
  .catch((error) => {
    throw error
 });
};
  
  export const getGenres = async () => {
    return fetch(
      'https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_TMDB_KEY}&artist=Cher&album=Believe&format=json' +
        process.env.REACT_APP_TMDB_KEY +
        "&language=en-US"
    ).then( (response) => {                                         //Needs changing
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
      throw error
   });
  };
  
  export const getAlbumImages = ({ queryKey }) => {
    const [, idPart] = queryKey;
    const { id } = idPart;
    return fetch(
      `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_TMDB_KEY}&artist=Cher&album=Believe&format=json`
    ).then( (response) => {                                                     //Need changing
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
  
    })
    .catch((error) => {
      throw error
   });
  };

  export const getAlbumReviews = (id) => {
    return fetch(
      `https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=${process.env.REACT_APP_TMDB_KEY}&artist=Cher&album=Believe&format=json`
    )
      .then((res) => res.json())                  //Need changing
      .then((json) => {
        // console.log(json.results);
        return json.results;
      });
  };

  export const getUpcomingAlbums = () => {
    return fetch(
      `http://www.last.fm/api/auth/?api_key=xxx${process.env.REACT_APP_TMDB_KEY}`
    ).then((response) => {
      if (!response.ok) {
        throw new Error(response.json().message);
      }
      return response.json();
    })
    .catch((error) => {
       throw error
    });
  };