export const ADD_SONG_TO_SELECTED = 'ADD_SONG_TO_SELECTED'
export const ADD_TO_LIKED_SONGS = 'ADD_TO_LIKED_SONGS'
export const REMOVE_FROM_LIKED_SONGS = 'REMOVE_FROM_LIKED_SONGS'
export const ADD_API_CALL_SONGS_TO_GLOBAL_STATE = 'ADD_API_CALL_SONGS_TO_GLOBAL_STATE'

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

export const removeFromLikedSongsAction = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_LIKED_SONGS,
      payload: id
    })
  }
}

export const getSongsAction = (match) => {
  return async (dispatch, getState) => {
    console.log('MATCH2', match)

    console.log('adding songs :', getState())
    let albumId = match.params.id
    console.log(albumId)

    let headers = new Headers({
      'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
      'X-RapidAPI-Key': '222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20'
    })

    try {
      let response = await fetch(
        'https://striveschool-api.herokuapp.com/api/deezer/album/' + albumId,
        {
          method: 'GET',
          headers
        }
      )

      if (response.ok) {
        let album = await response.json()
        dispatch({
          type: ADD_API_CALL_SONGS_TO_GLOBAL_STATE,
          payload: album
        })
      }
    } catch (exception) {
      console.log(exception)
    }
  }
}
