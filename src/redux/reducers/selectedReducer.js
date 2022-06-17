import { ADD_SONG_TO_SELECTED } from '../actions'

const initialState = {
  song: []
}

const selectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_SONG_TO_SELECTED:
      return {
        song: [action.payload]
      }

    default:
      return state
  }
}

export default selectedReducer
