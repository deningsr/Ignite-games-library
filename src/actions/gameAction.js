import axios from "axios";
import { popular_gamesURL } from "../api";

//Action Creator
export const loadGames = () => async (dispatch) => {
  //Fetch data
  const popularData = await axios.get(popular_gamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
    },
  });
};
