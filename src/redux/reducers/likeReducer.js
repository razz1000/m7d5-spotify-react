import { ADD_SONG_TO_SELECTED, REMOVE_FROM_LIKED_SONGS } from '../actions'

const initialState = {
  heart: []
}

const likeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG_TO_SELECTED:
      return {
        heart: [...state.heart, action.payload]
      }
    case REMOVE_FROM_LIKED_SONGS:
      return {
        heart: [
          ...state.heart.slice(0, action.payload),
          ...state.heart.slice(action.payload + 1)
        ]
      }
    default:
      return state
  }
}

export default likeReducer
