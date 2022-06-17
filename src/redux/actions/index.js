export const ADD_SONG_TO_SELECTED = "ADD_SONG_TO_SELECTED";
export const ADD_TO_LIKED_SONGS = "ADD_TO_LIKED_SONGS";
export const REMOVE_FROM_LIKED_SONGS = "REMOVE_FROM_LIKED_SONGS";
export const ADD_API_CALL_SONGS_TO_GLOBAL_STATE =
  "ADD_API_CALL_SONGS_TO_GLOBAL_STATE";

export const addSongToSelectedAction = (songSelected) => {
  return (dispatch, getState) => {
    // console.log('ADDING SONG ')
    // console.log(' check current state here: ', getState())

    dispatch({
      type: ADD_SONG_TO_SELECTED,
      payload: songSelected,
    });
  };
};

export const addToLikedSongsAction = (song) => {
  return (dispatch) => {
    // console.log('Adding song to likes songs: ', song)

    dispatch({
      type: ADD_TO_LIKED_SONGS,
      payload: song,
    });
  };
};

export const removeFromLikedSongsAction = (id) => {
  return (dispatch) => {
    console.log("removing song from like songs");

    dispatch({
      type: REMOVE_FROM_LIKED_SONGS,
      payload: id,
    });
  };
};

export const getSongsAction = (songs) => {
  return (dispatch, getState) => {
    console.log("adding songs :", getState());
    dispatch({
      type: ADD_API_CALL_SONGS_TO_GLOBAL_STATE,
      payload: songs,
    });
  };
};
