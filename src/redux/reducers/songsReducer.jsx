import { ADD_API_CALL_SONGS_TO_GLOBAL_STATE } from "../actions";

const initialState = {
  list: [],
};

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_API_CALL_SONGS_TO_GLOBAL_STATE:
      return {
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
};

export default songReducer;
