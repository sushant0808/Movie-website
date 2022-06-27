import axios from "axios";
import React, { useEffect, useState } from "react";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";

function IndividualMovieDetails() {
  const [movie, setIndividualMovie] = useState({});
  const individualMovieId = useSelector((state) => state.individualMovieId);

  useEffect(() => {
    movieApi
      .get(`?apiKey=${APIKey}&i=${individualMovieId}&type=movie`)
      .then((response) => {
        console.log(response.data);
        setIndividualMovie(response.data);
      })
      .catch((err) => {
        console.log("Err : ", err);
      });
  }, [individualMovieId]);

  return (
    <>
      <Grid
        container
        md={12}
        style={{ paddingTop: "100px" }}
        className="individual_movie_grid"
      >
        <Grid
          item
          xs={12}
          md={5}
          lg={3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={movie.Poster} alt="movie image" />
        </Grid>
        <Grid item xs={12} md={7} lg={9}>
          <div
            style={{ textAlign: "center", color: "white", marginTop: "20px" }}
          >
            <h1>{movie.Title}</h1>
          </div>
          <div
            className="movie_main_info"
            style={{
              color: "lightblue",
              marginTop: "20px",
              display: "flex",
              justifyContent: "center",
              gap: "40px",
            }}
          >
            <p>
              IMDB Rating{" "}
              <span>
                <i
                  className="fa fa-star"
                  style={{ color: "yellow" }}
                  aria-hidden="true"
                ></i>
              </span>
              {" : "}
              <span>{movie.imdbRating}</span>
            </p>

            <p>
              IMDB Votes {"  "}
              <span>
                <i
                  className="fa fa-thumbs-up"
                  style={{ color: "white" }}
                  aria-hidden="true"
                ></i>
              </span>
              {" : "}
              <span>{movie.imdbVotes}</span>
            </p>

            <p>
              Runtime {"  "}
              <span>
                <i
                  className="fa fa-clock-o"
                  style={{ color: "white" }}
                  aria-hidden="true"
                ></i>
              </span>
              {" : "}
              <span>{movie.Runtime}</span>
            </p>

            <p>
              Year {"  "}
              <span>
                <i
                  className="fa fa-calendar"
                  style={{ color: "white" }}
                  aria-hidden="true"
                ></i>
              </span>
              {" : "}
              <span>{movie.Year}</span>
            </p>
          </div>

          <div
            style={{
              color: "white",
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <p style={{ width: "80%", textAlign: "center" }}>{movie.Plot}</p>
          </div>

          <div
            style={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <table>
              <tr>
                <th className="movie_table_header">Director</th>
                <td className="movie_table_data">{movie.Director}</td>
              </tr>
              <tr>
                <th className="movie_table_header">Stars</th>
                <td className="movie_table_data">{movie.Actors}</td>
              </tr>
              <tr>
                <th className="movie_table_header">Genres</th>
                <td className="movie_table_data">{movie.Genre}</td>
              </tr>
              <tr>
                <th className="movie_table_header">Language</th>
                <td className="movie_table_data">{movie.Language}</td>
              </tr>
              <tr>
                <th className="movie_table_header">Awards</th>
                <td className="movie_table_data">{movie.Awards}</td>
              </tr>
            </table>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default IndividualMovieDetails;
