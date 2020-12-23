//import { bindActionCreators } from "redux";

const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return {
        ...state,
        popular: action.payload.popular,
        newGames: action.payload.newGames,
        upcoming: action.payload.upcoming,
      };
    default:
      return { ...state };
  }
};

//ACTION CREATOR

export default gamesReducer;
