export const ADD_SONG_TO_SELECTED = 'ADD_SONG_TO_SELECTED'
export const ADD_TO_LIKED_SONGS = 'ADD_TO_LIKED_SONGS'
export const REMOVE_FROM_LIKED_SONGS = 'REMOVE_FROM_LIKED_SONGS'

export const addSongToSelectedAction = (songSelected) => {
  return (dispatch, getState) => {
    // console.log('ADDING SONG ')
    // console.log(' check current state here: ', getState())

    dispatch({
      type: ADD_SONG_TO_SELECTED,
      payload: songSelected
    })
  }
}

export const addToLikedSongsAction = (song) => {
  return (dispatch) => {
    // console.log('Adding song to likes songs: ', song)

    dispatch({
      type: ADD_TO_LIKED_SONGS,
      payload: song
    })
  }
}

export const removeFromLikedSongsAction = (song) => {
  return (dispatch) => {
    console.log('removing song from like songs')

    dispatch({
      type: REMOVE_FROM_LIKED_SONGS,
      payload: song
    })
  }
}
