import axios from "axios";
import { gameDetailsURL, gameScrenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });
  const detailsData = await axios.get(gameDetailsURL(id));
  const screenShotData = await axios.get(gameScrenshotURL(id));
  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailsData.data,
      screen: screenShotData.data,
    },
  });
};
