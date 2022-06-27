import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import user from "../../images/user.png";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
function Header() {
  const dispatch = useDispatch();
  const heart = useRef();
  const [inputValue, setInputValue] = useState("");
  const filteredMovies = useSelector((state) => state.filteredMovies);

  function naya() {
    setTimeout(() => {
      heart.current.classList.remove("rotate-center");
    }, 600);
    heart.current.classList.add("rotate-center");
  }

  const searchMovies = () => {
    if (inputValue) {
      movieApi
        .get(`?apiKey=${APIKey}&s=${inputValue}&type=movie`)
        .then((response) => {
          dispatch({
            type: "SAVE_SEARCHED_DATA",
            payload: response.data.Search,
          });
          setInputValue("");
        })
        .catch((err) => {
          console.log("Err : ", err);
        });
    } else {
      alert("Please enter a value");
    }
  };
  return (
    <div
      className="header"
      style={{ position: "fixed", width: "100%", zIndex: "1000" }}
    >
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="header_input_search_btn_div">
        <input
          type="text"
          placeholder="Enter name of the movie"
          style={{ padding: "10px 20px" }}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={searchMovies}
          className="search_btn"
        >
          Search
        </Button>
      </div>
      <Link to="/favorites">
        <FavoriteIcon
          ref={heart}
          className={filteredMovies.length ? naya() : ""}
          style={{
            color: "red",
            fontSize: "40px",
          }}
        />
      </Link>
    </div>
  );
}

export default Header;
