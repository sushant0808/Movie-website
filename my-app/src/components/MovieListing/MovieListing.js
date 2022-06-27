import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
function MovieListing() {
  const allMovies = useSelector((state) => state.movies);
  const isDisabled = useSelector((state) => state.isDisabled);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const individualMovieHandler = (id) => {
    dispatch({ type: "LOAD_INDIVIDUAL_MOVIE", payload: id });
    navigate("/details");
  };
  return (
    <>
      <Grid
        container
        rowGap="40px"
        style={{ justifyContent: "center", paddingTop: "100px" }}
        className="main-grid"
      >
        {allMovies.map((movie) => {
          return (
            <Grid
              item
              xs={10}
              sm={6}
              md={5}
              lg={4}
              className="full"
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
                  className="movie_image"
                  image={movie.Poster}
                  alt="Paella dish"
                  style={{ cursor: "pointer" }}
                  onClick={() => individualMovieHandler(movie.imdbID)}
                />
                <div style={{ textAlign: "center" }}>
                  <Button
                    id="btn"
                    style={{
                      // width: "300px",
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
                        type: "ADD_TO_FAVORITES",
                        payload: movie.imdbID,
                      })
                    }
                  >
                    Add to favorites
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

export default MovieListing;
