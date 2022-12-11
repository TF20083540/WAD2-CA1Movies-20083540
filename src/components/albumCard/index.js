import React, { useContext  } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CalendarIcon from "@mui/icons-material/CalendarTodayTwoTone";
import StarRateIcon from "@mui/icons-material/StarRate";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import img from '../../images/film-poster-placeholder.png'; //Copy and change this
import { Link } from "react-router-dom";
import Avatar from '@mui/material/Avatar'
import { AlbumsContext } from "../../contexts/albumsContext";

export default function AlbumCard({ album, action }) {
  console.log(album);
  const { favourites, addToFavourites } = useContext(AlbumsContext);

   if (favourites.find((mbid) => mbid === album.mbid)) {
     album.favourite = true;
   } else {
     album.favourite = false
   }

 
   const handleAddToFavourite = (e) => {
     e.preventDefault();
     addToFavourites(album);
   };
 
   return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          album.favourite ? (
            <Avatar sx={{ backgroundColor: 'blue' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        title={
          <Typography variant="h5" component="p">
            {album.title}{" "}
          </Typography>
        }
      />
      <CardMedia
        sx={{ height: 500 }}
        //image={
        //  album.poster_path
        //    ? `https://image.tmdb.org/t/p/w500/${album.poster_path}` //emember to change this
        //    : img
        //}
      />
      <CardContent>
        <Grid container>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <CalendarIcon fontSize="small" />
              {album.release_date}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" component="p">
              <StarRateIcon fontSize="small" />
              {"  "} {album.vote_average}{" "}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>

<CardActions disableSpacing>
    {action(album)}
    <Link to={`/albums/${album.mbid}`}>
      <Button variant="outlined" size="medium" color="primary">
        More Info ...
      </Button>
    </Link>
  </CardActions>

    </Card>
  );
}
