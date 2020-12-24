import axios from "axios";
import { popular_gamesURL, upcoming_gamesURL, new_gamesURL } from "../api";

//Action Creator
export const loadGames = () => async (dispatch) => {
  //Fetch data
  const popularData = await axios.get(popular_gamesURL());
  const upcomingData = await axios.get(upcoming_gamesURL());
  const newData = await axios.get(new_gamesURL());
  dispatch({
    type: "FETCH_GAMES",
    payload: {
      popular: popularData.data.results,
      upcoming: upcomingData.data.results,
      newGames: newData.data.results,
    },
  });
};
