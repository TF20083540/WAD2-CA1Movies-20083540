import React, { useContext  } from "react"; //Changed
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import HomeIcon from "@mui/icons-material/Home";
import { useNavigate } from "react-router-dom";
import Avatar from '@mui/material/Avatar' //Added
import { AlbumsContext } from "../../contexts/albumsContext"; //Added
import FavoriteIcon from "@mui/icons-material/Favorite"; //Added


const AlbumHeader = (props) => {
  const album = props.album;
  const navigate = useNavigate();

  //Part 2 Exercise
  const { favourites, addToFavourites } = useContext(AlbumsContext);
 
   if (favourites.find((id) => id === album.id)) {
     album.favourite = true;
   } else {
     album.favourite = false
   }
  //End newly added

  return (
    <Paper 
        component="div" 
        sx={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            padding: 1.5,
            margin: 0,
        }}
      >
      <IconButton aria-label="go back" onClick={() => navigate(-1)} >
        <ArrowBackIcon color="primary" fontSize="large" />
      </IconButton>

        
        avatar={
          album.favourite ? (
            <Avatar sx={{ backgroundColor: 'red' }}>
              <FavoriteIcon />
            </Avatar>
          ) : null
        }
        

      <Typography variant="h4" component="h3">
        {album.title}
        <a href={album.homepage}>
          <HomeIcon color="primary" />
        </a>
        <br />
        <span sx={{ fontSize: "1.5rem" }}>{`   "${album.tagline}"`} </span>
      </Typography>

      <IconButton aria-label="go forward" onClick={() => navigate(+1) } >
        <ArrowForwardIcon color="primary" fontSize="large" />
      </IconButton>
    </Paper>
  );
};

export default AlbumHeader;