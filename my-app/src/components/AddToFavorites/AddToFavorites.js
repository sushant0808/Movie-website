import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import {
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
function AddToFavorites() {
  const filteredMovies = useSelector((state) => state.filteredMovies);
  const dispatch = useDispatch();
  return (
    <>
      <Grid
        className="favorite_main_grid"
        container
        rowGap="40px"
        style={{ justifyContent: "center", paddingTop: "100px" }}
      >
        {filteredMovies.map((movie) => {
          return (
            <Grid
              item
              xs={10}
              sm={6}
              md={5}
              lg={4}
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <Card
                style={{
                  width: "80%",
                }}
              >
                <CardMedia
                  component="img"
                  image={movie.Poster}
                  alt="Paella dish"
                />
                <div style={{ textAlign: "center" }}>
                  <Button
                    style={{
                      width: "300px",
                      background: "white",
                      color: "black",
                      border: "none",
                      boxShadow: "none",
                      fontWeight: "bold",
                      width: "100%",
                    }}
                    variant="contained"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_FAVORITES",
                        payload: movie.imdbID,
                      })
                    }
                  >
                    Remove from favorites
                  </Button>
                </div>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
}

export default AddToFavorites;
