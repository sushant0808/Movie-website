// http://www.omdbapi.com/?i=tt3896198&apikey=82c928fb
import "./App.scss";
import React, { useEffect } from "react";
import Header from "./components/Header/Header.js";
import AddToFavorites from "./components/AddToFavorites/AddToFavorites.js";
import Home from "./components/Home/Home.js";
import PageNotFound from "./components/PageNotFound/PageNotFound.js";
import Footer from "./components/Footer/Footer.js";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useRouteMatch,
  useParams,
  Link,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IndividualMovieDetails from "./components/IndividualMovieDetails/IndividualMovieDetails";
const App = () => {
  const filteredMovies = useSelector((state) => state.filteredMovies);
  const favoritesData = filteredMovies;
  const dispatch = useDispatch();

  return (
    <div className="app">
      <Router>
        <Header></Header>
        <div className="container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="/favorites" element={<AddToFavorites />} />
            <Route path="/details" element={<IndividualMovieDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
