import { bindActionCreators } from "redux";

const initialState = {
  popular: [],
  newGames: [],
  upcoming: [],
};

const gamesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state, popular: action.payload.popular };
    default:
      return { ...state };
  }
};

//ACTION CREATOR

export default gamesReducer;
