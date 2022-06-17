import {
  ADD_SONG_TO_SELECTED,
  ADD_TO_LIKED_SONGS,
  REMOVE_FROM_LIKED_SONGS,
} from "../actions";

const initialState = {
  heart: [],
};

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_LIKED_SONGS:
      console.log("HELOO", action.payload);
      return {
        heart: [...state.heart, action.payload],
      };
    case REMOVE_FROM_LIKED_SONGS:
      return {
        heart: state.heart.filter((track) => track.id !== action.payload),
        /*   heart: [
          ...state.heart.slice(0, action.payload),
          ...state.heart.slice(action.payload + 1),
        ], */
      };
    default:
      return state;
  }
};

export default likeReducer;
