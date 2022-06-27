import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing.js";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import { useDispatch, useSelector } from "react-redux";
function Home() {
  const inputValue = useSelector((state) => state.inputValue);
  const dispatch = useDispatch();
  useEffect(() => {
    movieApi
      .get(
        `?apiKey=${APIKey}&s=${inputValue ? inputValue : "Harry"}&type=movie`
      )
      .then((response) => {
        console.log(response.data);
        dispatch({ type: "LOAD_DATA", payload: response.data.Search });
      })
      .catch((err) => {
        console.log("Err : ", err);
      });
  }, []);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
}

export default Home;
