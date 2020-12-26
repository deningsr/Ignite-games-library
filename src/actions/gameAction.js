import axios from "axios";
import {
  popular_gamesURL,
  upcoming_gamesURL,
  new_gamesURL,
  searchGameURL,
} from "../api";

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

export const fetchSearched = (game_name) => async (dispatch) => {
  const searchGames = await axios.get(searchGameURL(game_name));

  dispatch({
    type: "FETCH_SEARCHED",
    payload: {
      searched: searchGames.data.results,
    },
  });
};
