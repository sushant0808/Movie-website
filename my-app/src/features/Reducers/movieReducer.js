const initialState = {
  movies: [],
  filteredMovies: [],
  isDisabled: false,
  inputValue: "",
  individualMovieId: "",
};

const movieReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOAD_DATA":
      return { ...state, movies: payload };
    case "ADD_TO_FAVORITES":
      let addedToFavorite = state.movies.filter((movie) => {
        return movie.imdbID === payload;
      });
      return {
        ...state,
        filteredMovies: [...state.filteredMovies, ...addedToFavorite],
        isDisabled: true,
      };
    case "REMOVE_FROM_FAVORITES":
      let removedFromFavorite = state.filteredMovies.filter((el) => {
        return el.imdbID !== payload;
      });
      return {
        ...state,
        filteredMovies: removedFromFavorite,
      };
    case "SAVE_SEARCHED_DATA":
      return {
        ...state,
        movies: payload,
      };
    case "FAVORITES_LIST":
      return {
        ...state,
        filteredMovies: payload,
      };
    case "LOAD_INDIVIDUAL_MOVIE":
      return {
        ...state,
        individualMovieId: payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
