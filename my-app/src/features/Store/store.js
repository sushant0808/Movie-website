import { createStore } from "redux";
import movieReducer from "../Reducers/movieReducer";
export const store = createStore(movieReducer);
